import { useEffect, useState } from "react";

export const Sender = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      //make sure that the socket is open at fisrt
      socket.send(JSON.stringify({ type: "sender" }));
    };
    setSocket(socket);
  }, []);

  const startSendingVideo = async() => {
    //create an offer
    if (!socket) {
      return;
    }
    const pc = new RTCPeerConnection();
    pc.onnegotiationneeded = async () => {
      console.log("Asdasd")
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      socket?.send(
        JSON.stringify({ type: "createOffer", sdp: pc.localDescription })
      );
    };

    pc.onicecandidate = (event) => {
      console.log("iceCandidate sender", event.candidate);
      if (event.candidate) {
        socket?.send(
          JSON.stringify({ type: "iceCandidate", candidate: event.candidate })
        );
      }
    };

    socket.onmessage = async (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "createAnswer") {
        await pc.setRemoteDescription(message.sdp);
      } else if (message.type === "iceCandidate") {
        pc.addIceCandidate(message.candidate);
      }
    };

    const stream = await navigator.mediaDevices.getUserMedia({video:true,audio:false})
    pc.addTrack(stream.getVideoTracks()[0])
    // console.log(stream.getVideoTracks())
  };

  return (
    <div>
      <button onClick={startSendingVideo}>Click me to sender</button>
    </div>
  );
};
