import React from "react";
import "./index.css";

export default function services1() {
  return (
    <div>
      <section style={{
          background:
            "linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)",
        }} class="service1_d body-font">
        <div style={{padding:'107px 47px'}} class="py-24 mx-auto">
          <div class="flex flex-col text-left w-full mb-2 px-2 mt-5">
            <p
              style={{ fontFamily: "Exo2-Regular" }}
              class="text-[#0087FF] uppercase text-[24px] font-[600]"
            >
              Modeling
            </p>
            <h2
              style={{ fontFamily: "Exo2-Regular" }}
              class=" text-[52px] font-[900]  mb-4 "
            >
              Three-dimensional models <br />
              to better understand your building
            </h2>
            <p class="leading-relaxed text-left mb-5">
              Our modeling services are the first steps towards digitizing your
              real estate. Simply provide <br /> your building's location and we will
              create the 3D model of your building. <br />
              Here's a look at our modeling services.
            </p>
            <div>
              <button
                style={{ fontFamily: "NunitoSans-Regular" }}
                class="inline-flex py-2 px-6 rounded-[20px] text-lg text-[#FFFFFF] shadow-[0px_4px_4px_rgba(0,135,225,0.25)] bg-[#0087FF]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* tablet */}
      <section class="service1_t bg-gray-200	 text-gray-600 body-font">
        <div style={{padding:'107px 47px'}} class="x-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-2">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 capitalize">
              leaftech's serives: your
              <br />
              one-stop place for custom
              <br />
              and scalable digital solutions
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
            <div>
              <button
                style={{
                  background: "#37474f",
                  padding: "5px",
                  marginTop: "2rem",
                  color: "white",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
