import { useEffect, useState } from "react";

export const Receiver = () => {
  const [pc, setPc] = useState<RTCPeerConnection | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "receiver" }));
    };

    socket.onmessage = async (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "createOffer") {
        const pc = new RTCPeerConnection();
        pc.setRemoteDescription(message.sdp);
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        // console.log(pc.setLocalDescription(answer));
        pc.onicecandidate = (event) => {
          console.log("iceCandidate receiver", event.candidate);
          if (event.candidate) {
            socket?.send(
              JSON.stringify({
                type: "iceCandidate",
                candidate: event.candidate,
              })
            );
          }
        };


        pc.ontrack= (track)=>{
                console.log(track)
        }

        socket?.send(
          JSON.stringify({ type: "createAnswer", sdp: pc.localDescription })
        );

        setPc(pc);
      } else if (message.type === "iceCandidate") {
        pc?.addIceCandidate(message.candidate);
      }
    };
  }, []);

  return <> Receiver</>;
};
