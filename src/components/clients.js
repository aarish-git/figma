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
    <div style={{margin: '184px 175px 200px 175px'}}>
    
          <div className="flex flex-col text-center w-full" style={{marginBottom:'28px'}}>
            <h1 className="weSupport" style={{ fontFamily: "Exo2-Bold"}}>
              
              {t('Home_section10_head')}
            </h1>
          </div>
          <div className=" grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-1">
            <div className="flex clientImageBox  grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
              {/* <img className=" h-fit	" src={C1} alt="h-fit" /> */}
              <a target="_blank" rel='noreferrer' href="https://smartgreen-accelerator.de/" >
              <img id="colorImage" className=" h-fit	" alt="h-fit" src={C1} />
              </a>
            </div>
            <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
            <a target="_blank" rel='noreferrer' href="https://www.dena.de/" >
              <img className=" h-fit" alt="h-fit" src={C2} />
            </a>
            </div>
            <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
             <a target="_blank" rel='noreferrer' href="http://www.mujinzo-labs.com/en/" >
              <img className=" h-fit" alt="h-fit" src={C8} />
             </a>
            </div>
            <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
             <a target="_blank" rel='noreferrer' href="https://www.climate-kic.org/" >
              <img className=" h-fit" alt="h-fit" src={C3} />
             </a>
            </div>
          </div>
          <br />
          <br />
          <div style={{marginTop:'0px'}} className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-4 xl:gap-x-1">
            <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
             <a target="_blank" rel='noreferrer' href="https://telekomhilft.telekom.de/t5/TechBoost/ct-p/techboost" >
              <img className=" h-fit" alt="h-fit" src={C4} />
             </a>
            </div>
            <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
             <a target="_blank" rel='noreferrer' href="https://www.dreso.com/" >
              <img className=" h-fit" alt="h-fit" src={C5} />
             </a>
            </div>
            <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
             <a target="_blank" rel='noreferrer' href="https://www.ibb.de/de/startseite/startseite.html" >
              <img className=" h-fit" alt="h-fit" src={C6} />
             </a>
            </div>
            <div className="flex clientImageBox grayscale hover:grayscale-0 justify-center hover:shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] items-center p-3">
             <a target="_blank" rel='noreferrer' href="https://deneff.org/" >
              <img className=" h-fit" alt="h-fit" src={C7} />
             </a>
            </div>
            {/* <div className="flex justify-center">
              <img className=" h-fit" alt="h-fit" src={C8} />
            </div> */}
          </div>
        </div>
    
  );
}
