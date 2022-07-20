import React from "react";

export default function wago1() {
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
              Wago Headquarters
            </h1>
            <p
              style={{ fontFamily: "Exo2-Regular" }}
              className="single_project_location_head text-[#4EA0FD]"
            >
              Minden, Germany, June 2021
            </p>
            <p style={{fontFamily:"NunitoSans-Regular"}} class="mb-8 leading-relaxed single_project_content">
              Wago is a building automation and technical system provider. Its
              office facility in Minden, called V1, was constructed in the early
              2000s. For this building, we provided digital twin-based control
              services along with our integration partner Lübbing.
            </p>
            <div className="flex ">
                <div className="text-gray-900 body-font -mb-10">
                  <div className=" ">
                    <div className="flex flex-wrap space-x-14 ">
                      <div className="sm:2/3 space-y-2">
                        <h2 style={{ fontFamily: "Exo2-Bold"  }} className="title-font font-bold  text-[40px]">
                        3,800 sqm
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} class="leading-relaxed text-[14px]">
                        Total project area
                      </p>
                    </div>
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Bold" }} className="title-font font-bold  text-[40px]"
                      >
                        2,970 €
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} class="leading-relaxed text-[14px]">
                        Total project price
                        <br />
                        (without wind assessement)
                      </p>
                    </div>
                    <div class="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Bold" }} className="title-font font-bold  text-[40px]"
                      >
                        250 +
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} class="leading-relaxed text-[14px]">
                        Devices controlled
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
