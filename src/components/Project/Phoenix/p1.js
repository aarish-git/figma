import React from "react";

export default function p1() {
  return (
    <div>
      <section
        style={{
          background:
            "linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)",
        }}
        class="py-5 m-0 body-font "
      >
        <div class="mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="my-3 text-[#0087FF] text-[24px] font-bold tracking-wide uppercase"
            >
              Project showcase
            </h1>
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class=" text-[58px] font-bold mb-2"
            >
              Phoenix Contact
            </h1>
            <p
              style={{ fontFamily: "Exo2-Regular" }}
              class="mb-3 text-[#4EA0FD] uppercase tracking-widest"
            >
              Blomberg Germany, April 2022
            </p>
            <p style={{fontFamily:"NunitoSans-Regular"}} class="mb-8 leading-relaxed w-3/5 ">
              Leaftech serviced the office facility of Phoenix Contact, a
              building automation/smart home provider. This building uses
              Phoenix Contact's in-house building automation system called
              “Emalytics and automated shading control". We provided Digital
              Twin-based analytics and control recommendations to enhance the
              shading system for maximum efficiency and comfort.
            </p>
            <div class="flex ">
              <section class="text-gray-900 body-font">
                <div class="  ">
                  <div class="flex flex-wrap space-x-14 ">
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Regular" }}
                        class="title-font font-bold sm:text-2xl text-3xl text-[40px]"
                      >
                        ~1,965 sqm
                      </h2>
                      <p class="leading-relaxed text-[14px]">
                      Total project area
                      </p>
                    </div>
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Regular" }}
                        class="title-font font-bold sm:text-2xl text-3xl text-[40px]"
                      >
                        3,000 €
                      </h2>
                      <p class="leading-relaxed text-[14px]">Total price phase one (2019)</p>
                    </div>
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Regular" }}
                        class="title-font font-bold sm:text-2xl text-3xl text-[40px]"
                      >
                        1,500 € + 67 €<span class=" text-[15px] font-bold">/month</span>
                      </h2>
                      <p class="leading-relaxed text-[14px] ">
                      Total price phase two (2022)
                      </p>
                    </div>
                    
                  </div>
                </div>
              </section>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
