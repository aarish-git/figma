import React from "react";
import pImage from "../../../assest/Images/project/p2.jpg";
import Battery from "../../../assest/Icons/BatteryCharging.png";
import CircleHalf from "../../../assest/Icons/CircleHalf.png";
import Line from "../../../assest/Icons/ChartLine.png";
import HardDrive from "../../../assest/Icons/HardDrive.png";
import LockOpen from "../../../assest/Icons/LockOpen.png";
import LineSegments from "../../../assest/Icons/LineSegments.png";


export default function p4() {
  return (
    <div>
      <section class=" body-font">
        <div class="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              class="object-cover object-center rounded h-full w-full"
              alt="feature"
              src={pImage}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="title-font sm:text-4xl text-[50px] mb-4 font-[700] text-gray-700"
            >
              Results & benefits
            </h1>
            <p  style={{ fontFamily: "NunitoSans-Regular" }} class="mb-8 leading-relaxed w-[580px] font-[400]">
              We delivered a detailed shading assessment of each window. This
              data enhanced the existing shading automation system with highly
              accurate shading correction data files. Furthermore, in phase two,
              cloud-based shading control set-points were delivered to maximise
              the benefits.
            </p>
            <div class="flex flex-col space-y-5">
              <p
                style={{ fontFamily: "Exo2-Regular" }}
                class="uppercase tracking-widest text-[20px] font-[400]"
              >
                Client's benefits:
              </p>
              <ul class="space-y-5">
                <li class="flex space-x-5"><img src ={Battery} /><p style={{fontfamily:"NunitoSans-Regular"}}>Energy cost savings were more than 7% </p></li>
                <li class="flex space-x-5"><img src ={CircleHalf} /><p style={{fontfamily:"NunitoSans-Regular"}}>Highest level of thermal as well as visual comfort </p></li>
                <li class="flex space-x-5"><img src ={Line} /><p style={{fontfamily:"NunitoSans-Regular"}}>Data for predictive maintenance of shading systems</p></li>
                <li class="flex space-x-5"><img src ={HardDrive} /><p style={{fontfamily:"NunitoSans-Regular"}}>Avoidance of expensive and strenuous hardware sensor-based systems</p> </li>
                <li class="flex space-x-5"><img src ={LockOpen} /><p style={{fontfamily:"NunitoSans-Regular"}}>Unlocked potential to improve building certification label</p> </li>
                <li class="flex space-x-5"><img src ={LineSegments} /><p style={{fontfamily:"NunitoSans-Regular"}}>Technology as per VDI and EN standards </p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
