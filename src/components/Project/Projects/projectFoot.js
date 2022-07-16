import React from "react";

export default function projectFoot() {
  return (
    <div className="row" style={{marginTop:'45px'}}>
      <div className="text-gray-600 body-font" style={{textAlign:'center'}}>
          <div className="flex flex-wrap w-full flex-col text-gray-600 body-font items-center text-center">
            <p style={{ fontFamily: "Exo2-Regular" }} className="get_in_touch">
              Get in touch to learn more about our project 
            </p>
            <p style={{ fontFamily: "Exo2-Regular" }} className="get_in_touch">
              portfolio and the solutions we’ve delivered.
            </p>
          </div>
          <a style={{all:"unset"}} href="/contact">
          <button style={{marginTop:'64px', marginBottom:'120px'}} className=" text-gray-600 body-font text-white bg-[#0087FF]  py-2 px-8 rounded-[20px] shadow-[0_4px_4px_rgba(0,135,225,0.25)]  text-lg">
            Contact us
          </button>
          </a>
      </div>
    </div>
  );
}
