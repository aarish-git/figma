import React from "react";
import Trio1 from "../../../assest/Images/project/Trio1.jpg";
import sun from "../../../assest/Icons/Sun.png"
import Wind from "../../../assest/Icons/Wind.png"
import Battery from "../../../assest/Icons/BatteryCharging.png"

export default function man2() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src={Trio1}
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-left space-y-5">
            <div class="flex flex-col lg:items-start items-left">
              {/* <div class="w-full h-12 inline-flex items-center justify-left uppercase"></div> */}
              <div class="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="text-gray-900 text-[50px] font-bold mb-1"
                >
                  Project brief
                </h2>
                <p class="leading-relaxed text-[20px] font-[400]">
                  Our client renovated and repurposed the top 3 floors of a
                  6-floor building. <br />
                  The top 3 floors were converted into an office space.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10  lg:items-start items-center">
              <div class="w-full h-12 inline-flex items-center justify-left "></div>
              <div class="flex-grow -mt-8">
                {/* <h2 style={{fontFamily:"Exo2-Regular"}} class="text-gray-900 text-[40px] font-bold mb-3">
                  Challenge
                </h2> */}
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="leading-relaxed text-[20px] font-[400]"
                >
                  The building architecture and the proposed modernization posed a risk of the building interiors heating up unevenly. Also, there was uncertainty about the existing HVAC system's capacity to supply the required cooling load. Addressing these challenges was key to ensuring that the contractual obligation with the tenant to maintain a comfortable temperature was fulfilled. 
                </p>

                <ul class="mt-20 space-y-5">
                  <li class="flex space-x-4"><img src={sun} /><p>High solar heat gain from the large glass façade</p></li>
                  <li class="flex space-x-4"><img src={Wind} /><p>A non-uniform airflow in the office area </p></li>
                  <li class="flex space-x-4">
                  <img src={Battery} /><p>Changes in the energy balance due to the inner courtyard..</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div class="flex flex-col mb-10 lg:items-start items-center">
              <p>
                Addressing these challenges was key to ensuring that the
                contractual obligation with the tenant to maintain a comfortable
                temperature, was fulfilled.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
