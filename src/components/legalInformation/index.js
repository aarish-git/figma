import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LegalInformation from "../legalInformation/LegalInformation";

export default function index() {
  return (
    <div className="App" >
      <div className="container">
       <Header />
        <LegalInformation />
        <Footer />
      </div>
    </div>
  );
}
