import React from "react";
import image from "../assest/Images/home/landing_illustration_updatedColours.svg"
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Count() {
  const { t, i18n } = useTranslation();//translator
  return (
          <div className="container">
          <div className="row " >
            <div className=" " style={{marginTop: '100px'}}>

            {/* <div className="home_first_row">  */}
              {/* <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"> */}
              <div className="home_first_content text-left w-full mb-20">
              {t('model_service_contact') === "Contact us" ? 
                <h1
                  style={{ fontFamily: "Exo2-Bold", fontSize: '58px', lineHeight: '70px'}}
                  className="home_first_content_head"
                >
                  {/* Make data-driven decisions. */}
                  
                  {t('Home_head1')}
                  <br />
                  {t('Home_head2')}
                </h1>
                
                :
                
                <h1
                  style={{ fontFamily: "Exo2-Bold", fontSize: '58px', lineHeight: '70px'}}
                  className="home_first_content_head_de"
                >
                  {/* Make data-driven decisions. */}
                  
                  {t('Home_head1')}
                  <br />
                  {t('Home_head2')}
                </h1>
                }
                {t('model_service_contact') === "Contact us" ?
                <p
                  style={{ fontFamily: "NunitoSans-Regular", width:'682px', height:'96px' }}
                  className="home_first_subcontent"
                >
                  {t('Home_content')}
                </p>:<p
                  style={{ fontFamily: "NunitoSans-Regular", width:'645px', height:'96px' }}
                  className="home_first_subcontent1"
                >
                  {t('Home_content')}
                </p>}
                
                

                <div style={{margin:'0px'}} className=" text-left mx-auto">
                  <div className="flex flex-col text-left w-full ">
                    <h1
                      style={{ fontFamily: "Exo2-Bold" }}
                      className="home_first_subhead"
                    >
                      {t('Home_number_head')}
                    </h1>
                  </div>
                  
                  <div className="flex flex-wrap  text-left ">
                    {t('model_service_contact') === "Contact us" ?
                       <div style={{width:'140px', height:'74px'}}>
                       <h2 style={{fontFamily:"Exo2-Bold"}} className="home_first_nums">
                         15
                       </h2>
                       <p style={{fontFamily:"NunitoSans-Regular"}} class="home_first_nums_p">{t('Home_number_text1')}</p>
                     </div>
                     :
                     <div style={{width:'190px', height:'74px'}}>
                     <h2 style={{fontFamily:"Exo2-Bold"}} className="home_first_nums">
                       15
                     </h2>
                     <p style={{fontFamily:"NunitoSans-Regular"}} class="home_first_nums_p">{t('Home_number_text1')}</p>
                   </div>
                    }
                   
                    <div style={{width:'189px', height:'74px', margin: '0px 76px 0px 76px'}}>
                      <h2 style={{fontFamily:"Exo2-Bold"}} className="home_first_nums">
                        500,000+
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} class="home_first_nums_p">{t('Home_number_text2')}</p>
                    </div>

                    {t('model_service_contact') === "Contact us" ?
                       <div style={{width:'130px', height:'74px'}}>
                       <h2 style={{fontFamily:"Exo2-Bold"}} className="home_first_nums">
                         1,500+
                       </h2>
                       <p style={{fontFamily:"NunitoSans-Regular"}} class="home_first_nums_p">{t('Home_number_text3')} </p>
                     </div>
                     :
                     <div style={{width:'145px', height:'74px'}}>
                     <h2 style={{fontFamily:"Exo2-Bold"}} className="home_first_nums">
                       1,500+
                     </h2>
                     <p style={{fontFamily:"NunitoSans-Regular"}} class="home_first_nums_p">{t('Home_number_text3')} </p>
                   </div>
                    }
                   
                  </div>
                  <div className="relative top-10" style={{marginTop:'5px'}}>
                    <Link style={{all:"unset"}} to="/contact">
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
                
              {/* </div> */}
              
              {/* <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 home_first_image" style={{zIndex: '-12'}}> */}
              <div className="home_first_image img-responsive" style={{zIndex: '-12'}}>
              <img
                className="object-cover object-center rounded"  
                // style={{marginLeft: '35px', marginTop: '-30px'}}
                alt="hero"
                src={image}
              />
              </div>
            {/* </div> */}
            </div>
         
          </div>
          </div>
  );
}
