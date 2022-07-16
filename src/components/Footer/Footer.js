import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer class="text-gray-600 bg-[#FAFBFC] body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap md:text-left text-left -mb-10 -mx-4">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 style={{fontFamily:"Exo2-Regular"}} class="title-font font-bold text-[#0087FF] tracking-widest text-[30px] mb-3 uppercase">
                LeafTech
              </h2>
                
                  <p href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_address">Leaftech GmbH</p>
                  <p href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_address">Am Krögel 2</p>
                  <p href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_address">10179 Berlin</p>
                  <p href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_address">
                    contact@leaftech.eu
                  </p>
                  <p href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_address">
                    +49 170 9529249
                  </p>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 leading-loose">
              <h2 style={{ fontFamily: "NunitoSans-Regular" }} class="content_head">
                Solutions for
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_subhead">
                    Building owners
                  </a>
                </li>
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_subhead">
                    Asset managers{" "}
                  </a>
                </li>
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_subhead">
                    Building automation{" "}
                  </a>
                </li>
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_subhead">
                    Energy providers
                  </a>
                </li>
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_subhead">
                    Architects & Designers{" "}
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 leading-loose">
              <h2 style={{ fontFamily: "NunitoSans-Regular" }} class="content_head">
                Services
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_subhead">Modelling</a>
                </li>
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_subhead">Analytics</a>
                </li>
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_subhead">Control</a>
                </li>
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_subhead">Digital twin platform</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 leading-loose">
              <h2 style={{ fontFamily: "NunitoSans-Regular" }} class="content_head">
                Home
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_head">
                    Project showcases{" "}
                  </a>
                </li>
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_head">Contact</a>
                </li>
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_head">
                    Customer Platform
                  </a>
                </li>
                <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} class="content_head">Follow Us</a>
                </li>
                <li>
                  <div class="border-gray-200">
                    <div class="container px-5 py-2 flex flex-wrap mx-auto items-center">
                      <span class="inline-flex lg:-ml-14 lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                        <a href="" class="ml-3 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a href="" class="ml-3 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="0"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="none"
                              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
              </nav>
            </div>
            {/* <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="" class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a href="" class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a href="" class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a href="" class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="" class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a href="" class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a href="" class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a href="" class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div> */}
          </div>
        </div>
        {/* <div class="border-t border-gray-200">
          <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a href="" class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>

              <a href="" class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div> */}
        <div class="bg-gray-900 ">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col">
            <p class="text-gray-500 text-sm text-center ">
              © 2020 Leaftech —
              <a
                // href="https://twitter.com/knyttneve"
                class="text-gray-600 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                All rights reserved
              </a>
            </p>
            {/* <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              Enamel pin tousled raclette tacos irony
            </span> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
