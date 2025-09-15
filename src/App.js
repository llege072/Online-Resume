import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import AboutMe from "./components/aboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </Layout>

    </Router>
    );
}

export default App;
