import React from "react";

export default function index() {
  return (
    <div>
      <section  style={{
          background:
            "linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)",
        }} class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <span
              style={{ fontFamily: "Exo2-Regular" }}
              class="text-[#0087FF] uppercase font-bold my-3 font-[600] text-[24px]"
            >
              Projects
            </span>
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="text-[#2F2F2F] text-[54px] mb-4 font-bold "
            >
              Our success stories
            </h1>
            <p style={{fontFamily: "NunitoSans-Regular"}} class="mb-8 text-[20px] font-[400] w-[400] leading-relaxed">
              We have gained experience working with a wide range of industry
              partners. Take a glance at our project portfolio to learn more
              about the value we created for our clients and their buildings.
            </p>
            <div class="flex justify-center">
              <button
                style={{ fontFamily: "NunitoSans-Regular" }}
                class="inline-flex  py-2 px-6  rounded-[20px] text-lg text-[#FFFFFF] shadow-[0px_4px_4px_rgba(0,135,225,0.25)] bg-[#0087FF]"
              >
                Contact us
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-5">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
