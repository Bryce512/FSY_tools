import TestimonyRooms from './screens/AddTestimonyRoom/TestimonyRooms';
import './App.css'; // Keep styles
import RoomTable from './screens/AssignTestimonyRoom/RoomTable';
import RoomForm from './screens/AddTestimonyRoom/RoomForm';
import BryceAddCounselor from './screens/AddCounselor/AddCounselor';
import VarietyShowManager from './screens/VarietyShow/VarietyShowManager';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/login/Login';
import AssignTestimonyRooms from './screens/AssignTestimonyRoom/AssignTestimonyRooms';
import RequestSong from './screens/RequestSong/RequestSong';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/AssignRooms" element={<AssignTestimonyRooms />} />
        <Route path="/AddTestimonyRoom" element={<TestimonyRooms />} />
        <Route path="/RoomTable" element={<RoomTable />} />
        <Route path="/RequestSong" element={<RequestSong />} />
        <Route path="/RoomForm" element={<RoomForm />} />
        <Route path="/AddCounselor" element={<BryceAddCounselor />} />
        <Route path="/VarietyShow" element={<VarietyShowManager />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
  );
}

export default App;
