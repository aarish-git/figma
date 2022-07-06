import React from "react";
import wago from "../../../assest/Images/project/project4.jpg";
import Sun from "../../../assest/Icons/Sun.png"
import Circle from "../../../assest/Icons/CircleHalf.png"

export default function wago2() {
  return (
    <div>
      <section class=" body-font">
        <div class=" px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src={wago}
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-left">
            <div class="flex flex-col mb-4 lg:items-start items-left">
              <div class="w-full h-12 inline-flex items-center justify-left uppercase"></div>
              <div class="flex-grow ">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class=" text-[50px] font-bold mb-4"
                >
                  Project brief
                </h2>
                <p style={{fontfamily:"NunitoSans-Regular"}} class="leading-relaxed text-[20px] font-[400]">
                  The building V1 hosts many offices, including the board of
                  Wago. The building structure has a complex contour, shading
                  architecture, and surroundings which make it challenging for
                  the shading automation system to ensure thermal and visual
                  comfort for the building users. To assist the Wago automation
                  system with the individual shading control, Leaftech provided
                  data services to improve efficiency and comfort.<br /> We provided:
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              {/* <div class="w-full h-12 inline-flex items-center justify-left "></div> */}
              <div class="flex-grow">
                {/* <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="text-gray-900 text-[20px] font-bold mb-3"
                >
                  We provided:
                </h2> */}
                <ul class="my-3 space-y-4">
                  <li class="flex space-x-5"><img class="h-fit" alt="Sun" src={Sun} /><p>Recommendations for weather sensor placement</p></li>
                  <li class="flex space-x-5"><img class="h-fit" alt="Circle" src={Circle} /><p>
                    Shading correction data for shading/sun protection control{" "}</p>
                  </li>
                  {/* <li>
                    Changes in the energy balance due to the inner courtyard..
                  </li> */}
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
