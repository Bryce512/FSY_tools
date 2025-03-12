import { Routes, Route } from "react-router-dom";
import MaxLogin from "./components/login/Login";
import InputDesign from "./components/AddTestimonyRoom/InputDesign";
import "./App.css"; // Keep styles

function App() {

  return (
    <Routes>
      <Route path="/" element={<MaxLogin />} />
      <Route path="/TestimonyRooms" element={<InputDesign />} />
    </Routes>
  );
}

export default App;
