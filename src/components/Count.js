import React from "react";
import image from "../assest/Images/home/illustrationframe.gif"
import { Link } from "react-router-dom";

export default function Count() {
  return (
          <div class="row " >
            <div class="row " style={{marginTop: '120px'}}>

            {/* <div className="home_first_row">  */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div class="home_first_content text-left w-full mb-20">
                <h1
                  style={{ fontFamily: "Exo2-Bold", fontSize: '56px', lineHeight: '70px'}}
                  class="home_first_content_head"
                >
                  Make data-driven decisions.
                  <br />
                  Optimize building performance.
                </h1>
                <p
                  style={{ fontFamily: "NunitoSans-Regular", width:'664px', height:'96px' }}
                  class="home_first_subcontent"
                >
                  With Leaftech's building Digital Twin, you can access highly
                  accurate data to understand your building's performance, make
                  informed decisions on upgrades, and work on the required
                  building optimization measures.
                </p>
                

                <div style={{margin:'80px 40px 0px 0px'}} class=" text-left mx-auto">
                  <div class="flex flex-col text-left w-full ">
                    <h1
                      style={{ fontFamily: "Exo2-Bold" }}
                      class="home_first_subhead"
                    >
                      our growing impact!
                    </h1>
                  </div>
                  <div class="flex flex-wrap  text-left ">
                    <div style={{width:'140px', height:'74px'}}>
                      <h2 style={{fontFamily:"Exo2-Bold"}} class="home_first_nums">
                        15
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} class="home_first_nums_p">Digital Twin’s set-ups</p>
                    </div>
                    <div style={{width:'189px', height:'74px', margin: '0px 64px 0px 56px'}}>
                      <h2 style={{fontFamily:"Exo2-Bold"}} class="home_first_nums">
                        500,000 +
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} class="home_first_nums_p">Sqm served</p>
                    </div>
                    <div style={{width:'130px', height:'74px'}}>
                      <h2 style={{fontFamily:"Exo2-Bold"}} class="home_first_nums">
                        1,500 +
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} class="home_first_nums_p">Devices in control </p>
                    </div>
                  </div>
                  <div class="relative top-10" style={{marginTop:'64px'}}>
                    <Link style={{all:"unset"}} to="/contact">
                    <button
                      style={{
                        // background: "",
                        // padding: "10px",
                        // // marginTop: "2rem",
                        // color: "white",
                        // borderRadius: "20px",
                        // width: "160px",
                        // boxShadow: "0px 4px 4px rgba(0, 135, 255, 0.25",
                        fontFamily: "NunitoSans-Regular",
                        fontWeight: "400",
                        fontSize: "20px",
                        
                      }}
                      class="bg-[#0087FF] p-[10px] text-[white] rounded-[20px] w-[160px] shadow-[0_4px_4px_rgba(0,135,255,0.25)]"
                    >
                      Contact Us
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
                
              </div>
              
              <div class="col-lg-9 col-md-6 col-sm-12 col-xs-12 home_first_image" style={{zIndex: '-12'}}>
              <img
                class="object-cover object-center rounded"  
                // style={{marginLeft: '35px', marginTop: '-30px'}}
                alt="hero"
                src={image}
              />
              </div>
            {/* </div> */}
            </div>
         
          </div>
  );
}
