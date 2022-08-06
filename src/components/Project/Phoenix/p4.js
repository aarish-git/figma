import React from "react";
import pImage from "../../../assest/Images/project/Chart.png";
import Battery from "../../../assest/Icons/BatteryCharging.png";
import CircleHalf from "../../../assest/Icons/CircleHalf.png";
import Line from "../../../assest/Icons/ChartLine.png";
import HardDrive from "../../../assest/Icons/HardDrive.png";
import LockOpen from "../../../assest/Icons/LockOpen.png";
import LineSegments from "../../../assest/Icons/LineSegments.png";
import { useTranslation } from 'react-i18next';//translator


export default function p4() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator
  return (
    <div className="row" style={{marginTop:'114px', marginBottom: '72px'}}>
      <div className="text-gray-600 body-font">
        <div className=" mx-auto flex  md:flex-row flex-col items-center 	">
          <div className="result_image rounded-lg overflow-hidden" style={{marginLeft: '20px', width:'47%'}}>
            <img
              className="object-cover object-center rounded h-full w-full"
              alt="feature"
              src={pImage}
            />
          </div>
          <div className="result_content lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center" style={{marginLeft: '32px'}}>
            <h1 style={{fontFamily:"Exo2-Bold"}} className="results_benefits_head">
            {t('phoenix_project_results_benefits_head')}
            </h1>
            <p  style={{ fontFamily: "NunitoSans-Regular"}} className="results_benefits_content" >
            {t('phoenix_project_results_benefits_content')}
            </p>
            <div className="flex flex-col space-y-5" >
            <p style={{fontFamily:"Exo2-Regular", marginBottom:'0px', width:'573px'}} className="results_benefits_subhead">{t('phoenix_project_results_benefits_subhead')}</p>
              <ul className="space-y-7">
                <li className="flex space-x-5"><img className="h-fit project_icons" alt="Project" src ={Battery} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('phoenix_project_icon_text1')} </p></li>
                <li className="flex space-x-5"><img className="h-fit project_icons" alt="Project" src ={CircleHalf} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('phoenix_project_icon_text2')}</p></li>
                <li className="flex space-x-5"><img className="h-fit project_icons" alt="Project" src ={Line} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('phoenix_project_icon_text3')}</p></li>
                <li className="flex space-x-5"><img className="h-fit project_icons" alt="Project" src ={HardDrive} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('phoenix_project_icon_text4')}</p> </li>
                {t('model_service_contact') === "Contact us" ?
                  <li className="flex space-x-5"><img className="h-fit project_icons" alt="Project" src ={LockOpen} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('phoenix_project_icon_text5')}</p> </li>
                  :
                  <li className="flex space-x-5" style={{marginTop:'40px'}}><img className="h-fit project_icons" alt="Project" src ={LockOpen} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('phoenix_project_icon_text5')}</p> </li>
                }
                <li className="flex space-x-5"><img className="h-fit project_icons" alt="Project" src ={LineSegments} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('phoenix_project_icon_text6')}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
