import React from "react";
import { Link } from "react-router-dom";

export default function services() {
  return (
    <div className="row">
      <div style={{marginTop:'120px'}}>
      <h1
            style={{ fontFamily: "Exo2-Regular", fontSize: '40px', lineHeight:'55px' }}
            class="font-bold text-[40px] title-font text-center text-gray-900 "
          >
            Move towards a net-zero building <br /> stock with our data
            services
           
          </h1>
          <p
              style={{ fontFamily: "NunitoSans-Regular", fontSize: '20px', lineHeight:'32px', fontWeight: '400' }}
              class="xl:w-[1115px] lg:w-[1000px] md:w-1/2 font-medium text-[20px] text-center mx-auto my-4 leading-relaxed"
            >
              Our Digital Twin for buildings is based on a highly standardised
              and automated set of processes that span modelling, analytics, and
              control. Besides offering the highest speed and data accuracy,
              data solutions are created with our Digital Twin are tailor-made
              to meet your specific needs.
              <span class="font-bold"> Explore our services.</span>
            </p>
      </div>
     
          <div class="row">
            {/* card1 */}

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 cursor-pointer">
              <a
                style={{ all: "unset" }}
                href="/services/3d-digital-models-of-buildings"
              >
                <div class="py-3 sub_move_towards_body">
                  <h2 style={{ fontFamily: "Exo2-Regular" }}
                    class="sub_move_towards_head text-gray-900 text-lg font-bold title-font uppercase mb-2 tracking-wide"
                  >
                    Modelling
                  </h2>
                  <p style={{ fontFamily: "NunitoSans-Regular", marginTop:'20px'}} class="sub_move_towards_content leading-relaxed text-base text-center ">
                    Take the step to digitise your real estate 
                    with our unique building 3D modelling 
                   services.
                  </p>
                  {/* <p style={{ fontFamily: "NunitoSans-Regular", marginTop:'20px'}} class="sub_move_towards_content leading-relaxed text-base text-center ">
                    Take the step to digitise your real estate 
                  </p>
                  <p style={{ fontFamily: "NunitoSans-Regular"}} class="sub_move_towards_content leading-relaxed text-base text-center ">
                    with our unique building 3D modelling 
                  </p>
                  <p style={{ fontFamily: "NunitoSans-Regular"}} class="sub_move_towards_content leading-relaxed text-base text-center ">
                   services.
                  </p> */}
                </div>
              </a>
            </div>

            {/* card2 */}

            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 cursor-pointer">
              <a style={{ all: "unset" }} href="/building-analytics">
                <div class="py-3 sub_move_towards_body">
                  <h2 style={{ fontFamily: "Exo2-Regular" }}
                    class="sub_move_towards_head text-gray-900 text-lg font-bold title-font font-medium mb-2 uppercase tracking-wide"
                  >
                    Analytics
                  </h2>
                  <p style={{ fontFamily: "NunitoSans-Regular"}} class="sub_move_towards_content leading-relaxed text-base text-center ">
                    Get a holistic view of your building's 
                    design and performance with our
                   advanced building analytics services.
                  </p>
                  {/* <p style={{ fontFamily: "NunitoSans-Regular"}} class="sub_move_towards_content leading-relaxed text-base text-center ">
                    Get a holistic view of your building's 
                  </p>
                  <p style={{ fontFamily: "NunitoSans-Regular"}} class="sub_move_towards_content leading-relaxed text-base text-center ">
                    design and performance with our 
                  </p>
                  <p style={{ fontFamily: "NunitoSans-Regular"}} class="sub_move_towards_content leading-relaxed text-base text-center ">
                   advanced building analytics services.
                  </p> */}
                </div>
              </a>
            </div>

            {/* card3 */}

            <div  class="col-lg-4 col-md-4 col-sm-12 col-xs-12 cursor-pointer">
              <a style={{ all: "unset" }} href="/smart-building-control">
                <div class="py-3 sub_move_towards_body">
                  <h2
                    style={{ fontFamily: "Exo2-Regular" }}
                    class="sub_move_towards_head text-gray-900 text-lg font-bold title-font font-medium mb-2 uppercase tracking-wide"
                  >
                    control
                  </h2>
                  <p
                    style={{ fontFamily: "NunitoSans-Regular"}}
                    class="sub_move_towards_content leading-relaxed text-base text-center 2xl:px-5 xl:px-5 lg:px-1"
                  >
                    Operate and optimise your building and individual systems
                    with our accurate building control data.
                  </p>
                </div>
              </a>
            </div>
          </div>
    </div>
  );
}
