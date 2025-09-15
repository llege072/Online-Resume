import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./components/HomePage";
import AboutMe from "./components/aboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<HomePage />}></Route>;
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<ContactMe />}></Route>

      </Routes>

    </Router>
    )
}

export default App;
