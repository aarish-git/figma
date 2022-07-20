import React from "react";
import Grananue from "../../../assest/Images/project/GruneAue1.jpg";
import Sun from "../../../assest/Icons/Sun.png"

import ChartLine from "../../../assest/Icons/ChartLine.png"


export default function GA2() {
  return (
    <div className="row" style={{marginTop:'120px'}}>
      <div className="text-gray-600 body-font">
        <div className="flex flex-wrap">
          <div className="single_project_desc_image rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={Grananue}
            />
          </div>
          <div className="single_project_desc flex">
            <div className="flex">
              {/* <div className="w-full h-12 inline-flex items-center justify-left uppercase"></div> */}
              <div className="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Bold" }}
                  className="single_project_desc_head"
                >
                  Project brief
                </h2>
                <p className="single_project_desc_p"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px'}}>
                  The heating energy to the residential units is mainly provided
                  by a central, gas-powered CHP in combination with a heat pump.
                </p>
                <p  style={{ fontFamily: "NunitoSans-Regular" , marginBottom: '40px'}}
                  className="single_project_desc_p">
                  To ensure a transition towards a sustainable and secure source
                  of energy supply for the buildings, the client wanted to
                  assess the onsite local energy generation potential to further
                  add to the supply of heat pumps, and to cover the heating as
                  well as the warm water demands.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              {/* <div className="w-full h-12 inline-flex items-center justify-left "></div> */}
              <div className="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  className="results_benefits_subhead"
                >
                  Leaftech was tasked to provide:
                </h2>
                {/* <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  className="leading-relaxed text-[20px] font-[400]"
                >
                  The building architecture and the proposed modernization posed
                  a risk of the building interiors heating up unevenly. Also,
                  there was uncertainty about the existing HVAC system's
                  capacity to supply the required cooling load. The main reasons
                  for the building to heat up were:
                </p> */}

                <ul className="my-3 space-y-5">
                  <li className="flex space-x-3"><img className="h-fit project_icons"  alt ="Sun" src={Sun} /><p style={{fontFamily:"NunitoSans-Regular"}} className="project_icon_text">Photovoltaic potential assessment</p> </li>
                  <li className="flex space-x-3"><img className="h-fit project_icons"  alt ="ChartLine" src={ChartLine} /><p style={{fontFamily:"NunitoSans-Regular"}} className="project_icon_text">Data for optimal PV system layout.</p> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
