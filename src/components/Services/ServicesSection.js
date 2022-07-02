import React from "react";
import Header from "../Header/Header";
import Services1 from "./services1/index";
import Services2 from "./services2/index";
import Services3 from "./services3/index";
import Services4 from "./services4/index";
import Services5 from "./services5/index";
import Services6 from "./services6/index";
import Services7 from "./services7/index";
import Services8 from "./services8/index";
import Footer from "../Footer/Footer";

import "../../App.css";
export default function services() {
  return (
    <div>
      <div>
        <Header />
        <Services1 />
        <Services2 />
        <Services3 />
        <Services4 />
        <Services5 />
        <Services6 />
        <Services7 />
        <Services8 />
        <Footer />
      </div>
    </div>
  );
}
