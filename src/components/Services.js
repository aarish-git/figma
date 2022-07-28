import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; //translator

export default function Services() {
  const { t, i18n } = useTranslation(); //translator
  return (
    <div className="row">
      <div style={{ marginTop: "120px" }}>
        <h1
          style={{
            fontFamily: "Exo2-Bold",
            fontSize: "40px",
            lineHeight: "55px",
          }}
          className="font-bold text-[40px] title-font text-center text-gray-900 "
        >
          {t("Home_section3a")} <br /> {t("Home_section3b")}
        </h1>
        <p
          style={{
            fontFamily: "NunitoSans-Regular",
            fontSize: "20px",
            lineHeight: "32px",
            fontWeight: "400",
            color: "#2F2F2F",
          }}
          className="xl:w-[1115px] lg:w-[1000px] md:w-1/2 font-medium text-[20px] text-center mx-auto my-4 leading-relaxed"
        >
          {t("Home_section3_content")}
         <br />
          <span className="font-bold"> {t("Home_section3_serviceHead")}</span>
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
                style={{ fontFamily: "NunitoSans-Regular", marginTop: "20px" }}
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
                style={{ fontFamily: "NunitoSans-Regular", marginTop: "20px" }}
                className="sub_move_towards_content leading-relaxed text-base text-center "
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
              className="sub_move_towards_content leading-relaxed text-base text-center "
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
                    className="sub_move_towards_content leading-relaxed text-base text-center 2xl:px-5 xl:px-5 lg:px-1"
                  >
                  {t("Home_section3_service3_content")}
                  </p>
                </div>
              }
              </Link>
            </div>
      </div>
    </div>
  );
}
