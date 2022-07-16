import React from "react";
import { Link } from "react-router-dom";
import Trio from "../../../assest/Images/project/project1.jpg";
import Granue from "../../../assest/Images/project/project2.jpg";
import Pheonix from "../../../assest/Images/project/project3.jpg";
import Wago from "../../../assest/Images/project/project4.jpg";

import Sun from "../../../assest/Icons/Sun.png";
import Wrench from "../../../assest/Icons/Wrench.png";
import User from "../../../assest/Icons/User.png";
import Default from "../../../assest/Icons/Default.png";
import { margin } from "@mui/system";

export default function project() {
  return (
    <div className="">
      <div className=" text-gray-600" style={{marginTop:'32px', textAlign:'left'}}>
        <a style={{ all: "unset", cursor: 'pointer' }} href="/mannhiem">
            <div className="project_outline ">
              <img
                alt="ecommerce"
                className=" projectImage rounded-[20px]  object-cover object-center rounded"
                src={Trio}
              />
              <div className="">
              <div className="project_content_body ">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  className="project_blue_head uppercase text-[#0087FF]"
                >
                  Mannheim, Germany, February 2022
                </h2>
                <h1
                  style={{ fontFamily: "Exo2-Regular" }}
                  className="project_head text-[#2F2F2F] font-bold "
                >
                  Trio Mannheim
                </h1>
                <p
                  style={{ fontFamily: "NunitoSans-Regular", marginTop: '24px', marginBottom: '40px' }}
                  className="project_content"
                >
                  Provided digital twin-based analytic services to conduct
                  energy design risk assessment and for informed decision
                  making.
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
                            Customer group: Building owner/asset management
                          </p>
                        </li>
                        <li className="flex space-x-5">
                          <img className="project_icons h-fit" alt="Project" src={Default} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="project_icon_text"
                          >
                            Building type: Commercial, P&C shopping complex
                          </p>
                        </li>
                        <li className="flex space-x-5">
                          <img className="project_icons h-fit" alt="Project" src={Sun} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="text-[16px] font-[400]"
                          >
                            System Information: Centralized HVAC system
                            installed
                          </p>
                        </li>
                        <li className="flex space-x-5">
                          <img className="project_icons h-fit" alt="Project" src={Wrench} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="text-[16px] font [400]"
                          >
                            Services: Digital twin set-up, energy demand assessment

                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className=" text-left project_nums">
                      <div className="flex text-gray-600 body-font">
                        <div style={{display:'flex', flexDirection: 'column', textAlign:'left'}}>
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            className="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            12,000 sqm
                          </h2>
                          <p className="leading-relaxed">Total project area</p>
                        </div>
                        <div className="project_nums_center" style={{display:'flex', flexDirection: 'column', textAlign:'left'}}>
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            className="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            ~9,000 €
                          </h2>
                          <p className="leading-relaxed">Total project cost </p>
                        </div>
                        <div style={{display:'flex', flexDirection: 'column', textAlign:'left'}}>
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            className="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            ~8,000 sqm
                          </h2>
                          <p className="leading-relaxed w-full">
                            Building area under assessment
                          </p>
                        </div>
                        {/* <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                    4
                  </h2>
                  <p className="leading-relaxed">Products</p>
                </div> */}
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </a>
      </div>
      {/* 2nd */}
      <div className=" text-gray-600" style={{marginTop:'120px', textAlign:'left'}}>
        <a style={{ all: "unset", cursor: 'pointer' }} href="/granue">
            <div className="project_outline ">
              <img
                alt="ecommerce"
                className=" projectImage rounded-[20px]  object-cover object-center rounded"
                src={Granue}
              />
              <div className="">
                <div className="project_content_body ">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  className="project_blue_head uppercase text-[#0087FF]"
                >
                  Berlin, germany, March 2022
                </h2>
                <h1
                  style={{ fontFamily: "Exo2-Regular" }}
                  className="project_head text-[#2F2F2F] font-bold"
                >
                  Grüne Aue
                </h1>
                <p
                  style={{ fontFamily: "NunitoSans-Regular", marginTop: '24px', marginBottom: '40px' }}
                  className="project_content"
                >
                  Our digital twin-based analytics services provided onsite
                  energy generation potential assessment along with optimal PV
                  system layout.
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
                            Customer group: Utility & energy system provider{" "}
                          </p>
                        </li>
                        <li className="flex space-x-5">
                          <img className="project_icons h-fit" alt="Project" src={Default} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="project_icon_text"
                          >
                            Building type: Residential
                          </p>
                        </li>
                        <li className="flex space-x-5">
                          <img className="project_icons h-fit" alt="Project" src={Sun} />{" "}
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="project_icon_text"
                          >
                            Heating system: CHP in combination with heat pump
                          </p>{" "}
                        </li>
                        <li className="flex space-x-5">
                          <img className="project_icons h-fit" alt="Project" src={Wrench} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="project_icon_text"
                          >
                            Services: Digital twin set-up, PV potential
                            assessment{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className=" text-center project_nums">
                      <div className="flex text-gray-600 body-font project_nums -m-4">
                        <div style={{display:'flex', flexDirection: 'column', textAlign:'left'}}>
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            className="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            15,000 sqm
                          </h2>
                          <p className="leading-relaxed">Total project area</p>
                        </div>
                        <div className="project_nums_center" style={{display:'flex', flexDirection: 'column', textAlign:'left'}}>
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            className="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            ~6,000 €
                          </h2>
                          <p className="leading-relaxed">Total project cost </p>
                        </div>
                        <div style={{display:'flex', flexDirection: 'column', textAlign:'left'}}>
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            className="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            116 Units
                          </h2>
                          <p className="leading-relaxed">Homes</p>
                        </div>
                        {/* <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-2xl text-3xl text-gray-900">
                    4
                  </h2>
                  <p className="leading-relaxed">Products</p>
                </div> */}
                      </div>
                </div>
                </div>
               
              </div>
            </div>
        </a>
      </div>
      {/* 3rd */}
      <div className=" text-gray-600" style={{marginTop:'120px', textAlign:'left'}}>
        <a style={{ all: "unset", cursor: 'pointer' }} href="/phoenix">
            <div className="project_outline ">
              <img
                alt="ecommerce"
                className=" projectImage rounded-[20px]  object-cover object-center rounded"
                src={Pheonix}
              />
              <div className="">
              <div className="project_content_body ">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  className="project_blue_head uppercase text-[#0087FF]"
                >
                  Blomberg, Germany, April 2022
                </h2>
                <h1
                  style={{ fontFamily: "Exo2-Regular" }}
                  className="project_head text-[#2F2F2F] font-bold"
                >
                  Pheonix Contact
                </h1>
                <p
                  style={{ fontFamily: "NunitoSans-Regular", marginTop: '24px', marginBottom: '40px' }}
                  className="project_content"
                >
                  Leaftech provided digital twin-based analytics and control
                  services to enhance the shading automation system to maximise
                  efficiency and comfort.
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
                            Customer group: Building automation/smart home
                            provider{" "}
                          </p>
                        </li>
                        <li className="flex space-x-5">
                          <img className="project_icons h-fit" alt="Project" src={Default} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="project_icon_text"
                          >
                            {" "}
                            Building type: Commercial, Phoenix Contact office
                            facility{" "}
                          </p>
                        </li>
                        <li className="flex space-x-5">
                          <img className="project_icons h-fit" alt="Project" src={Sun} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="project_icon_text"
                          >
                            Automation system: Emalytics and automated
                            individual shading control
                          </p>
                        </li>
                        <li className="flex space-x-5">
                          <img className="project_icons h-fit" alt="Project" src={Wrench} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="project_icon_text"
                          >
                            Service: Control data for shading automation
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className=" text-center project_nums">
                <div className="flex text-gray-600 body-font project_nums">
                        <div style={{display:'flex', flexDirection: 'column', textAlign:'left', width:'124px'}}>
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            className="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            -1,965 sqm
                          </h2>
                          <p className="leading-relaxed">Total project area</p>
                        </div>
                        <div className='project_nums_center' style={{display:'flex', flexDirection: 'column', textAlign:'left', width:'194px'}} >
                          <h2
                            style={{ fontFamily: "Exo2-Regular" }}
                            className="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                            3,000 €
                          </h2>
                          <p className="leading-relaxed">
                            Project Cost Phase One (2019)
                          </p>
                        </div>
                        <div  style={{display:'flex', flexDirection: 'column', textAlign:'left'}}>
                          <h2
                            style={{
                              fontFamily: "Exo2-Regular",
                              width: "207px",
                            }}
                            className="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                          >
                           169
                          </h2>
                          <p className="leading-relaxed">
                          Devices in control
                          </p>
                        </div>
                        {/* <div className="p-4 sm:w-1/3 w-1/2">
                  <h2 className="title-font font-medium sm:text-2xl text-3xl text-gray-900">
                    4
                  </h2>
                  <p className="leading-relaxed">Products</p>
                </div> */}
                    </div>
                    </div>
                </div>
              </div>
            </div>
        </a>
      </div>
      {/* 4th */}
      <div className=" text-gray-600" style={{marginTop:'120px', marginBottom:'43px', textAlign:'left'}}>
        <a style={{ all: "unset", cursor: 'pointer' }} href="/wago">
            <div className="project_outline ">
              <img
                alt="ecommerce"
                className=" projectImage rounded-[20px] shadow-[0_4px_4px_-3px_rgba(0,135,225,0.25)] object-cover object-center rounded"
                src={Wago}
              />
              <div className="shadow-[0px_4px_4px_-3px_rgba(0,135,255,0.25)]">
              <div className="project_content_body ">
                <h2
                  style={{ fontFamily: "Exo2-Regular" }}
                  className="project_blue_head uppercase text-[#0087FF]"
                >
                  Minden, Germany, June 2021
                </h2>
                <h1
                  style={{ fontFamily: "Exo2-Regular" }}
                  className="project_head text-[#2F2F2F] font-bold "
                >
                  Wago Headquarters
                </h1>
                <p
                  style={{ fontFamily: "NunitoSans-Regular", marginTop: '24px', marginBottom: '40px' }}
                  className="project_content"
                >
                  Leaftech provided digital twin-based analytics and control
                  services to enhance the shading automation system to maximise
                  efficiency and comfort.
                </p>
                <div className="flex mt-6 items-center pb-5  border-gray-100 mb-5">
                  <div className="flex  items-center">
                    <div className="relative">
                      <ul className="space-y-8">
                        <li className="flex space-x-5">
                          <img className="project_icons h-fit" alt="Project" src={User} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="project_icon_text"
                          >
                            Customer group: Building automation
                          </p>{" "}
                        </li>
                        <li className="flex space-x-5">
                          <img className="project_icons h-fit" alt="Project" src={Default} />
                          <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="project_icon_text"
                          >
                            Building type: Commercial, Wago's own office
                            facility
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
                            System information: Wago’s automation system with
                            individual shading control
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
                            Services: Digital twin set-up, data for shading
                            automation and sensor placement{" "}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className=" text-left project_nums">
                    <div className="flex text-gray-600 body-font">
                      <div style={{display:'flex', flexDirection: 'column', textAlign:'left'}}>
                        <h2
                          style={{ fontFamily: "Exo2-Regular" }}
                          className="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                        >
                          3,800 sqm
                        </h2>
                        <p className="leading-relaxed">Total project area</p>
                      </div>
                      <div className="project_nums_center" style={{display:'flex', flexDirection: 'column', textAlign:'left', width:'171px', margin:'0px 48px 0px 94px'}}>
                        <h2
                          style={{ fontFamily: "Exo2-Regular" }}
                          className="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                        >
                          2,970 €
                        </h2>
                        <p className="leading-relaxed">
                          Total project cost <br />
                          (without wind assessment){" "}
                        </p>
                      </div>
                      <div style={{display:'flex', flexDirection: 'column', textAlign:'left'}}>
                        <h2
                          style={{ fontFamily: "Exo2-Regular" }}
                          className="title-font font-bold sm:text-2xl text-3xl text-gray-900"
                        >
                          250 +
                        </h2>
                        <p className="leading-relaxed">Devices controlled</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </a>
      </div>
    </div>
  );
}
