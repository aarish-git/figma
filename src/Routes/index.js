import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import AServices from "../components/Services/Analytics/ServicesAnalytis";
import CServices from "../components/Services/Control/ServicesControl";
import MServices from "../components/Services/Modelling/ServicesModeling";
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

          <Route path="/mannhiem" element={<Mannhiem />} />
          <Route path="/granue" element={<Granue />} />
          <Route path="/wago" element={<Wago />} />
          <Route path="/phoenix" element={<Phoenix />} />

          <Route path="/building-analytics" element={<AServices />} />
          <Route path="/smart-building-control" element={<CServices />} />
          <Route path="/services/3d-digital-models-of-buildings" element={<MServices />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
