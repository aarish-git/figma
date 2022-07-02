import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Services from "../components/Services/ServicesSection";
import Home from "../App";
import Project from "../components/Project/Project";
import Contact from "../components/Contact/Contact";
import Mannhiem from "../components/Project/Mannheim/index";
import Granue from "../components/Project/GruneAue/indexs";
import Wago from "../components/Project/Wago/index";
import Phoenix from "../components/Project/Phoenix/index";
export default function index() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Layout />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mannhiem" element={<Mannhiem />} />
          <Route path="/granue" element={<Granue />} />
          <Route path="/wago" element={<Wago />} />
          <Route path="/phoenix" element={<Phoenix />} />
        </Routes>
      </Router>
    </div>
  );
}
