import React from "react";
import { useTranslation } from 'react-i18next';//translator
import { Link } from "react-router-dom";

export default function ProjectFoot() {
  const { t, i18n } = useTranslation();//translator
  return (
    <div className="container">
    <div className="row get_in_touch_cotainer" >
          <div className="get_in_touch_desktop flex flex-wrap w-full flex-col  items-center text-center">
            <p style={{ fontFamily: "Exo2-Regular" }} className="get_in_touch">
              {/* Get in touch to learn more about our project  */}
              {t('project_section6_text1')}
            </p>
            <p style={{ fontFamily: "Exo2-Regular" }} className="get_in_touch">
            {t('project_section6_text2')}
            </p>
          </div>
          <div className="get_in_touch_mobile flex flex-wrap w-full flex-col  items-center text-center">
            <p style={{ fontFamily: "Exo2-Regular" }} className="get_in_touch">
              {/* Get in touch to learn more about our project  */}
              {t('project_section6_text_mobile')}
            </p>
          </div>
          <Link  to="/contact">
          <button
            style={{
              fontFamily: "NunitoSans-Regular",
               marginBottom:'120px'
            }}
            className="contact_us"
          >
            {t('model_service_contact')}
          </button>
          </Link>
    </div>
    </div>
  );
}
