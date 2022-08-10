import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Grune1 from "./GA1";
import Grune2 from "./GA2";
import Grune3 from "./GA3";
import Grune4 from "./GA4"
import Grune5 from "../Mannheim/mann5";
import Grune6 from "./GA6";

export default function indexs() {
  return (
    <div className="App" >
    <div className="">
      <Header />
      <Grune1 />
      <Grune2 />
      <Grune3 />
      <Grune4 />
      <Grune5 />
      <Grune6 />
      <Footer />
      </div>
    </div>
  );
}
