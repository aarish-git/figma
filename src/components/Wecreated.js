import React, { useEffect } from "react";
import slick from "slick-carousel";
import $ from "jquery";
import Horn from "../assest/Images/home/weCreate/Horn_colour.svg";
import Phoenix from "../assest/Images/home/weCreate/Phoenix_Contact_Logo_Original.svg";
import Hosch from "../assest/Images/home/weCreate/hosch_logo Original.svg";
import Bauer from "../assest/Images/home/weCreate/bauer-logo Original.svg";
import Bim from "../assest/Images/home/weCreate/Berliner_Immobilienmanagement_Original.svg";
import Lubbing from "../assest/Images/home/weCreate/LÜBBING REMADE Original Colour.svg";
import Wago from "../assest/Images/home/weCreate/Logo_WAGO_2020 Original.svg";
import Selve from "../assest/Images/home/weCreate/Selve Original.svg";
import bvg from "../assest/Images/home/weCreate/Bvg-logo_original.svg";
import dabbel from "../assest/Images/home/weCreate/Dabbel.jpg";
import fujitsu from "../assest/Images/home/weCreate/Fujitsu-Logo_original.svg";
import gfr from "../assest/Images/home/weCreate/GFR-Gesellschaft-fuer-Regelungstechnik-und-Energieeinsparung-mbH.jpg";
import hermos from "../assest/Images/home/weCreate/hermosAG.png";
import lae from "../assest/Images/home/weCreate/Logo_LAE_original.svg";
import trio from "../assest/Images/home/weCreate/Trio Mannheim original.svg";
import vatten from "../assest/Images/home/weCreate/Vattenfall_logo_Original.svg";
import volks from "../assest/Images/home/weCreate/Volksbank_original.svg";
import vono from "../assest/Images/home/weCreate/Vonovia_Logo_original.svg";

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
          <div id="mycenter inner" style={{overflow: 'hidden'}} >
               <div id="platform" className="flex text-center">
               <a href="" >
              <img  alt="Horn"  className="build_twins_horn grayscale hover:grayscale-0 horn" src={Horn} />
              </a>
              <a href="" >
              <img  alt="Phoenix"  className="build_twins grayscale hover:grayscale-0" src={Phoenix} />
              </a>
              <a href="" >
              <img  alt="Hosch"  className="build_twins grayscale hover:grayscale-0" src={Hosch} />
              </a>
              <a href="" >
              <img  alt="Bauer"  className="build_twins grayscale hover:grayscale-0" src={Bauer} />
              </a>
              <a href="" >
              <img  alt="Bim"  className="build_twins grayscale hover:grayscale-0" src={Bim} />
              </a>
              <a href="" >
              <img  alt="Lubbing"  className="build_twins grayscale hover:grayscale-0" src={Lubbing} />
              </a>
              <a href="" >
              <img  alt="Wago"  className="build_twins grayscale hover:grayscale-0" src={Wago} />
              </a>
              <a href="" >
              <img  alt="Selve"  className="build_twins grayscale hover:grayscale-0" src={Selve} />
              </a>
              <a href="" >
              <img  alt="bvg"  className="build_twins bvg grayscale hover:grayscale-0" src={bvg} />
              </a>
              <a href="" >
              <img  alt="dabbel"  className="build_twins dabbel grayscale hover:grayscale-0" src={dabbel} />
              </a>
              <a href="" >
              <img  alt="fujitsu"  className="build_twins grayscale hover:grayscale-0" src={fujitsu} />
              </a>
              <a href="" >
              <img  alt="gfr"  className="build_twins gfr grayscale hover:grayscale-0" src={gfr} />
              </a>
              <a href="" >
              <img  alt="hermos"  className="build_twins grayscale hover:grayscale-0" src={hermos} />
              </a>
              <a href="" >
              <img  alt="lae"  className="build_twins grayscale hover:grayscale-0" src={lae} />
              </a>
              <a href="" >
              <img  alt="trio"  className="build_twins grayscale hover:grayscale-0" src={trio} />
              </a>
              <a href="" >
              <img  alt="vatten"  className="build_twins vatten grayscale hover:grayscale-0" src={vatten} />
              </a>
              <a href="" >
              <img  alt="volks"  className="build_twins grayscale hover:grayscale-0" src={volks} />
              </a>
              <a href="" >
              <img  alt="vono"  className="build_twins grayscale hover:grayscale-0" src={vono} />
              </a>
               </div>
          </div>
        </div>
    </div>
  );
}
