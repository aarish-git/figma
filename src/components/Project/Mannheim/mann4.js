import React from "react";
import Trio2 from "../../../assest/Images/project/Trio2.jpg";
import Slider from "../../../assest/Icons/Sliders.png"
import Stamp from "../../../assest/Icons/Stamp.png"
import Coins from "../../../assest/Icons/Coins.png"
import Armchair from "../../../assest/Icons/Armchair.png"

export default function mann4() {
  return (
    <div className="row" style={{marginTop:'114px', marginBottom: '72px'}}>
      <div className="text-gray-600 body-font">
        <div className=" mx-auto flex  md:flex-row flex-col items-center 	">
          <div className="result_image rounded-lg overflow-hidden" style={{marginLeft: '-15px'}}>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Trio2}
            />
          </div>
          <div className="result_content lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center">
            <h1 style={{fontFamily:"Exo2-Bold"}} className="results_benefits_head">
              Results & benefits
            </h1>
            <p className="results_benefits_content">
              We delivered the digital twin model of the building along with
              detailed data sets and visuals to showcase the cooling load of
              each room for the whole year. We presented three scenarios to
              provide optimization recommendations for improving the building's
              overall efficiency.
            </p>
            <div className="flex flex-col space-y-5">
              <p style={{fontFamily:"Exo2-Regular"}} className="results_benefits_subhead">Client's benefits:</p>
              <ul className="space-y-5">
                <li className="flex space-x-5"><img className="h-fit" alt="Slider" src={Slider} /><p style={{fontfamily:"NunitoSans-Regular"}}>Enabled the client to make informed decisions. </p></li>
                <li className="flex space-x-5"><img className="h-fit" alt="Stamp" src={Stamp} /><p style={{fontfamily:"NunitoSans-Regular"}}>Complied with legal and contractual obligations</p></li>
                <li className="flex space-x-5"><img className="h-fit" alt="Coins" src={Coins} /><p style={{fontfamily:"NunitoSans-Regular"}}>Made recommendations to reduce energy costs by up to 8%</p></li>
                <li className="flex space-x-5"><img className="h-fit" alt="Armchair" src={Armchair} /><p style={{fontfamily:"NunitoSans-Regular"}}>Provided comfortable indoor conditions for tenants</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
