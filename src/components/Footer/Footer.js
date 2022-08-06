import React from "react";
import "./Footer.css";
import linkindin from './../../assest/Icons/LinkedinLogo.svg'
import twitter from './../../assest/Icons/TwitterLogo.svg'
import { useTranslation } from 'react-i18next';//translator
import { Link } from "react-router-dom";
import logo from "../../assest/Images/LEAFTECH (1).svg"

export default function Footer() {
  const { t, i18n } = useTranslation();//translator

  return (
    <div>
      <footer className="text-gray-600 bg-[#FAFBFC] body-font">
        <div className="px-5 py-24 mx-auto" style={{paddingTop:'40px', paddingBottom:'48px'}}>
          <div className="flex flex-wrap md:text-left text-left -mb-10 -mx-4">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4" style={{marginTop:'-10px'}}>
              {/* <h2 style={{fontFamily:"Exo2-Regular"}} className="title-font font-bold text-[#0087FF] tracking-widest text-[30px] mb-3 uppercase">
                LeafTech
              </h2> */}
              <img src={logo} alt="logo" style={{width:'138px', height:'19px', marginBottom:'10px'}}/>
              <p className="content_address" style={{ fontFamily: "NunitoSans-Regular", display:'flex', flexDirection:'column', alignItems:'flex-start' }}>
                <span>Leaftech GmbH </span>
                <span style={{marginTop:'8px'}}> Am Krögel 2 </span>
                <span style={{marginBottom:'8px'}}> 10179 Berlin </span>
                <span> contact@leaftech.eu </span>
                <span> +49 170 9529249 </span>
              </p>
                
                  {/* <p href="" style={{ fontFamily: "NunitoSans-Regular" }} className="content_address">Leaftech GmbH</p>
                  <p href="" style={{ fontFamily: "NunitoSans-Regular" }} className="content_address">Am Krögel 2</p>
                  <p href="" style={{ fontFamily: "NunitoSans-Regular" }} className="content_address">10179 Berlin</p>
                  <p href="" style={{ fontFamily: "NunitoSans-Regular" }} className="content_address">
                    contact@leaftech.eu
                  </p>
                  <p href="" style={{ fontFamily: "NunitoSans-Regular" }} className="content_address">
                    +49 170 9529249
                  </p> */}
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 leading-loose">
              <h2 style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">
                {/* Solutions for */}
                {t('Footer_head1')}
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" style={{ fontFamily: "NunitoSans-Regular" }} class="content_subhead">
                    {/* Building owners */}
                    {t('Footer_Lista1')}
                 </Link>
                </li>
                <li>
                  <Link to="/" style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                    {/* Asset managers{" "} */}
                    {t('Footer_Lista2')}
                 </Link>
                </li>
                <li>
                  <Link to="/" style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                    {/* Building automation{" "} */}
                    {t('Footer_Lista3')}
                 </Link>
                </li>
                <li>
                  <Link to="/" style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                    {/* Energy providers */}
                    {t('Footer_Lista4')}
                 </Link>
                </li>
                <li>
                  <Link to="/" style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                    {/* Architects & Designers{" "} */}
                    {t('Footer_Lista5')}
                 </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 leading-loose">
              <h2 style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">
                {/* Services */}
                {t('Footer_head2')}
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/services/3d-digital-models-of-buildings" style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">{t('Footer_Listb1')}</Link>
                </li>
                <li>
                  <Link to="/building-analytics" style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">{t('Footer_Listb2')}</Link>
                </li>
                <li>
                  <Link to="/smart-building-control" style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">{t('Footer_Listb3')}</Link>
                </li>
                {/* <li>
                  <a href="" style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">Digital twin platform</a>
                </li> */}
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 leading-loose">
              <h2 style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">
                {/* Home */}
                {t('Footer_head3')}
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/Project" style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">
                    {/* Project showcases{" "} */}
                    {t('Footer_Listc1')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">{t('Footer_Listc2')}</Link>
                </li>
                <li>
                  <a href="https://frontend.apps.leaftech.eu/login" style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">
                    {/* Customer Platform */}
                    {t('Footer_Listc3')}
                  </a>
                </li>
                <li>
                  <span style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">{t('Footer_Listc4')}</span>
                </li>
                <li>
                  <div style={{display:'flex', alignItems:'center'}}>
                    <a href="https://twitter.com/leaftech_twitt?lang=de" className="content_head">
                      <img src={twitter} alt="logo" />
                    </a>
                    <a href="https://www.linkedin.com/company/leaftech/mycompany/" style={{marginLeft:'15px'}} className="content_head">
                      <img src={linkindin} alt="logo" />
                    </a>
                  </div>
                  {/* <div className="border-gray-200">
                    <div className="container px-5 py-2 flex flex-wrap mx-auto items-center">
                      <span className="inline-flex lg:-ml-14 lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                        <a href="" className="ml-3 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a href="" className="ml-3 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="0"
                            className="w-5 h-5"
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
                </li>
              </nav>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a href="" className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div> */}
          </div>
        </div>
        {/* <div className="border-t border-gray-200">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a href="" className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>

              <a href="" className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
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
        <div className="bg-gray-900 ">
          <div className="footer_last_section">
            <p className="text-gray-500 text-sm text-center " style={{ fontFamily: "NunitoSans-Regular" }}>
              © 2020 Leaftech — All rights reserved
              {/* <a
                className="text-gray-600 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                All rights reserved
              </a> */}
            </p>
            {/* <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              Enamel pin tousled raclette tacos irony
            </span> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
