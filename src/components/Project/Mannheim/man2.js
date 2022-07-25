import React from "react";
import Trio1 from "../../../assest/Images/project/Trio1.jpg";
import sun from "../../../assest/Icons/Sun.png"
import Wind from "../../../assest/Icons/Wind.png"
import Battery from "../../../assest/Icons/BatteryCharging.png"

export default function man2() {
  return (
    <div className="row" style={{marginTop:'120px'}}>
      <div className="text-gray-600 body-font">
        <div className="flex flex-wrap">
          <div className="mann_project_desc_image rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={Trio1}
            />
          </div>
          <div className="mann_project_desc flex">
            <div className="flex">
              {/* <div className="w-full h-12 inline-flex items-center justify-left uppercase"></div> */}
              <div className="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Bold" }}
                  className="mann_project_desc_head"
                >
                  Project brief
                </h2>
                <p className="mann_project_desc_p"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px'}}>
                  Our client renovated and repurposed the top 3 floors of a
                  6-floor building. <br />
                  The top 3 floors were converted into an office space.
                </p>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" , marginBottom: '40px'}}
                  className="mann_project_desc_p"
                >
                  The building architecture and the proposed modernization posed a risk of the building interiors heating up unevenly. Also, there was uncertainty about the existing HVAC system's capacity to supply the required cooling load. Addressing these challenges was key to ensuring that the contractual obligation with the tenant to maintain a comfortable temperature was fulfilled. 
                </p>
              </div>
            </div>
              <div className="">
              <h2
                 style={{ fontFamily: "Exo2-Regular", width: '664px' }}
                 className="results_benefits_subhead"
                >
                  Leaftech was tasked to solve THE following issues:
                </h2>
                <ul className="space-y-5">
                  <li className="flex space-x-4"><img className="h-fit project_icons" alt="sun" src={sun} /><p style={{fontFamily:"NunitoSans-Regular"}} className="project_icon_text">High solar heat gain from the large glass façade</p></li>
                  <li className="flex space-x-4"><img className="h-fit project_icons" alt="Wind" src={Wind} /><p style={{fontFamily:"NunitoSans-Regular"}} className="project_icon_text">A non-uniform airflow in the office area </p></li>
                  <li className="flex space-x-4">
                  <img className="h-fit project_icons" alt="Battery" src={Battery} /><p style={{fontFamily:"NunitoSans-Regular"}} className="project_icon_text">Changes in the energy balance due to the inner courtyard..</p>
                  </li>
                </ul>
              </div>
            {/* <div className="flex flex-col mb-10 lg:items-start items-center">
              <p>
                Addressing these challenges was key to ensuring that the
                contractual obligation with the tenant to maintain a comfortable
                temperature, was fulfilled.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
