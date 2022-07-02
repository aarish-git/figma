import React from "react";

export default function GA4() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="title-font sm:text-4xl text-[50px] mb-4 font-bold text-gray-700"
            >
              Results & benefits
            </h1>
            <p class="mb-8 leading-relaxed w-2/3">
              We delivered the digital twin model of each housing unit. The
              result of each building rooftop was available in the form of data
              files and visuals. A detailed report on PV feasibility study,
              daily and annual PV yield, and optimal layout and configuration
              were presented.
            </p>
            <div class="flex flex-col space-y-5">
              <p
                style={{ fontFamily: "Exo2-Regular" }}
                class="uppercase tracking-wide "
              >
                Client's benefits:
              </p>
              <ul class="space-y-3">
                <li>Fast and accurate results </li>
                <li>Data-based decision making </li>
                <li>Made recommendations to reduce energy costs by up to 8%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
