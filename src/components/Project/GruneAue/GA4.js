import React from "react";
import Grananue2 from "../../../assest/Images/project/GruneAue2.jpg";
import Line from "../../../assest/Icons2/chart_01.svg";
import Slider  from "../../../assest/Icons2/control.svg"
import Coin from "../../../assest/Icons2/coins.svg"
import { useTranslation } from 'react-i18next';//translator

 
export default function GA4() {
  const { t, i18n } = useTranslation();//translator

  return (
    <div className="row" style={{marginTop:'114px', marginBottom: '72px'}}>
      <div className="text-gray-600 body-font">
        <div className=" mx-auto flex  md:flex-row flex-col items-center 	">
          <div className="result_image rounded-lg overflow-hidden" style={{marginLeft: '20px', width:'45%'}}>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Grananue2}
            />
          </div>
          <div className="result_content lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center">
            <h1 style={{fontFamily:"Exo2-Bold"}} className="results_benefits_head">
            {t('grune_project_results_benefits_head')}
            </h1>
            <p style={{ fontFamily: "NunitoSans-Regular" }} className="results_benefits_content">
            {t('grune_project_results_benefits_content')}
            </p>
            <div className="flex flex-col space-y-5">
            <p style={{fontFamily:"Exo2-Regular"}} className="results_benefits_subhead">{t('grune_project_results_benefits_subhead')}</p>
              <ul className="space-y-5">
                <li className="flex space-x-5"><img className="h-fit" alt="Line" src={Line} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('grune_project_icon_text1')}</p> </li>
                <li className="flex space-x-5"><img className="h-fit" alt="Slider" src={Slider} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('grune_project_icon_text2')}</p> </li>
                <li className="flex space-x-5"><img className="h-fit" alt="Coin" src={Coin} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('grune_project_icon_text3')}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
