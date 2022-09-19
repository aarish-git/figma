import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';//translator
import aboutus from "../../assest/about&careers/The story of Leaftech image.png";
import celebrateImg1 from "../../assest/about&careers/tree.svg";
import celebrateImg2 from "../../assest/about&careers/handshake 2.svg";
import celebrateImg3 from "../../assest/about&careers/Earth.svg";
import celebrateImg4 from "../../assest/about&careers/Lifebuoy.svg";
import celebrateImg5 from "../../assest/about&careers/UsersFour.svg";
import medal from "../../assest/about&careers/Medal.svg";
import map from "../../assest/about&careers/Map.svg";

export default function AboutUs() {
    const { t, i18n } = useTranslation();//translator
  return (
    <div className="">
      <div className="container aboutus_landing_toprow">
      <div className="row">
        <div className="text-gray-600 body-font aboutus_first_content_block"  >
          <div className="row md:flex-row flex-col items-center">
            <div className="col-lg-12 items-center">
              <span
                style={{ fontFamily: "Exo2-SemiBold", marginBottom: '16px' }}
                className="project_landing_blueHead"
              >
                {/* Projects */}
                {t('aboutUs_blue_head')}
              </span>
              {t('model_service_contact') === "Contact us" ?
                <h1
                  style={{ fontFamily: "Exo2-Bold", marginBottom: '32px', marginTop:'16px' }}
                  className="project_landing_mainHead"
                >
                {/* Our success stories */}
                {t('aboutUs_mainhead')}
              </h1>
              :
              <h1
                  style={{ fontFamily: "Exo2-Bold", marginBottom: '32px', marginTop:'16px', width:'750px' }}
                  className="project_landing_mainHead"
                >
                {/* Our success stories */}
                {t('aboutUs_mainhead')}
              </h1>
              }

              {t('model_service_contact') === "Contact us" ?
                <p style={{fontFamily: "NunitoSans-Regular"}} className="project_landing_content">
                  {/* We have gained experience working with a wide range of industry
                  partners. Take a glance at our project portfolio to learn more
                  about the value we created for our clients and their buildings. */}
                  {t('aboutUs_content')}
                </p>
                :
                <p style={{fontFamily: "NunitoSans-Regular"}} className="project_landing_content_de">
                {/* We have gained experience working with a wide range of industry
                partners. Take a glance at our project portfolio to learn more
                about the value we created for our clients and their buildings. */}
                {t('aboutUs_content')}
                </p>
              }
              <div className="flex">
              <Link style={{ all: "unset" }} to="/contact">
                <button
                        style={{
                          fontFamily: "NunitoSans-Regular",
                        }}
                        className="contact_us"
                      >
                        {t('aboutUs_head_btnText')}
                      </button>
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-6 ">
              <img
                className="object-cover object-center rounded project_landing_img"
                style={{float: 'right'}}
                alt="hero"
                src={Building}
              />
            </div> */}
          </div>
        </div>
      </div>
      </div>
      

      <div className="row aboutus_desc_container">
          <div className="about_project_desc flex">
            <div className="flex">
              {/* <div className="w-full h-12 inline-flex  justify-left uppercase"></div> */}
              <div className="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Bold", marginLeft:'0px'  }}
                  className="aboutus_storyhead"
                >
                   {t('aboutUs_desc_head1')}
                </h2>
                <p className="aboutus_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_content1')}
                </p>
                <p  style={{ fontFamily: "NunitoSans-Regular" , marginBottom: '40px', marginLeft:'0px' }}
                  className="aboutus_storycontent">
                   {t('aboutUs_desc_content11')}
                </p>
              </div>
            </div>
            <div className="flex">
              {/* <div className="w-full h-12 inline-flex  justify-left uppercase"></div> */}
              <div className="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Bold", marginLeft:'0px'  }}
                  className="aboutus_storyhead"
                >
                   {t('aboutUs_desc_head2')}
                </h2>
                <p className="aboutus_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_content2')}
                </p>
              </div>
            </div>
          </div>

          <div className="about_project_img rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="responsive"
              src={aboutus}
            />
          </div>
       </div>


       <div className="row coreValues_container">
          <div className="coreValues_mainContent flex">
            <h2
              style={{ fontFamily: "Exo2-Bold", marginLeft:'0px'  }}
              className="aboutus_storyhead"
            >
                {t('aboutUs_desc_head3')}
            </h2>
            <div className="coreValues_subContent_container">
              {/* <div className="w-full h-12 inline-flex  justify-left uppercase"></div> */}
              <div className="coreValues_subContent">
                <img src={celebrateImg1} className="coreValues_subContent_img" alt="cele1" />
                <p className="aboutus_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_subcontent1')}
                </p>
              </div>

              <div className="coreValues_subContent">
                <img src={celebrateImg2} className="coreValues_subContent_img" alt="cele2" />
                <p className="aboutus_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_subcontent2')}
                </p>
              </div>

              <div className="coreValues_subContent">
                <img src={celebrateImg3} className="coreValues_subContent_img" alt="cele3" />
                <p className="aboutus_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_subcontent3')}
                </p>
              </div>

              <div className="coreValues_subContent">
                <img src={celebrateImg4} className="coreValues_subContent_img" alt="cele4" />
                <p className="aboutus_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_subcontent4')}
                </p>
              </div>

              <div className="coreValues_subContent">
                <img src={celebrateImg5} className="coreValues_subContent_img" alt="cele5" />
                <p className="aboutus_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_subcontent5')}
                </p>
              </div>
            </div>
            
          </div>
        </div>

        <div className="row reasonToCelebrate_container">
          <div className="reasonToCelebrate_mainContent flex">
            <h2
              style={{ fontFamily: "Exo2-Bold", marginLeft:'0px'  }}
              className="aboutus_storyhead"
            >
                {t('aboutUs_desc_head4')}
            </h2>
            <p className="reasonToCelebrate_topContent" style={{fontFamily: "NunitoSans-Regular"}}>
            {t('aboutUs_desc_content4')}
            </p>
            <div className="reasonToCelebrate_subContent_container">
              {/* <div className="w-full h-12 inline-flex  justify-left uppercase"></div> */}
              <div className="reasonToCelebrate_subContent">
                <img src={medal} className="reasonToCelebrate_subContent_img" alt="cele1" />
                <p><b>2019</b></p>
                <p className="reasonToCelebrate_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_subcontent41')}
                </p>
              </div>

              <div className="reasonToCelebrate_subContent">
                <img src={medal} className="reasonToCelebrate_subContent_img" alt="cele2" />
                <p><b>2019</b></p>
                <p className="reasonToCelebrate_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_subcontent42')}
                </p>
              </div>

              <div className="reasonToCelebrate_subContent">
                <img src={medal} className="reasonToCelebrate_subContent_img" alt="cele3" />
                <p><b>2018</b></p>
                <p className="reasonToCelebrate_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_subcontent43')}
                </p>
              </div>

              <div className="reasonToCelebrate_subContent">
                <img src={medal} className="reasonToCelebrate_subContent_img" alt="cele4" />
                <p><b>2017</b></p>
                <p className="reasonToCelebrate_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_subcontent44')}
                </p>
              </div>

              <div className="reasonToCelebrate_subContent">
                <img src={medal} className="reasonToCelebrate_subContent_img" alt="cele5" />
                <p><b>2016</b></p>
                <p className="reasonToCelebrate_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_subcontent45')}
                </p>
              </div>
            </div>
            
          </div>
        </div>


        <div className="row cultivating_desc_container">
          <div className="cultivating_project_desc flex">
            <div className="flex">
              {/* <div className="w-full h-12 inline-flex  justify-left uppercase"></div> */}
              <div className="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Bold", marginLeft:'0px'  }}
                  className="cultivating_storyhead"
                >
                   {t('aboutUs_desc_head5')}
                </h2>
                <p className="cultivating_storycontent"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px', marginLeft:'0px' }}>
                {t('aboutUs_desc_content5')}
                </p>
              </div>
            </div>
            <div className="flex">
              <Link style={{ all: "unset" }} to="/contact">
                <button
                        style={{
                          fontFamily: "NunitoSans-Regular",
                        }}
                        className="contact_us"
                      >
                        {t('aboutUs_desc_btntext')}
                      </button>
                </Link>
              </div>
          </div>

          <div className="about_project_img rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="responsive"
              src={map}
            />
          </div>
       </div>

    </div>
  )
}



