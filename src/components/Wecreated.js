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
  useEffect(() => {
    $("#mycenter")
      .not(".slick-initialized")
      .slick({
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
  }, []);

  return (
    <div>
      <section class="body-font bg-zinc-100">
        <h1
          style={{ fontFamily: "Exo2-Regular" }}
          class="title-font text-2xl pt-5 font-large capitalize font-bold"
        >
          WE CREATED BUILDING TWINS FOR
        </h1>
        <div class="container px-5 py-24 mx-auto ">
          <div id="mycenter" class="flex flex-wrap -m-4 text-center">
            <div class="p-4 "  style={{width:'50%'}}>
              <img class="build_twins_horn grayscale hover:grayscale-0 horn" src={Horn} />
            </div>
            <div class="p-4" style={{width:'50%'}}>
              <img class="build_twins grayscale hover:grayscale-0" src={Phoenix} />
            </div>
            <div class="p-4" style={{width:'50%'}}>
              <img class="build_twins grayscale hover:grayscale-0" src={Hosch} />
            </div>
            <div class="p-4" style={{width:'50%'}}>
              <img class="build_twins grayscale hover:grayscale-0" src={Bauer} />
            </div>
            <div class="p-4" style={{width:'50%'}}>
              <img class="build_twins grayscale hover:grayscale-0" src={Bim} />
            </div>
            <div class="p-4" style={{width:'50%'}}>
              <img class="build_twins grayscale hover:grayscale-0" src={Lubbing} />
            </div>
            <div class="p-4" style={{width:'50%'}}>
              <img class="build_twins grayscale hover:grayscale-0" src={Wago} />
            </div>
            <div class="p-4" style={{width:'50%'}}>
              <img class="build_twins grayscale hover:grayscale-0" src={Selve} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
