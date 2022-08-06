import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../../assest/Icons/ArrowCircleLeft.png";
import rightArrow from "../../../assest/Icons/ArrowCircleRight.png";

export default function p6() {
  return (
    <div className="row">
      <section className="text-gray-600 body-font">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 w-1/2 text-left">
              <Link
                to="/granue"
                className="flex text-left space-x-4 hover:text-zinc-900"
              >
                {" "}
                <img alt="Project" src={leftArrow} />
                <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed underline underline-offset-4">Grüne Aue Project</p>
              </Link>
            </div>
            <div className="p-4 w-1/2 text-right">
              <Link
                to="/wago"
                className="flex float-right space-x-4 hover:text-zinc-900"
              >
                {" "}
                <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed underline underline-offset-4">Wago Project</p>
                <img alt="Project" src={rightArrow} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
