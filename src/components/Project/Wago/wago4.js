import React from "react";
import LC from "../../../assest/Images/project/Linechart.jpg"
import Arrow from '../../../assest/Icons/ArrowDownLeft.png'
import CircleHalf from '../../../assest/Icons/CircleHalf.png'
import CheckSquare from '../../../assest/Icons/CheckSquare.png'
import LineSegments from '../../../assest/Icons/LineSegments.png'
import { useTranslation } from 'react-i18next';//translator


export default function wago4() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator
  
  return (
    <div className="row" style={{marginTop:'114px', marginBottom: '72px'}}>
      <div className="text-gray-600 body-font">
        <div className=" mx-auto flex  md:flex-row flex-col items-center 	">
          <div className="rounded-lg overflow-hidden" style={{marginLeft: '-15px', width:'60%'}}>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={LC}
            />
          </div>
          <div className="flex flex-col md:items-start md:text-left items-center" style={{marginLeft: '45px', width:'40%'}}>
            <h1 style={{fontFamily:"Exo2-Bold", marginBottom:'21px'}} className="results_benefits_head">
            {t('wago_project_results_benefits_head')}
            </h1>
            <p style={{fontFamily:"NunitoSans-Regular", marginBottom:'13px', width:'535px'}} className="results_benefits_content">
            {t('wago_project_results_benefits_content')}
            </p>
            <div className="flex flex-col space-y-5">
            <p style={{fontFamily:"Exo2-Regular", marginBottom:'16px'}} className="results_benefits_subhead">{t('wago_project_results_benefits_subhead')}</p>
              <ul className="space-y-3">
                <li className="flex space-x-5"><img className="h-fit" alt="wago" src ={Arrow} /><p style={{fontfamily:"NunitoSans-Regular"}}>{t('wago_project_icon_text1')}</p></li>
                <li className="flex space-x-5"><img className="h-fit" alt="wago" src ={CircleHalf} /><p style={{fontfamily:"NunitoSans-Regular"}}>{t('wago_project_icon_text2')}</p> </li>
                <li className="flex space-x-5"><img className="h-fit" alt="wago" src ={CheckSquare} /><p style={{fontfamily:"NunitoSans-Regular"}}>{t('wago_project_icon_text3')}</p></li>
                <li className="flex space-x-5"><img className="h-fit" alt="wago" src ={LineSegments} /><p style={{fontfamily:"NunitoSans-Regular"}}>{t('wago_project_icon_text4')}</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
