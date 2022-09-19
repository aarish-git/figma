import React from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';//translator
import tower from "../../assest/about&careers/Tv Tower.svg";
import arrowicon from "../../assest/about&careers/CaretCircleRight.svg";

export default function Careers() {
    const { t, i18n } = useTranslation();//translator
  return (
    <div className="">
        <div className="container career_landing_toprow">
            <div className="row">
                <div className="career_first_content_block"  >
                    <div className="row md:flex-row flex-col items-center" >
                    <div className="col-lg-6 items-center">
                        <span
                        style={{ fontFamily: "Exo2-SemiBold", marginBottom: '16px' }}
                        className="project_landing_blueHead"
                        >
                        {/* Projects */}
                        {t('career_blue_head')}
                        </span>
                        {t('model_service_contact') === "Contact us" ?
                            <h1
                                style={{ fontFamily: "Exo2-Bold", marginBottom: '32px', marginTop:'16px' }}
                                className="project_landing_mainHead"
                            >
                            {/* Our success stories */}
                            {t('career_mainhead')}
                            </h1>
                            :
                            <h1
                                style={{ fontFamily: "Exo2-Bold", marginBottom: '32px', marginTop:'16px', width:'750px' }}
                                className="project_landing_mainHead"
                            >
                            {/* Our success stories */}
                            {t('career_mainhead')}
                            </h1>
                        }

                        {t('model_service_contact') === "Contact us" ?
                        <p style={{fontFamily: "NunitoSans-Regular"}} className="project_landing_content">
                            {/* We have gained experience working with a wide range of industry
                            partners. Take a glance at our project portfolio to learn more
                            about the value we created for our clients and their buildings. */}
                            {t('career_content')}
                        </p>
                        :
                        <p style={{fontFamily: "NunitoSans-Regular"}} className="project_landing_content_de">
                        {/* We have gained experience working with a wide range of industry
                        partners. Take a glance at our project portfolio to learn more
                        about the value we created for our clients and their buildings. */}
                        {t('career_content')}
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
                                {t('career_head_btnText')}
                                </button>
                        </Link>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <img
                        className="career_top_img"
                        // style={{float: 'right'}}
                        alt="hero"
                        src={tower}
                        />
                    </div>
                    </div>
                </div>
            </div>      
        </div>

        <div className="row career_positions">
             {t('model_service_contact') === "Contact us" ?
                <h1
                    style={{ fontFamily: "Exo2-Bold", marginBottom: '32px', marginTop:'16px' }}
                    className="career_positions_mainhead"
                >
                {/* Our success stories */}
                {t('career_head2')}
                </h1>
                :
                <h1
                    style={{ fontFamily: "Exo2-Bold", marginBottom: '32px', marginTop:'16px', width:'750px' }}
                    className="career_positions_mainhead"
                >
                {/* Our success stories */}
                {t('career_head2')}
                </h1>
            }

            <div className="row">
                {/* card1 */}

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 cursor-pointer">
                <Link
                    style={{ all: "unset" }}
                    to="/services/3d-digital-models-of-buildings"
                >
                    {t('model_service_contact') === "Contact us" ?
                    
                    <div className="career_position_container">
                        <div className="career_position_body">
                        <h2
                            style={{ fontFamily: "NunitoSans-Bold" }}
                            className="career_position_head"
                        >
                            {t("career_position_head1")}
                        </h2>
                        <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="career_position_content"
                        >
                            {t("career_position_content1")}
                        </p>
                        </div>
                        <img src={arrowicon} alt="arrowicon"/>
                    </div>
                   
                    :
                    <div  className="career_position_container">
                        <div className="career_position_body_de">
                        <h2
                            style={{ fontFamily: "NunitoSans-Bold" }}
                            className="career_position_head"
                        >
                            {t("career_position_head1")}
                        </h2>
                        <p
                            style={{ fontFamily: "NunitoSans-Regular"}}
                            className="career_position_content_de"
                        >
                            {t("career_position_content1")}
                        </p>
                        </div>
                        <img src="arrowicon" alt="arrowicon"/>
                    </div>
                    }
                </Link>
                </div>

                {/* card2 */}

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 cursor-pointer">
                <Link
                    style={{ all: "unset" }}
                    to="/services/3d-digital-models-of-buildings"
                >
                    {t('model_service_contact') === "Contact us" ?
                    
                    <div className="career_position_container">
                        <div className="career_position_body">
                        <h2
                            style={{ fontFamily: "NunitoSans-Bold" }}
                            className="career_position_head"
                        >
                            {t("career_position_head2")}
                        </h2>
                        <p
                            style={{ fontFamily: "NunitoSans-Regular" }}
                            className="career_position_content"
                        >
                            {t("career_position_content2")}
                        </p>
                        </div>
                        <img src={arrowicon} alt="arrowicon"/>
                    </div>
                   
                    :
                    <div  className="career_position_container">
                        <div className="career_position_body_de">
                        <h2
                            style={{ fontFamily: "NunitoSans-Bold" }}
                            className="career_position_head"
                        >
                            {t("career_position_head2")}
                        </h2>
                        <p
                            style={{ fontFamily: "NunitoSans-Regular"}}
                            className="career_position_content_de"
                        >
                            {t("career_position_content2")}
                        </p>
                        </div>
                        <img src="arrowicon" alt="arrowicon"/>
                    </div>
                    }
                </Link>
                </div>

            </div>
        </div>

        <div className="row career_wantToLearn_row">
            <div className=" mx-auto flex px-5 py-5 items-center justify-center flex-col Home_section5_desktop_button1"  style={{background:'#FAFBFC'}}>
                <div className="text-center w-full">
                <h1 style={{fontFamily:"Exo2-Regular"}} className="wantToLearn">
                {t('career_wantToLearn')}
                    </h1>
                <div className="flex justify-center">
                <Link style={{ all: "unset" }} to="/about-us">
                    <button
                    style={{
                    fontFamily: "NunitoSans-Regular",
                    }}
                    className="contact_us2"
                >
                    {t('career_wantToLearn_btn')}
                </button>
                    </Link>
                </div>
                </div>
            </div>
            <div className=" mx-auto flex py-5 items-center justify-center flex-col Home_section5_mobile_button1">
                <div className="text-center w-full">
                <h1 style={{fontFamily:"Exo2-Regular"}} className="wantToLearn">
                {t('career_wantToLearn')}
                {/* <br />
                {t('mobile_grune_project_wantToLearn')} */}
                    </h1>
                <div className="flex justify-center">
                <Link style={{ all: "unset" }} to="/about-us">
                    <button
                    style={{
                    fontFamily: "NunitoSans-Regular",
                    }}
                    className="contact_us2"
                >
                    {t('career_wantToLearn_btn')}
                </button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
