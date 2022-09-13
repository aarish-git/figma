import React from "react";
import LC from "../../../assest/Images/project/wago/wago_result.svg"
import LC2 from "../../../assest/Images/project/wago/wago_german_result.svg"
import Arrow from '../../../assest/Icons2/arrow_down.svg'
import CircleHalf from '../../../assest/Icons2/circle.svg'
import CheckSquare from '../../../assest/Icons2/check.svg'
import LineSegments from '../../../assest/Icons2/chart_03.svg'
import { useTranslation } from 'react-i18next';//translator


export default function wago4() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator
  
  return (
    <div className="container">
    <div className="row" style={{marginTop:'114px', marginBottom: '72px'}}>
      <div className="text-gray-600 body-font">
        <div className=" mx-auto flex  md:flex-row flex-col items-center 	">
          <div className="result_image rounded-lg overflow-hidden" style={{marginLeft: '20px', width:'45%'}}>
             {t('model_service_contact') === "Contact us" ?
            <img
              className="object-cover object-center rounded h-full w-full"
              alt="feature"
              src={LC}
            /> 
            :
            <img
            className="object-cover object-center rounded h-full w-full"
            alt="feature"
            src={LC2}
          />
          }
          </div>
          <div className="result_content lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left "  style={{marginLeft: '32px'}}>
            <h1 style={{fontFamily:"Exo2-Bold", marginBottom:'21px'}} className="results_benefits_head">
            {t('wago_project_results_benefits_head')}
            </h1>
            <p style={{fontFamily:"NunitoSans-Regular", marginBottom:'13px', }} className="results_benefits_content">
            {t('wago_project_results_benefits_content')}
            </p>
            <div className="flex flex-col space-y-5">
            <p style={{fontFamily:"Exo2-Regular", marginBottom:'16px', }} className="results_benefits_subhead">{t('wago_project_results_benefits_subhead')}</p>
              <ul className="space-y-5">
                <li className="flex space-x-5"><img className="h-fit" alt="wago" src ={Arrow} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('wago_project_icon_text1')}</p></li>
                <li className="flex space-x-5"><img className="h-fit" alt="wago" src ={CircleHalf} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('wago_project_icon_text2')}</p> </li>
                <li className="flex space-x-5"><img className="h-fit" alt="wago" src ={CheckSquare} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('wago_project_icon_text3')}</p></li>
                <li className="flex space-x-5"><img className="h-fit" alt="wago" src ={LineSegments} /><p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>{t('wago_project_icon_text4')}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
