import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../../assest/Icons/ArrowCircleLeft.png"
import rightArrow from "../../../assest/Icons/ArrowCircleRight.png"


export default function mann6() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 w-1/2 text-left">
              {/* <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                2.7K
              </h2> */}
              <Link to="/wago" class="flex text-left space-x-4 hover:text-zinc-900">
                {" "}<img src={leftArrow} />
                <p class="leading-relaxed">Wago Headquarters Project</p>
              </Link>
            </div>
            <div class="p-4 w-1/2 text-right">
              {/* <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1.8K
              </h2> */}
              <Link to="/granue" class="flex float-right space-x-4 hover:text-zinc-900">
                {" "}
                <p class="leading-relaxed">Grüne Aue Project</p>
                <img src={rightArrow} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
