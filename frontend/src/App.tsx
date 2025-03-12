<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import './App.css'
import './components/MaxLogin'
import MaxLogin from './components/MaxLogin'
import AssignTestimonyRooms from './components/AssignTestimonyRooms'
=======
import "./App.css";
=======
>>>>>>> 3006d6c (add router)
import { Routes, Route } from "react-router-dom";
import MaxLogin from "./components/login/Login";
<<<<<<< HEAD
>>>>>>> f3981e1 (add router)

function App() {
  return (
    <>
<<<<<<< HEAD
      <div>
        <MaxLogin />
        <AssignTestimonyRooms/>
        <MaxLogin/>
      </div>
=======
=======
import InputDesign from "./components/AddTestimonyRoom/InputDesign";
import "./App.css"; // Keep styles

function App() {

  return (
>>>>>>> 3006d6c (add router)
    <Routes>
      <Route path="/" element={<MaxLogin />} />
      <Route path="/TestimonyRooms" element={<InputDesign />} />
    </Routes>
<<<<<<< HEAD
>>>>>>> f3981e1 (add router)
    </>
=======
>>>>>>> 3006d6c (add router)
  );
}

export default App;
=======
import { useState } from 'react'
import './App.css'
import './components/MaxLogin'
import MaxLogin from './components/MaxLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MaxLogin/>
      </div>
    </>
  )
}

export default App
>>>>>>> 6ec1f62 (updates)
