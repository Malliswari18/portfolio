import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
import Experience from "./Pages/Experience";
import Certifications from "./Pages/Certifications";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<Home />} /> {/* fallback to Home */}
        
<Route path="/Certifications" element={<Certifications />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
