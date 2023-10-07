import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Carosal from "./components/Carosal";
import SkillIcons from "./components/Skill-icons";
import "./App.css"
function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="carosal" element={<Carosal/>} />
    <Route path="skill-icons" element={<SkillIcons/>} />
  </Routes>
</Router>
  );
}

export default App;
