import React from "react";
import Building from "../../../assest/Images/project/Buildings.svg";
import { useTranslation } from 'react-i18next';//translator


export default function Index() {
  const { t, i18n } = useTranslation();//translator

  return (
    <div className="row">
      <div className="text-gray-600 body-font project_first_content_block" style={{ background: "linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)"}} >
        <div className="row md:flex-row flex-col items-center" style={{ marginTop: "21px" }}>
          <div className="col-lg-6 items-center">
            <span
              style={{ fontFamily: "Exo2-SemiBold", marginBottom: '16px' }}
              className="text-[#0087FF] uppercase my-3 text-[24px]"
            >
              {/* Projects */}
              {t('Project_section1_head1')}
            </span>
            {t('model_service_contact') === "Contact us" ?
              <h1
                style={{ fontFamily: "Exo2-Bold", marginBottom: '32px', marginTop:'16px' }}
                className="text-[#2F2F2F] text-[58px] "
              >
              {/* Our success stories */}
              {t('Project_section1_head2')}
            </h1>
            :
            <h1
                style={{ fontFamily: "Exo2-Bold", marginBottom: '32px', marginTop:'16px', width:'750px' }}
                className="text-[#2F2F2F] text-[58px] "
              >
              {/* Our success stories */}
              {t('Project_section1_head2')}
            </h1>
            }

            {t('model_service_contact') === "Contact us" ?
              <p style={{fontFamily: "NunitoSans-Regular", marginBottom:'64px', width:'775px'}} className="text-[20px] leading-relaxed">
                {/* We have gained experience working with a wide range of industry
                partners. Take a glance at our project portfolio to learn more
                about the value we created for our clients and their buildings. */}
                {t('project_section1_content')}
              </p>
              :
              <p style={{fontFamily: "NunitoSans-Regular", marginBottom:'64px', width:'780px'}} className="text-[20px] leading-relaxed">
              {/* We have gained experience working with a wide range of industry
              partners. Take a glance at our project portfolio to learn more
              about the value we created for our clients and their buildings. */}
              {t('project_section1_content')}
              </p>
            }
            <div className="flex">
              <a style={{all:"unset"}} href="/contact">
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
          <div className="col-lg-6 ">
            <img
              className="object-cover object-center rounded"
              style={{float: 'right'}}
              alt="hero"
              src={Building}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
