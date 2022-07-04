import React from "react";

export default function services() {
  return (
    <div>
      <section class=" body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1
            style={{ fontFamily: "Exo2-Regular" }}
            class="font-bold text-[40px] title-font text-center text-gray-900  "
          >
            Move towards a net-zero building <br /> stock with our data
            services.
            <p
              style={{ fontFamily: "NunitoSans-Regular" }}
              class="lg:w-2/3 md:w-1/2 font-medium text-[20px] text-center mx-auto my-4 leading-relaxed"
            >
              Our Digital Twin for buildings is based on a highly standardised
              and automated set of processes that span modelling, analytics, and
              control. Besides offering the highest speed and data accuracy,
              data solutions are created with our Digital Twin are tailor-made
              to meet your specific needs.
              <span class="font-bold"> Explore our services.</span>
            </p>
          </h1>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 md:space-y-0 space-y-6">
            {/* card1 */}
            <div class="p-4 md:w-1/3 flex">
              <div class="flex-grow m-auto py-3 shadow-[0_4px_4px_rgba(0,135,225,0.25)] rounded-[20px]">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="text-gray-900 text-lg font-bold title-font uppercase mb-2 tracking-wide"
                >
                  Modelling
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="leading-relaxed text-base text-center lg:px-5 "
                >
                  Take the step to digitise your real estate with our unique
                  building 3D modelling <br />
                  services.
                </p>
              </div>
            </div>
            {/* card2 */}
            <div class="p-4 md:w-1/3 flex">
              <div class="flex-grow m-auto py-3 shadow-[0_4px_4px_rgba(0,135,225,0.25)] rounded-[20px]">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="text-gray-900 text-lg font-bold title-font font-medium mb-2 uppercase tracking-wide"
                >
                  Ananlytics
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="leading-relaxed text-base text-center px-5"
                >
                  Get a holistic view of your building's design and performance
                  with our advanced building analytics services.
                </p>
              </div>
            </div>
            {/* card3 */}
            <div class="p-4 md:w-1/3 flex">
              <div class="flex-grow m-auto py-3 shadow-[0_4px_4px_rgba(0,135,225,0.25)] rounded-[20px]">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="text-gray-900 text-lg font-bold title-font font-medium mb-2 uppercase tracking-wide"
                >
                  control
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="leading-relaxed text-base text-center px-5"
                >
                  Operate and optimise your building and individual systems with
                  our accurate <br />
                  building control data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
