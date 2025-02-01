import { useEffect, useRef, useState } from "react";

export const Receiver = () => {
  const [pc, setPc] = useState<RTCPeerConnection | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "receiver" }));
    };

    const pc = new RTCPeerConnection();

    pc.ontrack = (event) => {
      console.log("TRIGGERED ON-TRACK", event);
      if (videoRef.current && event.streams[0]) {
        // Just set the srcObject, don't automatically play
        videoRef.current.srcObject = event.streams[0];
      }
    };
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        console.log("ice candidate", event);
        socket?.send(
          JSON.stringify({
            type: "iceCandidate",
            candidate: event.candidate,
          })
        );
      }
    };
    socket.onmessage = async (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "createOffer") {
        socket?.send(
          JSON.stringify({ type: "createAnswer", sdp: pc.localDescription })
        );

        await pc.setRemoteDescription(message.sdp);
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        // console.log(pc.setLocalDescription(answer));

        socket?.send(
          JSON.stringify({ type: "createAnswer", sdp: pc.localDescription })
        );

        setPc(pc);
      } else if (message.type === "iceCandidate") {
        pc?.addIceCandidate(message.candidate);
      }
    };
  }, [pc]);

  return (
    <>
    Receiver
    <div id="video">
      <button onClick={() => {
        if (videoRef.current && videoRef.current.srcObject) {
          videoRef.current.play();
          // Ensure audio is not muted after user interaction
          videoRef.current.muted = false;
        }
      }}>
        Start 
      </button>
      <video 
        ref={videoRef} 
        playsInline
        style={{ width: '100%', maxWidth: '640px' }}
      />
    </div>
  </>
  );
};
