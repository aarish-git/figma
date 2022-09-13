import React from "react";
import img1 from "../assest/Images/home/one.svg";
import img2 from "../assest/Images/home/two.svg";
import img3 from "../assest/Images/home/three.svg";
import img4 from "../assest/Images/home/four.svg";
import img5 from "../assest/Images/home/five.svg";
// import img1 from "../assest/Images/home/one.jpg"
import a1 from "../assest/Icons2/house.svg";
import a2 from "../assest/Icons2/chart_01.svg";
import a3 from "../assest/Icons2/tree.svg";
import a4 from "../assest/Icons2/certify.svg";

import b1 from "../assest/Icons2/chart_02.svg";
import b2 from "../assest/Icons2/coins.svg";
import b3 from "../assest/Icons2/battery.svg";
import b4 from "../assest/Icons2/certify.svg";

import c1 from "../assest/Icons2/buildings.svg";
import c2 from "../assest/Icons2/circle.svg";
import c3 from "../assest/Icons2/clock.svg";
import c4 from "../assest/Icons2/sofa.svg";

import d1 from "../assest/Icons2/chart_01.svg";
import d2 from "../assest/Icons2/temperature_cold.svg";
import d3 from "../assest/Icons2/triangle_arrows.svg";
import d4 from "../assest/Icons2/battery.svg";
import d5 from "../assest/Icons2/cloudy_sun.svg";

import e1 from "../assest/Icons2/temperature_cold.svg";
import e2 from "../assest/Icons2/check.svg";
import e3 from "../assest/Icons2/presentation.svg";


import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; //translator

