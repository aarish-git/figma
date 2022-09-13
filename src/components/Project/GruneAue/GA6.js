import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../../assest/Icons/ArrowCircleLeft.png";
import rightArrow from "../../../assest/Icons/ArrowCircleRight.png";
import { useTranslation } from 'react-i18next';//translator

export default function GA6() {
  const { t, i18n } = useTranslation();//translator

  return ( 
    <div className="container" style={{width:'96%'}}>
      {/* <section className="text-gray-600 body-font">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="sm:w-1/2 w-1/2 text-left">
              <Link href="/mannhiem">
                {" "}
                <p className="leading-relaxed">Trio Mannheim Project</p>
              </Link>
            </div>
            <div className="sm:w-1/2 w-1/2 text-right">
              <Link href="/phoenix">
                <p className="leading-relaxed">Phoenix Contract Project</p>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section className="text-gray-600 body-font">
        <div className="py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="w-1/2 text-left">
              <Link
                to="/mannhiem"
                className="flex text-left space-x-4 hover:text-zinc-900 prev_project_desktop"
              >
                {" "}
                <img alt="leftArrow" src={leftArrow} />
                <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed underline underline-offset-4">Trio Mannheim Project</p>
              </Link>
              <Link
                to="/mannhiem"
                className="flex text-left space-x-4 hover:text-zinc-900 prev_project_mobile"
              >
                {" "}
                <img alt="leftArrow" src={leftArrow} />
                <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed underline underline-offset-4">{t('route_prev_page')}</p>
              </Link>
            </div>
            <div className="w-1/2 text-right">
              <Link
                to="/phoenix"
                className="flex float-right space-x-4 hover:text-zinc-900 next_project_desktop"
              >
                {" "}
                <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed underline underline-offset-4">Phoenix Contract Project</p>
                <img alt="rightArrow" src={rightArrow} />
              </Link>
              <Link
                to="/phoenix"
                className="flex float-right space-x-4 hover:text-zinc-900 next_project_mobile"
              >
                {" "}
                <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed underline underline-offset-4">{t('route_next_page')}</p>
                <img alt="rightArrow" src={rightArrow} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
