import { useEffect, useRef, useState } from "react";

export const Sender = () => {
  const [pc, setPc] = useState<RTCPeerConnection | null>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [audio, setAudio] = useState(false);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      //make sure that the socket is open at fisrt
      socket.send(JSON.stringify({ type: "sender" }));
    };
    setSocket(socket);
  }, []);

  const startSendingVideo = async () => {
    //create an offer
    if (!socket) {
      return;
    }
    const pc = new RTCPeerConnection();
    setPc(pc);
    pc.onnegotiationneeded = async () => {
      console.log("Negotiation needed");
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

    video();
  };

  const video = async () => {
    console.log("inside video");
    console.log("Audio", audio);
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: audio,
    });
    stream.getTracks().forEach((track) => {
      pc?.addTrack(track, stream);
      console.log("on Track is triggered on sender");
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    });
    // console.log(stream.getVideoTracks())
  };
  useEffect(() => {
    video();
  }, [audio]);
  return (
    <div>
      <video ref={videoRef} playsInline autoPlay></video>
      <button onClick={startSendingVideo}>Click me to sender</button>

      <button onClick={() => setAudio((prev) => !prev)}>
        {audio ? "Mute" : "Unmute"}
      </button>
    </div>
  );
};
