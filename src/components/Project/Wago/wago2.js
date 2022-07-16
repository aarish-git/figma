import React from "react";
import wago from "../../../assest/Images/project/project4.jpg";
import Sun from "../../../assest/Icons/Sun.png"
import Circle from "../../../assest/Icons/CircleHalf.png"

export default function wago2() {
  return (
    <div className="row" style={{marginTop:'120px'}}>
    <div className="text-gray-600 body-font">
      <div className="flex flex-wrap">
        <div className="single_project_desc_image rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src={wago}
            />
          </div>
          <div className="single_project_desc flex">
            <div className="flex">
              {/* <div className="w-full h-12 inline-flex items-center justify-left uppercase"></div> */}
              <div className="flex-grow">
              <h2
                  style={{ fontFamily: "Exo2-Bold" }}
                  className="single_project_desc_head"
                >
                  Project brief
                </h2>
                <p className="mann_project_desc_p"  style={{fontFamily: "NunitoSans-Regular", marginBottom: '16px'}}>
                  The building V1 hosts many offices, including the board of
                  Wago. The building structure has a complex contour, shading
                  architecture, and surroundings which make it challenging for
                  the shading automation system to ensure thermal and visual
                  comfort for the building users. To assist the Wago automation
                  system with the individual shading control, Leaftech provided
                  data services to improve efficiency and comfort.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              {/* <div class="w-full h-12 inline-flex items-center justify-left "></div> */}
              <div class="flex-grow">
              <h2
                 style={{ fontFamily: "Exo2-Regular", width: '664px', marginTop:'40px' }}
                 class="results_benefits_subhead"
                >
                  We provided:
                </h2>
                <ul class="my-3 space-y-4">
                  <li class="flex space-x-5"><img class="h-fit project_icons" alt="Sun" src={Sun} /><p className="project_icon_text">Recommendations for weather sensor placement</p></li>
                  <li class="flex space-x-5"><img class="h-fit project_icons" alt="Circle" src={Circle} /><p className="project_icon_text">
                    Shading correction data for shading/sun protection control{" "}</p>
                  </li>
                  {/* <li>
                    Changes in the energy balance due to the inner courtyard..
                  </li> */}
                </ul>
              </div>
            </div>
            {/* <div class="flex flex-col mb-10 lg:items-start items-center">
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
