import React from "react";
import LC from "../../../assest/Images/project/Linechart.jpg"
import Arrow from '../../../assest/Icons/ArrowDownLeft.png'
import CircleHalf from '../../../assest/Icons/CircleHalf.png'
import CheckSquare from '../../../assest/Icons/CheckSquare.png'
import LineSegments from '../../../assest/Icons/LineSegments.png'


export default function wago4() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={LC}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="title-font sm:text-4xl text-[50px] mb-4 font-bold text-gray-700"
            >
              Results & benefits
            </h1>
            <p style={{fontFamily:"NunitoSans-Regular"}} class="mb-8 leading-relaxed w-full font-[400] text-[20px]">
              We delivered the digital twin of the building along with the
              recommendations for optimal locations for solar as well as wind
              sensors on the rooftop. The shading correction data file for each
              window was provided to the integration partner Lübbing.
            </p>
            <div class="flex flex-col space-y-5">
              <p
                style={{ fontFamily: "Exo2-Regular" }}
                class="uppercase tracking-widest font-[400] text-[20px] "
              >
                Client's benefits:
              </p>
              <ul class="space-y-3">
                <li class="flex space-x-5"><img src ={Arrow} /><p style={{fontfamily:"NunitoSans-Regular"}}>Energy cost savings of more than 7% </p></li>
                <li class="flex space-x-5"><img src ={CircleHalf} /><p style={{fontfamily:"NunitoSans-Regular"}}>Highest level of thermal as well as visual comfort</p> </li>
                <li class="flex space-x-5"><img src ={CheckSquare} /><p style={{fontfamily:"NunitoSans-Regular"}}>Hassle-free facility management</p></li>
                <li class="flex space-x-5"><img src ={LineSegments} /><p style={{fontfamily:"NunitoSans-Regular"}}>Technology as per VDI and EN standards </p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
