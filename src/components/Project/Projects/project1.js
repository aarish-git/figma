import React from "react";
import { Link } from "react-router-dom";
import Trio from "../../../assest/Images/project/project1.jpg";
import Granue from "../../../assest/Images/project/project2.jpg";
import Pheonix from "../../../assest/Images/project/project3.jpg";
import Wago from "../../../assest/Images/project/project4.jpg";

import Sun from "../../../assest/Icons/Sun.png";
import Wrench from "../../../assest/Icons/Wrench.png";
import User from "../../../assest/Icons/User.png";
import Default from "../../../assest/Icons/Default.png";

export default function project() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <a style={{ all: "unset" }} href="/mannhiem">
          <div style={{ padding: "42px 40px" }} class=" py-24 ">
            <div class="lg:w-full flex flex-wrap shadow-[0px_4px_4px_0px_rgba(0,135,255,0.25)] rounded-[20px]">
              <img
                alt="ecommerce"
                class="lg:w-1/2  w-full lg:h-auto h-64 object-cover object-center rounded"
                src={Trio}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2
                  style={{ fontFamily: "Exo2-Regular", marginTop: "55px" }}
                  class="text-[20px] font-[400] tracking-wide uppercase text-[#0087FF] mb-3"
                >
                  Mannheim, Germany, February 2022
                </h2>
                <h1
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="project_name_head text-[40px] text-[#2F2F2F] font-bold mb-1 "
                >
                  Trio Mannheim
                </h1>
                <div class="flex mb-4"></div>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="leading-relaxed text-[20px] font-[400]"
                >
                  Provided digital twin-based analytic services to conduct
                  energy design risk assessment and for informed decision
                  making.
                </p>
                <div class="flex mt-6 items-center pb-5 border-gray-100 mb-5">
                  <div class="flex  items-center">
                    <div class="relative">
                      <ul class="space-y-5">
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={User} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            Customer group: Building owner/asset management
                          </p>
                        </li>
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={Default} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            Building type: Commercial, P&C shopping complex
                          </p>
                        </li>
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={Sun} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font-[400]"
                          >
                            System Information: Centralized HVAC system
                            installed
                          </p>
                        </li>
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={Wrench} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font [400]"
                          >
                            Services: Digital twin set-up, energy demand
                          </p>
                          assessment
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class=" text-left project_nums">
                  <section class="text-gray-600 body-font">
                    <div
                      style={{ padding: "42px 40px" }}
                      class=" py-10 mx-auto"
                    >
                      <div class="flex flex-wrap -m-4">
                        <div class="p-4 sm:w-1/3 w-1/2 space-y-1">
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            class="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            12,000 sqm
                          </h2>
                          <p class="leading-relaxed">Total project area</p>
                        </div>
                        <div class="p-4 sm:w-1/3 w-1/2 space-y-1">
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            class="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            ~9,000 €
                          </h2>
                          <p class="leading-relaxed">Total project cost </p>
                        </div>
                        <div class="p-4 sm:w-1/3 w-1/2 space-y-1">
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            class="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            ~8,000 sqm
                          </h2>
                          <p class="leading-relaxed w-full">
                            Building area under assessment
                          </p>
                        </div>
                        {/* <div class="p-4 sm:w-1/3 w-1/2">
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
            </div>
          </div>
        </a>
      </section>
      {/* 2nd */}
      <section class="text-gray-600 body-font overflow-hidden">
        <a style={{ all: "unset" }} href="/granue">
          <div style={{ padding: "42px 40px" }} class=" py-24  ">
            <div class="lg:w-full  flex flex-wrap shadow-[0px_4px_4px_0px_rgba(0,135,255,0.25)] rounded-[20px]">
              <img
                alt="ecommerce"
                class="lg:w-1/2  w-full lg:h-auto h-64 object-cover object-center rounded"
                src={Granue}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
                <h2
                  style={{ fontFamily: "Exo2-Regular", marginTop: "55px" }}
                  class="text-[20px] font-[400] tracking-wide uppercase text-[#0087FF] mb-3"
                >
                  Berlin, germany, March 2022
                </h2>
                <h1
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="project_name_head text-[40px] text-[#2F2F2F] font-bold mb-1"
                >
                  Grüne Aue
                </h1>
                <div class="flex mb-4"></div>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="leading-relaxed text-[20px] font-[400]"
                >
                  Our digital twin-based analytics services provided onsite
                  energy generation potential assessment along with optimal PV
                  system layout.
                </p>
                <div class="flex mt-6 items-center pb-5 border-gray-100 mb-5">
                  <div class="flex  items-center">
                    <div class="relative">
                      <ul class="space-y-5 ">
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={User} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            Customer group: Utility & energy system provider{" "}
                          </p>
                        </li>
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={Default} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            Building type: Residential
                          </p>
                        </li>
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={Sun} />{" "}
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            Heating system: CHP in combination with heat pump
                          </p>{" "}
                        </li>
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={Wrench} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            Services: Digital twin set-up, PV potential
                            assessment{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class=" text-center project_nums">
                  <section class="text-gray-600 body-font">
                    <div
                      style={{ padding: "42px 40px" }}
                      class=" py-10 mx-auto"
                    >
                      <div class="flex flex-wrap text-left project_nums -m-4">
                        <div class="p-4 sm:w-1/3 w-1/2 space-y-1">
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            class="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            15,000 sqm
                          </h2>
                          <p class="leading-relaxed">Total project area</p>
                        </div>
                        <div class="p-4 sm:w-1/3 w-1/2 space-y-1">
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            class="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            ~6,000 €
                          </h2>
                          <p class="leading-relaxed">Total project cost </p>
                        </div>
                        <div class="p-4 sm:w-1/3 w-1/2 space-y-1">
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            class="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            116 Units
                          </h2>
                          <p class="leading-relaxed">Homes</p>
                        </div>
                        {/* <div class="p-4 sm:w-1/3 w-1/2">
                  <h2 class="title-font font-medium sm:text-2xl text-3xl text-gray-900">
                    4
                  </h2>
                  <p class="leading-relaxed">Products</p>
                </div> */}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>
      {/* 3rd */}
      <section class="text-gray-600 body-font overflow-hidden">
        <a style={{ all: "unset" }} href="/phoenix">
          <div style={{ padding: "42px 40px" }} class=" py-24  ">
            <div class="lg:w-full  flex flex-wrap shadow-[0px_4px_4px_0px_rgba(0,135,255,0.25)] rounded-[20px]">
              <img
                alt="ecommerce"
                class="lg:w-1/2  w-full lg:h-auto h-64 object-cover object-center rounded"
                src={Pheonix}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2
                  style={{ fontFamily: "Exo2-Regular", marginTop: "55px" }}
                  class="text-[20px] font-[400] tracking-wide uppercase text-[#0087FF] mb-3"
                >
                  Blomberg, Germany, April 2022
                </h2>
                <h1
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="project_name_head text-[40px] text-[#2F2F2F] font-bold mb-1"
                >
                  Pheonix Contact
                </h1>
                <div class="flex mb-4"></div>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="leading-relaxed text-[20px] font-[400]"
                >
                  Leaftech provided digital twin-based analytics and control
                  services to enhance the shading automation system to maximise
                  efficiency and comfort.
                </p>
                <div class="flex mt-6 items-center pb-5  border-gray-100 mb-5">
                  <div class="flex  items-center">
                    <div class="relative">
                      <ul class="space-y-5">
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={User} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            {" "}
                            Customer group: Building automation/smart home
                            provider{" "}
                          </p>
                        </li>
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={Default} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            {" "}
                            Building type: Commercial, Phoenix Contact office
                            facility{" "}
                          </p>
                        </li>
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={Sun} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            Automation system: Emalytics and automated
                            individual shading control
                          </p>
                        </li>
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={Wrench} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            Service: Control data for shading automation
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class=" text-center project_nums2">
                  <section class="text-gray-600 body-font">
                    <div style={{ padding: "42px 40px" }} class=" py-10 ">
                      <div class="flex flex-wrap -m-2 text-left project_nums ">
                        <div class=" sm:w-1/3 w-1/2  space-y-1">
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            class="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            -1,965 sqm
                          </h2>
                          <p class="leading-relaxed">Total project area</p>
                        </div>
                        <div
                          class=" sm:w-1/3 w-1/2 space-y-1"
                          style={{ marginLeft: "-35px" }}
                        >
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            class="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            3,000 €
                          </h2>
                          <p class="leading-relaxed">
                            Project Cost Phase One (2019)
                          </p>
                        </div>
                        <div class="sm:w-1/3 w-1/2 space-y-1">
                          <h2
                            style={{
                              fontFamily: "Exo2-Regular",
                              width: "207px",
                            }}
                            class="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            1,500 € + 67 €
                            <span class="text-[15px] font-medium">/Month</span>
                          </h2>
                          <p class="leading-relaxed">
                            Project Cost Phase Two (2022)
                          </p>
                        </div>
                        {/* <div class="p-4 sm:w-1/3 w-1/2">
                  <h2 class="title-font font-medium sm:text-2xl text-3xl text-gray-900">
                    4
                  </h2>
                  <p class="leading-relaxed">Products</p>
                </div> */}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>
      {/* 4th */}
      <section class="text-gray-600 body-font overflow-hidden">
        <a style={{ all: "unset" }} href="/wago">
          <div style={{ padding: "42px 40px" }} class=" py-24  ">
            <div class="lg:w-full  flex flex-wrap shadow-[0px_4px_4px_0px_rgba(0,135,255,0.25)] rounded-[20px]">
              <img
                alt="ecommerce"
                class="lg:w-1/2  w-full lg:h-auto h-64 object-cover object-center rounded"
                src={Wago}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 shadow-[0px_4px_4px_0px_rgba(0,135,255,0.25)]">
                <h2
                  style={{ fontFamily: "Exo2-Regular", marginTop: "55px" }}
                  class="text-[#0087FF] text-[20px] mb-3 tracking-widest uppercase"
                >
                  Minden, Germany, June 2021
                </h2>
                <h1
                  style={{ fontFamily: "Exo2-Regular" }}
                  class="project_name_head text-[40px] text-[#2F2F2F] font-bold mb-1 "
                >
                  Wago Headquarters
                </h1>
                <div class="flex mb-4"></div>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="leading-relaxed text-[20px] font-[400]"
                >
                  Leaftech provided digital twin-based analytics and control
                  services to enhance the shading automation system to maximise
                  efficiency and comfort.
                </p>
                <div class="flex mt-9 items-center pb-5 border-gray-100 mb-5">
                  <div class="flex  items-center">
                    <div class="relative">
                      <ul class="space-y-8">
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={User} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            Customer group: Building automation
                          </p>{" "}
                        </li>
                        <li class="flex space-x-5">
                          <img class="h-fit" alt="Project" src={Default} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            Building type: Commercial, Wago's own office
                            facility
                          </p>{" "}
                        </li>
                        <li class="flex space-x-5">
                          <img class="h-fit"
                            alt="Project"
                            src={Sun}
                            // style={{ height: "30px" }}
                          />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            System information: Wago’s automation system with
                            individual shading control
                          </p>
                        </li>
                        <li class="flex space-x-5">
                          <img class="h-fit"
                            alt="Project"
                            src={Wrench}
                            // style={{ height: "30px" }}
                          />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            class="text-[16px] font -[400]"
                          >
                            Services: Digital twin set-up, data for shading
                            automation and sensor placement{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class=" text-left project_nums2">
                  <section class="text-gray-600 body-font">
                    <div style={{ padding: "42px 40px" }} class=" mx-auto">
                      <div class="flex flex-wrap  ">
                        <div class=" sm:w-1/3 w-1/2 space-y-1">
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            class="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            3,800 sqm
                          </h2>
                          <p class="leading-relaxed">Total project area</p>
                        </div>
                        <div class=" sm:w-1/3 w-1/2 space-y-1">
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            class="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            2,970 €
                          </h2>
                          <p class="leading-relaxed">
                            Total project cost <br />
                            (without wind assessment){" "}
                          </p>
                        </div>
                        <div class=" sm:w-1/3 w-1/2 space-y-1">
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            class="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            250 +
                          </h2>
                          <p class="leading-relaxed">Devices controlled</p>
                        </div>
                        {/* <div class="p-4 sm:w-1/3 w-1/2">
                  <h2 class="title-font font-medium sm:text-2xl text-3xl text-gray-900">
                    4
                  </h2>
                  <p class="leading-relaxed">Products</p>
                </div> */}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>
    </div>
  );
}
