import React from "react";
import img from "../assest/Images/home/Laptop.png";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';//translator

export default function GetStart() {
  const { t, i18n } = useTranslation();//translator
  return (
    <div className='row'  style={{backgroundColor:' #FAFBFC', marginTop: '120px', zIndex: '0', textAlign:'left'}}>
          <div className="col-lg-1"></div> 
          <div className="col-lg-5">
            <h1 className="access_your_head title-font" style={{ fontFamily: "Exo2-Bold" }}>
              {t('Home_section9_head_a')} <br />
              {t('Home_section9_head_b')}
            </h1>
            <p className="access_your_content " style={{ fontFamily: "NunitoSans-Regular"}}>
            
            {t('Home_section9_content')}
            </p>
            <div className="flex">
              <Link style={{all:"unset"}} to="/contact">
              <button
                      style={{
                        fontFamily: "NunitoSans-Regular",
                        marginTop:'64px'
                      }}
                      className="contact_us"
                    >
                      {t('model_service_contact')}
                    </button>
              {/* <button style={{marginTop:'64px', fontSize:'20px'}} className="inline-flex text-white py-2 px-6 focus:outline-none bg-[#0087FF] shadow-[0_4px_4px_rgba(0,135,255,0.25)] rounded-[20px] text-lg">
              {t('model_service_contact')}
              </button> */}
              </Link>
            </div>
          </div>
          <div className="col-lg-5 access_your_img_container">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
          <div className="col-lg-1"></div>
    </div>
  );
}
