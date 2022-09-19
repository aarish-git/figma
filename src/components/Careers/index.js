import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Careers from "./Careers";

export default function Index() {
  return (
    <div className="App" >
      <div className="project__wrapper">
        <Header />
        <Careers />
        <Footer />
      </div>
    </div>
  );
}
