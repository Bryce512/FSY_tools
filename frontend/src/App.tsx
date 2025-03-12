import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./components/login/Login";
import MaxLogin from "./components/login/Login";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MaxLogin />} />
    </Routes>
    </>
  );
}

export default App;
