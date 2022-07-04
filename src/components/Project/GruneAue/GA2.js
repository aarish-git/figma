import React from "react";
import Grananue from "../../../assest/Images/project/GruneAue1.jpg";
import Sun from "../../../assest/Icons/Sun.png"

import ChartLine from "../../../assest/Icons/ChartLine.png"


export default function GA2() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src={Grananue}
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-left">
            <div class="flex flex-col mb-4 lg:items-start items-left">
              <div class="w-full h-12 inline-flex items-center justify-left uppercase"></div>
              <div class="flex-grow mt-14">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="text-gray-900 text-[50px] font-bold mb-2"
                >
                  Project brief
                </h2>
                <p class="leading-relaxed text-[20px] font-[400] my-3 text-[#2F2F2F]">
                  The heating energy to the residential units is mainly provided
                  by a central, gas-powered CHP in combination with a heat pump.
                </p>
                <p class="text-[20px] font-[400] leading-relaxed text-[#000000]	">
                  To ensure a transition towards a sustainable and secure source
                  of energy supply for the buildings, the client wanted to
                  assess the onsite local energy generation potential to further
                  add to the supply of heat pumps, and to cover the heating as
                  well as the warm water demands.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-full h-12 inline-flex items-center justify-left "></div>
              <div class="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="text-gray-900 text-[20px] font-medium mb-4 uppercase tracking-widest"
                >
                  Leaftech was tasked to provide:
                </h2>
                {/* <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="leading-relaxed text-[20px] font-[400]"
                >
                  The building architecture and the proposed modernization posed
                  a risk of the building interiors heating up unevenly. Also,
                  there was uncertainty about the existing HVAC system's
                  capacity to supply the required cooling load. The main reasons
                  for the building to heat up were:
                </p> */}

                <ul class="my-3 space-y-5">
                  <li class="flex space-x-3"><img src={Sun} /><p>Photovoltaic potential assessment</p> </li>
                  <li class="flex space-x-3"><img src={ChartLine} /><p>Data for optimal PV system layout.</p> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
