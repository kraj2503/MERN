import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Sender } from "./components/Sender";
import { Receiver } from "./components/Receiver";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/sender" element={<Sender />} />
        <Route path="/receiver" element={<Receiver />} />
      </BrowserRouter>
    </>
  );
}

export default App;
