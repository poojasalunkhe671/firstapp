import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import About from './components/pages/About';
import Contact from './components/pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
