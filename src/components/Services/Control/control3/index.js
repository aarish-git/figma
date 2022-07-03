import React from "react";
import "./index.css";
import Slider from "../../../../assest/Icons/HardDrive.png";
import ChartPie from "../../../../assest/Icons/ChartLine.png";
import BatteryCharging from "../../../../assest/Icons/CheckSquare.png";
import Tree from "../../../../assest/Icons/Default.png";
import GlobeHemisphereEast from "../../../../assest/Icons/CircleHalf.png";
import ClockAfternoon from "../../../../assest/Icons/ClockAfternoon.png";

import Mac from "../../../../assest/Images/services/macbook_blank.jpg"
export default function index() {
  return (
    <div>
       <section class="service3_d text-gray-600 body-font ">
        <div class="container mx-auto flex  md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-left">
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="w-[780px] mb-4 text-[36px] text-[#2F2F2F] font-[900] capitalize"
            >
              Unlock multiple benefits from our digital twin-based control services to:
            </h1>
            <ul class="space-y-5 mb-5">
              <li class="flex space-x-5">
                <img src={Slider} />
                <p class="">
                Avoid the expensive and strenuous implementation of hardware sensors
                </p>
              </li>
              <li class="flex space-x-5">
                <img src={ChartPie} />
                <p class="">
                Obtain high-quality and accurate control data for each shading device
                </p>
              </li>
              <li class="flex space-x-5">
                <img src={BatteryCharging} />
                <p class="">
                Easy and cost-effective implementation
                </p>
              </li>
              <li class="flex space-x-5">
                <img src={Tree} />
                <p class="">
                Save up to 28% energy in operation by upgrading to model-based proactive control
                </p>
              </li>
              <li class="flex space-x-5">
                <img src={GlobeHemisphereEast} />
                <p class="">
                Empower healthy living by balancing thermal and visual comfort
                </p>
              </li>
              <li class="flex space-x-5">
                <img src={ClockAfternoon} />
                <p class="">
                Predictive and safe maintenance
                </p>
              </li>
            </ul>
            <div class="flex w-full md:justify-start justify-center items-end">
              <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <button class="shadow-[0_4px_4px_rgba(0,135,255,0.25)] border-solid border-[#2F2F2F] border-1 w-[127px] height-[54px] py-2 rounded-[20px]">
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={Mac}
            />
          </div>
        </div>
      </section>

      {/* tablet */}
      <section class="service3_t text-gray-600 body-font ">
        <div class="container px-3 py-5 mx-auto items-center bg-gray-100">
          <div class=" items-center text-left">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 capitalize">
              what can you do with this model?
            </h1>
            <p class="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid.
            </p>
            <p class="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid.
            </p>
            <p class="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid.
            </p>
            <p class="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid.
            </p>

            <div class="flex w-full md:justify-start justify-center text-center items-end">
              <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <button class=" bg-gray-700 rounded border border-slate-900 text-white focus:ring-2 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out capitalize">
                  contact page
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
