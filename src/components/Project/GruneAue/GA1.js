import React from "react";

export default function gran() {
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
              className="single_project_main_head"
            >
              Grüne Aue
            </h1>
            <p
             style={{ fontFamily: "Exo2-Regular" }}
             className="single_project_location_head text-[#4EA0FD]"
            >
              Berlin, Germany, March 2022
            </p>
            <p style={{fontFamily:"NunitoSans-Regular"}} className="mb-8 leading-relaxed single_project_content">
              Leaftech successfully completed this project for Vattenfall, a
              leading heating and energy service provider. Grüne Aue is a
              cluster of residential units, serviced by Vattenfall. Leaftech
              delivered analytics services to assess the onsite solar energy
              potential to supply energy to heat pumps used for heating and hot
              water systems.
            </p>
            <div className="flex ">
              <div className="text-gray-900 body-font">
                <div className="  ">
                  <div className="flex flex-wrap space-x-14 " style={{marginTop:'40px'}}>
                    <div className="sm:2/3 space-y-2">
                      <h2
                        style={{ fontFamily: "Exo2-Bold" , color:'#2F2F2F'  }} className="title-font font-bold  text-[40px]"
                      >
                        15,000 m²
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed text-[14px]">
                      Total project area
                      </p>
                    </div>
                 
                    <div className="sm:2/3 space-y-2" >
                      <h2
                        style={{ fontFamily: "Exo2-Bold" , color:'#2F2F2F'  }} className="title-font font-bold  text-[40px]"
                      >
                        116 units
                      </h2>
                      <p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed text-[14px]">
                      Homes
                      </p>
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
