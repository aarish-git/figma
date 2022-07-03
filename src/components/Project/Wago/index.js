import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Wago1 from "./wago1";
import Wago2 from "./wago2";
import Wago4 from "./wago4";
import Wago5 from "./../Mannheim/mann5";
import Wago6 from "./wago6";

export default function index() {
  return (
    <div>
      <Header />
      <Wago1 />
      <Wago2 />
      <Wago4 />
      <Wago5 />
      <Wago6 />
      <Footer />
    </div>
  );
}
