import React from "react";
import Grananue2 from "../../../assest/Images/project/GruneAue2.jpg";
import Line from "../../../assest/Icons/ChartLine.png";
import Slider  from "../../../assest/Icons/Sliders.png"
import Coin from "../../../assest/Icons/Coins.png"

 
export default function GA4() {
  return (
    <div className="row" style={{marginTop:'114px', marginBottom: '72px'}}>
      <div className="text-gray-600 body-font">
        <div className=" mx-auto flex  md:flex-row flex-col items-center 	">
          <div className="result_image rounded-lg overflow-hidden" style={{marginLeft: '-15px'}}>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Grananue2}
            />
          </div>
          <div className="result_content lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center">
            <h1 style={{fontFamily:"Exo2-Bold"}} className="results_benefits_head">
              Results & benefits
            </h1>
            <p style={{ fontFamily: "NunitoSans-Regular" }} className="results_benefits_content">
              We delivered the digital twin model of each housing unit. The
              result of each building rooftop was available in the form of data
              files and visuals. A detailed report on PV feasibility study,
              daily and annual PV yield, and optimal layout and configuration
              were presented.
            </p>
            <div className="flex flex-col space-y-5">
            <p style={{fontFamily:"Exo2-Regular"}} className="results_benefits_subhead">Client's benefits:</p>
              <ul className="space-y-3">
                <li className="flex space-x-5"><img className="h-fit" alt="Line" src={Line} /><p style={{fontfamily:"NunitoSans-Regular"}}>Fast and accurate results</p> </li>
                <li className="flex space-x-5"><img className="h-fit" alt="Slider" src={Slider} /><p style={{fontfamily:"NunitoSans-Regular"}}>Data-based decision making</p> </li>
                <li className="flex space-x-5"><img className="h-fit" alt="Coin" src={Coin} /><p style={{fontfamily:"NunitoSans-Regular"}}>Made recommendations to reduce energy costs by up to 8%</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
