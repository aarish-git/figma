import React from "react";
import image from "../assest/Images/home/Isometric2.png"
import { Link } from "react-router-dom";

export default function Count() {
  return (
    <div>
      <section class=" body-font">
        <div class="container flex  py-24 md:flex-row flex-col items-center ">
          <div class="row py-10 mx-auto  w-full">
            <div className="home_first_row"> 
            <div className="home-first-content">
              <div class="text-left w-full mb-20">
                <h1
                  style={{ fontFamily: "Exo2-Regular" }}
                  class=" text-[#2F2F2F] lg:text-[46px] md:text-[46px] sm:text-[46px] font-[700] leading-[50px] mb-4"
                >
                  Make data-driven decisions.
                  <br />
                  Optimize building performance.
                </h1>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  class="text-[#2F2F2F] w-[664px] text-[20px] font-[400] leading-[32px]"
                >
                  With Leaftech's building Digital Twin, you can access highly
                  accurate data to understand your building's performance, make
                  informed decisions on upgrades, and work on the required
                  building optimization measures.
                </p>
              </div>
              <section class="body-font">
                <div class="container text-left mx-auto">
                  <div class="flex flex-col text-left w-full ">
                    <h1
                      style={{ fontFamily: "Exo2-Regular" }}
                      class=" font-semibold tracking-wide uppercase text-[24px]"
                    >
                      our growing impact!
                    </h1>
                  </div>
                  <div class="flex flex-wrap  text-left ">
                    <div class="py-4 md:w-1/3 sm:w-1/2 w-full">
                      <h2 style={{fontFamily:"Exo2-Regular"}} class="font-[700] text-[30px] text-gray-900">
                        15
                      </h2>
                      <p class="leading-relaxed">Digital Twin’s set-ups</p>
                    </div>
                    <div class="py-4 md:w-1/3 sm:w-1/2 w-full">
                      <h2 style={{fontFamily:"Exo2-Regular"}} class="font-[700] text-[30px] text-gray-900">
                        500,000 +
                      </h2>
                      <p class="leading-relaxed">Sqm served</p>
                    </div>
                    <div class="py-4 md:w-1/3 sm:w-1/2 w-full">
                      <h2 style={{fontFamily:"Exo2-Regular"}} class="font-[700] text-[30px] text-gray-900">
                        1,500 +
                      </h2>
                      <p class="leading-relaxed">Devices in control </p>
                    </div>
                  </div>
                  <div class="relative top-10">
                    <Link style={{all:"unset"}} to="/contact">
                    <button
                      style={{
                        // background: "",
                        // padding: "10px",
                        // // marginTop: "2rem",
                        // color: "white",
                        // borderRadius: "20px",
                        // width: "160px",
                        // boxShadow: "0px 4px 4px rgba(0, 135, 255, 0.25",
                        fontFamily: "NunitoSans-Regular",
                        fontWeight: "400",
                        fontSize: "20px",
                        
                      }}
                      class="bg-[#0087FF] p-[10px] text-[white] rounded-[20px] w-[160px] shadow-[0_4px_4px_rgba(0,135,255,0.25)]"
                    >
                      Contact Us
                    </button>
                    </Link>
                  </div>
                </div>
              </section>
              </div>
              <div class="">
              <img
                class="object-cover object-center rounded "
                alt="hero"
                src={image}
              />
            </div>
              </div>
         
          </div>
          
        </div>
      </section>
    </div>
  );
}
