import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Etkezes from "./pages/etkezes";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/etkezes" element={<Etkezes />}/>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
