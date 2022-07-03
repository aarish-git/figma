import React from "react";

export default function projectFoot() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto">
          <div class="flex flex-wrap w-full flex-col items-center text-center">
            <p style={{ fontFamily: "Exo2-Regular" }} class="lg:w-1/3 w-full leading-relaxed w-[664px] tracking-widest uppercase">
              Get in touch to learn more about our project portfolio and the
              solutions we’ve delivered.
            </p>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-[#0087FF]  py-2 px-8 rounded-[20px] shadow-[0_4px_4px_rgba(0,135,225,0.25)]  text-lg">
            Contact us
          </button>
        </div>
      </section>
    </div>
  );
}
