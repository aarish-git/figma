import React, { useEffect } from "react";
import slick from "slick-carousel";
import $ from "jquery";
import Horn from "../assest/Images/home/weCreate2/Horn_colour.svg";
import Phoenix from "../assest/Images/home/weCreate2/Phoenix_Contact_Logo_Original.svg";
import Hosch from "../assest/Images/home/weCreate2/hosch_logo Original.svg";
import Bauer from "../assest/Images/home/weCreate2/bauer-logo Original.svg";
import Bim from "../assest/Images/home/weCreate2/Berliner_Immobilienmanagement_Original.svg";
import Lubbing from "../assest/Images/home/weCreate2/LÜBBING REMADE Original Colour.svg";
import Wago from "../assest/Images/home/weCreate2/Logo_WAGO_2020 Original.svg";
import Selve from "../assest/Images/home/weCreate2/Selve Original.svg";

export default function Wecreated() {
  // useEffect(() => {
  //   $("#mycenter")
  //     .not(".slick-initialized")
  //     .slick({
  //       centerMode: true,
  //       centerPadding: "60px",
  //       slidesToShow: 4,
  //       autoplay: true,
  //       autoplaySpeed: 2000,
  //       variableWidth: true,
  //       responsive: [
  //         {
  //           breakpoint: 768,
  //           settings: {
  //             arrows: false,
  //             centerMode: true,
  //             centerPadding: "40px",
  //             slidesToShow: 3,
  //             variableWidth: true
  //           },
  //         },
  //         {
  //           breakpoint: 480,
  //           settings: {
  //             arrows: false,
  //             centerMode: true,
  //             centerPadding: "40px",
  //             slidesToShow: 1,
  //             variableWidth: true
  //           },
  //         },
  //       ],
  //     });
  // }, []);

  return (
    <div className='row' style={{backgroundColor:' #FAFBFC', height: '251px'}}>
        <h1
          style={{ fontFamily: "Exo2-Regular" }}
          className="title-font text-2xl pt-5 font-large capitalize font-bold"
        >
          WE CREATED BUILDING TWINS FOR
        </h1>
        <div className="mx-auto" style={{marginTop:'32px'}}>
          <div id="mycenter inner" style={{overflow: 'hidden'}} className="flex flex-wrap  text-center">
           
              <img  alt="Horn" id="platform" className="build_twins_horn grayscale hover:grayscale-0 horn" src={Horn} />
              <img  alt="Phoenix" id="platform" className="build_twins grayscale hover:grayscale-0" src={Phoenix} />
              <img  alt="Hosch" id="platform" className="build_twins grayscale hover:grayscale-0" src={Hosch} />
              <img  alt="Bauer" id="platform" className="build_twins grayscale hover:grayscale-0" src={Bauer} />
              <img  alt="Bim" id="platform" className="build_twins grayscale hover:grayscale-0" src={Bim} />
              <img  alt="Lubbing" id="platform" className="build_twins grayscale hover:grayscale-0" src={Lubbing} />
              <img  alt="Wago" id="platform" className="build_twins grayscale hover:grayscale-0" src={Wago} />
              <img  alt="Selve" id="platform" className="build_twins grayscale hover:grayscale-0" src={Selve} />
          </div>
        </div>
    </div>
  );
}
