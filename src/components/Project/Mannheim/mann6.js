import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../../assest/Icons/ArrowCircleLeft.png";
import rightArrow from "../../../assest/Icons/ArrowCircleRight.png";

export default function mann6() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 w-1/2 text-left">
              <a
                href="/wago"
                class="flex text-left space-x-4 hover:text-zinc-900"
              >
                {" "}
                <img alt="leftArrow" src={leftArrow} />
                <p style={{fontFamily:"NunitoSans-Regular"}} class="leading-relaxed underline underline-offset-4">Wago Headquarters Project</p>
              </a>
            </div>
            <div class="p-4 w-1/2 text-right">
              <a
                href="/granue"
                class="flex float-right space-x-4 hover:text-zinc-900"
              >
                {" "}
                <p style={{fontFamily:"NunitoSans-Regular"}} class="leading-relaxed underline underline-offset-4">Grüne Aue Project</p>
                <img alt="rightArrow" src={rightArrow} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
