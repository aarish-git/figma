import React from "react";
import Trio2 from "../../../assest/Images/project/manheim/Triomanheim_result.svg";
import Trio3 from "../../../assest/Images/project/manheim/trioManheim_german_result.svg";
import Slider from "../../../assest/Icons2/control.svg"
import Stamp from "../../../assest/Icons2/stamp.svg"
import Coins from "../../../assest/Icons2/coins.svg"
import Armchair from "../../../assest/Icons2/sofa.svg"
import { useTranslation } from 'react-i18next';//translator

export default function mann4() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator

  return (
    <div className="container">
    <div className="row resultContent_container" style={{marginTop:'114px', marginBottom: '72px'}}>
      <div className="text-gray-600 body-font">
        <div className=" mx-auto flex  md:flex-row flex-col items-center 	">
          <div className="rounded-lg overflow-hidden">
          {t('model_service_contact') === "Contact us" ?
            <img
              className="object-cover object-center rounded h-full w-full"
              alt="feature"
              src={Trio2}
            /> 
            :
            <img
            className="object-cover object-center rounded h-full w-full"
            alt="feature"
            src={Trio3}
          />
          }
          </div>
          <div className="result_content lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left">
            <h1 style={{fontFamily:"Exo2-Bold"}} className="results_benefits_head">
            {t('mann_project_results_benefits_head')}
            </h1>
            <p style={{fontFamily: "NunitoSans-Regular"}} className="results_benefits_content">
            {t('mann_project_results_benefits_content')}
            </p>
            <div className="flex flex-col">
              <p style={{fontFamily:"Exo2-Regular"}} className="results_benefits_subhead">{t('mann_project_results_benefits_subhead')}</p>
              <ul className="space-y-5">
                <li className="flex space-x-5"><img className="h-fit" alt="Slider" src={Slider} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('mann_project_icon_text1')}</p></li>
                <li className="flex space-x-5"><img className="h-fit" alt="Stamp" src={Stamp} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('mann_project_icon_text2')}</p></li>
                <li className="flex space-x-5"><img className="h-fit" alt="Coins" src={Coins} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('mann_project_icon_text3')}</p></li>
                <li className="flex space-x-5"><img className="h-fit" alt="Armchair" src={Armchair} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('mann_project_icon_text4')}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
