import React from "react";
import { Link } from "react-router-dom";
// import Trio from "../../../assest/Images/project/Trio_Overview.svg";
// import Granue from "../../../assest/Images/project/GruneAue_Overview.svg";
import Trio from "../../../assest/Images/project/project1.jpg";
import Granue from "../../../assest/Images/project/project2.jpg";
import Pheonix from "../../../assest/Images/project/phoenix.svg";
import Wago from "../../../assest/Images/project/wago.svg";

import mobTrio from "./../../../assest/mobileImages/Projects/Overview_Trio_mannheim.svg";
import mobGranue from "./../../../assest/mobileImages/Projects/Overview_GruneAue.svg"
import mobPheonix from "./../../../assest/mobileImages/Projects/Overview_PheonixContact.svg"
import mobWago from "./../../../assest/mobileImages/Projects/Overview_Wago.svg"

import Sun from "../../../assest/Icons2/sun.svg";
import Wrench from "../../../assest/Icons2/wrench.svg";
import User from "../../../assest/Icons2/customer.svg";
import Default from "../../../assest/Icons2/buildings.svg";


import { margin } from "@mui/system";
import { useTranslation } from 'react-i18next';//translator


export default function Project() {
  const { t, i18n } = useTranslation();//translator

  return (
    <div className="container">
      <div className="project_home" style={{ width: '97%' }}>
        <div className=" text-gray-600" style={{ marginTop: '32px', textAlign: 'left' }}>
          <Link style={{ all: "unset", cursor: 'pointer' }} to="/mannhiem">
            <div className="project_outline ">
                <img
                  alt="ecommerce"
                  className="projectImage project_landing_mobile_img responsive "
                  src={mobTrio}
                />
                <img
                  alt="ecommerce"
                  className="projectImage project_landing_desktop_img responsive "
                  src={Trio}
                />
              <div className="project_landing_shortdesc">
                <div className="project_content_body ">
                  <h2
                    style={{ fontFamily: "Exo2-Regular" }}
                    className="project_blue_head"
                  >
                    {/* Mannheim, Germany, February 2022 */}
                    {t('Project_section2_head1')}
                  </h2>
                  <text
                    style={{ fontFamily: "Exo2-Bold" }}
                    className="project_head "
                  >
                    {/* Trio Mannheim */}
                    {t('Project_section2_head2')}
                  </text>
                  <p
                    style={{ fontFamily: "NunitoSans-Regular", marginTop: '24px', marginBottom: '40px' }}
                    className="project_content"
                  >
                    {/* Provided digital twin-based analytic services to conduct
                  energy design risk assessment and for informed decision
                  making. */}
                    {t('project_section2_content')}
                  </p>
                  <div className="flex mt-6 items-center pb-5 border-gray-100 mb-5">
                    <div className="flex  items-center">
                      <div className="relative">
                        <ul className="space-y-5">
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={User} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {t('project_section2_List1')}
                              {/* Customer group: Building owner/asset management */}
                            </p>
                          </li>
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={Default} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {t('project_section2_List2')}
                              {/* Building type: Commercial, P&C shopping complex */}
                            </p>
                          </li>
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={Sun} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {t('project_section2_List3')}
                              {/* System Information: Centralized HVAC system
                            installed */}
                            </p>
                          </li>
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={Wrench} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {t('project_section2_List4')}
                              {/* Services: Digital twin set-up, energy demand assessment */}

                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" text-left project_nums">
                    <div className="flex text-gray-600 body-font">
                      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                        <h2
                          style={{ fontFamily: "Exo2-Bold" }}
                          className="project_content_numbers"
                        >
                          12,000 m²
                        </h2>
                        <p style={{ fontFamily: "NunitoSans-Regular" }} className="project_no_text">{t('project_section2_number1')}</p>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '55px' }}>
                        <h2
                          style={{ fontFamily: "Exo2-Bold" }}
                          className="project_content_numbers"
                        >
                          ~8,000 m²
                        </h2>
                        <p style={{ fontFamily: "NunitoSans-Regular" }} className="project_no_text w-full">
                          {/* Area under assessment */}
                          {t('project_section2_number2')}
                        </p>
                      </div>
                      {/* <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    4
                  </h2>
                  <p className="project_no_text">Products</p>
                </div> */}
                    </div>
   <div className="fullStoryBtn_container">
                  <Link  to="/mannhiem">
                  <button
                          style={{
                            fontFamily: "NunitoSans-Regular",
                          }}
                          className="fullStoryBtn"
                        >
                          {t('project_fullstrorytext_mobile')}
                        </button>
                  </Link>
                  </div>
                  </div>

                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* 2nd */}
        <div className="project_landing_single_section">
          <Link style={{ all: "unset", cursor: 'pointer' }} to="/granue">
            <div className="project_outline ">
                <img
                  alt="ecommerce"
                  className="projectImage project_landing_mobile_img responsive "
                  src={Granue}
                />
                <img
                  alt="ecommerce"
                  className="projectImage project_landing_desktop_img responsive "
                  src={Granue}
                />
              <div className="project_landing_shortdesc">
                <div className="project_content_body ">
                  <h2
                    style={{ fontFamily: "Exo2-Regular" }}
                    className="project_blue_head"
                  >
                    {/* Berlin, germany, March 2022 */}
                    {t('Project_section3_head1')}
                  </h2>
                  <h1
                    style={{ fontFamily: "Exo2-Bold" }}
                    className="project_head"
                  >
                    {t('Project_section3_head2')}
                  </h1>
                  <p
                    style={{ fontFamily: "NunitoSans-Regular", marginTop: '24px', marginBottom: '40px' }}
                    className="project_content"
                  >
                    {/* Our digital twin-based analytics services provided onsite energy generation potential assessment along with optimal PV system layout.  */}
                    {t('project_section3_content')}
                  </p>
                  <div className="flex mt-6 items-center pb-5 border-gray-100 mb-5">
                    <div className="flex  items-center">
                      <div className="relative">
                        <ul className="space-y-5 ">
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={User} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {/* Customer group: Utility & energy system provider{" "} */}
                              {t('project_section3_List1')}
                            </p>
                          </li>
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={Default} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {/* Building type: Residential */}
                              {t('project_section3_List2')}
                            </p>
                          </li>
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={Sun} />{" "}
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {/* Heating system: CHP in combination with heat pump */}
                              {t('project_section3_List3')}
                            </p>{" "}
                          </li>
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={Wrench} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {/* Services: Digital twin set-up, PV potential
                            assessment{" "} */}
                              {t('project_section3_List4')}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" text-center project_nums">
                    <div className="flex text-gray-600 body-font project_nums -m-4">
                      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                        <h2
                          style={{ fontFamily: "Exo2-Bold" }}
                          className="project_content_numbers"
                        >
                          15,000 m²
                        </h2>
                        <p style={{ fontFamily: "NunitoSans-Regular" }} className="project_no_text">{t('project_section3_number1')}</p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '55px' }}>
                        <h2
                          style={{ fontFamily: "Exo2-Bold" }}
                          className="project_content_numbers"
                        >
                          116 Units
                        </h2>
                        <p style={{ fontFamily: "NunitoSans-Regular" }} className="project_no_text">{t('project_section3_number2')}</p>
                      </div>
                      {/* <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-2xl text-3xl text-gray-900">
                    4
                  </h2>
                  <p className="project_no_text">Products</p>
                </div> */}
                    </div>
   <div className="fullStoryBtn_container">
                  <Link  to="/granue">
                  <button
                          style={{
                            fontFamily: "NunitoSans-Regular",
                          }}
                          className="fullStoryBtn"
                        >
                          {t('project_fullstrorytext_mobile')}
                        </button>
                  </Link>
                  </div>
                  </div>

                </div>

              </div>
            </div>
          </Link>
        </div>
        {/* 3rd */}
        <div className="project_landing_single_section">
          <Link style={{ all: "unset", cursor: 'pointer' }} to="/phoenix">
            <div className="project_outline ">
                <img
                  alt="ecommerce"
                  className="projectImage project_landing_mobile_img responsive "
                  src={mobPheonix}
                />
                <img
                  alt="ecommerce"
                  className="projectImage project_landing_desktop_img responsive "
                  src={Pheonix}
                />
              <div className="project_landing_shortdesc">
                <div className="project_content_body ">
                  <h2
                    style={{ fontFamily: "Exo2-Regular" }}
                    className="project_blue_head"
                  >
                    {t('Project_section4_head1')}
                  </h2>
                  <h1
                    style={{ fontFamily: "Exo2-Bold" }}
                    className="project_head"
                  >
                    {t('Project_section4_head2')}
                  </h1>
                  <p
                    style={{ fontFamily: "NunitoSans-Regular", marginTop: '24px', marginBottom: '40px' }}
                    className="project_content"
                  >
                    {t('project_section4_content')}
                  </p>
                  <div className="flex mt-6 items-center pb-5  border-gray-100 mb-5">
                    <div className="flex  items-center">
                      <div className="relative">
                        <ul className="space-y-5">
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={User} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {" "}
                              {/* Customer group: Building automation/smart home
                            provider{" "} */}
                              {t('project_section4_List1')}
                            </p>
                          </li>
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={Default} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {" "}
                              {/* Building type: Commercial, Phoenix Contact office
                            facility{" "} */}
                              {t('project_section4_List2')}
                            </p>
                          </li>
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={Sun} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {/* Automation system: Emalytics and automated
                            individual shading control */}
                              {t('project_section4_List3')}
                            </p>
                          </li>
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={Wrench} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {/* Service: Control data for shading automation */}
                              {t('project_section4_List4')}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" text-center project_nums">
                    <div className="flex text-gray-600 body-font project_nums">
                      {t('model_service_contact') === "Contact us" ?
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: '124px' }}>
                          <h2
                            style={{ fontFamily: "Exo2-Bold" }}
                            className="project_content_numbers"
                          >
                            ~1,965 m²
                          </h2>
                          <p style={{ fontFamily: "NunitoSans-Regular" }} className="project_no_text">{t('project_section4_number1')}</p>
                        </div>
                        :
                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: '155px' }}>
                          <h2
                            style={{ fontFamily: "Exo2-Bold" }}
                            className="project_content_numbers"
                          >
                            ~1,965 m²
                          </h2>
                          <p style={{ fontFamily: "NunitoSans-Regular" }} className="project_no_text">{t('project_section4_number1')}</p>
                        </div>
                      }
                      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '55px' }}>
                        <h2
                          style={{ fontFamily: "Exo2-Bold" }}
                          className="project_content_numbers"
                        >
                          169
                        </h2>
                        <p style={{ fontFamily: "NunitoSans-Regular" }} className="project_no_text">
                          {/* Devices in control */}
                          {t('project_section4_number2')}
                        </p>
                      </div>
                      {/* <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-2xl text-3xl text-gray-900">
                    4
                  </h2>
                  <p className="project_no_text">Products</p>
                </div> */}
                    </div>
   <div className="fullStoryBtn_container">
                  <Link  to="/phoenix">
                  <button
                          style={{
                            fontFamily: "NunitoSans-Regular",
                          }}
                          className="fullStoryBtn"
                        >
                          {t('project_fullstrorytext_mobile')}
                        </button>
                  </Link>
                  </div>
                  </div>

                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* 4th */}
        <div className="project_landing_single_section" style={{ marginBottom: '43px' }}>
          <Link style={{ all: "unset", cursor: 'pointer' }} to="/wago">
            <div className="project_outline ">
                <img
                  alt="ecommerce"
                  className="projectImage project_landing_mobile_img responsive "
                  src={mobWago}
                />
                <img
                  alt="ecommerce"
                  className="projectImage project_landing_desktop_img responsive "
                  src={Wago}
                />
              <div className="project_landing_shortdesc" >
                <div className="project_content_body ">
                  <h2
                    style={{ fontFamily: "Exo2-Regular" }}
                    className="project_blue_head"
                  >
                    {/* Minden, Germany, June 2021 */}
                    {t('Project_section5_head1')}
                  </h2>
                  <h1
                    style={{ fontFamily: "Exo2-Bold" }}
                    className="project_head "
                  >
                    {/* Wago Headquarters */}
                    {t('Project_section5_head2')}
                  </h1>
                  <p
                    style={{ fontFamily: "NunitoSans-Regular", marginTop: '24px', marginBottom: '40px' }}
                    className="project_content"
                  >
                    {/* Leaftech provided Digital Twin-based analytics and control services to enhance the shading automation system to maximise efficiency and comfort.  */}
                    {t('project_section5_content')}
                  </p>
                  <div className="flex mt-6 items-center pb-5  border-gray-100 mb-5">
                    <div className="flex  items-center">
                      <div className="relative">
                        <ul className="space-y-5">
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={User} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {/* Customer group: Building automation */}
                              {t('project_section5_List1')}
                            </p>{" "}
                          </li>
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit" alt="Project" src={Default} />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {/* Building type: Commercial, Wago's own office
                            facility */}
                              {t('project_section5_List2')}
                            </p>{" "}
                          </li>
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit"
                              alt="Project"
                              src={Sun}
                            // style={{ height: "30px" }}
                            />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {/* System information: Wago’s automation system with
                            individual shading control */}
                              {t('project_section5_List3')}
                            </p>
                          </li>
                          <li className="flex space-x-5">
                            <img className="project_icons h-fit"
                              alt="Project"
                              src={Wrench}
                            // style={{ height: "30px" }}
                            />
                            <p
                              style={{ fontFamily: "NunitoSans-Regular" }}
                              className="project_icon_text"
                            >
                              {/* Services: Digital twin set-up, data for shading
                            automation and sensor placement{" "} */}
                              {t('project_section5_List4')}
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" text-left project_nums">
                    <div className="flex text-gray-600 body-font">
                      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                        <h2
                          style={{ fontFamily: "Exo2-Bold" }}
                          className="project_content_numbers"
                        >
                          3,800 m²
                        </h2>
                        <p style={{ fontFamily: "NunitoSans-Regular" }} className="project_no_text">{t('project_section5_number1')}</p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', marginLeft: '55px' }}>
                        <h2
                          style={{ fontFamily: "Exo2-Bold" }}
                          className="project_content_numbers"
                        >
                          540+
                        </h2>
                        <p style={{ fontFamily: "NunitoSans-Regular" }} className="project_no_text">{t('project_section5_number2')}</p>
                      </div>
                    </div>
                  </div>
                <div className="fullStoryBtn_container">
                  <Link  to="/wago">
                  <button
                          style={{
                            fontFamily: "NunitoSans-Regular",
                          }}
                          className="fullStoryBtn"
                        >
                          {t('project_fullstrorytext_mobile')}
                        </button>
                  </Link>
                  </div>


                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
