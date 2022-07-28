import React from "react";
import "./index.css";
import Slider from "../../../../assest/Icons/HardDrive.png";
import ChartPie from "../../../../assest/Icons/ChartLine.png";
import BatteryCharging from "../../../../assest/Icons/CheckSquare.png";
import Tree from "../../../../assest/Icons/Default.png";
import GlobeHemisphereEast from "../../../../assest/Icons/CircleHalf.png";
import ClockAfternoon from "../../../../assest/Icons/ClockAfternoon.png";
import Mac from "../../../../assest/Images/services/Control/control_laptop.gif";
import { useTranslation } from 'react-i18next';//translator

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator

  return (
    <div className="row" style={{marginTop:'120px', marginBottom: '240px'}}>
    <div className="text-gray-600 body-font">
      <div className=" mx-auto flex  md:flex-row flex-col items-center 	">
        <div className="flex flex-col md:items-start md:text-left items-center"  style={{width:'940px', height:'455px'}}>
            <h1 style={{fontFamily:"Exo2-Bold"}} className="service_3d_head">
            {t('control_service_results_benefits_head')}
            </h1>
            <ul className="space-y-5" style={{marginTop:'40px', marginBottom: '64px'}}>
              <li className="flex space-x-5">
                <img className="h-fit project_icons" alt="control" src={Slider} />
                <p className="project_icon_text">
                {t('control_service_icon_text1')}
                </p>
              </li>
              <li className="flex space-x-5">
                <img className="h-fit project_icons" alt="control" src={ChartPie} />
                <p className="project_icon_text">
                 {t('control_service_icon_text2')}
                </p>
              </li>
              <li className="flex space-x-5">
                <img className="h-fit project_icons" alt="control" src={BatteryCharging} />
                <p className="project_icon_text">{t('control_service_icon_text3')}</p>
              </li>

              {t('model_service_contact') === "Contact us" ?
              <li className="flex space-x-5">
                <img className="h-fit project_icons" alt="control" src={Tree} />
                <p className="project_icon_text">
                {t('control_service_icon_text4')}
                </p>
              </li>
              :
              <li className="flex space-x-5" style={{marginTop:'30px'}}>
                <img className="h-fit project_icons" alt="control" src={Tree} />
                <p className="project_icon_text">
                {t('control_service_icon_text4')}
                </p>
              </li>
              }


              {t('model_service_contact') === "Contact us" ?
              <li className="flex space-x-5">
                <img className="h-fit project_icons" alt="control" src={GlobeHemisphereEast} />
                <p className="project_icon_text">
                {t('control_service_icon_text5')}
                </p>
              </li>
              :
              <li className="flex space-x-5" style={{marginTop:'40px'}}>
                <img className="h-fit project_icons" alt="control" src={GlobeHemisphereEast} />
                <p className="project_icon_text">
                {t('control_service_icon_text5')}
                </p>
              </li>
              }


              {t('model_service_contact') === "Contact us" ?
              <li className="flex space-x-5">
                <img className="h-fit project_icons" alt="control" src={ClockAfternoon} />
                <p className="project_icon_text">{t('control_service_icon_text6')}</p>
              </li>
              :
              <li className="flex space-x-5" style={{marginTop:'40px'}}>
                <img className="h-fit project_icons" alt="control" src={ClockAfternoon} />
                <p className="project_icon_text">{t('control_service_icon_text6')}</p>
              </li>
              }
            </ul>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <a href="/contact" >
                <button style={{fontFamily: "NunitoSans-Regular", fontSize:'20px', padding:'10px 20px'}} className="shadow-[0_4px_4px_rgba(0,135,255,0.25)] border-solid border-[#2F2F2F] border-1  height-[54px] py-2 rounded-[20px]">
                {t('model_service_contact')}
                </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{width:'661px', height:'451px'}}>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Mac}
            />
          </div>
        </div>
      </div>

      {/* tablet */}
      <div className="service3_t text-gray-600 body-font ">
        <div className="container px-3 py-5 mx-auto items-center bg-gray-100">
          <div className=" items-center text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 capitalize">
              what can you do with this model?
            </h1>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid.
            </p>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid.
            </p>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid.
            </p>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid.
            </p>

            <div className="flex w-full md:justify-start justify-center text-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <button className=" bg-gray-700 rounded border border-slate-900 text-white focus:ring-2 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out capitalize">
                  contact page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
