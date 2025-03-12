<<<<<<< HEAD
<<<<<<< HEAD
import './App.css'
import './components/MaxLogin'
import MaxLogin from './components/MaxLogin'
import AssignTestimonyRooms from './components/AssignTestimonyRooms'
=======
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./components/login/Login";
import MaxLogin from "./components/login/Login";
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
    <Routes>
      <Route path="/" element={<MaxLogin />} />
    </Routes>
>>>>>>> f3981e1 (add router)
    </>
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
