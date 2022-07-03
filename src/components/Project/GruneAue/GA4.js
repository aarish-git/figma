import React from "react";
import Grananue2 from "../../../assest/Images/project/GruneAue2.jpg";
import Line from "../../../assest/Icons/ChartLine.png";
import Slider  from "../../../assest/Icons/Sliders.png"
import Coin from "../../../assest/Icons/Coins.png"

 
export default function GA4() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="w-[657.72px] h-[616px] mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={Grananue2}
            />
          </div>
          <div class="lg:flex-grow w-[664px] lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="title-font sm:text-4xl text-[50px] mb-4 font-bold text-gray-900"
            >
              Results & benefits
            </h1>
            <p class="mb-8 leading-relaxed w-[664px]">
              We delivered the digital twin model of each housing unit. The
              result of each building rooftop was available in the form of data
              files and visuals. A detailed report on PV feasibility study,
              daily and annual PV yield, and optimal layout and configuration
              were presented.
            </p>
            <div class="flex flex-col space-y-5">
              <p
                style={{ fontFamily: "Exo2-Regular" }}
                class="uppercase tracking-widest "
              >
                Client's benefits:
              </p>
              <ul class="space-y-3">
                <li class="flex space-x-5"><img src={Line} /><p style={{fontfamily:"NunitoSans-Regular"}}>Fast and accurate results</p> </li>
                <li class="flex space-x-5"><img src={Slider} /><p style={{fontfamily:"NunitoSans-Regular"}}>Data-based decision making</p> </li>
                <li class="flex space-x-5"><img src={Coin} /><p style={{fontfamily:"NunitoSans-Regular"}}>Made recommendations to reduce energy costs by up to 8%</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
