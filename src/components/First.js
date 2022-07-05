import React from "react";
import img1 from "../assest/Images/home/one.jpg";
import img2 from "../assest/Images/home/two.jpg";
import img3 from "../assest/Images/home/three.jpg";
import img4 from "../assest/Images/home/four.jpg";
import img5 from "../assest/Images/home/five.jpg";
// import img1 from "../assest/Images/home/one.jpg"
import Tree from "../assest/Icons/Tree.png";
import ChartLine from "../assest/Icons/ChartLine.png";
import Medal from "../assest/Icons/Medal.png";
import ChartBar from "../assest/Icons/ChartBar.png";
import Coins from "../assest/Icons/Coins.png";

import BatteryCharging from "../assest/Icons/BatteryCharging.png";
import Default from "../assest/Icons/Default.png";
import CircleHalf from "../assest/Icons/CircleHalf.png";
import ClockAfternoon from "../assest/Icons/ClockAfternoon.png";
import Armchair from "../assest/Icons/Armchair.png";

import Thermometer from "../assest/Icons/Thermometer.png";
import Recycle from "../assest/Icons/Recycle.png";

import CloudSun from "../assest/Icons/CloudSun.png";
import PresentationChart from "../assest/Icons/PresentationChart.png";
import CheckSquare from "../assest/Icons/CheckSquare.png";
import Home from "../assest/Icons/Home.png";
import {Link } from "react-router-dom";

