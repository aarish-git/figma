import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../../assest/Icons/ArrowCircleLeft.png";
import rightArrow from "../../../assest/Icons/ArrowCircleRight.png";
export default function wago6() {
  return (
    <div>
      {/* <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/2 w-1/2 text-left">
              
              <Link to="/granue"><p class="leading-relaxed">Trio Mannheim Project</p></Link>
            </div>
            <div class="p-4 sm:w-1/2 w-1/2 text-right">
              
              <Link to="/phoenix"><p class="leading-relaxed">Pheonix Contact Project</p></Link>
            </div>
          </div>
        </div>
      </section> */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 w-1/2 text-left">
              <Link
                to="/mannhiem"
                class="flex text-left space-x-4 hover:text-zinc-900"
              >
                {" "}
                <img src={leftArrow} />
                <p class="leading-relaxed underline underline-offset-4">
                  Trio Mannheim Project
                </p>
              </Link>
            </div>
            <div class="p-4 w-1/2 text-right">
              <Link
                to="/phoenix"
                class="flex float-right space-x-4 hover:text-zinc-900"
              >
                {" "}
                <p class="leading-relaxed underline underline-offset-4">
                  Pheonix Contact Project
                </p>
                <img src={rightArrow} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
