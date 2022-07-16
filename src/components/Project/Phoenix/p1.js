import React from "react";

export default function p1() {
  return (
    <div className="row">
    <div className="row" style={{marginTop:'75px', height: '533px', maxWidth: '104%', width: '103%' ,background:"linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)"}}>
        <div  className="mx-auto flex  md:flex-row flex-col ">
          <div  style={{textAlign:'left', marginTop:'72px'}}>
            <h1
              style={{ fontFamily: "Exo2-Regular" }}
              className="single_project_blue_head text-[#0087FF]"
            >
              Project showcase
            </h1>
            <h1
               style={{ fontFamily: "Exo2-Bold" }}
               className="single_project_main_head "
            >
              Phoenix Contact
            </h1>
            <p
               style={{ fontFamily: "Exo2-Regular" }}
               className="single_project_location_head text-[#4EA0FD]"
            >
              Blomberg Germany, April 2022
            </p>
            <p style={{fontFamily:"NunitoSans-Regular"}} class="mb-8 leading-relaxed single_project_content">
              Leaftech serviced the office facility of Phoenix Contact, a
              building automation/smart home provider. This building uses
              Phoenix Contact's in-house building automation system called
              “Emalytics and automated shading control". We provided Digital
              Twin-based analytics and control recommendations to enhance the
              shading system for maximum efficiency and comfort.
            </p>
            <div className="flex ">
                <div className="text-gray-900 body-font -mb-10">
                  <div className=" ">
                    <div className="flex flex-wrap space-x-14 ">
                      <div className="sm:2/3 space-y-2">
                        <h2 style={{ fontFamily: "Exo2-Bold"  }} className="title-font font-bold  text-[40px]">
                        ~1,965 sqm
                      </h2>
                      <p class="leading-relaxed text-[14px]">
                      Total project area
                      </p>
                    </div>
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Bold" }} className="title-font font-bold  text-[40px]"
                      >
                        3,000 €
                      </h2>
                      <p class="leading-relaxed text-[14px]">Total price phase one (2019)</p>
                    </div>
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Bold" }} className="title-font font-bold  text-[40px]"
                      >
                        1,500 € + 67 €<span class=" text-[15px] font-bold">/month</span>
                      </h2>
                      <p class="leading-relaxed text-[14px] ">
                      Total price phase two (2022)
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
