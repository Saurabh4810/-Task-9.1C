import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './login';  
import Signup from './signup';
import Homepage from './homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
