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
    <div >
      <Header />
      <div className="row">
        <P1 />
      </div>
      <div className="row">
        <P2 />
      </div>
      <div className="row">
        <P3 />
      </div>
      <div className="row">
        <P4 />
      </div>
      <div className="row">
        <P5 />
      </div>
      <div className="row">
        <P6 />
      </div>
      <Footer />
    </div>
  );
}