export default function First() {
  return (
    <div>
      <section class="body-font">
        <h1
          style={{ fontFamily: "Exo2-Regular" }}
          class="title-font sm:text-5xl font-bold text-3xl mb-5 font-medium "
        >
          What's in it for you?
        </h1>
        <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={img1}
            />
          </div>
          <div style={{paddingLeft: '10px', marginLeft: '25px'}} class="lg:flex-grow md:w-1/2 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
            <span
              style={{ fontFamily: "Exo2-Regular" }}
              class="uppercase text-[20px] text-[#0087FF] mb-2 tracking-widest"
            >
              For Building Owners
            </span>
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="title-font sm:text-4xl text-3xl mb-7 font-bold"
            >
              Increase the value of your building <br />
              assets
              {/* <br class="hidden lg:inline-block" />
              readymade gluten */}
            </h1>
            <p
              style={{ fontFamily: "NunitoSans-Regular" }}
              class="mb-8 text-[20px] leading-relaxed"
            >
              Achieve your financial, ecological, and operational objectives
              with us. Together, let's create a digital twin-building model to
              identify investment opportunities, create a decarbonization
              roadmap to improve your assets' performance, and with it all,
              boost your ESG score..
            </p>
            <div class="flex justify-center">
              <ul class="space-y-5">
                <li class="flex space-x-3">
                  <img src={Home  } />
                  <p>Digitise your real estate</p>
                </li>
                <li class="flex space-x-3">
                  <img src={ChartLine} />
                  <p>Benchmarking for investment decisions </p>
                </li>
                <li class="flex space-x-3">
                  <img src={Tree} />
                  <p>Decarbonize your building</p>
                </li>
                <li class="flex space-x-3">
                  <img src={Medal} />
                  <p>Improve your ESG rating</p>
                </li>
              </ul>
            </div>
            <div class="flex mt-5">
              <button class="inline-flex self-end shadow-[0px_4px_4px_rgba(0,135,225,0.25)] text-[#2F2F2F] border-1 border-solid border-[#2F2F2F] py-2 px-8 rounded-[20px] text-lg">
                Take a look at our success stories
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
            <span
              style={{ fontFamily: "Exo2-Regular" }}
              class=" text-[20px] text-[#0087FF]  mb-2 tracking-widest"
            >
              FOR PROPERTY & ASSET MANAGERS
            </span>
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 md:text-left"
            >
              Informed decision-making for
              <br />
              smooth building operations
              {/* <br />
              readymade gluten */}
            </h1>
            <p
              style={{ fontFamily: "NunitoSans-Regular" }}
              class="mb-8 leading-relaxed"
            >
              Reduce your building's operating costs and risks, and meet the
              contractual obligations with your tenants, with Leaftech's
              solution. Use our accurate data to make the appropriate decisions
              for smooth and hassle-free everyday operations.
            </p>
            <div class="flex justify-center">
              <ul class="space-y-5">
                <li class="flex space-x-3">
                  <img src={ChartBar} />
                  <p>Make decisions using analytic data</p>
                </li>
                <li class="flex space-x-3">
                  <img src={Coins} />
                  <p>Reduce building operating expenses</p>
                </li>
                <li class="flex space-x-3">
                  <img src={BatteryCharging} />
                  <p>Mitigate energy design risks</p>
                </li>
                <li class="flex space-x-3">
                  <img src={Medal} />
                  <p>Data for energy performance certificates </p>
                </li>
              </ul>
            </div>
            <div class="flex mt-5">
              <a style={{all:"unset"}} href="/mannhiem">
              <button class="inline-flex self-end shadow-[0px_4px_4px_rgba(0,135,225,0.25)] text-[#2F2F2F] border-1 border-solid border-[#2F2F2F] py-2 px-8 rounded-[20px] text-lg">
                Take a look at our Trio Mannheim project
              </button>
              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={img2}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={img3}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
            <span
              style={{ fontFamily: "Exo2-Regular" }}
              class="uppercase text-[20px] text-[#0087FF] mb-2 tracking-widest"
            >
              For Building automation providers
            </span>
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900  md:text-left"
            >
              Provide data-assisted building <br />
              automation systems
            </h1>
            <p
              style={{ fontFamily: "NunitoSans-Regular" }}
              class="mb-8 leading-relaxed"
            >
              With Leaftech's Digital Twin, you minimise the need for expensive
              and difficult-to-maintain frahling sensors. Stay ahead of the
              weather with our data services and use them to improve the
              accuracy and efficiency of your building automation and smart home
              systems
            </p>
            <div class="flex justify-center">
              <ul class="space-y-5">
                <li class="flex space-x-3">
                  <img src={Default} />
                  <p>Digital Twin based system design and layout</p>
                </li>
                <li class="flex space-x-3">
                  <img src={CircleHalf} />
                  <p>Best-in-class data services for shading automation </p>
                </li>
                <li class="flex space-x-3">
                  <img src={ClockAfternoon} />
                  <p>Data-driven predictive maintenance</p>
                </li>
                <li class="flex space-x-3">
                  <img src={Armchair} />
                  <p>Anticipate upcoming operating conditions of each room </p>
                </li>
              </ul>
            </div>
            <div class="flex mt-5">
            <a style={{all:"unset"}} href="/wago">
              <button class="inline-flex self-end shadow-[0px_4px_4px_rgba(0,135,225,0.25)] text-[#2F2F2F] border-1 border-solid border-[#2F2F2F] py-2 px-8 rounded-[20px] text-lg">
                Know more about our data control project
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
            <span
              style={{ fontFamily: "Exo2-Regular" }}
              class="uppercase text-[20px] text-[#0087FF]  mb-2 tracking-widest"
            >
              For Utility providers
            </span>
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900  md:text-left "
            >
              Provide tailor-made building <br /> energy systems
            </h1>
            <p
              style={{ fontFamily: "NunitoSans-Regular" }}
              class="mb-8 leading-relaxed"
            >
              With the digital twin, you get insights and solutions for planning
              and optimising energy systems that enable your end customers to
              achieve a high level of sustainability. Leverage our solution to
              offer value-added services to your customers through detailed
              analyses. Strengthen the relationship with your end customers and
              create the basis for a long-term and trusting relationship
            </p>
            <div class="flex justify-center">
              <ul class="space-y-5">
                <li class="flex space-x-3">
                  <img src={ChartLine} />
                  <p>Offer analytic insights to your clients</p>
                </li>
                <li class="flex space-x-3">
                  <img src={Thermometer} />
                  <p>Assess local cooling and heating load </p>
                </li>
                <li class="flex space-x-3">
                  <img src={Recycle} />
                  <p>Assess onsite renewable energy generation potential</p>
                </li>
                <li class="flex space-x-3">
                  <img src={BatteryCharging} />
                  <p>Design integrated low-impact energy systems </p>
                </li>
                <li class="flex space-x-3">
                  <img src={CloudSun} />
                  <p>Forecast data to increase building’s energy efficiency</p>
                </li>
              </ul>
            </div>
            <div class="flex mt-5">
            <a style={{all:"unset"}} href="/granue">
              <button class="inline-flex self-end shadow-[0px_4px_4px_rgba(0,135,225,0.25)] text-[#2F2F2F] border-1 border-solid border-[#2F2F2F] py-2 px-8 rounded-[20px] text-lg">
                Know more about our residential project
              </button>
              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={img4}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={img5}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
            <span
              style={{ fontFamily: "Exo2-Regular" }}
              class="uppercase text-[20px] text-[#0087FF]  mb-2 tracking-widest" 
            >
              For Architects & Designers
            </span>
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900  md:text-left "
            >
              Comprehensive & detailed energy assessment for your building
              design
            </h1>
            <p
              style={{ fontFamily: "NunitoSans-Regular" }}
              class="mb-8 leading-relaxed"
            >
              Make the most of our digital twin for your design’s full-energy assessments. With Leaftech, no more worries about losing data or switching between multiple tools, as we take care of all your assessments holistically.
            </p>
            <div class="flex justify-center">
              <ul class="space-y-5">
                <li class="flex space-x-3">
                  <img src={Thermometer} />
                  <p>Building site analysis, climate analysis </p>
                </li>
                <li class="flex space-x-3">
                  <img src={CheckSquare} />
                  <p>Verify your design assumptions </p>
                </li>
                <li class="flex space-x-3">
                  <img src={PresentationChart} />
                  <p>Data for Energy design </p>
                </li>
              </ul>
            </div>
            <div class="flex mt-5">
              <button class="inline-flex self-end shadow-[0px_4px_4px_rgba(0,135,225,0.25)] text-[#2F2F2F] border-1 border-solid border-[#2F2F2F] py-2 px-8 rounded-[20px] text-lg">
                Our success stories
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
