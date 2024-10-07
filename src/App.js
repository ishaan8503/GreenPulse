import "./App.css";
import React from "react";
import Home from "./Page/Home";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Page/ContactUs";
import About from "./Page/About";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    
  );
}



export default App;
