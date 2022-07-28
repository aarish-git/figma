import React from "react";
import Trio1 from "../../../assest/Images/project/Trio1.jpg";
import sun from "../../../assest/Icons/Sun.png"
import Wind from "../../../assest/Icons/Wind.png"
import Battery from "../../../assest/Icons/BatteryCharging.png"
import { useTranslation } from 'react-i18next';//translator

export default function man2() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator

  return (
    <div className="row" style={{marginTop:'120px'}}>
      <div className="text-gray-600 body-font">
        <div className="flex flex-wrap">
          <div className="mann_project_desc_image rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={Trio1}
            />
          </div>
          <div className="mann_project_desc flex">
            <div className="flex">
              {/* <div className="w-full h-12 inline-flex items-center justify-left uppercase"></div> */}
              <div className="flex-grow">
              {t('model_service_contact') === "Contact us" ?
                <h2
                  style={{ fontFamily: "Exo2-Bold" }}
                  className="mann_project_desc_head"
                >
                   {t('mann_project_desc_head')}
                </h2>
                :
                <h2
                  style={{ fontFamily: "Exo2-Bold" }}
                  className="mann_project_desc_head_de"
                >
                   {t('mann_project_desc_head')}
                </h2>
              }
                <p className="mann_project_desc_p"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px'}}>
                  {t('mann_project_desc_p1')}
                </p>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" , marginBottom: '40px'}}
                  className="mann_project_desc_p"
                >
                  {t('mann_project_desc_p2')}
                </p>
              </div>
            </div>
              <div className="">
              <h2
                 style={{ fontFamily: "Exo2-Regular", width: '666px' }}
                 className="results_benefits_subhead"
                >
                   {t('mann_project_desc_subhead1')}
                </h2>
                <ul className="space-y-5">
                  <li className="flex space-x-4"><img className="h-fit project_icons" alt="sun" src={sun} /><p style={{fontFamily:"NunitoSans-Regular"}} className="project_icon_text"> {t('mann_project_desc_subp1')}</p></li>
                  <li className="flex space-x-4"><img className="h-fit project_icons" alt="Wind" src={Wind} /><p style={{fontFamily:"NunitoSans-Regular"}} className="project_icon_text"> {t('mann_project_desc_subp2')}</p></li>
                  <li className="flex space-x-4">
                  <img className="h-fit project_icons" alt="Battery" src={Battery} /><p style={{fontFamily:"NunitoSans-Regular"}} className="project_icon_text">{t('mann_project_desc_subp3')}</p>
                  </li>
                </ul>
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
