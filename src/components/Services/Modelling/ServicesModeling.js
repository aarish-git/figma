import React from "react";
import Header from "../../Header/Header";
import Services1 from "./model1/index";
import Services2 from "./model2/index";
import Services3 from "./model3/index";
import Services4 from "./model4/index";
import Services5 from "./model5/index";
import Services6 from "./model6/index";
import Services7 from "./model7/index";
import Services8 from "./model8/index";
import Footer from "../../Footer/Footer";

import "../../../App.css";
export default function services() {
  return (
    <div>
      <div>
        <Header />
        <Services1 />
        <Services2 />
        <Services3 />
        {/* <Services4 />
        <Services5 />
        <Services6 />
        <Services7 />
        <Services8 /> */}
        <Footer />
      </div>
    </div>
  );
}
