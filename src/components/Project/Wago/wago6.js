import React from "react";
import {Link } from "react-router-dom"
export default function wago6() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/2 w-1/2 text-left">
              {/* <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                2.7K
              </h2> */}
              <Link to="/granue"><p class="leading-relaxed">Trio Mannheim Project</p></Link>
            </div>
            <div class="p-4 sm:w-1/2 w-1/2 text-right">
              {/* <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1.8K
              </h2> */}
              <Link to="/phoenix"><p class="leading-relaxed">Pheonix Contact Project</p></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
