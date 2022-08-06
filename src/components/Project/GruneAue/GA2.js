import React from "react";
import Grananue from "../../../assest/Images/project/GruneAue1.jpg";
import Sun from "../../../assest/Icons/Sun.png"

import ChartLine from "../../../assest/Icons/ChartLine.png"
import { useTranslation } from 'react-i18next';//translator


export default function GA2() {
  const { t, i18n } = useTranslation();//translator


  return (
    <div className="row" style={{marginTop:'120px'}}>
      <div className="text-gray-600 body-font">
        <div className="flex flex-wrap">
          <div className="single_project_desc_image rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={Grananue}
            />
          </div>
          <div className="single_project_desc flex">
            <div className="flex">
              {/* <div className="w-full h-12 inline-flex items-center justify-left uppercase"></div> */}
              <div className="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Bold", marginLeft:'0px'  }}
                  className="single_project_desc_head"
                >
                   {t('grune_project_desc_head')}
                </h2>
                <p className="single_project_desc_p"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('grune_project_desc_p1')}
                </p>
                <p  style={{ fontFamily: "NunitoSans-Regular" , marginBottom: '40px', marginLeft:'0px' }}
                  className="single_project_desc_p">
                   {t('grune_project_desc_p2')}
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              {/* <div className="w-full h-12 inline-flex items-center justify-left "></div> */}
              <div className="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Regular", width: '665px' }}
                  className="results_benefits_subhead"
                >
                   {t('grune_project_desc_subhead1')}
                </h2>
                {/* <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  className="leading-relaxed text-[20px] font-[400]"
                >
                  The building architecture and the proposed modernization posed
                  a risk of the building interiors heating up unevenly. Also,
                  there was uncertainty about the existing HVAC system's
                  capacity to supply the required cooling load. The main reasons
                  for the building to heat up were:
                </p> */}

                <ul className="my-3 space-y-5">
                  <li className="flex space-x-3"><img className="h-fit project_icons"  alt ="Sun" src={Sun} /><p style={{fontFamily:"NunitoSans-Regular"}} className="project_icon_text"> {t('grune_project_desc_subp1')}</p> </li>
                  <li className="flex space-x-3"><img className="h-fit project_icons"  alt ="ChartLine" src={ChartLine} /><p style={{fontFamily:"NunitoSans-Regular"}} className="project_icon_text"> {t('grune_project_desc_subp2')}</p> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
