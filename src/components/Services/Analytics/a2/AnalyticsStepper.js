import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import modelSetup from "../assest/Images/project/trio/Mask group.png";
// import m1 from "../../../assest/Images/project/manheim/Mask_group.png";
// import m2 from "../../../assest/Images/project/manheim/Group_1078.png";
// import m3 from "../../../assest/Images/project/manheim/Vertical_Bar_chart.png";
// import m4 from "../../../assest/Images/project/manheim/Graph_Trio.png";
import solar from "../../../../assest/Images/services/Analytics/step1.png";
import sunshine from "../../../../assest/Images/services/Analytics/step2.jpg";

import shading from "../../../../assest/Images/services/Analytics/step3.jpg";
// import solar from "../../../../assest/Images/services/Analytics/step.jpg";
import summer from "../../../../assest/Images/services/Analytics/step5.jpg";
import cooling from "../../../../assest/Images/services/Analytics/step6.png";
import assessment from "../../../../assest/Images/services/Analytics/step7.jpg";

// import solar from "../../../../assest/Images/services/Analytics/step.jpg";
// import solar from "../../../../assest/Images/services/Analytics/step.jpg";



const steps = [
  {
    label: 'Solar radiation analysis',
    description: `Created a detailed 3D model of the target building along with the surroundings, using building plans, satellite images, lidar scans, and CityGML data. `,
    // img: `${m1}`
  },
  {
    label: 'Sunshine hour analysis',
    description:
      'Integrated the TRY weather data files and building-specific inputs like material properties, building systems, and user information to create a thermal model of the building. ',
      
    },
  {
    label: 'Shading analysis',
    description: `Using Leaftech's in-house algorithm, we calculated all the relevant factors of the energy balance equation to simulate real operating conditions. We assessed in detail the solar heat gains through the glass facades. These simulations were based on relevant DIN and VDI standards. `,
    // img: `${m2}`
  },
  {
    label: 'Summer heat protection',
    description:
      'Calculated the yearly cooling load for every room in the office space and the minimum HVAC capacity required, after considering the differential weather conditions throughout the year.',
      // img: `${m3}`
  },
  {
    label: 'Cooling & heating demand assessment ',
    description:
      'Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). ',
      // img: `${m4}`
  },
  {
    label: 'Photovoltaic assessment ',
    description:
      'Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). ',
      // img: `${m4}`
  },
  {
    label: 'Building wind analysis',
    description:
      'Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). ',
      // img: `${m4}`
  },
  {
    label: 'Weather sensor placement analysis ',
    description:
      'Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). ',
      // img: `${m4}`
  },
  {
    label: 'Daylight analysis',
    description:
      'Identified optimization potential to minimise the operational and investment cost while maintaining the comfort level inside the building (e.g. impact of different shading scenarios on the cooling load). ',
      // img: `${m4}`
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (

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
        <a class="nav-link active" id="home-tab" data-toggle="pill" style={{marginTop: '-10px'}} href="#home" role="tab" aria-controls="home" aria-selected="true">Solar radiation analysis</a>
        <a class="nav-link" id="profile-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#profile" role="tab" aria-controls="profile" aria-selected="false">Sunshine hour analysis</a>
        <a class="nav-link" id="messages-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#messages" role="tab" aria-controls="messages" aria-selected="false">Shading analysis</a>
        <a class="nav-link" id="settings-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#settings" role="tab" aria-controls="settings" aria-selected="false">Daylight analysis</a>
        <a class="nav-link" id="office-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#office" role="tab" aria-controls="office" aria-selected="false">Summer heat protection</a>
        <a class="nav-link" id="cooling-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#cooling" role="tab" aria-controls="cooling" aria-selected="false">Cooling & heating demand assessment </a>
        <a class="nav-link" id="assessment-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#assessment" role="tab" aria-controls="assessment" aria-selected="false">Photovoltaic assessment </a>
        <a class="nav-link" id="analysis-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#analysis" role="tab" aria-controls="analysis" aria-selected="false">Building wind analysis</a>
        <a class="nav-link" id="placement-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#placement" role="tab" aria-controls="placement" aria-selected="false">Weather sensor placement analysis </a>
    </div>
   </div>

    <div class="tab-content" id="tabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Solar radiation analysis</b></h1>
          <p style={{ fontWeight: '400'}}>
          Our solar radiation analysis maps and analyses the sun's effects over a building's target surface to calculate the direct, diffuse, and global radiations. Understand the impact of solar radiation on your building's energy balance throughout the year and make informed decisions. Use this data service to assess your building's PV potential and glazing requirements, and accordingly, identify the optimal positions for outdoor seatings.  
          </p>
          <img src={solar} alt="solar" />
        </div>
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Sunshine hour analysis</b></h1>
          <p style={{ fontWeight: '400'}}>
          Leaftech's Sunshine hour analysis provides the number of unobstructed hours of sunlight your building gets each year. Comply with the Right to light law and make the necessary design and architectural changes with this service. Combine it with shading analysis to derive the daylight factor of the building, which in turn, enhances your building's value and increases its appeal.          </p>
        </div>
      </div>
      <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Shading analysis</b></h1>
          <p style={{ fontWeight: '400'}}>
          Shading analysis provides information on solar access to different parts of the building and the site for the whole year and even generates a yearly shading progression for the areas of interest. Use this service to understand the passive design opportunities, choose a location for your outdoor seating area or swimming pool, smarten up your sun protection control, and more.          </p>
          <img src={sunshine} alt="sunshine" />
        </div>
      </div>
      <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Daylight analysis</b></h1>
          <p style={{ fontWeight: '400'}}>
          Leverage our daylight analysis to assess the natural light intake for any given area or a room in a building. Our simulations and results are according to the DIN EN 17037, 5034, and LM-83 standards.          </p>
          <img src={shading} alt="shading" />
        </div>
      </div>
      <div class="tab-pane fade" id="office" role="tabpanel" aria-labelledby="office-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Summer heat protection</b></h1>
          <p style={{ fontWeight: '400'}}>
          Our summer heat protection analysis encompasses the solar energy intake assessment of every window and the thermal simulation for each individual room. Use this data to understand if the room or target area is overheating, so you can make appropriate decisions to avoid the same. This service complies with the DIN 4108-2 regulations.          </p>
          {/* <img src={m4} alt="home" /> */}
        </div>
      </div>
      <div class="tab-pane fade" id="cooling" role="tabpanel" aria-labelledby="cooling-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Cooling & heating demand assessment </b></h1>
          <p style={{ fontWeight: '400'}}>
          Understand the energy demands of your building with Leaftech's cooling and heating load assessment. We consider critical factors like weather effects including solar energy intake, building specification, user information, etc, in detail, to generate high-quality data with high resolution. The simulations and results are according to the DIN 4108, VDI 207, and DIN EN 12831. You can even utilise these results for the DIN 18599 assessment.          </p>
          <img src={cooling} alt="cooling" />
        </div>
      </div>
      <div class="tab-pane fade" id="assessment" role="tabpanel" aria-labelledby="assessment-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Photovoltaic assessment </b></h1>
          <p style={{ fontWeight: '400'}}>
          Get a detailed assessment of your building's solar PV potential and match it with your requirements and needs. We forecast the yield for the entire year and recommend the optimal position, number, orientation, and tilt of the PV panels on the roof and facade to ensure the highest efficiency and return on investment for your project. Our assessment includes both cost-benefit analysis and PV shading analysis. </p>
          <img src={assessment} alt="assessment" />
        </div>
      </div>
      <div class="tab-pane fade" id="analysis" role="tabpanel" aria-labelledby="analysis-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Building wind analysis</b></h1>
          <p style={{ fontWeight: '400'}}>
          Gain a better understanding of the wind flow patterns, wakes, and pressure zones with our CFD wind analysis for buildings. Use this data from our building wind analysis to know your wind energy potential, areas for natural ventilation and openings, operate shading devices safely and efficiently, understand passive design opportunities, and more. </p>
          {/* <img src={m4} alt="home" /> */}
        </div>
      </div>
      <div class="tab-pane fade" id="placement" role="tabpanel" aria-labelledby="placement-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Weather sensor placement analysis </b></h1>
          <p style={{ fontWeight: '400'}}>
          Obtain the number of sensors and their optimal locations to generate the most accurate and stable data, after considering local site-specific factors. We offer assessments for wind speed, wind direction, brightness, and global radiation sensors.        </p>
          
          <img src={assessment} alt="assessment" />
        </div>
      </div>
    </div>
   </div>
  
   
    
  );
}
