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
import { useTranslation } from 'react-i18next';//translator

export default function Wecreated() {
  const { t, i18n } = useTranslation();//translator
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
          style={{ fontFamily: "Exo2-Bold" }}
          className="weCreatedHead"
        >
         {t('Home_section2')}
        </h1>
        <div className="mx-auto" style={{marginTop:'32px'}}>
          <div id="mycenter inner" style={{overflow: 'hidden'}} >
               <div id="platform" className="flex text-center">
               <a href="" className="build_twins_horn_a">
              <img  alt="Horn"  className="build_twins_horn grayscale hover:grayscale-0 horn" src={Horn} />
              </a>
              <a href="https://www.phoenixcontact.com/" >
              <img  alt="Phoenix"  className="build_twins grayscale hover:grayscale-0" src={Phoenix} />
              </a>
              <a href="https://www.hosch-ga.de/" >
              <img  alt="Hosch"  className="build_twins grayscale hover:grayscale-0" src={Hosch} />
              </a>
              <a href="https://www.bauer-netz.de/" >
              <img  alt="Bauer"  className="build_twins grayscale hover:grayscale-0" src={Bauer} />
              </a>
              <a href="https://www.bim-berlin.de/" >
              <img  alt="Bim"  className="build_twins grayscale hover:grayscale-0" src={Bim} />
              </a>
              <a href="https://www.luebbing.de/" >
              <img  alt="Lubbing"  className="build_twins grayscale hover:grayscale-0" src={Lubbing} />
              </a>
              <a href="https://www.wago.com/global/country-selection" >
              <img  alt="Wago"  className="build_twins grayscale hover:grayscale-0" src={Wago} />
              </a>
              <a href="https://www.selve.de/" >
              <img  alt="Selve"  className="build_twins grayscale hover:grayscale-0" src={Selve} />
              </a>
              <a href="https://www.bvg.de/en" >
              <img  alt="bvg"  className="build_twins bvg grayscale hover:grayscale-0" src={bvg} />
              </a>
              {/* <a href="https://www.dabbel.eu/" >
              <img  alt="dabbel"  className="build_twins dabbel grayscale hover:grayscale-0" src={dabbel} />
              </a> */}
              <a href="https://www.fujitsu.com/de/" >
              <img  alt="fujitsu"  className="build_twins grayscale hover:grayscale-0" src={fujitsu} />
              </a>
              <a href="https://www.boschbuildingsolutions.com/" >
              <img  alt="gfr"  className="build_twins gfr grayscale hover:grayscale-0" src={gfr} />
              </a>
              <a href="http://www.hermos.com/en/" >
              <img  alt="hermos"  className="build_twins grayscale hover:grayscale-0" src={hermos} />
              </a>
              <a href="https://lae.eu/?lang=en" >
              <img  alt="lae"  className="build_twins grayscale hover:grayscale-0" src={lae} />
              </a>
              <a href="https://trio-mannheim.de/" >
              <img  alt="trio"  className="build_twins grayscale hover:grayscale-0" src={trio} />
              </a>
              <a href="https://www.vattenfall.de/" >
              <img  alt="vatten"  className="build_twins vatten grayscale hover:grayscale-0" src={vatten} />
              </a>
              <a href="https://www.vr.de/privatkunden.html" >
              <img  alt="volks"  className="volks build_twins grayscale hover:grayscale-0" src={volks} />
              </a>
              <a href="https://www.vonovia.de/en" >
              <img  alt="vono"  className="build_twins grayscale hover:grayscale-0" src={vono} />
              </a>
               </div>
          </div>
        </div>
    </div>
  );
}
