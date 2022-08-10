import React from "react";
import { useTranslation } from 'react-i18next';//translator

export default function ProjectFoot() {
  const { t, i18n } = useTranslation();//translator
  return (
    <div className="container">
    <div className="row" style={{marginTop:'120px'}}>
      <div className="text-gray-600 body-font" style={{textAlign:'center'}}>
          <div className="flex flex-wrap w-full flex-col text-gray-600 body-font items-center text-center">
            <p style={{ fontFamily: "Exo2-Regular" }} className="get_in_touch">
              {/* Get in touch to learn more about our project  */}
              {t('project_section6_text1')}
            </p>
            <p style={{ fontFamily: "Exo2-Regular" }} className="get_in_touch">
            {t('project_section6_text2')}
            </p>
          </div>
          <a style={{all:"unset"}} href="/contact">
          <button
            style={{
              fontFamily: "NunitoSans-Regular",
              marginTop:'64px', marginBottom:'120px'
            }}
            className="contact_us"
          >
            {t('model_service_contact')}
          </button>
          </a>
      </div>
    </div>
    </div>
  );
}