export default function First() {
  const { t, i18n } = useTranslation(); //translator

  return (
    <div className="container">
      <div className="row">
        <div
          className="row whatsIn_section"
          id="foot_building"
        >
          <h1
            style={{
              fontFamily: "Exo2-Bold",
            }}
            className="whatsIn_section_head"
          >
            {/* What's in it for you? */}
            {t("Home_section4_head")}
          </h1>
        </div>

        <div className="row whatsIn_firstSection">
          <div className="col-lg-6" style={{ display: 'flex', justifyContent: 'center' }}>
            <img className="for_bld_owners_img1" alt="hero" src={img1} />
          </div>
          <div className="col-lg-6">
            <div
              style={{ textAlign: "left" }}
              id="sec1"
              className="for_bld_owners_content_box"
            >
              <span
                style={{ fontFamily: "Exo2-Regular" }}
                className="for_bld_owners_content_caption"
              >
                {/* For Building Owners */}
                {t("Home_section4_subhead1")}
              </span>
              <h1
                style={{ fontFamily: "Exo2-Bold" }}
                className="for_bld_owners_content_head title-font font-bold"
              >
                {t("Home_section4_subhead2_a")} <br />
                {t("Home_section4_subhead2_b")}
                {/* <br className="hidden lg:inline-block" />
              readymade gluten */}
              </h1>
              <p
                style={{ fontFamily: "NunitoSans-Regular", color: "#2F2F2F" }}
                className="for_bld_owners_content"
              >
                {t("Home_section4_content")}
                {/* Achieve your financial, ecological, and operational objectives with us. Together, let's create a digital twin-building model to identify investment opportunities, create a decarbonization roadmap to improve your assets' performance, and with it all, boost your ESG score. */}
              </p>

              <div className="flex">
                <ul className="space-y-5">
                  <li className="flex space-x-3">
                    <img  alt="home" src={a1} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {t("Home_section4_contentList1")}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img  alt="ChartLine" src={a2} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {" "}
                      {t("Home_section4_contentList2")}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img  alt="Tree" src={a3} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {t("Home_section4_contentList3")}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img  alt="Girl in a Medal" src={a4} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {t("Home_section4_contentList4")}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex mt-5" style={{ justifyContent: "center" }}>
                <Link style={{ all: "unset" }} to="/project">
                  <button className="whats_in_buttons Home_section5_desktop_button1" style={{ fontFamily: "NunitoSans-Regular" }}>
                    {/* Take a look at our Trio Mannheim project */}
                    {t("Home_section4_button1")}
                  </button>
                  <button className="whats_in_buttons Home_section5_mobile_button1" style={{ fontFamily: "NunitoSans-Regular" }}>
                    {/* Take a look at our Trio Mannheim project */}
                    {t("Home_section4_mobile_button1")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div id="foot_Assest"></div>
       
        <div
          className="row box_property_asset whatsIn_singleSection"
          style={{ marginTop: "120px", textAlign: "left" }}
        >
          <div className="col-lg-6" id="foot_Assest2">
            <div
              style={{ textAlign: "left" }}
              className="for_bld_owners_content_box2"
            >
              <span
                style={{ fontFamily: "Exo2-Regular" }}
                className="for_bld_owners_content_caption"
              >
                {t("Home_section5_subhead1")}
              </span>
              <h1
                style={{ fontFamily: "Exo2-Bold" }}
                className="for_bld_owners_content_head title-font font-bold"
              >
                {/* Informed decision-making for */}
                {t("Home_section5_subhead2_a")}
                <br />
                {/* smooth building operations */}
                {t("Home_section5_subhead2_b")}
                {/* <br />
              readymade gluten */}
              </h1>
              <p
                style={{ fontFamily: "NunitoSans-Regular" }}
                className="for_bld_owners_content"
                id="foot_Assest3"
              >
                {/* Reduce your building's operating costs and risks, and meet the
              contractual obligations with your tenants, with Leaftech's
              solution. Use our accurate data to make the appropriate decisions
              for smooth and hassle-free everyday operations. */}
                {t("Home_section5_content")}
              </p>
              <div className="flex">
                <ul className="space-y-5">
                  <li className="flex space-x-3">
                    <img  alt="ChartBar" src={b1} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Make decisions using analytic data */}
                      {t("Home_section5_contentList1")}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img  alt="Coins" src={b2} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Reduce building operating expenses */}
                      {t("Home_section5_contentList2")}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img
                      
                      alt="BatteryCharging"
                      src={b3}
                    />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Mitigate energy design risks */}
                      {t("Home_section5_contentList3")}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img  alt="Medal" src={b4} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Data for energy performance certificates{" "} */}
                      {t("Home_section5_contentList4")}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex mt-5" style={{ justifyContent: "center" }}>
                <Link style={{ all: "unset" }} to="/mannhiem">
                  <button className="whats_in_buttons Home_section5_desktop_button1" style={{ fontFamily: "NunitoSans-Regular" }}>
                    {/* Take a look at our Trio Mannheim project */}
                    {t("Home_section5_button1")}
                  </button>
                  <button className="whats_in_buttons Home_section5_mobile_button1" style={{ fontFamily: "NunitoSans-Regular" }}>
                    {/* Take a look at our Trio Mannheim project */}
                    {t("Home_section5_mobile_button1")}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6" style={{ display: 'flex', justifyContent: 'center' }}>
            <img className="for_bld_owners_img2" alt="hero" src={img2} />
          </div>
        </div>
       
        <div id="foot_Building"></div>
        
        <div
          className="row whatsIn_singleSection"
        >
          <div className="col-lg-6" style={{ display: 'flex', justifyContent: 'center' }}>
            <img className="for_bld_owners_img3" alt="hero" src={img3} />
          </div>
          <div className="col-lg-6">
            <div
              style={{ textAlign: "left" }}
              className="for_bld_owners_content_box4"
            >
              <span
                style={{ fontFamily: "Exo2-Regular" }}
                className="for_bld_owners_content_caption"
              >
                {/* For Building automation providers */}
                {t("Home_section6_subhead1")}
              </span>
              <h1
                style={{ fontFamily: "Exo2-Bold" }}
                className="for_bld_owners_content_head title-font font-bold"
              >
                {t("Home_section6_subhead2_a")} <br />
                {t("Home_section6_subhead2_b")}
              </h1>
              <p
                style={{ fontFamily: "NunitoSans-Regular" }}
                className="for_bld_owners_content leading-relaxed"
              >
                {/* With Leaftech's Digital Twin, you minimise the need for expensive
              and difficult-to-maintain frahling sensors. Stay ahead of the
              weather with our data services and use them to improve the
              accuracy and efficiency of your building automation and smart home
              systems. */}
                {t("Home_section6_content")}
              </p>
              <div className="flex">
                <ul className="space-y-5">
                  <li className="flex space-x-3">
                    <img  alt="Default" src={c1} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Digital Twin based system design and layout */}

                      {t("Home_section6_contentList1")}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img  alt="CircleHalf" src={c2} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Best-in-class data services for shading automation{" "} */}
                      {t("Home_section6_contentList2")}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img
                      
                      alt="ClockAfternoon"
                      src={c3}
                    />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Data-driven predictive maintenance */}
                      {t("Home_section6_contentList3")}
                    </p>
                  </li>
                  {t('model_service_contact') === "Contact us" ?

                    <li className="flex space-x-3">
                      <img  alt="Armchair" src={c4} />
                      <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                        {/* Anticipate upcoming operating conditions of each room{" "} */}
                        {t("Home_section6_contentList4")}
                      </p>
                    </li>

                    :

                    <li className="flex space-x-3" style={{ display: 'none' }}>
                      <img  alt="Armchair" src={c4} />
                      <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                        {/* Anticipate upcoming operating conditions of each room{" "} */}
                        {t("Home_section6_contentList4")}
                      </p>
                    </li>

                  }
                </ul>
              </div>
              <div className="flex mt-5" style={{ justifyContent: "center" }}>
                <Link style={{ all: "unset" }} to="/wago">
                  <button className="whats_in_buttons Home_section6_desktop_button1" style={{ fontFamily: "NunitoSans-Regular" }}>
                    {/* Know more about our proactive control project */}
                    {t("Home_section6_button1")}
                  </button>
                  <button className="whats_in_buttons Home_section6_mobile_button1" style={{ fontFamily: "NunitoSans-Regular" }}>
                    {/* Know more about our proactive control project */}
                    {t("Home_section6_mobile_button1")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div id="foot_Energy"></div>
        <div
          className="row box_utility_providers whatsIn_singleSection"

          style={{ marginTop: "120px", textAlign: "left" }}
        >
          <div className="col-lg-6">
            <div
              style={{ textAlign: "left" }}
              className="for_bld_owners_content_box5"
            >
              <span
                style={{ fontFamily: "Exo2-Regular" }}
                className="for_bld_owners_content_caption"
              >
                {/* For Utility providers */}
                {t('Home_section7_subhead1')}
              </span>
              <h1
                style={{ fontFamily: "Exo2-Bold" }}
                className="for_bld_owners_content_head title-font font-bold"
              >
                {/* Provide tailor-made building */}
                {t('Home_section7_subhead2_a')}
                <br />
                {t('Home_section7_subhead2_b')}
              </h1>
              <p
                style={{ fontFamily: "NunitoSans-Regular" }}
                className="for_bld_owners_content leading-relaxed"
              >
                {/* With the Digital Twin, you get insights and solutions for planning
              and optimising energy systems that enable your end customers to
              achieve a high level of sustainability. Leverage our solution to
              offer value-added services to your customers through detailed
              analyses. Strengthen the relationship with your end customers and
              create the basis for a long-term and trusting relationship. */}
                {t('Home_section7_content')}
              </p>
              <div className="flex">
                <ul className="space-y-5">
                  <li className="flex space-x-3">
                    <img  alt="ChartLine" src={d1} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Offer analytic insights to your clients */}
                      {t('Home_section7_contentList1')}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img  alt="Thermometer" src={d2} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Assess local cooling and heating load{" "} */}
                      {t('Home_section7_contentList2')}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img  alt="Recycle" src={d3} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Assess onsite renewable energy generation potential */}
                      {t('Home_section7_contentList3')}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img
                      
                      alt="BatteryCharging"
                      src={d4}
                    />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Design integrated low-impact energy systems{" "} */}
                      {t('Home_section7_contentList4')}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img  alt="CloudSun" src={d5} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Forecast data to increase building’s energy efficiency */}
                      {t('Home_section7_contentList5')}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex mt-5" style={{ justifyContent: "center" }}>
                <Link style={{ all: "unset" }} to="/granue">
                  <button className="whats_in_buttons Home_section7_desktop_button1" style={{ fontFamily: "NunitoSans-Regular" }}>
                    {/* Take a look at our project with Vattenfall */}
                    {t('Home_section7_button1')}
                  </button>
                  <button className="whats_in_buttons Home_section7_mobile_button1" style={{ fontFamily: "NunitoSans-Regular" }}>
                    {/* Take a look at our project with Vattenfall */}
                    {t('Home_section7_mobile_button1')}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6" style={{ display: 'flex', justifyContent: 'center' }}>
            <img className="for_bld_owners_img4" alt="hero" src={img4} />
          </div>
        </div>


        <div id="foot_Architects"></div>
        <div
          className="row whatsIn_singleSection"
        >
          <div className="col-lg-6" style={{ display: 'flex', justifyContent: 'center' }}>
            <img className="for_bld_owners_img5" alt="hero" src={img5} />
          </div>
          <div className="col-lg-6 ">
            <div
              style={{ textAlign: "left" }}
              className="for_bld_owners_content_box6"
            >
              <span
                style={{ fontFamily: "Exo2-Regular" }}
                className="for_bld_owners_content_caption"
              >
                {/* For Architects & Designers */}
                {t('Home_section8_subhead1')}
              </span>
              <h1
                style={{ fontFamily: "Exo2-Bold", paddingRight: "0px" }}
                className="for_bld_owners_content_head title-font font-bold"
              >
                {/* Comprehensive & detailed energy assessment for your building
              design */}
                {t('Home_section8_subhead2_a')}
              </h1>
              <p
                style={{ fontFamily: "NunitoSans-Regular"}}
                className="for_bld_owners_content leading-relaxed"
              >
                {/* Make the most of our digital twin for your design’s full-energy
              assessments. With Leaftech, no more worries about losing data or
              switching between multiple tools, as we take care of all your
              assessments holistically. */}
                {t('Home_section8_content')}
              </p>
              <div className="flex">
                <ul className="space-y-5">
                  <li className="flex space-x-3">
                    <img  alt="Thermometer" src={e1} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Building site analysis, climate analysis{" "} */}
                      {t('Home_section8_contentList1')}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img  alt="CheckSquare" src={e2} />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Verify your design assumptions{" "} */}
                      {t('Home_section8_contentList2')}
                    </p>
                  </li>
                  <li className="flex space-x-3">
                    <img
                      
                      alt="PresentationChart"
                      src={e3}
                    />
                    <p className="project_icon_text" style={{ fontFamily: "NunitoSans-Regular" }}>
                      {/* Data for Energy design{" "} */}
                      {t('Home_section8_contentList3')}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex mt-5" style={{ justifyContent: "center" }}>
                <Link style={{ all: "unset" }} to="/project">
                  <button className="whats_in_buttons" style={{ fontFamily: "NunitoSans-Regular" }}>
                    {/* Our success stories */}
                    {t('Home_section8_button1')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
