import React from "react";
import LC from "../../../assest/Images/project/Linechart.jpg"
import Arrow from '../../../assest/Icons/ArrowDownLeft.png'
import CircleHalf from '../../../assest/Icons/CircleHalf.png'
import CheckSquare from '../../../assest/Icons/CheckSquare.png'
import LineSegments from '../../../assest/Icons/LineSegments.png'


export default function wago4() {
  return (
    <div className="row" style={{marginTop:'114px', marginBottom: '72px'}}>
      <div className="text-gray-600 body-font">
        <div className=" mx-auto flex  md:flex-row flex-col items-center 	">
          <div className="rounded-lg overflow-hidden" style={{marginLeft: '-15px', width:'60%'}}>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={LC}
            />
          </div>
          <div className="flex flex-col md:items-start md:text-left items-center" style={{marginLeft: '45px', width:'40%'}}>
            <h1 style={{fontFamily:"Exo2-Bold", marginBottom:'21px'}} className="results_benefits_head">
              Results & benefits
            </h1>
            <p style={{fontFamily:"NunitoSans-Regular", marginBottom:'13px', width:'535px'}} className="results_benefits_content">
              We delivered the digital twin of the building along with the
              recommendations for optimal locations for solar as well as wind
              sensors on the rooftop. The shading correction data file for each
              window was provided to the integration partner Lübbing.
            </p>
            <div className="flex flex-col space-y-5">
            <p style={{fontFamily:"Exo2-Regular", marginBottom:'16px'}} className="results_benefits_subhead">Client's benefits:</p>
              <ul className="space-y-3">
                <li className="flex space-x-5"><img className="h-fit" alt="wago" src ={Arrow} /><p style={{fontfamily:"NunitoSans-Regular"}}>Energy cost savings of more than 7% </p></li>
                <li className="flex space-x-5"><img className="h-fit" alt="wago" src ={CircleHalf} /><p style={{fontfamily:"NunitoSans-Regular"}}>Highest level of thermal as well as visual comfort</p> </li>
                <li className="flex space-x-5"><img className="h-fit" alt="wago" src ={CheckSquare} /><p style={{fontfamily:"NunitoSans-Regular"}}>Hassle-free facility management</p></li>
                <li className="flex space-x-5"><img className="h-fit" alt="wago" src ={LineSegments} /><p style={{fontfamily:"NunitoSans-Regular"}}>Technology as per VDI and EN standards </p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
