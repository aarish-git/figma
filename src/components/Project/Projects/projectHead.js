import React from "react";
import Building from "../../../assest/Images/project/Buildings.svg";
import { useTranslation } from 'react-i18next';//translator
import { Link } from "react-router-dom";


export default function Index() {
  const { t, i18n } = useTranslation();//translator

  return (
    <div className="project_landing_toprow">
    <div className="container">
    <div className="row">
      <div className="text-gray-600 body-font project_first_content_block"  >
        <div className="row md:flex-row flex-col items-center" style={{ marginTop: "21px" }}>
          <div className="col-lg-6 items-center">
            <span
              style={{ fontFamily: "Exo2-SemiBold", marginBottom: '16px' }}
              className="project_landing_blueHead"
            >
              {/* Projects */}
              {t('Project_section1_head1')}
            </span>
            {t('model_service_contact') === "Contact us" ?
              <h1
                style={{ fontFamily: "Exo2-Bold", marginBottom: '32px', marginTop:'16px' }}
                className="project_landing_mainHead"
              >
              {/* Our success stories */}
              {t('Project_section1_head2')}
            </h1>
            :
            <h1
                style={{ fontFamily: "Exo2-Bold", marginBottom: '32px', marginTop:'16px', width:'750px' }}
                className="project_landing_mainHead"
              >
              {/* Our success stories */}
              {t('Project_section1_head2')}
            </h1>
            }

            {t('model_service_contact') === "Contact us" ?
              <p style={{fontFamily: "NunitoSans-Regular"}} className="project_landing_content">
                {/* We have gained experience working with a wide range of industry
                partners. Take a glance at our project portfolio to learn more
                about the value we created for our clients and their buildings. */}
                {t('project_section1_content')}
              </p>
              :
              <p style={{fontFamily: "NunitoSans-Regular"}} className="project_landing_content_de">
              {/* We have gained experience working with a wide range of industry
              partners. Take a glance at our project portfolio to learn more
              about the value we created for our clients and their buildings. */}
              {t('project_section1_content')}
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
                      {t('model_service_contact')}
                    </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 ">
            <img
              className="object-cover object-center rounded project_landing_img"
              style={{float: 'right'}}
              alt="hero"
              src={Building}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
