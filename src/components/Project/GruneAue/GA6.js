import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../../assest/Icons/ArrowCircleLeft.png";
import rightArrow from "../../../assest/Icons/ArrowCircleRight.png";

export default function GA6() {
  return (
    <div>
      {/* <section class="text-gray-600 body-font">
        <div class=" px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/2 w-1/2 text-left">
              <Link href="/mannhiem">
                {" "}
                <p class="leading-relaxed">Trio Mannheim Project</p>
              </Link>
            </div>
            <div class="p-4 sm:w-1/2 w-1/2 text-right">
              <Link href="/phoenix">
                <p class="leading-relaxed">Phoenix Contract Project</p>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section class="text-gray-600 body-font">
        <div class=" px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 w-1/2 text-left">
              <a
                href="/mannhiem"
                class="flex text-left space-x-4 hover:text-zinc-900"
              >
                {" "}
                <img alt="leftArrow" src={leftArrow} />
                <p style={{fontFamily:"NunitoSans-Regular"}} class="leading-relaxed underline underline-offset-4">Trio Mannheim Project</p>
              </a>
            </div>
            <div class="p-4 w-1/2 text-right">
              <a
                href="/phoenix"
                class="flex float-right space-x-4 hover:text-zinc-900"
              >
                {" "}
                <p style={{fontFamily:"NunitoSans-Regular"}} class="leading-relaxed underline underline-offset-4">Phoenix Contract Project</p>
                <img alt="rightArrow" src={rightArrow} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
