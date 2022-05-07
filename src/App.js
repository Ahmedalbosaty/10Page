import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Sign from "./components/sign/Sign";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Frontend from "./components/services/frontend/Frontend";
import Backend from "./components/services/backend/Backend";
import Crypto from "./components/services/Crypto/Crypto";
import Ai from "./components/services/AI/Ai";
import Signup from "./components/sign/signup/Signup";

import React from "react";
import Projects from "./components/projects/Projects";

const Notfound = () => {
  return <div>Sorry page not found</div>;
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/sign/signup" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/frontend" element={<Frontend />} />
        <Route path="/services/backend" element={<Backend />} />
        <Route path="/services/crypto" element={<Crypto />} />
        <Route path="/services/ai" element={<Ai />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
