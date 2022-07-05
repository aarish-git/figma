import React from "react";

export default function gran() {
  return (
    <div>
      <section
        style={{
          background:
            "linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)",
        }}
        class="py-5 m-0 body-font "
      >
        <div class=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="my-3 text-[#0087FF] text-[24px] font-bold tracking-wide uppercase"
            >
              Project showcase
            </h1>
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class=" text-[58px] font-bold"
            >
              Grüne Aue
            </h1>
            <p
              style={{ fontFamily: "Exo2-Regular" }}
              class="mb-3 text-[#4EA0FD] uppercase tracking-[2px]	"
            >
              Berlin, Germany, March 2022
            </p>
            <p class="mb-8 leading-relaxed w-3/5 ">
              Leaftech successfully completed this project for Vattenfall, a
              leading heating and energy service provider. Grüne Aue is a
              cluster of residential units, serviced by Vattenfall. Leaftech
              delivered analytics services to assess the onsite solar energy
              potential to supply energy to heat pumps used for heating and hot
              water systems.
            </p>
            <div class="flex ">
              <section class="text-gray-900 body-font">
                <div class="  ">
                  <div class="flex flex-wrap space-x-14 ">
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Regular" }}
                        class=" font-extrabold sm:text-2xl text-3xl text-[90px]"
                      >
                        15,000 sqm
                      </h2>
                      <p class="leading-relaxed text-[14px]">
                      Total project area
                      </p>
                    </div>
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Regular" }}
                        class=" font-bold sm:text-2xl text-3xl text-[40px]"
                      >
                        ~6,000 €
                      </h2>
                      <p class="leading-relaxed text-[14px]">Total project cost</p>
                    </div>
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Regular" }}
                        class=" font-bold sm:text-2xl text-3xl text-[40px]"
                      >
                        116 units
                      </h2>
                      <p class="leading-relaxed text-[14px]">
                      Homes
                      </p>
                    </div>
                    {/* <div class="p-4 sm:w-1/4 w-5">
                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                      4
                    </h2>
                    <p class="leading-relaxed">Products</p>
                  </div> */}
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div> */}
        </div>
      </section>
    </div>
  );
}
