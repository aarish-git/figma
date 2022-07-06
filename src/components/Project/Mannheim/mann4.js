import React from "react";
import Trio2 from "../../../assest/Images/project/Trio2.jpg";
import Slider from "../../../assest/Icons/Sliders.png"
import Stamp from "../../../assest/Icons/Stamp.png"
import Coins from "../../../assest/Icons/Coins.png"
import Armchair from "../../../assest/Icons/Armchair.png"

export default function mann4() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center 	">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={Trio2}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
            <h1 style={{fontFamily:"Exo2-Regular"}} class="title-font sm:text-4xl text-[50px] mb-4 font-extrabold text-gray-700 tracking-widest">
              Results & benefits
            </h1>
            <p class="mb-8 leading-relaxed w-2/3">
              We delivered the digital twin model of the building along with
              detailed data sets and visuals to showcase the cooling load of
              each room for the whole year. We presented three scenarios to
              provide optimization recommendations for improving the building's
              overall efficiency.
            </p>
            <div class="flex flex-col space-y-5">
              <p style={{fontFamily:"Exo2-Regular"}} class="uppercase tracking-wide text-[20px] font-[400] tracking-widest">Client's benefits:</p>
              <ul class="space-y-5">
                <li class="flex space-x-5"><img class="h-fit" alt="Slider" src={Slider} /><p style={{fontfamily:"NunitoSans-Regular"}}>Enabled the client to make informed decisions. </p></li>
                <li class="flex space-x-5"><img class="h-fit" alt="Stamp" src={Stamp} /><p style={{fontfamily:"NunitoSans-Regular"}}>Complied with legal and contractual obligations</p></li>
                <li class="flex space-x-5"><img class="h-fit" alt="Coins" src={Coins} /><p style={{fontfamily:"NunitoSans-Regular"}}>Made recommendations to reduce energy costs by up to 8%</p></li>
                <li class="flex space-x-5"><img class="h-fit" alt="Armchair" src={Armchair} /><p style={{fontfamily:"NunitoSans-Regular"}}>Provided comfortable indoor conditions for tenants</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
