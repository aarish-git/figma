import React from "react";
import C1 from "../assest/Images/home/Clients/smartgreen-logo1.png";
import C2 from "../assest/Images/home/Clients/Dena-logo_1.png";
import C3 from "../assest/Images/home/Clients/climate-kic1.png";
import C4 from "../assest/Images/home/Clients/telekom1.png";
import C5 from "../assest/Images/home/Clients/Sommer_logo1.png";
import C6 from "../assest/Images/home/Clients/IBB-Logo1.png";
import C7 from "../assest/Images/home/Clients/DENEFF_Logo1.png";
import C8 from "../assest/Images/home/Clients/mujinzolabs.png";


export default function clients() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto ">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 md:text-[24px] font-bold text-center text-[#2b2b3a] uppercase">
              We are supported by
            </h1>
          </div>
          <div class=" grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-1">
            <div class="abc flex  grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
              <img class=" h-fit	" src={C1} />
            </div>
            <div class="abc flex grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
              <img class=" h-fit" src={C2} />
            </div>
            <div class="abc flex grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
              <img class=" h-fit" src={C8} />
            </div>
            <div class="abc flex grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
              <img class=" h-fit" src={C3} />
            </div>
          </div>
          <br />
          <br />
          <div class=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-1">
            <div class="abc flex grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
              <img class=" h-fit" src={C4} />
            </div>
            <div class="abc flex grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
              <img class=" h-fit" src={C5} />
            </div>
            <div class="abc flex grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
              <img class=" h-fit" src={C6} />
            </div>
            <div class="abc flex grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
              <img class=" h-fit" src={C7} />
            </div>
            {/* <div class="flex justify-center">
              <img class=" h-fit" src={C8} />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
