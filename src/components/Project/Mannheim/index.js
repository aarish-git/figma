import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Mann from "./man1";
import Mann2 from "./man2";
import Mann3 from "./mann3";
import Mann4 from "./mann4";
import Mann5 from "./mann5";
import Mann6 from "./mann6";
export default function index() {
  return (
    <div className="App" >
      <Header />
      <div className="container">
      <Mann />
      <Mann2 />
      <Mann3 />
      <Mann4 />
      <Mann5 />
      <Mann6 />
      </div>
      <Footer />
    </div>
  );
}
