import React from "react";
import img from "../assest/Images/home/Laptop.png";
import { Link } from "react-router-dom";

export default function GetStart() {
  return (
    <div className='row'  style={{backgroundColor:' #FAFBFC', marginTop: '120px', zIndex: '0', textAlign:'left'}}>
          <div className="col-lg-1"></div> 
          <div className="col-lg-5">
            <h1 className="access_your_head title-font" style={{ fontFamily: "Exo2-Bold" }}>
              Access your building’s <br />
              digital twin today.
            </h1>
            <p className="access_your_content " style={{ fontFamily: "NunitoSans-Regular"}}>
            Get access to your building's 3D model, analytic reports, visuals, and so much more with our customer platform.
            </p>
            <div className="flex">
              <Link style={{all:"unset"}} to="/contact">
              <button style={{marginTop:'64px', fontSize:'20px'}} className="inline-flex text-white py-2 px-6 focus:outline-none bg-[#0087FF] shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] text-lg">
                Contact Us
              </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-5 access_your_img_container">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
          <div className="col-lg-1"></div>
    </div>
  );
}
