import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import AboutYoga from "./components/AboutYoga";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/AboutYoga" element={<AboutYoga />} />
        <Route path="/Contact" element={<Contactus />} />
      </Routes>
      <a
        href="https://wa.me/917568970169?text=Hello!"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <Footer />
    </div>
  );
}

export default App;
