import React from "react";

export default function man1() {
  return (
    <div>
      <section style={{background:"linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)"}} class="py-5 m-0 body-font ">
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
              class=" text-[58px] font-bold"
            >
              Trio Mannheim
            </h1>
            <p
              style={{ fontFamily: "Exo2-Regular" }}
              class="mb-3 text-[#4EA0FD] uppercase tracking-[2px]	"
            >
              Mannheim, Germany, Febuary 2022
            </p>
            <p class="mb-8 leading-relaxed w-3/5 ">
              Horn Grundbesitz owns and manages the Trio Mannheim facility.
              Modernized in 2021, the building was used as a P&C shopping
              complex and was later renovated to include office space. Leaftech
              conducted an energy design risk assessment for this client to help
              them make appropriate decisions for smooth operations.
            </p>
            <div class="flex ">
              <section class="text-gray-900 body-font -mb-10">
                <div class=" ">
                  <div class="flex flex-wrap space-x-14 ">
                    <div class="sm:2/3 space-y-2">
                      <h2 style={{ fontFamily: "Exo2-Regular"  }} class="title-font font-bold sm:text-2xl text-3xl text-[40px]">
                      12,000 sqm
                      </h2>
                      <p class="leading-relaxed text-[14px]">Total building surface area</p>
                    </div>
                    <div class="sm:2/3 space-y-2">
                      <h2 style={{ fontFamily: "Exo2-Regular" }} class="title-font font-bold sm:text-2xl text-3xl text-[40px]">
                      ~9,000 €
                      </h2>
                      <p class="leading-relaxed text-[14px]">Total price</p>
                    </div>
                    <div class="sm:2/3 space-y-2">
                      <h2 style={{ fontFamily: "Exo2-Regular" }} class="title-font font-bold sm:text-2xl text-3xl text-[40px]">
                      ~8,000 sqm
                      </h2>
                      <p class="leading-relaxed text-[14px]">Total project area</p>
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
