import React, { useState, useEffect,useLayoutEffect } from "react";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Downarrow from "../../assest/Icons/chevron.png"
import logo from "../../assest/Images/LEAFTECH.svg"
import "./Header.css";
import { Outlet, NavLink,Link } from "react-router-dom";
import $ from "jquery";
import { useTranslation } from 'react-i18next';//translator
import i18next from 'i18next';

export default function Header({ history }) {
  const { t, i18n } = useTranslation();//translator
  const [showMenu, setMenu] = useState(false);
  const [semi, setBold] = useState(false);

  console.log(history);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }); 

  useEffect(() => {
    $(function () {
      // this will get the full URL at the address bar
      var url = window.location.href;

      // passes on every "Navlink" tag
      // $("#arunUL Navlink").each(function () {
      //   // checks if its the same on the address bar
      //   if (url === this.href) {
      //     $(this).closest("li").addClass("active");
      //     setBold(!semi);
      //   }
      // });

      // $("#langContent").each(function () {
      //   // checks if its the same on the address bar
      //   if (url == this.href) {
      //     $(this).closest("li").addClass("active");
      //   }
      // });


    });
  }, []);

  const handleMobile = () => {
    setMenu(!showMenu);
  };

 
  const handleClick = event => {
    console.log(event.currentTarget, 'hi')
    // event.currentTarget.style.fontFamily = 'NunitoSans-ExtraBold';
  };

  
  return (
    <div>

      <div className="arun_container">
        <div className="container container-flex-display header_container">
        <div className="arun_logo">
          {/* <h1 style={{ fontFamily: "Exo2-Regular" }} className="uppercase font-bold tracking-wide">
            LeafTech
          </h1> */}
          <Link  to="/" >
            <img src={logo} alt="logo" className="responsive leaftech_logo desktop_logo" />
          </Link>

        </div>
        {showMenu === false ? (
          <div className="arun_menuList" id="sub-header">
            <ul className="arunUL"  id="arunUL">
              <li>
                <NavLink id="dd_link" onClick={handleClick} className="dd_link"  to="/" >
                  {/* Home */}
                 {t('Home_text')}
                </NavLink>
                </li>
                <li>
                <NavLink id="dd_link" onClick={handleClick} className="dd_link"  to="/Project">
                  {/* Project */}
                 {t('Project_text')}
                </NavLink>{" "}
              </li>
                {/* <NavLink className="navFont" to="/service">Services</NavLink> */}
                <li>
                <div className="dropdown">
                  <button className="dropbtn "> <p className="" style={{fontWeight:'500'}}>{t('Services_text')}</p><img alt="Downarrow" id="dropbtnimg" className="mt-1.5 ml-2" src={Downarrow} width="15" height="30" /></button>
                  <div className="dropdown-content">
                    <NavLink id="" onClick={handleClick} className=""  to="/services/3d-digital-models-of-buildings" activeClassName="active-link">
                    {t('Home_section3_service1')}
                    </NavLink>
                    <NavLink id="" onClick={handleClick} className=""  to="/building-analytics" activeClassName="active-link">
                    {t('Home_section3_service2')}
                    </NavLink>
                    <NavLink id="" onClick={handleClick} className=""  to="/smart-building-control" activeClassName="active-link">
                    {t('Home_section3_service3')}
                    </NavLink>
                  </div>
                </div>
                </li>

              <div className="contactandLanguage">
                <ul className="arunUL" style={{ gap: "0px" }}>
                  <li className="">
                    <NavLink style={{all:"unset"}} to="/contact" activeClassName="active-link">
                      <button className="Contact_btn" type="button" style={{ fontFamily: "NunitoSans-SemiBold", marginRight:'64px'}} >{t('Contact_text')}</button>
                    </NavLink>
                  </li>
                 
                    <li className="lang_options">
                      {t('model_service_contact') === "Contact us" ?
                      <button id="langContent" onClick={()=>i18next.changeLanguage("en")} style={{ fontFamily: "NunitoSans-ExtraBold", marginRight: '24px' }}>EN</button>
                       :
                      <button id="langContent" onClick={()=>i18next.changeLanguage("en")} style={{ fontFamily: "NunitoSans-SemiBold", marginRight: '24px' }}>EN</button>
                      }
                      </li>
                    <li>
                      {t('model_service_contact') === "Contact us" ?
                      <button id="langContent" onClick={()=>i18next.changeLanguage("de")} style={{ fontFamily: "NunitoSans-SemiBold", marginRight: '20px',  marginTop:'0px'}}>DE</button>
                      :
                      <button id="langContent" onClick={()=>i18next.changeLanguage("de")} style={{ fontFamily: "NunitoSans-ExtraBold", marginRight: '20px',  marginTop:'0px'}}>DE</button>
                      }
                    </li>
                   
                </ul>
              </div>
            </ul>
          </div>
        ) : (
          // mobile view header
          
          <div className="arun_mobilemenuList">
          
             <ul className="arunUL"  id="arunUL">
              <li>
                <NavLink id="dd_link" onClick={handleClick}  style={{ fontFamily: "NunitoSans-Regular"}} className="dd_link"  to="/" >
                  {/* Home */}
                 {t('Home_text')}
                </NavLink>
                </li>
                <li>
                <NavLink id="dd_link" onClick={handleClick}  style={{ fontFamily: "NunitoSans-Regular"}} className="dd_link"  to="/Project">
                  {/* Project */}
                 {t('Project_text')}
                </NavLink>{" "}
              </li>
                {/* <NavLink className="navFont" to="/service">Services</NavLink> */}
                <li>
                <div className="accordian_container">
                  <div className="accordion" id="myAccordion" style={{background:'rgba(255, 255, 255, 0.5) !important;' }}>
                      <div className="accordion-item" >
                          <h2 className="accordion-header" id="headingOne" >
                              <button type="button"  style={{ fontFamily: "NunitoSans-Regular"}}  className="accordion-button" data-bs-toggle="collapse"  data-bs-target="#collapseOne"><p className="" style={{fontWeight:'400'}}>{t('Services_text')}</p></button>									
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#myAccordion">
                              <div className="card-body">
                              <NavLink id="" onClick={handleClick} className=""   style={{ fontFamily: "NunitoSans-Regular"}} to="/smart-building-control" activeClassName="active-link">
                                {t('Home_section3_service3')}
                                </NavLink>
                             
                                <NavLink id="" onClick={handleClick} className=""   style={{ fontFamily: "NunitoSans-Regular"}} to="/building-analytics" activeClassName="active-link">
                                {t('Home_section3_service2')}
                                </NavLink>

                                <NavLink id="" onClick={handleClick} className=""   style={{ fontFamily: "NunitoSans-Regular"}} to="/services/3d-digital-models-of-buildings" activeClassName="active-link">
                                {t('Home_section3_service1')}
                                </NavLink>
                               
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
                {/* <div className="dropdown">
                  <button className="dropbtn "> <p className="" style={{fontWeight:'500'}}>{t('Services_text')}</p><img alt="Downarrow" id="dropbtnimg" className="mt-1.5 ml-2" src={Downarrow} width="15" height="30" /></button>
                  <div className="dropdown-content">
                    <NavLink id="" onClick={handleClick} className=""  to="/services/3d-digital-models-of-buildings" activeClassName="active-link">
                    {t('Home_section3_service1')}
                    </NavLink>
                    <NavLink id="" onClick={handleClick} className=""  to="/building-analytics" activeClassName="active-link">
                    {t('Home_section3_service2')}
                    </NavLink>
                    <NavLink id="" onClick={handleClick} className=""  to="/smart-building-control" activeClassName="active-link">
                    {t('Home_section3_service3')}
                    </NavLink>
                  </div>
                </div> */}
                </li>

              <div className="contactandLanguage">
                <ul className="arunUL" style={{ gap: "0px" }}>
                 
                 <li>
                       <label className="lang_label" style={{ fontFamily: "NunitoSans-Regular"}}>Language settings</label>
                      <div style={{display:'flex'}}> 
                      <li className="lang_options">
                     
                     {t('model_service_contact') === "Contact us" ?
                     <button id="langContent" onClick={()=>i18next.changeLanguage("en")} style={{ fontFamily: "NunitoSans-ExtraBold", marginRight: '24px' }}>English</button>
                      :
                     <button id="langContent" onClick={()=>i18next.changeLanguage("en")} style={{ fontFamily: "NunitoSans-SemiBold", marginRight: '24px' }}>English</button>
                     }
                     </li>
                   <li>
                     {t('model_service_contact') === "Contact us" ?
                     <button id="langContent" onClick={()=>i18next.changeLanguage("de")} style={{ fontFamily: "NunitoSans-SemiBold", marginRight: '20px',  marginTop:'0px'}}>German</button>
                     :
                     <button id="langContent" onClick={()=>i18next.changeLanguage("de")} style={{ fontFamily: "NunitoSans-ExtraBold", marginRight: '20px',  marginTop:'0px'}}>German</button>
                     }
                   </li>
                      </div>
                    </li>

                    <li className="">
                    <NavLink style={{all:"unset"}} to="/contact" activeClassName="active-link">
                      <button className="Contact_btn nav_mobile_contact" type="button" style={{ fontFamily: "NunitoSans-SemiBold", marginRight:'64px'}} >{t('Contact_text')}</button>
                    </NavLink>
                  </li>
                   
                </ul>
              </div>
            </ul>
          </div>
        )}

      
        </div>
        <div className="mobile_menubutton">
          {showMenu === false ? (
            <MenuSharpIcon onClick={handleMobile} />
          ) : (
            <CloseSharpIcon onClick={handleMobile} />
          )}
        </div>
      </div>


      <Outlet />
    </div>
  );
}
