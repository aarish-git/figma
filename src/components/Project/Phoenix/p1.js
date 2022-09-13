import React from "react";
import { useTranslation } from 'react-i18next';//translator

export default function p1() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator
  return (
    <div className="row single_project_container" >
    <div className="container">
    <div className="row">
    <div className="row single_project_row_container" >
        <div  className="mx-auto flex  md:flex-row flex-col ">
          <div  style={{textAlign:'left', marginTop:'72px'}}>
            <h1
              style={{ fontFamily: "Exo2-SemiBold" }}
              className="single_project_blue_head text-[#0087FF]"
            >
              {t('phoenix_project_blue_head')}
            </h1>
            <h1
               style={{ fontFamily: "Exo2-Bold" }}
               className="single_project_main_head "
            >
             {t('phoenix_project_main_head')}
            </h1>
            <p
               style={{ fontFamily: "Exo2-Regular" }}
               className="single_project_location_head text-[#4EA0FD]"
            >
              {t('phoenix_project_location_head')}
            </p>
            <p style={{fontFamily:"NunitoSans-Regular", marginBottom:'80px'}} className="leading-relaxed single_project_content">
            {t('phoenix_project_content')}
            </p>
            <div className="flex ">
                <div className="text-gray-900 body-font -mb-10">
                  <div className=" ">
                    <div className="flex flex-wrap space-x-14 " >
                      <div className="sm:2/3 space-y-2">
                        <h2 style={{ fontFamily: "Exo2-Bold" , color:'#2F2F2F'  }} className="single_project_number">
                        ~1,965 m²
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} className="single_project_number_text">
                      {t('phoenix_project_numtext1')}
                      </p>
                    </div>
                    <div className="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Bold" , color:'#2F2F2F' }} className="single_project_number"
                      >
                        169
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} className="single_project_number_text">{t('phoenix_project_numtext2')}</p>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </div>
</div>
  );
}
