import React from "react";
import "./index.css";
import Cube from "../../../../assest/Icons2/cube.svg";
import Cursor from "../../../../assest/Icons2/arrow.svg";
import ArrowSquareIn from "../../../../assest/Icons2/box_arrow.svg";
import Tree from "../../../../assest/Icons2/tree.svg";
import ChartTv from "../../../../assest/Icons2/presentation.svg";
import Mac from "../../../../assest/Images/services/Model/model3.gif"
import { useTranslation } from 'react-i18next';//translator

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator


  return (
    <div className="row" style={{marginTop:'120px', marginBottom: '120px'}}>
    <div className="text-gray-600 body-font">
      <div className=" mx-auto flex  md:flex-row flex-col items-center" style={{justifyContent:'space-between'}}>
        <div className="flex flex-col md:items-start md:text-left items-center"  style={{minWidth:'57%', maxWidth:'850px', height:'455px', marginLeft:'20px'}}>
            <h1 style={{fontFamily:"Exo2-Bold", maxWidth:'940px'}} className="service_3d_head">
            {t('model_service_results_benefits_head')}
            </h1>
            <ul className="space-y-5" style={{marginTop:'40px', marginBottom: '64px'}}>
              <li className="flex space-x-5">
                <img className="h-fit project_icons" alt="model" src={Cube} />
                <p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>
                {t('model_service_icon_text1')}
                </p>
              </li>
              <li className="flex space-x-5">
                <img className="h-fit project_icons" alt="model" src={Cursor} />
                <p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>
                {t('model_service_icon_text2')}
                </p>
              </li>
              <li className="flex space-x-5">
                <img className="h-fit project_icons" alt="model" src={ArrowSquareIn} />
                <p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>
                {t('model_service_icon_text3')}
                </p>
              </li>
              <li className="flex space-x-5">
                <img className="h-fit project_icons" alt="model" src={Tree} />
                <p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>
                {t('model_service_icon_text4')}
                </p>
              </li>
              <li className="flex space-x-5">
                <img className="h-fit project_icons" alt="model" src={ChartTv} />
                <p className="project_icon_text" style={{fontFamily:"NunitoSans-Regular"}}>
                {t('model_service_icon_text5')}
                </p>
              </li>
            </ul>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <a href="/contact" >
                <button style={{fontFamily: "NunitoSans-Regular"}} className="contact_us2">
                {t('model_service_contact')}
                </button>
                </a>
              </div>
            </div>
          </div>
          <div  style={{width:'50%'}}>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              // style={{marginLeft: '25px'}}
              src={Mac}
            />
          </div>
        </div>
      </div>

      {/* tablet */}
      <div className="service3_t text-gray-600 body-font ">
        <div className="container px-3 py-5 mx-auto items-center bg-gray-100">
          <div className=" items-center text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 capitalize">
              what can you do with this model?
            </h1>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid.
            </p>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid.
            </p>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid.
            </p>
            <p className="mb-8 leading-relaxed">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid.
            </p>

            <div className="flex w-full md:justify-start justify-center text-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <button className=" bg-gray-700 rounded border border-slate-900 text-white focus:ring-2 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out capitalize">
                  contact page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
