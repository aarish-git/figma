import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../../assest/Icons/ArrowCircleLeft.png";
import rightArrow from "../../../assest/Icons/ArrowCircleRight.png";
import { useTranslation } from 'react-i18next';//translator

export default function p6() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = useTranslation();//translator

  return (
    <div className="container" style={{width:'96%'}}>
    <div className="row">
      <section className="text-gray-600 body-font">
        <div className="py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="w-1/2 text-left">
              <Link
                to="/granue"
                className="flex text-left space-x-4 hover:text-zinc-900 prev_project_desktop"
              >
                {" "}
                <img alt="Project" src={leftArrow} />
                <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed underline underline-offset-4">Grüne Aue Project</p>
              </Link>
              <Link
                to="/granue"
                className="flex text-left space-x-4 hover:text-zinc-900 prev_project_mobile"
              >
                {" "}
                <img alt="Project" src={leftArrow} />
                <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed underline underline-offset-4">{t('route_prev_page')}</p>
              </Link>
            </div>
            <div className="w-1/2 text-right">
              <Link
                to="/wago"
                className="flex float-right space-x-4 hover:text-zinc-900 next_project_desktop"
              >
                {" "}
                <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed underline underline-offset-4">Wago Project</p>
                <img alt="Project" src={rightArrow} />
              </Link>
              <Link
                to="/wago"
                className="flex float-right space-x-4 hover:text-zinc-900 next_project_mobile"
              >
                {" "}
                <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed underline underline-offset-4">{t('route_next_page')}</p>
                <img alt="Project" src={rightArrow} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
