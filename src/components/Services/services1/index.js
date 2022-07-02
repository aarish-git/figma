import React from "react";
import "./index.css";

export default function services1() {
  return (
    <div>
      <section class="service1_d text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-2">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Scalable,Fast, And Accurate Data 
              <br />
              For Your Building.
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

      {/* tablet */}
      <section class="service1_t bg-gray-200	 text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
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
