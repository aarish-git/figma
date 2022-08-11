import React from "react";
import { Link } from "react-router-dom";
import leftArrow from "../../../assest/Icons/ArrowCircleLeft.png";
import rightArrow from "../../../assest/Icons/ArrowCircleRight.png";
export default function wago6() {
  return (
    <div className="container">
      {/* <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/2 w-1/2 text-left">
              
              <Link href="/granue"><p className="leading-relaxed">Trio Mannheim Project</p></Link>
            </div>
            <div className="p-4 sm:w-1/2 w-1/2 text-right">
              
              <Link href="/phoenix"><p className="leading-relaxed">Pheonix Contact Project</p></Link>
            </div>
          </div>
        </div>
      </section> */}
      <section className="text-gray-600 body-font">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 w-1/2 text-left">
              <Link
                to="/mannhiem"
                className="flex text-left space-x-4 hover:text-zinc-900"
              >
                {" "}
                <img alt="arrow" src={leftArrow} />
                <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed underline underline-offset-4">
                  Trio Mannheim Project
                </p>
              </Link>
            </div>
            <div className="p-4 w-1/2 text-right">
              <Link
                to="/phoenix"
                className="flex float-right space-x-4 hover:text-zinc-900"
              >
                {" "}
                <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed underline underline-offset-4">
                  Pheonix Contact Project
                </p>
                <img alt="arrow" src={rightArrow} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
