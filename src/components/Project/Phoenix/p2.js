import React from "react";
import pImage from "../../../assest/Images/project/p1.jpg" 
import { useTranslation } from 'react-i18next';//translator

export default function p2() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator
  return (
    <div className="container">
    <div className="row" style={{marginTop:'120px'}}>
    <div className="text-gray-600 body-font" style={{padding:'0px'}}>
      <div className="flex flex-wrap">
      {t('model_service_contact') === "Contact us" ?
        <div className="single_project_desc_image rounded-lg overflow-hidden" style={{height:'727px'}}>
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={pImage}
            />
          </div>
          :
          <div className="single_project_desc_image rounded-lg overflow-hidden" style={{height:'815px'}}>
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={pImage}
            />
          </div>
          }
          <div className="single_project_desc flex" style={{marginTop:'0px', width:'640px'}}> 
            <div className="flex">
              {/* <div className="w-full h-12 inline-flex items-center justify-left uppercase"></div> */}
              <div className="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Bold", marginLeft:'0px', marginTop:'8px' }}
                  className="single_project_desc_head"
                >
                  {t('phoenix_project_desc_head')}
                </h2>
                <p className="single_project_desc_p"  style={{fontFamily: "NunitoSans-Regular", marginLeft:'0px', marginBottom: '16px'}}>
                {t('phoenix_project_desc_p1')}
                </p>
                <p className="single_project_desc_p"  style={{fontFamily: "NunitoSans-Regular", marginLeft:'0px', marginBottom: '16px'}}>
                {t('phoenix_project_desc_p2')}
                </p>
                <p className="single_project_desc_p">{t('phoenix_project_desc_p3')}</p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center" style={{marginTop:'40px' }}>
              {/* <div className="w-full h-12 inline-flex items-center justify-left "></div> */}
              <div className="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Regular", marginBottom:'8px' }}
                  className="results_benefits_subhead"
                >
                  {t('phoenix_project_desc_subhead1')}
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular", marginBottom:'32px' }}
                  className="single_project_desc_p"
                >
                 {t('phoenix_project_desc_subp1')}
                </p>
                <h2
                 style={{ fontFamily: "Exo2-Regular", marginBottom:'8px' }}
                 className="results_benefits_subhead"
                >
                 {t('phoenix_project_desc_subhead2')}
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  className="single_project_desc_p"
                >
                 {t('phoenix_project_desc_subp2')}
                </p>
                {/* <ul className="my-3 leading-9">
                  <li>High solar heat gain from the large glass façade</li>
                  <li>A non-uniform airflow in the office area </li>
                  <li>
                    Changes in the energy balance due to the inner courtyard..
                  </li>
                </ul> */}
              </div>
            </div>
            {/* <div className="flex flex-col mb-10 lg:items-start items-center">
              <p>
                Addressing these challenges was key to ensuring that the
                contractual obligation with the tenant to maintain a comfortable
                temperature, was fulfilled.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
