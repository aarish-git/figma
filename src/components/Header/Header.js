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
  console.log(history);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
}); 

  useEffect(() => {
    $(function () {
      // this will get the full URL at the address bar
      var url = window.location.href;

      // passes on every "Navlink" tag
      $("#arunUL Navlink").each(function () {
        // checks if its the same on the address bar
        if (url == this.href) {
          $(this).closest("li").addClass("active");
        }
      });

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
  return (
    <div>
      <div className="arun_container">
        <div className="arun_logo">
          <h1 style={{ fontFamily: "Exo2-Regular" }} className="uppercase font-bold tracking-wide">
            LeafTech
          </h1>
          {/* <img src={logo} alt="logo" style={{width:'104px', height:'18px'}}/> */}
        </div>
        {showMenu == false ? (
          <div className="arun_menuList" id="sub-header">
            <ul className="arunUL"  id="arunUL">
              <li>
                <NavLink id="dd_link" style={{textDecoration:"unset",color:"unset", fontFamily: "NunitoSans-Regular"}} className="navFont" to="/" >
                  {/* Home */}
                  <b>{t('Home_text')}</b>
                </NavLink>
              </li>
              <li>
                <NavLink id="dd_link" style={{textDecoration:"unset",color:"unset", fontFamily: "NunitoSans-Regular" }} className="navFont" to="/Project">
                  {/* Project */}
                  <b>{t('Project_text')}</b>
                </NavLink>{" "}
              </li>
              <li>
                {/* <NavLink className="navFont" to="/service">Services</NavLink> */}
                <div class="dropdown">
                  <button class="dropbtn"> <p class="navFont" style={{ fontFamily: "NunitoSans-Regular"}}>{t('Services_text')}</p><img alt="Downarrow" id="dropbtnimg" class="mt-1.5 ml-2" src={Downarrow} width="15" height="30" /></button>
                  <div class="dropdown-content">
                    <NavLink className="navFont"  style={{ fontFamily: "NunitoSans-Regular"}} to="/services/3d-digital-models-of-buildings" activeClassName="active-link">
                    {t('Home_section3_service1')}
                    </NavLink>
                    <NavLink className="navFont"  style={{ fontFamily: "NunitoSans-Regular"}} to="/building-analytics" activeClassName="active-link">
                    {t('Home_section3_service2')}
                    </NavLink>
                    <NavLink className="navFont"  style={{ fontFamily: "NunitoSans-Regular"}} to="/smart-building-control" activeClassName="active-link">
                    {t('Home_section3_service3')}
                    </NavLink>
                  </div>
                </div>
              </li>
              <div className="contactandLanguage">
                <ul className="arunUL" style={{ gap: "64px" }}>
                  <li className="">
                    <NavLink style={{all:"unset"}} to="/contact" activeClassName="active-link">
                      <button className="Contact_btn" type="button" style={{ fontFamily: "NunitoSans-Regular"}} >{t('Contact_text')}</button>
                    </NavLink>
                  </li>
                  {/* <li className="lang_options">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li class="nav-item" onClick={()=>i18next.changeLanguage("en")}>
                        <a class="nav-link active"  id="pills-home-tab"  data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                        EN
                        </a>
                      </li>
                      <li class="nav-item" onClick={()=>i18next.changeLanguage("de")}>
                        <a class="nav-link" id="pills-profile-tab" style={{marginLeft:'24px'}}  data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                        DE
                        </a>
                      </li>
                    </ul>
                  </li>   */}
                  <li className="lang_options">
                    <button id="langContent" onClick={()=>i18next.changeLanguage("en")} style={{ fontFamily: "NunitoSans-Regular"}} className="navFont">EN</button>
                  </li>
                  <li>
                    <button id="langContent" onClick={()=>i18next.changeLanguage("de")} style={{ fontFamily: "NunitoSans-Regular", marginTop:'0px'}} className="navFont">DE</button>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        ) : (
          // mobile view header
          <div className="arun_mobilemenuList">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>{" "}
              </li>

              <li>
                <NavLink to="/Project">Project</NavLink>{" "}
              </li>
              <li>
                <div className="dropdown">
                  <button className="dropbtn">Services</button>
                  <div className="dropdown-content">
                    <NavLink to="/service">Services 1</NavLink>
                    <NavLink to="/service">Services 2</NavLink>
                    <NavLink to="/service">Services 3</NavLink>
                  </div>
                </div>
              </li>
              <li>
                <NavLink to="/contact">
                  <button>Contact</button>
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <div className="mobile_menubutton">
          {showMenu == false ? (
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
