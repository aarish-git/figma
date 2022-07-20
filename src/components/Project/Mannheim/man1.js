import React from "react";

export default function man1() {
  return (
    <div className="row">
      <div className="row" style={{marginTop:'75px', height: '533px', maxWidth: '104%', width: '103%' ,background:"linear-gradient(89.82deg, #FFFFFF 0.23%, rgba(255, 255, 255, 0.555775) 45.36%, rgba(228, 233, 239, 0.5) 83.29%, #E4E9EF 97.33%)"}}>
          <div  className="mx-auto flex  md:flex-row flex-col ">
            <div  style={{textAlign:'left', marginTop:'72px'}}>
              <h1
                style={{ fontFamily: "Exo2-SemiBold" }}
                className="single_project_blue_head text-[#0087FF]"
              >
                Project showcase
              </h1>
              <h1
                style={{ fontFamily: "Exo2-Bold" }}
                className="single_project_main_head "
              >
                Trio Mannheim
              </h1>
              <p
                style={{ fontFamily: "Exo2-Regular" }}
                className="single_project_location_head text-[#4EA0FD]"
              >
                Mannheim, Germany, Febuary 2022
              </p>
              <p style={{fontFamily:"NunitoSans-Regular"}} className="mb-8 leading-relaxed single_project_content" >
                Horn Grundbesitz owns and manages the Trio Mannheim facility.
                Modernized in 2021, the building was used as a P&C shopping
                complex and was later renovated to include office space. Leaftech
                conducted an energy design risk assessment for this client to help
                them make appropriate decisions for smooth operations.
              </p>
              <div className="flex ">
                <div className="text-gray-900 body-font -mb-10">
                  <div className=" ">
                    <div className="flex flex-wrap space-x-14 ">
                      <div className="sm:2/3 space-y-2">
                        <h2 style={{ fontFamily: "Exo2-Bold"  }} className="title-font font-bold  text-[40px]">
                        12,000 sqm
                        </h2>
                        <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed text-[14px]">Total building surface area</p>
                      </div>
                      <div className="sm:2/3 space-y-2">
                        <h2 style={{ fontFamily: "Exo2-Bold" }} className="title-font font-bold  text-[40px]">
                        ~9,000 €
                        </h2>
                        <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed text-[14px]">Total price</p>
                      </div>
                      <div className="sm:2/3 space-y-2">
                        <h2 style={{ fontFamily: "Exo2-Bold" }} className="title-font font-bold text-[40px]">
                        ~8,000 sqm
                        </h2>
                        <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed text-[14px]">Total project area</p>
                      </div>
                      {/* <div className="p-4 sm:w-1/4 w-5">
                      <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                        4
                      </h2>
                      <p className="leading-relaxed">Products</p>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
      </div> */}
          </div>
      </div>
    </div>
  );
}
