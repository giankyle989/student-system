import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./users/Login";
import Register from "./users/Register";
import Home from "./students/Home";
import Create from "./students/Create";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

        //Authenticated user
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<Create />}/>
      </Routes>
    </Router>
  );
}

export default App;
