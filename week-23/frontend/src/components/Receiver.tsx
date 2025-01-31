import { useEffect, useState } from "react";

export const Receiver = () => {
  const [pc, setPc] = useState<RTCPeerConnection | null>(null);

  useEffect(() => {
    console.log("Initializing WebSocket for Receiver...");
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("Receiver WebSocket Connected");
      socket.send(JSON.stringify({ type: "receiver" }));
    };

    socket.onmessage = async (event) => {
      const message = JSON.parse(event.data);
      console.log("Receiver received message:", message);

      if (message.type === "createOffer") {
        console.log("Receiver: Creating PeerConnection...");
        const pc = new RTCPeerConnection();

        // ✅ Assign `ontrack` BEFORE setting remote description
        pc.ontrack = (event) => {
          console.log("Receiver: ontrack triggered!", event);
          if (event.streams.length > 0) {
            console.log("Receiver: Assigning video stream...");
            const video = document.createElement("video");
            video.autoplay = true;
            video.controls = true;
            document.body.appendChild(video);
            video.srcObject = event.streams[0];
          } else {
            console.warn("Receiver: ontrack event has no streams!");
          }
        };

        console.log("Receiver: Setting remote description...");
        await pc.setRemoteDescription(new RTCSessionDescription(message.sdp));

        console.log("Receiver: Creating Answer...");
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        pc.onicecandidate = (event) => {
          if (event.candidate) {
            console.log("Receiver ICE Candidate:", event.candidate);
            socket.send(JSON.stringify({ type: "iceCandidate", candidate: event.candidate }));
          }
        };

        console.log("Receiver: Sending Answer...");
        socket.send(JSON.stringify({ type: "createAnswer", sdp: pc.localDescription }));

        setPc(pc);
      } else if (message.type === "iceCandidate") {
        if (pc) {
          console.log("Receiver: Adding ICE Candidate...", message.candidate);
          await pc.addIceCandidate(new RTCIceCandidate(message.candidate));
        } else {
          console.error("Receiver: No PeerConnection to add ICE Candidate!");
        }
      }
    };

    return () => {
      console.log("Receiver: Closing connection...");
      socket.close();
      pc?.close();
    };
  }, []);

  return <div>Receiver</div>;
};
