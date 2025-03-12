import './App.css'
import './components/MaxLogin'
import MaxLogin from './components/MaxLogin'
import AssignTestimonyRooms from './components/AssignTestimonyRooms'

function App() {
  return (
    <>
      <div>
        <MaxLogin />
        <AssignTestimonyRooms/>
        <MaxLogin/>
      </div>
    </>
  );
}

export default App;
