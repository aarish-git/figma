import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import P1 from "./p1";
import P2 from "./p2";
import P3 from "./p3";
import P4 from "./p4";
import P5 from "./../Mannheim/mann5";
import P6 from "./p6";
export default function index() {
  return (
    <div className="App" >
      <Header />
      <div className="container">
        <P1 />
        <P2 />
        <P3 />
        <P4 />
        <P5 />
        <P6 />
      </div>
      <Footer />
    </div>
  );
}
