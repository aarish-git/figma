import React from "react";
import "./index.css";
import Accor from "./Accordion";

export default function index() {
  return (
    <div>
      <section className="service4-d text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex-row w-full  flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 capitalize">
              in-depth analysis to optimize your building
            </h1>
          </div>
          <div>
            <p className="mx-auto py-10 leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/4">
              <div className="md:p-2 p-1 w-full bg-neutral-200	">
                <ul className=" p-2 capitalize leading-10">
                  <li>the target building</li>
                  <li>site context</li>
                  <li>model compability</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap p-5 w-3/4">
              <div>
                <h3 className="text-2xl font-medium title-font capitalize">
                  Wind analysis
                </h3>
              </div>
              <div className="md:p-2 p-1 w-full">
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
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tablet view */}

      <section className="service4_t">
        <div className="container px-3 py-5 mx-auto flex flex-wrap">
          <div className="flex-row w-full  flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 capitalize">
              in-depth analysis to optimize your building
            </h1>
          </div>
          <div>
            <p className="mx-auto py-10 leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div>
            <Accor />
          </div>
        </div>
      </section>
    </div>
  );
}
