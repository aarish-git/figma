import React from "react";
import Stepper from "./ModelStepper";


function index() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full">
            <div className="steeper">
              <Stepper />
              {/* <div class="flex relative pb-12">
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    01. Digital Twin Creation
                  </h2>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    02. Building and Weather Integration
                  </h2>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    03. Energy Balance Calculation
                  </h2>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    04. Cooling load assessment
                  </h2>
                </div>
              </div>
              <div class="flex relative">
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    05. Optimization Recommendations
                  </h2>
                </div>
              </div> */}
            </div>
            {/* <div class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12">
              <p>Digital Twin Creation</p>
              <img
                class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                src="https://dummyimage.com/1200x500"
                alt="step"
              />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
