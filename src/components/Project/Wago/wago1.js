import React from "react";

export default function wago1() {
  return (
    <div>
      <section
        style={{
          background:
            "linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)",
        }}
        class="py-2 m-0 body-font "
      >
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
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
              Wago Headquarters
            </h1>
            <p
              style={{ fontFamily: "Exo2-Regular" }}
              class="mb-3 text-[#4EA0FD] uppercase tracking-[2px]	"
            >
              Minden, Germany, June 2021
            </p>
            <p style={{fontFamily:"NunitoSans-Regular"}} class="mb-8 leading-relaxed w-3/5 font-[20px] bold-[400] ">
              Wago is a building automation and technical system provider. Its
              office facility in Minden, called V1, was constructed in the early
              2000s. For this building, we provided digital twin-based control
              services along with our integration partner Lübbing.
            </p>
            <div class="flex ">
              <section class="body-font">
                <div class="container">
                  <div class="flex flex-wrap space-x-14 -ml-2">
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Regular" }}
                        class="font-[700] text-[40px]"
                      >
                        3,800 sqm
                      </h2>
                      <p class="leading-relaxed text-[14px]">
                        Total project area
                      </p>
                    </div>
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Regular" }}
                        class="font-[700] text-[40px]"
                      >
                        2,970 €
                      </h2>
                      <p class="leading-relaxed text-[14px]">
                        Total project price
                        <br />
                        (without wind assessement)
                      </p>
                    </div>
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Regular" }}
                        class="font-[700] text-[40px]"
                      >
                        250 +
                      </h2>
                      <p class="leading-relaxed text-[14px]">
                        Devices controlled
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
