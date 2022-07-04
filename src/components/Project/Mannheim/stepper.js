import * as React from 'react';
// import modelSetup from "../assest/Images/project/trio/Mask group.png";
import m1 from "../../../assest/Images/project/manheim/Mask_group.png";
import m2 from "../../../assest/Images/project/manheim/Group_1078.png";
import m3 from "../../../assest/Images/project/manheim/Vertical_Bar_chart.png";
import m4 from "../../../assest/Images/project/manheim/Graph_Trio.png";



const steps = [
  {
    label: 'Digital twin setup',
    description: `Created a detailed 3D model of the target building along with the surroundings, using building plans, satellite images, lidar scans, and CityGML data. `,
    img: `${m1}`
  },
  {
    label: 'Building & weather data integration',
    description:
      'Integrated the TRY weather data files and building-specific inputs like material properties, building systems, and user information to create a thermal model of the building. ',
      
    },
  {
    label: 'Energy balance calculation',
    description: `Using Leaftech's in-house algorithm, we calculated all the relevant factors of the energy balance equation to simulate real operating conditions. We assessed in detail the solar heat gains through the glass facades. These simulations were based on relevant DIN and VDI standards. `,
    img: `${m2}`
  },
  {
    label: 'Cooling load assessment',
    description:
      'Calculated the yearly cooling load for every room in the office space and the minimum HVAC capacity required, after considering the differential weather conditions throughout the year.',
      img: `${m3}`
  },
  {
    label: 'Optimization recommendations',
    description:
      'Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). ',
      img: `${m4}`
  },
];

export default function VerticalLinearStepper() {
  // const [activeStep, setActiveStep] = React.useState(0);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (

    <div>
         <h2
            style={{ fontFamily: "Exo2-Regular" }}
            class="text-[#2F2F2F] text-[50px] font-bold mb-4"
        >
            Our solution
        </h2>
        <p style={{fontFamily:"NunitoSans-Regular"}} class="leading-relaxed text-[20px] font-[400] mb-3">
             Our solution included the following steps.
        </p>
        <div className="allsteper">
    <div className="stepLabel">
         <div class="step completed">
      <div class="v-stepper">
        <div class="circle"></div>
        <div class="line"></div>
      </div>
      <div class="v-stepper">
        <div class="circle"></div>
        <div class="line"></div>
      </div>
      <div class="v-stepper">
        <div class="circle"></div>
        <div class="line"></div>
      </div>
      <div class="v-stepper">
        <div class="circle"></div>
        <div class="line"></div>
      </div>
      <div class="v-stepper">
        <div class="circle"></div>
        {/* <div class="line"></div> */}
      </div>
       </div>
     <div class="nav step flex-column nav-pills" id="tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="home-tab" data-toggle="pill" style={{marginTop: '-10px'}} href="#home" role="tab" aria-controls="home" aria-selected="true">Digital twin setup</a>
        <a class="nav-link" id="profile-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#profile" role="tab" aria-controls="profile" aria-selected="false">Building & weather data integration</a>
        <a class="nav-link" id="messages-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#messages" role="tab" aria-controls="messages" aria-selected="false">Energy balance calculation</a>
        <a class="nav-link" id="settings-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#settings" role="tab" aria-controls="settings" aria-selected="false">Cooling load assessment</a>
        <a class="nav-link" id="office-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#office" role="tab" aria-controls="office" aria-selected="false">Optimization recommendations</a>
    </div>
   </div>

    <div class="tab-content" id="tabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Digital twin setup</b></h1>
          <p style={{ fontWeight: '400'}}>
            Created a detailed 3D model of the target building along with the surroundings, using building plans, satellite images, lidar scans, and CityGML data. 
          </p>
          <img src={m1} alt="home" />
        </div>
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Building & weather data integration</b></h1>
          <p style={{ fontWeight: '400'}}>
          Integrated the TRY weather data files and building-specific inputs like material properties, building systems, and user information to create a thermal model of the building.  
          </p>
        </div>
      </div>
      <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Energy balance calculation</b></h1>
          <p style={{ fontWeight: '400'}}>
          Using Leaftech's in-house algorithm, we calculated all the relevant factors of the energy balance equation to simulate real operating conditions. We assessed in detail the solar heat gains through the glass facades. These simulations were based on relevant DIN and VDI standards. 
          </p>
          <img src={m2} alt="home" />
        </div>
      </div>
      <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Cooling load assessment</b></h1>
          <p style={{ fontWeight: '400'}}>
          Calculated the yearly cooling load for every room in the office space and the minimum HVAC capacity required, after considering the differential weather conditions throughout the year.' 
          </p>
          <img src={m3} alt="home" />
        </div>
      </div>
      <div class="tab-pane fade" id="office" role="tabpanel" aria-labelledby="office-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Optimization recommendations</b></h1>
          <p style={{ fontWeight: '400'}}>
          Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). 
          </p>
          <img src={m4} alt="home" />
        </div>
      </div>
    </div>
   </div>
    </div>
  
  
   
    
  );
}
