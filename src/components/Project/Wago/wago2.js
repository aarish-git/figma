import React from "react";

export default function wago2() {
  return (
    <div>
      <section class=" body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src="https://dummyimage.com/460x500"
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-left">
            <div class="flex flex-col mb-4 lg:items-start items-left">
              <div class="w-full h-12 inline-flex items-center justify-left uppercase"></div>
              <div class="flex-grow ">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class=" text-[50px] font-bold mb-2"
                >
                  Project Brief
                </h2>
                <p class="leading-relaxed text-[20px] font-[400]">
                  The building V1 hosts many offices, including the board of
                  Wago. The building structure has a complex contour, shading
                  architecture, and surroundings which make it challenging for
                  the shading automation system to ensure thermal and visual
                  comfort for the building users. To assist the Wago automation
                  system with the individual shading control, Leaftech provided
                  data services to improve efficiency and comfort. We provided:
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-full h-12 inline-flex items-center justify-left "></div>
              <div class="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="text-gray-900 text-[20px] font-bold mb-3"
                >
                  We provided:
                </h2>
                {/* <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="leading-relaxed text-[20px] font-[400]"
                >
                  
                </p> */}

                <ul class="my-3 leading-9">
                  <li>Recommendations for weather sensor placement</li>
                  <li>
                    Shading correction data for shading/sun protection control{" "}
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
