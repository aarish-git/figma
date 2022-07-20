import React from "react";
import "./index.css";
import Slider from "../../../../assest/Icons/Sliders.png";
import ChartPie from "../../../../assest/Icons/ChartPie.png";
import BatteryCharging from "../../../../assest/Icons/BatteryCharging.png";
import Tree from "../../../../assest/Icons/Tree.png";
import GlobeHemisphereEast from "../../../../assest/Icons/GlobeHemisphereEast.png";
import Mac from "../../../../assest/Images/services/Analytics/analytics_laptop.gif"
export default function index() {
  return (
    <div className="row" style={{marginTop:'120px', marginBottom: '120px'}}>
    <div className="text-gray-600 body-font">
      <div className=" mx-auto flex  md:flex-row flex-col items-center 	">
        <div className="flex flex-col md:items-start md:text-left items-center"  style={{width:'780px', height:'455px'}}>
            <h1 style={{fontFamily:"Exo2-Bold"}} className="service_3d_head">
              Leaftech's high quality analytic services empower you to:
            </h1>
            <ul class="space-y-5" style={{marginTop:'40px', marginBottom: '64px'}}>
              <li class="flex space-x-5">
                <img class="h-fit project_icons" alt="service" src={Slider} />
                <p class="project_icon_text">
                  Make informed decisions to design & plan your building
                  project.
                </p>
              </li>
              <li class="flex space-x-5">
                <img class="h-fit project_icons" alt="service" src={ChartPie} />
                <p class="project_icon_text">
                  Select the appropriate modernization measures to improve the
                  building’s efficiency and comfort.
                </p>
              </li>
              <li class="flex space-x-5">
                <img class="h-fit project_icons" alt="service" src={BatteryCharging} />
                <p class="project_icon_text">
                  Conduct energy design risk assessment and test different
                  scenarios.
                </p>
              </li>
              <li class="flex space-x-5">
                <img class="h-fit project_icons" alt="service" src={Tree} />
                <p class="project_icon_text">
                  Design ecologically and economically sustainable energy
                  systems.
                </p>
              </li>
              <li class="flex space-x-5">
                <img class="h-fit project_icons" alt="service" src={GlobeHemisphereEast} />
                <p class="project_icon_text">
                  Meet local or national building codes and standards.
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
          <div style={{width:'661px', height:'451px'}}>
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={Mac}
            />
          </div>
        </div>
      </div>

      {/* tablet */}
      <div class="service3_t text-gray-600 body-font ">
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
      </div>
    </div>
  );
}
