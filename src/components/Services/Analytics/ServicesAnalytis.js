import React from "react";
import Header from "../../Header/Header";
import Services1 from "./a1/index";
import Services2 from "./a2/index";
import Services3 from "./a3/index";
import Services4 from "./a4/index";
import Services5 from "./a5/index";
import Services6 from "./a6/index";
import Services7 from "./a7/index";
import Services8 from "./a8/index";
import Footer from "../../Footer/Footer";

import "../../../App.css";
export default function services() {
  return (
    <div className="App" >
      <Header />
      <div className="container">
        <Services1 />
        <Services2 />
        <Services3 />
        {/* <Services4 />
        <Services5 />
        <Services6 />
        <Services7 />
        <Services8 /> */}
      </div>
          <Footer />
    </div>
  );
}
