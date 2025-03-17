import InputDesign from "./components/AddTestimonyRoom/InputDesign";
import "./App.css"; // Keep styles
import RoomTable from "./components/RoomTable";
import SongRequestForm from "./components/RequestSong/SongRequestForm";
import RoomForm from "./components/AddTestimonyRoom/RoomForm";
import BryceAddCounselor from "./components/AddCounselor/AddCounselor";
import LoginForm from "./components/login/LoginForm";
import VarietyShowManager from "./components/VarietyShowManager";
import { Routes, Route } from "react-router-dom";
import MaxLogin from "./components/MaxLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MaxLogin />} />
      <Route path="/TestimonyRooms" element={<InputDesign />} />
      <Route path="/RoomTable" element={<RoomTable />} />
      <Route path="/SongRequestForm" element={<SongRequestForm />} />
      <Route path="/RoomForm" element={<RoomForm />} />
      <Route path="/AddCounselor" element={<BryceAddCounselor />} />
      <Route path="/Login" element={<LoginForm />} />
      <Route path="/VarietyShow" element={<VarietyShowManager />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;

