import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestmessage, setMessage] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connected");
    };
    socket.onmessage = (message) => {
      console.log("Received message: ", message.data);
      setMessage((m) => [...m, message.data]);
    };

    setSocket(socket);
    return () => {
      socket.close();
    };
  }, []);

  if (!socket) {
    return <div>Connecting to socket Loading ...</div>;
  }
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          socket.send(inputValue);
          setInputValue("");
        }}
      >
        {" "}
        send
      </button>
      <div>{latestmessage}</div>;
    </div>
  );
}
export default App;
