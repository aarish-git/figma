import React from 'react'
import { useTranslation } from 'react-i18next';//translator
import { Link } from "react-router-dom";

export default function p5() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator
  return (
    <div className="row">
      <div className=" mx-auto flex px-5 py-5 items-center justify-center flex-col Home_section5_desktop_button1"  style={{background:'#FAFBFC'}}>
        <div className="text-center w-full">
        <h1 style={{fontFamily:"Exo2-Regular"}} className="discover_how ">
        {t('grune_project_discover_how')}
            </h1>
          <div className="flex justify-center">
          <Link style={{ all: "unset" }} to="/contact">
            <button
            style={{
              fontFamily: "NunitoSans-Regular",
            }}
            className="contact_us"
          >
            {t('model_service_contact')}
          </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" mx-auto flex py-5 items-center justify-center flex-col Home_section5_mobile_button1">
        <div className="text-center w-full">
        <h1 style={{fontFamily:"Exo2-Regular"}} className="discover_how ">
         {t('mobile_grune_project_discover_how1')}
         <br />
         {t('mobile_grune_project_discover_how2')}
            </h1>
          <div className="flex justify-center">
          <Link style={{ all: "unset" }} to="/contact">
            <button
            style={{
              fontFamily: "NunitoSans-Regular",
            }}
            className="contact_us"
          >
            {t('model_service_contact')}
          </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
