import React from "react";
import pImage from "../../../assest/Images/project/Chart.png";
import Battery from "../../../assest/Icons/BatteryCharging.png";
import CircleHalf from "../../../assest/Icons/CircleHalf.png";
import Line from "../../../assest/Icons/ChartLine.png";
import HardDrive from "../../../assest/Icons/HardDrive.png";
import LockOpen from "../../../assest/Icons/LockOpen.png";
import LineSegments from "../../../assest/Icons/LineSegments.png";


export default function p4() {
  return (
    <div className="row" style={{marginTop:'114px', marginBottom: '72px'}}>
      <div className="text-gray-600 body-font">
        <div className=" mx-auto flex  md:flex-row flex-col items-center 	">
          <div className="rounded-lg overflow-hidden" style={{marginLeft: '-10px', width:'58%', height:'484px'}}>
            <img
              className="object-cover object-center rounded h-full w-full"
              alt="feature"
              src={pImage}
            />
          </div>
          <div className="flex flex-col md:items-start md:text-left items-center" style={{marginLeft: '25px', width:'42%'}}>
            <h1 style={{fontFamily:"Exo2-Bold"}} className="results_benefits_head">
              Results & benefits
            </h1>
            <p  style={{ fontFamily: "NunitoSans-Regular", width:'565px' }} className="results_benefits_content" >
              We delivered a detailed shading assessment of each window. This
              data enhanced the existing shading automation system with highly
              accurate shading correction data files. Furthermore, in phase two,
              cloud-based shading control set-points were delivered to maximise
              the benefits.
            </p>
            <div className="flex flex-col space-y-5" style={{width:'550px'}}>
            <p style={{fontFamily:"Exo2-Regular", marginBottom:'0px'}} className="results_benefits_subhead">Client's benefits:</p>
              <ul className="space-y-7">
                <li className="flex space-x-5"><img className="h-fit project_icons" alt="Project" src ={Battery} /><p className="project_icon_text" style={{fontfamily:"NunitoSans-Regular"}}>Energy cost savings were more than 7% </p></li>
                <li className="flex space-x-5"><img className="h-fit project_icons" alt="Project" src ={CircleHalf} /><p className="project_icon_text" style={{fontfamily:"NunitoSans-Regular"}}>Highest level of thermal as well as visual comfort </p></li>
                <li className="flex space-x-5"><img className="h-fit project_icons" alt="Project" src ={Line} /><p className="project_icon_text" style={{fontfamily:"NunitoSans-Regular"}}>Data for predictive maintenance of shading systems</p></li>
                <li className="flex space-x-5"><img className="h-fit project_icons" alt="Project" src ={HardDrive} /><p className="project_icon_text" style={{fontfamily:"NunitoSans-Regular"}}>Avoidance of expensive and strenuous hardware sensor-based systems</p> </li>
                <li className="flex space-x-5"><img className="h-fit project_icons" alt="Project" src ={LockOpen} /><p className="project_icon_text" style={{fontfamily:"NunitoSans-Regular"}}>Unlocked potential to improve building certification label</p> </li>
                <li className="flex space-x-5"><img className="h-fit project_icons" alt="Project" src ={LineSegments} /><p className="project_icon_text" style={{fontfamily:"NunitoSans-Regular"}}>Technology as per VDI and EN standards </p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
