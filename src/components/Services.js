import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; //translator

export default function Services() {
  const { t, i18n } = useTranslation(); //translator
  return (
    <div className="container">
    <div className="row">
      <div className="service_main_container" >
        <h1
          style={{
            fontFamily: "Exo2-Bold",
          }}
          className="home_service_main_head"
        >
          {t("Home_section3a")} <br /> {t("Home_section3b")}
        </h1>
        <p
          style={{
            fontFamily: "NunitoSans-Regular",
          }}
          className="home_service_main_content"
        >
          {t("Home_section3_content")}
         <br />
          <span style={{
            fontFamily: "NunitoSans-Extrabold",
          }}><b>{t("Home_section3_serviceHead")}</b></span>
        </p>
      </div>

      <div className="row">
        {/* card1 */}

        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 cursor-pointer">
          <Link
            style={{ all: "unset" }}
            to="/services/3d-digital-models-of-buildings"
          >
            {t('model_service_contact') === "Contact us" ?
            <div className="py-3 sub_move_towards_body">
              <h2
                style={{ fontFamily: "Exo2-Bold" }}
                className="sub_move_towards_head text-gray-900 text-lg font-bold title-font uppercase mb-2 tracking-wide"
              >
                {t("Home_section3_service1")}
              </h2>
              <p
                style={{ fontFamily: "NunitoSans-Regular" }}
                className="sub_move_towards_content leading-relaxed text-base text-center "
              >
                {t("Home_section3_service1_content")}
              </p>
            </div>
            :
            <div className="py-3 sub_move_towards_body_de">
              <h2
                style={{ fontFamily: "Exo2-Bold" }}
                className="sub_move_towards_head text-gray-900 text-lg font-bold title-font uppercase mb-2 tracking-wide"
              >
                {t("Home_section3_service1")}
              </h2>
              <p
                style={{ fontFamily: "NunitoSans-Regular"}}
                className="sub_move_towards_content_de leading-relaxed text-base text-center "
              >
                {t("Home_section3_service1_content")}
              </p>
            </div>
            }
          </Link>
        </div>

        {/* card2 */}

        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 cursor-pointer">
          <Link style={{ all: "unset" }} to="/building-analytics">
          {t('model_service_contact') === "Contact us" ?
            <div className="py-3 sub_move_towards_body">
              <h2
                style={{ fontFamily: "Exo2-Bold" }}
                className="sub_move_towards_head text-gray-900 text-lg font-bold title-font font-medium mb-2 uppercase tracking-wide"
              >
                
                {t("Home_section3_service2")}
              </h2>
              <p
                style={{ fontFamily: "NunitoSans-Regular" }}
                className="sub_move_towards_content leading-relaxed text-base text-center "
              >
                {t("Home_section3_service2_content")}
              </p>
            </div>
            :
            <div className="py-3 sub_move_towards_body_de">
            <h2
              style={{ fontFamily: "Exo2-Bold" }}
              className="sub_move_towards_head text-gray-900 text-lg font-bold title-font font-medium mb-2 uppercase tracking-wide"
            >
              
              {t("Home_section3_service2")}
            </h2>
            <p
              style={{ fontFamily: "NunitoSans-Regular" }}
              className="sub_move_towards_content_de leading-relaxed text-base text-center "
            >
              {t("Home_section3_service2_content")}
            </p>
          </div>
          }
          </Link>
        </div>

        {/* card3 */}

            <div  className="col-lg-4 col-md-4 col-sm-12 col-xs-12 cursor-pointer">
              <Link style={{ all: "unset" }} to="/smart-building-control">
              {t('model_service_contact') === "Contact us" ?
                <div className="py-3 sub_move_towards_body">
                  <h2
                    style={{ fontFamily: "Exo2-Bold" }}
                    className="sub_move_towards_head text-gray-900 text-lg font-bold title-font font-medium mb-2 uppercase tracking-wide"
                  >
                   {t("Home_section3_service3")}
                  </h2>
                  <p
                    style={{ fontFamily: "NunitoSans-Regular"}}
                    className="sub_move_towards_content leading-relaxed text-base text-center 2xl:px-5 xl:px-5 lg:px-1"
                  >
                  {t("Home_section3_service3_content")}
                  </p>
                </div>
                :
                <div className="py-3 sub_move_towards_body_de">
                  <h2
                    style={{ fontFamily: "Exo2-Bold" }}
                    className="sub_move_towards_head text-gray-900 text-lg font-bold title-font font-medium mb-2 uppercase tracking-wide"
                  >
                   {t("Home_section3_service3")}
                  </h2>
                  <p
                    style={{ fontFamily: "NunitoSans-Regular"}}
                    className="sub_move_towards_content_de leading-relaxed text-base text-center 2xl:px-5 xl:px-5 lg:px-1"
                  >
                  {t("Home_section3_service3_content")}
                  </p>
                </div>
              }
              </Link>
            </div>
      </div>
    </div>
    </div>
  );
}
