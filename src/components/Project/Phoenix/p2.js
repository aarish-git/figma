import React from "react";
import pImage from "../../../assest/Images/project/p1.jpg" 
export default function p2() {
  return (
    <div>
      <section class=" body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src={pImage}
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-left">
            <div class="flex flex-col mb-4 lg:items-start items-left -mt-5">
              {/* <div class="w-full h-12 inline-flex items-center justify-left uppercase"></div> */}
              <div class="flex-grow ">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="text-[#2F2F2F] text-[50px] font-bold mb-4"
                >
                  Project Brief
                </h2>
                <p style={{fontFamily:"NunitoSans-Regular"}} class="leading-relaxed text-[20px] font-[400] mb-3">
                  Phoenix Contact's new office building called 17a is located on
                  their campus in Bloomberg and it consists of three floors with
                  large-scale open office areas. This office architecture made
                  it challenging to maintain the thermal and visual comfort of
                  all its employees.
                </p>
                <p class="leading-relaxed text-[20px] font-[400] mb-3">
                  Leaftech was tasked to provide shading control data to
                  maximise its employee’s comfort and to improve the system's
                  efficiency.{" "}
                </p>
                <p class="text-[20px] font-[400] ">We delivered the project in two phases. </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-full h-12 inline-flex items-center justify-left "></div>
              <div class="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="text-[#2F2F2F] text-[20px] font-[400] mb-3 uppercase tracking-[2px]"
                >
                  Phase one
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="leading-relaxed text-[20px] font-[400] mb-5"
                >
                  We provided a shading correction factor for each window for
                  the whole year. This shading correction factor was used along
                  with the rooftop weather station to control the individual
                  shading devices.
                </p>
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="text-[#2F2F2F] text-[20px] font-[400] mb-3 uppercase tracking-[2px]"
                >
                  Phase two
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="leading-relaxed text-[20px] font-[400]"
                >
                  We are enriching the Digital Twin from phase one with the
                  weather forecast data to continuously provide control advice
                  to the shading devices to maximise thermal as well as visual
                  comfort.
                </p>
                {/* <ul class="my-3 leading-9">
                  <li>High solar heat gain from the large glass façade</li>
                  <li>A non-uniform airflow in the office area </li>
                  <li>
                    Changes in the energy balance due to the inner courtyard..
                  </li>
                </ul> */}
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
