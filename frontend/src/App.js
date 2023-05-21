import './App.css';
import Login from './pages/login.js';
import Note from './pages/note.js';

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
}from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/login/:user/note" element={<Note />}/>

        </Routes>
      </div>  
    </Router>
  );
}

export default App;
