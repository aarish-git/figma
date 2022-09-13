import React from "react";
import "./index.css";
import { useTranslation } from 'react-i18next';//translator
import { Link } from "react-router-dom";

export default function services1() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator

  return (
    <div  className="single_project_container">
    <div className="container">
    <div className="row">
    <div className="row single_project_row_container" >
        <div  className="mx-auto flex  md:flex-row flex-col ">
          <div className="single_service_block">
            <h1
              style={{ fontFamily: "Exo2-Bold" }}
              className="single_project_blue_head text-[#0087FF]"
            >
              {t('control_service_blue_head')}
              </h1>

              {t('model_service_contact') === "Contact us" ?
              <h1
                style={{ fontFamily: "Exo2-Bold" }}
                className="single_project_main_head"
              >
                  {t('control_service_main_head1')}
                <br />
                {t('control_service_main_head2')}
              </h1>
              :
              <div> 
                <h1
                style={{ fontFamily: "Exo2-Bold" }}
                className="single_project_main_head_de Home_section7_desktop_button1"
                >
                  {t('control_service_main_head1')}
                  <br />
                  {t('control_service_main_head2')}
                </h1>
                <h1
                  style={{ fontFamily: "Exo2-Bold" }}
                  className="single_project_main_head_de Home_section7_mobile_button1"
                  >
                    {t('control_service_main_head1')}
                    {t('control_service_main_head2')}
                  </h1>
              </div>
              
            }

            {t('model_service_contact') === "Contact us" ?
               <p className="mb-8 leading-relaxed control_service_content" style={{fontFamily: "NunitoSans-Regular", width: '996px !important', marginBottom: '64px'}}>
               {t('control_service_content1')}
               <br />
               {t('control_service_content2')}
               
               </p>
              :
              <p className="mb-8 leading-relaxed control_service_content_de" style={{fontFamily: "NunitoSans-Regular", width: '1007px !important', marginBottom: '64px'}}>
             {t('control_service_content1')}
               <br />
               {t('control_service_content2')}
            </p>
            }
           
            <div>
            <Link style={{ all: "unset" }} to="/contact">
            <button
              style={{
                fontFamily: "NunitoSans-Regular",
              }}
              className="contact_us service_contact_us"
            >
              {t('model_service_contact')}
            </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* tablet */}
      {/* <div className="service1_t bg-gray-200	 text-gray-600 body-font">
        <div style={{margin:'0px 40px'}} className="x-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 capitalize">
              leaftech's serives: your
              <br />
              one-stop place for custom
              <br />
              and scalable digital solutions
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
            <div>
              <button
                style={{
                  background: "#37474f",
                  padding: "5px",
                  marginTop: "2rem",
                  color: "white",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
    </div>
    </div>
  );
}
