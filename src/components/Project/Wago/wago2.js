import React from "react";
import wago from "../../../assest/Images/project/project4.jpg";
import Sun from "../../../assest/Icons/Sun.png"
import Circle from "../../../assest/Icons/CircleHalf.png"
import { useTranslation } from 'react-i18next';//translator

export default function wago2() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator

  return (
    <div className="row" style={{marginTop:'120px'}}>
    <div className="text-gray-600 body-font">
      <div className="flex flex-wrap">
        <div className="single_project_desc_image rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={wago}
            />
          </div>
          <div className="single_project_desc flex">
            <div className="flex">
              {/* <div className="w-full h-12 inline-flex items-center justify-left uppercase"></div> */}
              <div className="flex-grow">
              <h2
                  style={{ fontFamily: "Exo2-Bold", marginLeft:'0px' }}
                  className="single_project_desc_head"
                >
                   {t('wago_project_desc_head')}
                </h2>
                <p className="mann_project_desc_p"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px'}}>
                  {t('wago_project_desc_p1')}
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              {/* <div className="w-full h-12 inline-flex items-center justify-left "></div> */}
              <div className="flex-grow">
              <h2
                 style={{ fontFamily: "Exo2-Regular", width: '664px', marginTop:'40px' }}
                 className="results_benefits_subhead"
                >
                  {t('wago_project_desc_subhead1')}
                </h2>
                <ul className="my-3 space-y-4">
                  <li className="flex space-x-5"><img className="h-fit project_icons" alt="Sun" src={Sun} /><p style={{fontFamily:"NunitoSans-Regular"}} className="project_icon_text"> {t('wago_project_desc_subp1')}</p></li>
                  <li className="flex space-x-5"><img className="h-fit project_icons" alt="Circle" src={Circle} /><p style={{fontFamily:"NunitoSans-Regular"}} className="project_icon_text">
                    {t('wago_project_desc_subp2')}
                    </p>
                  </li>
                  {/* <li>
                    Changes in the energy balance due to the inner courtyard..
                  </li> */}
                </ul>
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
  );
}
