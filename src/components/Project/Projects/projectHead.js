import React from "react";
import Building from "../../../assest/Images/project/Buildings.svg"
export default function index() {
  return (
    <div className="row">
      <div className="text-gray-600 body-font project_first_content_block" style={{ background: "linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)"}} >
        <div className="row md:flex-row flex-col items-center" style={{ marginTop: "21px" }}>
          <div className="col-lg-6 items-center">
            <span
              style={{ fontFamily: "Exo2-SemiBold", marginBottom: '16px' }}
              className="text-[#0087FF] uppercase my-3 text-[24px]"
            >
              Projects
            </span>
            <h1
              style={{ fontFamily: "Exo2-Bold", marginBottom: '32px', marginTop:'16px' }}
              className="text-[#2F2F2F] text-[58px] "
            >
              Our success stories
            </h1>
            <p style={{fontFamily: "NunitoSans-Regular", marginBottom:'64px', width:'775px'}} className="text-[20px] leading-relaxed">
              We have gained experience working with a wide range of industry
              partners. Take a glance at our project portfolio to learn more
              about the value we created for our clients and their buildings.
            </p>
            <div className="flex">
              <a style={{all:"unset"}} href="/contact">
              <button
                style={{ fontFamily: "NunitoSans-Regular", marginLeft:'-10px' }}
                className="inline-flex  py-2 px-6  rounded-[20px] text-[20px] text-[#FFFFFF] shadow-[0px_4px_4px_rgba(0,135,225,0.25)] bg-[#0087FF]"
              >
                Contact us
              </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 ">
            <img
              className="object-cover object-center rounded"
              style={{marginLeft:'170px' }}
              alt="hero"
              src={Building}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
