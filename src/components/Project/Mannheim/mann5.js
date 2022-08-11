import React from "react";
import { useTranslation } from 'react-i18next';//translator

export default function mann5() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator

  return (
    <div className="row">
      <div className=" body-font bg-[#FAFBFC]">
        <div className=" mx-auto flex px-5 py-5 items-center justify-center flex-col">
          {/* <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          /> */}
          <div className="text-center w-full">
          <h1 style={{fontFamily:"Exo2-Regular"}} className="discover_how tracking-widest uppercase text-[20px] font-[400] py-5 mb-2">
          {t('mann_project_discover_how')}
            </h1>
            <div className="flex justify-center">
              <a href="/contact" >
              <button
            style={{
              fontFamily: "NunitoSans-Regular",
            }}
            className="contact_us"
          >
            {t('model_service_contact')}
          </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
