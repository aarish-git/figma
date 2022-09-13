import React from "react";
import { useTranslation } from 'react-i18next';//translator


export default function gran() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator


  return (
    <div className="row single_project_container" >
    <div className="container">
    <div className="row ">
    <div className="single_project_row_container" >
        <div  className="mx-auto flex  md:flex-row flex-col ">
          <div  style={{textAlign:'left', marginTop:'72px' , marginLeft:'15px' }}>
            <h1
              style={{ fontFamily: "Exo2-SemiBold" }}
              className="single_project_blue_head text-[#0087FF]"
            >
              {t('grune_project_blue_head')}
            </h1>
            <h1
              style={{ fontFamily: "Exo2-Bold" }}
              className="single_project_main_head"
            >
               {t('grune_project_main_head')}
            </h1>
            <p
             style={{ fontFamily: "Exo2-Regular" }}
             className="single_project_location_head text-[#4EA0FD]"
            >
              {t('grune_project_location_head')}
            </p>
            <p style={{fontFamily:"NunitoSans-Regular"}} className="mb-8 leading-relaxed single_project_content">
            {t('grune_project_content')}
            </p>
            <div className="flex ">
              <div className="text-gray-900 body-font">
                <div className="  ">
                  <div className="flex flex-wrap space-x-14 ">
                    <div className="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Bold" , color:'#2F2F2F'  }} className="single_project_number"
                      >
                        15,000 m²
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} className="single_project_number_text">
                      {t('grune_project_numtext1')}
                      </p>
                    </div>
                 
                    <div className="sm:2/3 space-y-2" >
                      <h2
                        style={{ fontFamily: "Exo2-Bold" , color:'#2F2F2F'  }} className="single_project_number"
                      >
                        116 units
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} className="single_project_number_text">
                      {t('grune_project_numtext2')}
                      </p>
                    </div>
                    {/* <div className="p-4 sm:w-1/4 w-5">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                      4
                    </h2>
                    <p className="leading-relaxed">Products</p>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div> */}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
