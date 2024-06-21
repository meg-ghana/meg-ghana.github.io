import resume from './MeghanaGopannagari_Resume_2024.pdf';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import Education from './pages/Education.js'
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js'
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
    
  );
}

export default App;
