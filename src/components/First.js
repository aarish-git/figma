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
    <div className='row'>
      <div className='row' style={{marginTop: '120px', zIndex: '0'}}>
        <h1
          style={{ fontFamily: "Exo2-Regular", fontSize: '58px', lineHeight: '70px', marginBottom:'40px'}}
          className="title-font sm:text-5xl font-bold text-3xl  font-medium "
        >
          What's in it for you?
        </h1>
        </div>
  
        <div className='row'>
        <div className='col-lg-6'>
            <img
              className="for_bld_owners_img1"
              alt="hero"
              src={img1}
            />
        </div>
        <div className='col-lg-6'>
          <div style={{textAlign:'left'}} className="for_bld_owners_content_box">
            <span
              style={{ fontFamily: "Exo2-Regular" }}
              className="for_bld_owners_content_caption uppercase text-[20px] text-[#0087FF] mb-2 tracking-widest"
            >
              For Building Owners
            </span>
            <h1
              style={{ fontFamily: "Exo2-Bold"}}
              className="for_bld_owners_content_head title-font font-bold"
            >
              Increase the value of your building <br />
              assets
              {/* <br className="hidden lg:inline-block" />
              readymade gluten */}
            </h1>
            <p style={{ fontFamily: "NunitoSans-Regular" }}
              className="for_bld_owners_content mb-8 text-[20px] leading-relaxed"
            >
              Achieve your financial, ecological, and operational objectives
              with us. Together, let's create a digital twin-building model to
              identify investment opportunities, create a decarbonization
              roadmap to improve your assets' performance, and with it all,
              boost your ESG score..
            </p>

            <div className="flex">
              <ul className="space-y-5" >
                <li className="flex space-x-3">
                  <img className="h-fit	"  alt="home" src={Home  } />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Digitise your real estate</p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit	"  alt="ChartLine" src={ChartLine} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Benchmarking for investment decisions </p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="Tree" src={Tree} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Decarbonize your building</p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit	"  alt="Girl in a Medal" src={Medal} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Improve your ESG rating</p>
                </li>
              </ul>
            </div>
            <div className="flex mt-5" style={{justifyContent:'center'}} >
              <button className="inline-flex self-end shadow-[0px_4px_4px_rgba(0,135,225,0.25)] text-[#2F2F2F] border-1 border-solid border-[#2F2F2F] py-2 px-8 rounded-[20px] text-lg">
                Take a look at ss stories
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="row"  style={{marginTop: '120px', textAlign:'left'}}>
          <div className='col-lg-6'>
          <div style={{textAlign:'left'}} className="for_bld_owners_content_box2">
            <span
              style={{ fontFamily: "Exo2-Regular" }}
              className="for_bld_owners_content_caption uppercase text-[20px] text-[#0087FF] mb-2 tracking-widest"
            >
              FOR PROPERTY & ASSET MANAGERS
            </span>
            <h1
              style={{ fontFamily: "Exo2-Bold"}}
              className="for_bld_owners_content_head title-font font-bold"
            >
              Informed decision-making for
              <br />
              smooth building operations
              {/* <br />
              readymade gluten */}
            </h1>
            <p
              style={{ fontFamily: "NunitoSans-Regular" }}
              className="for_bld_owners_content mb-8 text-[20px] leading-relaxed"
            >
              Reduce your building's operating costs and risks, and meet the
              contractual obligations with your tenants, with Leaftech's
              solution. Use our accurate data to make the appropriate decisions
              for smooth and hassle-free everyday operations.
            </p>
            <div className="flex">
              <ul className="space-y-5" >
                <li className="flex space-x-3">
                  <img className="h-fit" alt="ChartBar" src={ChartBar} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Make decisions using analytic data</p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="Coins" src={Coins} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Reduce building operating expenses</p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="BatteryCharging" src={BatteryCharging} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Mitigate energy design risks</p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="Medal" src={Medal} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Data for energy performance certificates </p>
                </li>
              </ul>
            </div>
            <div className="flex mt-5" style={{justifyContent:'center'}}  >
              <a style={{all:"unset"}} href="/mannhiem">
              <button className="inline-flex self-end shadow-[0px_4px_4px_rgba(0,135,225,0.25)] text-[#2F2F2F] border-1 border-solid border-[#2F2F2F] py-2 px-8 rounded-[20px] text-lg">
                Take a look at our Trio Mannheim project
              </button>
              </a>
            </div>
          </div>
      </div>

          <div className='col-lg-6'>
            <img
              className="for_bld_owners_img2"
              alt="hero"
              src={img2}
            />
          </div>
      </div>


      <div className="row"  style={{marginTop: '120px', textAlign:'left'}}>
       
          <div className="col-lg-6">
            <img
              className="for_bld_owners_img3"
              alt="hero"
              src={img3}
            />
          </div>
          <div className="col-lg-6">
          <div style={{textAlign:'left'}}  className="for_bld_owners_content_box4">
            <span
              style={{ fontFamily: "Exo2-Regular" }}
              className="uppercase text-[20px] text-[#0087FF] mb-2 tracking-widest"
            >
              For Building automation providers
            </span>
            <h1
              style={{ fontFamily: "Exo2-Bold"}}
              className="for_bld_owners_content_head title-font font-bold"
            >
              Provide data-assisted building <br />
              automation systems
            </h1>
            <p
              style={{ fontFamily: "NunitoSans-Regular" }}
              className="for_bld_owners_content leading-relaxed"
            >
              With Leaftech's Digital Twin, you minimise the need for expensive
              and difficult-to-maintain frahling sensors. Stay ahead of the
              weather with our data services and use them to improve the
              accuracy and efficiency of your building automation and smart home
              systems
            </p>
            <div className="flex">
              <ul className="space-y-5" >
                <li className="flex space-x-3">
                  <img className="h-fit" alt="Default" src={Default} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Digital Twin based system design and layout</p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="CircleHalf" src={CircleHalf} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Best-in-class data services for shading automation </p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="ClockAfternoon" src={ClockAfternoon} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Data-driven predictive maintenance</p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="Armchair" src={Armchair} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Anticipate upcoming operating conditions of each room </p>
                </li>
              </ul>
            </div>
            <div className="flex mt-5" style={{justifyContent:'center'}} >
            <a style={{all:"unset"}} href="/wago">
              <button className="inline-flex self-end shadow-[0px_4px_4px_rgba(0,135,225,0.25)] text-[#2F2F2F] border-1 border-solid border-[#2F2F2F] py-2 px-8 rounded-[20px] text-lg">
                Know more about our data control project
              </button>
              </a>
            </div>
          </div>
          </div>
          
      </div>


      <div className="row"  style={{marginTop: '120px', textAlign:'left'}}>
       
      <div className="col-lg-6" >
          <div style={{textAlign:'left'}}  className="for_bld_owners_content_box5" >
          <span
              style={{ fontFamily: "Exo2-Regular" }}
              className="for_bld_owners_content_caption uppercase text-[20px] text-[#0087FF] mb-2 tracking-widest"
            >
              For Utility providers
            </span>
            <h1
              style={{ fontFamily: "Exo2-Bold"}}
              className="for_bld_owners_content_head title-font font-bold"
            >
              Provide tailor-made building <br /> energy systems
            </h1>
            <p
              style={{ fontFamily: "NunitoSans-Regular" }}
              className="for_bld_owners_content leading-relaxed"
            >
              With the digital twin, you get insights and solutions for planning
              and optimising energy systems that enable your end customers to
              achieve a high level of sustainability. Leverage our solution to
              offer value-added services to your customers through detailed
              analyses. Strengthen the relationship with your end customers and
              create the basis for a long-term and trusting relationship
            </p>
            <div className="flex">
              <ul className="space-y-5" >
                <li className="flex space-x-3">
                  <img className="h-fit" alt="ChartLine" src={ChartLine} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Offer analytic insights to your clients</p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="Thermometer" src={Thermometer} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Assess local cooling and heating load </p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="Recycle" src={Recycle} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Assess onsite renewable energy generation potential</p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="BatteryCharging" src={BatteryCharging} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Design integrated low-impact energy systems </p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="CloudSun" src={CloudSun} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Forecast data to increase building’s energy efficiency</p>
                </li>
              </ul>
            </div>
            <div className="flex mt-5" style={{justifyContent:'center'}} >
            <a style={{all:"unset"}} href="/granue">
              <button className="inline-flex self-end shadow-[0px_4px_4px_rgba(0,135,225,0.25)] text-[#2F2F2F] border-1 border-solid border-[#2F2F2F] py-2 px-8 rounded-[20px] text-lg">
                Know more about our residential project
              </button>
              </a>
            </div>
          </div>
          </div>

          <div className="col-lg-6">
            <img
              className="for_bld_owners_img4"
              alt="hero"
              src={img4}
            />
          </div>
      </div>


      <div className="row"  style={{marginTop: '120px', textAlign:'left'}}>
       
          <div className="col-lg-6">
            <img
              className="for_bld_owners_img5"
              alt="hero"
              src={img5}
            />
          </div>
          <div className="col-lg-6 ">
          <div style={{textAlign:'left'}}  className="for_bld_owners_content_box6" >
          <span
              style={{ fontFamily: "Exo2-Regular" }}
              className="for_bld_owners_content_caption uppercase text-[20px] text-[#0087FF] mb-2 tracking-widest"
            >
              For Architects & Designers
            </span>
            <h1
              style={{ fontFamily: "Exo2-Bold", paddingRight:'0px'}}
              className="for_bld_owners_content_head title-font font-bold"
            >
              Comprehensive & detailed energy assessment for your building
              design
            </h1>
            <p
              style={{ fontFamily: "NunitoSans-Regular", paddingRight:'45px' }}
              className="for_bld_owners_content leading-relaxed"
            >
              Make the most of our digital twin for your design’s full-energy assessments. With Leaftech, no more worries about losing data or switching between multiple tools, as we take care of all your assessments holistically.
            </p>
            <div className="flex">
              <ul className="space-y-5" >
                <li className="flex space-x-3">
                  <img className="h-fit" alt="Thermometer" src={Thermometer} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Building site analysis, climate analysis </p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="CheckSquare" src={CheckSquare} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Verify your design assumptions </p>
                </li>
                <li className="flex space-x-3">
                  <img className="h-fit" alt="PresentationChart" src={PresentationChart} />
                  <p style={{ fontFamily: "NunitoSans-Regular" }}>Data for Energy design </p>
                </li>
              </ul>
            </div>
            <div className="flex mt-5" style={{justifyContent:'center'}} >
              <button className="inline-flex self-end shadow-[0px_4px_4px_rgba(0,135,225,0.25)] text-[#2F2F2F] border-1 border-solid border-[#2F2F2F] py-2 px-8 rounded-[20px] text-lg">
                Our success stories
              </button>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}
