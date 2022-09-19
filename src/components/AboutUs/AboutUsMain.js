import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutUs from "./AboutUs";

export default function AboutUsMain() {
  return (
    <div className="App" >
      <div className="project__wrapper">
        <Header />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}
