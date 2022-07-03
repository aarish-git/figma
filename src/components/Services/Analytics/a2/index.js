import React from "react";
import "./index.css";
import Accormob from "./Accordmobile";

export default function index() {
  return (
    <div>
      <section class="service2_d text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex-row w-full  flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0">
              Master Cleanse Reliac Heirloom
            </h1>
          </div>
          <div>
            <p class="mx-auto py-10 leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/4">
              <div class="md:p-2 p-1 w-full bg-neutral-200	">
                <ul class=" p-2 capitalize leading-10">
                  <li>the target building</li>
                  <li>site context</li>
                  <li>model compability</li>
                </ul>
              </div>
            </div>
            <div class="flex flex-wrap p-5 w-3/4">
              <div>
                <h3 class="text-2xl font-medium title-font capitalize">
                  the target building
                </h3>
              </div>
              <div class="md:p-2 p-1 w-full">
                <p>
                  Nisi enim laborum do amet officia ullamco labore magna ad. Est
                  culpa voluptate excepteur sint mollit commodo quis labore elit
                  reprehenderit aliquip aliqua duis pariatur. Ea labore aliquip
                  veniam eiusmod. Laborum anim sint laboris cupidatat nisi duis
                  aliquip mollit consectetur. Do tempor ad ex ut exercitation
                  culpa cillum consectetur ex minim esse nisi id. Occaecat ad do
                  eu consequat reprehenderit ex velit amet commodo incididunt
                  magna culpa.
                </p>
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tablet */}

      <section class="service2_t text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex-row w-full  flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0">
              Master Cleanse Reliac Heirloom
            </h1>
          </div>
          <div>
            <p class="mx-auto py-10 leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div class="m-auto flex">
            <button class=" ml-auto text-white bg-gray-400 border-1 border-black py-2 px-6 focus:outline-none hover:bg-slate-600 ">
              The Target building
            </button>
            <button class=" ml-auto text-white bg-gray-400 border-1 border-black py-2 px-6 focus:outline-none hover:bg-slate-600 ">
              Site Context
            </button>
            <button class=" ml-auto text-white bg-gray-400 border-1 border-black py-2 px-6 focus:outline-none hover:bg-slate-600">
              Access your 3D Models
            </button>
          </div>
          <div class="flex flex-wrap p-5">
            <div>
              <h3 class="text-2xl font-medium title-font capitalize">
                the target building
              </h3>
            </div>
            <div class="md:p-2 p-1 w-full">
              <p>
                Nisi enim laborum do amet officia ullamco labore magna ad. Est
                culpa voluptate excepteur sint mollit commodo quis labore elit
                reprehenderit aliquip aliqua duis pariatur. Ea labore aliquip
                veniam eiusmod. Laborum anim sint laboris cupidatat nisi duis
                aliquip mollit consectetur. Do tempor ad ex ut exercitation
                culpa cillum consectetur ex minim esse nisi id. Occaecat ad do
                eu consequat reprehenderit ex velit amet commodo incididunt
                magna culpa.
              </p>
            </div>
            <div class="md:p-2 p-1 ">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://dummyimage.com/400x100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* mobile */}

      <section class="service2_m text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex-row w-full  flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0">
              Master Cleanse Reliac Heirloom
            </h1>
          </div>
          <div>
            <p class="mx-auto py-10 leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <Accormob />
          </div>
        </div>
      </section>
    </div>
  );
}
