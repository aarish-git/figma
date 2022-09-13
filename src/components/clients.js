import React from "react";
import C1 from "../assest/Images/home/Clients/smartgreen-logo1.png";
import C2 from "../assest/Images/home/Clients/Dena-logo_1.png";
import C3 from "../assest/Images/home/Clients/climate-kic1.png";
import C4 from "../assest/Images/home/Clients/telekom1.png";
import C5 from "../assest/Images/home/Clients/Sommer_logo1.png";
import C6 from "../assest/Images/home/Clients/IBB-Logo1.png";
import C7 from "../assest/Images/home/Clients/DENEFF_Logo1.png";
import C8 from "../assest/Images/home/Clients/mujinzolabs.png";
import { useTranslation } from 'react-i18next';//translator


export default function Clients() {
  const { t, i18n } = useTranslation();//translator

  return (
    <div className="container">

    <div className="weSupport_mainSection" >
    
          <div className="flex flex-col text-center w-full" style={{marginBottom:'28px'}}>
            <h1 className="weSupport" style={{ fontFamily: "Exo2-Bold"}}>
              
              {t('Home_section10_head')}
            </h1>
          </div>

          <div className="weSupport_rowContainer">
            <div className="weSupport_row1">
              <div className="flex clientImageBox  grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center ">
                {/* <img className=" 	" src={C1} alt="" /> */}
                <a target="_blank" rel='noreferrer' href="https://smartgreen-accelerator.de/" >
                <img id="colorImage" className=" 	" alt="" src={C1} />
                </a>
              </div>
              <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center ">
              <a target="_blank" rel='noreferrer' href="https://www.dena.de/" >
                <img className=" " alt="" src={C2} />
              </a>
              </div>
              <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center ">
              <a target="_blank" rel='noreferrer' href="http://www.mujinzo-labs.com/en/" >
                <img className=" " alt="" src={C8} />
              </a>
              </div>
              <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center ">
              <a target="_blank" rel='noreferrer' href="https://www.climate-kic.org/" >
                <img className=" " alt="" src={C3} />
              </a>
              </div>
            </div>

            <div style={{marginTop:'0px'}} className="weSupport_row2">
            <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center ">
             <a target="_blank" rel='noreferrer' href="https://telekomhilft.telekom.de/t5/TechBoost/ct-p/techboost" >
              <img className=" " alt="" src={C4} />
             </a>
            </div>
            <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center ">
             <a target="_blank" rel='noreferrer' href="https://www.dreso.com/" >
              <img className=" " alt="" src={C5} />
             </a>
            </div>
            <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center ">
             <a target="_blank" rel='noreferrer' href="https://www.ibb.de/de/startseite/startseite.html" >
              <img className=" " alt="" src={C6} />
             </a>
            </div>
            <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center ">
             <a target="_blank" rel='noreferrer' href="https://deneff.org/" >
              <img className=" " alt="" src={C7} />
             </a>
            </div>
            {/* <div className="flex justify-center">
              <img className=" " alt="" src={C8} />
            </div> */}
          </div>
          </div>
         
          {/* <br />
          <br /> */}
          
         
        </div>
        </div>
    
  );
}
