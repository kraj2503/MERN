import { useEffect, useRef, useState } from "react";

export const Receiver = () => {
  const [pc, setPc] = useState<RTCPeerConnection | null>(null);
  const [mute,setMute] = useState(true)

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
        videoRef.current.srcObject = event.streams[0];
        videoRef.current
          .play()
          .catch((err) => console.error("Error playing video:", err));
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
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{ width: "100%", maxWidth: "640px" }}
        />
        {mute?
          <button
          onClick={() => {
            if (videoRef.current) videoRef.current.muted = false;
            setMute(false)
          }}
          >
          Unmute
        </button>
        :
        <button
          onClick={() => {
            if (videoRef.current) videoRef.current.muted = true;
            setMute(true)
          }}
          >
          Mute
        </button>
        }
      </div>
    </>
  );
};
