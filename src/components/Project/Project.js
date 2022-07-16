import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProjH from "./Projects/projectHead";
import ProjF from "./Projects/projectFoot";
import Project1 from "./Projects/project1";

export default function Project() {
  return (
    <div className="App" >
      <Header />
      <div className="container">
        <ProjH />
        <Project1 />
        <ProjF />
      </div>
      <Footer />
    </div>
  );
}
