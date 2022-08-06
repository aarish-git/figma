import React from "react";
import Header from "../../Header/Header";
import Services1 from "./control1/index";
import Services2 from "./control2/index";
import Services3 from "./control3/index";
// import Services4 from "./control4/index";
// import Services5 from "./control5/index";
// import Services6 from "./control6/index";
// import Services7 from "./control7/index";
// import Services8 from "./control8/index";
import Footer from "../../Footer/Footer";

import "../../../App.css";
export default function services() {
  return (
    <div className="App" >
    <div className="container">
        <Header />
        <Services1 />
        <Services2 />
        <Services3 />
        <Footer />
      </div>
    </div>
  );
}
