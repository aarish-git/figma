import React from "react";
import pImage from "../../../assest/Images/project/p1.jpg" 
export default function p2() {
  return (
    <div className="row" style={{marginTop:'120px'}}>
    <div className="text-gray-600 body-font">
      <div className="flex flex-wrap">
        <div className="single_project_desc_image rounded-lg overflow-hidden" style={{height:'727px'}}>
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src={pImage}
            />
          </div>
          <div className="single_project_desc flex" style={{marginTop:'0px'}}> 
            <div className="flex">
              {/* <div className="w-full h-12 inline-flex items-center justify-left uppercase"></div> */}
              <div className="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Bold", marginTop:'8px' }}
                  className="single_project_desc_head"
                >
                  Project brief
                </h2>
                <p className="single_project_desc_p"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px'}}>
                  Phoenix Contact's new office building called 17a is located on
                  their campus in Bloomberg and it consists of three floors with
                  large-scale open office areas. This office architecture made
                  it challenging to maintain the thermal and visual comfort of
                  all its employees.
                </p>
                <p className="single_project_desc_p"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px'}}>
                  Leaftech was tasked to provide shading control data to
                  maximise its employee’s comfort and to improve the system's
                  efficiency.{" "}
                </p>
                <p className="text-[20px] font-[400] ">We delivered the project in two phases. </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center" style={{marginTop:'40px' }}>
              {/* <div className="w-full h-12 inline-flex items-center justify-left "></div> */}
              <div className="flex-grow">
                <h2
                  style={{ fontFamily: "Exo2-Regular", marginBottom:'8px' }}
                  className="results_benefits_subhead"
                >
                  Phase one
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular", marginBottom:'32px' }}
                  className="leading-relaxed text-[20px] font-[400] mb-5"
                >
                  We provided a shading correction factor for each window for
                  the whole year. This shading correction factor was used along
                  with the rooftop weather station to control the individual
                  shading devices.
                </p>
                <h2
                 style={{ fontFamily: "Exo2-Regular", marginBottom:'8px' }}
                 className="results_benefits_subhead"
                >
                  Phase two
                </h2>
                <p
                  style={{ fontFamily: "NunitoSans-Regular" }}
                  className="leading-relaxed text-[20px] font-[400]"
                >
                  We are enriching the Digital Twin from phase one with the
                  weather forecast data to continuously provide control advice
                  to the shading devices to maximise thermal as well as visual
                  comfort.
                </p>
                {/* <ul className="my-3 leading-9">
                  <li>High solar heat gain from the large glass façade</li>
                  <li>A non-uniform airflow in the office area </li>
                  <li>
                    Changes in the energy balance due to the inner courtyard..
                  </li>
                </ul> */}
              </div>
            </div>
            {/* <div className="flex flex-col mb-10 lg:items-start items-center">
              <p>
                Addressing these challenges was key to ensuring that the
                contractual obligation with the tenant to maintain a comfortable
                temperature, was fulfilled.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
