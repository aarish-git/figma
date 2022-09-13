import React,{useEffect} from "react";
import "./Footer.css";
import linkindin from './../../assest/Icons/LinkedinLogo.svg'
import twitter from './../../assest/Icons/TwitterLogo.svg'
import { useTranslation } from 'react-i18next';//translator
import { Link } from "react-router-dom";
import logo from "../../assest/Images/LEAFTECH (1).svg"

export default function Footer() {
  const { t, i18n } = useTranslation();//translator

  useEffect(()=>{
    if(window.location.hash) {
      setTimeout(()=>{
        window.location.replace(`/${window.location.hash}`);
      },200);
    }
  },[window.location.hash]);

  return (
    <div className="text-gray-600 bg-[#FAFBFC] body-font">
      <footer >
      <div className="container">
        <div className="px-5 py-24 mx-auto footer_desktop" style={{paddingTop:'40px', paddingBottom:'48px'}}>
          <div className="flex flex-wrap md:text-left text-left -mb-10 -mx-4">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4" style={{marginTop:'-10px'}}>
              {/* <h2 style={{fontFamily:"Exo2-Regular"}} className="title-font font-bold text-[#0087FF] tracking-widest text-[30px] mb-3 uppercase">
                LeafTech
              </h2> */}
              <img src={logo} alt="logo" style={{width:'138px', height:'19px', marginBottom:'10px' , marginTop:'15px'}}/>
              <p className="content_address" style={{ fontFamily: "NunitoSans-Regular", display:'flex', flexDirection:'column', alignItems:'flex-start' }}>
                <span>Leaftech GmbH </span>
                <span style={{marginTop:'8px'}}> Am Krögel 2 </span>
                <span style={{marginBottom:'8px'}}> 10179 Berlin </span>
                <span> contact@leaftech.eu </span>
                <span> +49 170 9529249 </span>
              </p>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 leading-loose">
              <h2 style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">
                {/* Solutions for */}
                {t('Footer_head1')}
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link  to="/#foot_building" onClick={() => window.location.replace("/#foot_building")} style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                    {/* Building owners */}
                    {t('Footer_Lista1')}
                 </Link>
                </li>
                <li>
                  <Link to="/#foot_Assest3" onClick={() => window.location.replace("/#foot_Assest")} style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                    {/* Asset managers{" "} */}
                    {t('Footer_Lista2')}
                 </Link>
                </li>
                <li>
                  <Link to="/#foot_Building" onClick={() => window.location.replace("/#foot_Building")} style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                    {/* Building automation{" "} */}
                    {t('Footer_Lista3')}
                 </Link>
                </li>
                <li>
                  <Link to="/#foot_Energyt" onClick={() => window.location.replace("/#foot_Energy")} style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                    {/* Energy providers */}
                    {t('Footer_Lista4')}
                 </Link>
                </li>
                <li>
                  <Link to="/#foot_Architects" onClick={() => window.location.replace("/#foot_Architects")} style={{ fontFamily: "NunitoSans-Regular", width:'105%' }} className="content_subhead">
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
                  <Link to="/legalInformation" style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">{t('Footer_Listc4')}</Link>
                  {/* <span style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">{t('Footer_Listc4')}</span> */}
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
  
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="footer_mobile"> 
          <div className="footer_mobile_main_section"> 
            <div className="footer_mobile_sub_section">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4" style={{marginTop:'-10px'}}>
                {/* <h2 style={{fontFamily:"Exo2-Regular"}} className="title-font font-bold text-[#0087FF] tracking-widest text-[30px] mb-3 uppercase">
                  LeafTech
                </h2> */}
                <img src={logo} alt="logo" style={{width:'138px', height:'19px', marginBottom:'10px', marginTop:'15px'}}/>
                <p className="content_address" style={{ fontFamily: "NunitoSans-Regular", display:'flex', flexDirection:'column', alignItems:'flex-start' }}>
                  <span>Leaftech GmbH </span>
                  <span style={{marginTop:'8px'}}> Am Krögel 2 </span>
                  <span style={{marginBottom:'8px'}}> 10179 Berlin </span>
                  <span> contact@leaftech.eu </span>
                  <span> +49 170 9529249 </span>
                </p>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full  leading-loose">
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
                    <Link to="/legalInformation" style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">{t('Footer_Listc4')}</Link>
                    {/* <span style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">{t('Footer_Listc4')}</span> */}
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
    
                  </li>
                </nav>
              </div>
            </div>
            <div className="footer_mobile_sub_section" >
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 leading-loose">
                <h2 style={{ fontFamily: "NunitoSans-Regular" }} className="content_head">
                  {/* Solutions for */}
                  {t('Footer_head1')}
                </h2>
                <nav className="list-none mb-10">
                  <li>
                    <Link  to="/#foot_building" onClick={() => window.location.replace("/#foot_building")} style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                      {/* Building owners */}
                      {t('Footer_Lista1')}
                  </Link>
                  </li>
                  <li>
                    <Link to="/#foot_Assest3" onClick={() => window.location.replace("/#foot_Assest")} style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                      {/* Asset managers{" "} */}
                      {t('Footer_Lista2')}
                  </Link>
                  </li>
                  <li>
                    <Link to="/#foot_Building" onClick={() => window.location.replace("/#foot_Building")} style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                      {/* Building automation{" "} */}
                      {t('Footer_Lista3')}
                  </Link>
                  </li>
                  <li>
                    <Link to="/#foot_Energyt" onClick={() => window.location.replace("/#foot_Energy")} style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                      {/* Energy providers */}
                      {t('Footer_Lista4')}
                  </Link>
                  </li>
                  <li>
                    <Link to="/#foot_Architects" onClick={() => window.location.replace("/#foot_Architects")} style={{ fontFamily: "NunitoSans-Regular" }} className="content_subhead">
                      {/* Architects & Designers{" "} */}
                      {t('Footer_Lista5')}
                  </Link>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 leading-loose" style={{marginLeft:"-15px"}}>
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
            </div>
          </div>
        </div>

        </div>
        <div className="bg-gray-900 ">
          <div className="footer_last_section">
            <p className="text-center " style={{ fontFamily: "NunitoSans-Regular" }}>
              © 2020 Leaftech — All rights reserved
            </p>
          </div>
        </div>

      </footer>
    </div>

  );
}
