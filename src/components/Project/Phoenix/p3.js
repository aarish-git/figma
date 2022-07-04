import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
// import modelSetup from "./../../../assest/Images/project/trio/24 1.png";
// import Selve from "../assest/Images/home/weCreate2/Selve Original.svg";

import PImage from "../../../assest/Images/project/trio/p1.png";
import PImage1 from "../../../assest/Images/project/trio/p2.png"


const steps = [
  {
    label: '3D model setup',
    description: `Using building plans and geospatial data, we created a highly detailed 3D model of the target building (LOD 4) and merged it with models of surrounding buildings, vegetation, and terrain.`,
    img: `${PImage}`
  },
  {
    label: 'Weather data integration & solar analysis*',
    description:
      'We used the resulting model to conduct a detailed shading analysis for multiple points on each window. Our algorithm calculated shading conditions and incident angles for each calculation point (virtual sensor*) for the sun position for the entire year. Embedding local TRY weather data, we quantified the annual energy intake for each calculation point.',
      img: `${PImage1}`
    },
  {
    label: 'Shading correction data for each window',
    description: `Next, we calculated the shading progression on each window 
    for the whole year and converted it into a shading correction data file. 
    This file was then integrated with the building controller and merged with measurements from the local weather sensor data to provide a time-based shading position. With this, we delivered the phase-one results.
    `,
  },
  {
    label: 'Cloud-based control data',
    description:
      'We are enhancing the digital twin with additional system-specific data. Each calculation point, i.e virtual sensor on the window, is connected to the local weather forecast data. This uses the resulting forecast of solar radiation for each virtual sensor to quantify the expected solar radiation intake and accordingly, determines the best shading position to maximise comfort and efficiency.',
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
    <div>
         <h2
            style={{ fontFamily: "Exo2-Regular" , marginLeft: '55px'}}
            class="text-[#2F2F2F] text-[50px] font-bold mb-4"
        >
            Our solution
        </h2>
        <p style={{fontFamily:"NunitoSans-Regular" , marginLeft: '55px'}} class="leading-relaxed text-[20px] font-[400] mb-3">
             Our solution included the following steps.
        </p>
        <div className="allsteper2">
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
        {/* <div class="line"></div> */}
      </div>
       </div>
     <div class="nav step flex-column nav-pills" id="tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="home-tab" data-toggle="pill" style={{marginTop: '-10px'}} href="#home" role="tab" aria-controls="home" aria-selected="true">3D model setup</a>
        <a class="nav-link" id="profile-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#profile" role="tab" aria-controls="profile" aria-selected="false">Weather data integration & solar analysis*</a>
        <a class="nav-link" id="messages-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#messages" role="tab" aria-controls="messages" aria-selected="false">Shading correction data for each window</a>
        <a class="nav-link" id="settings-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#settings" role="tab" aria-controls="settings" aria-selected="false">Cloud-based control data</a>
    </div>
   </div>

    <div class="tab-content" id="tabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>3D model setup</b></h1>
          <p style={{ fontWeight: '400'}}>
          Using building plans and geospatial data, we created a highly detailed 3D model of the target building (LOD 4) and merged it with models of surrounding buildings, vegetation, and terrain.
          </p>
          <img src={PImage} alt="home" />
        </div>
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Weather data integration & solar analysis*</b></h1>
          <p style={{ fontWeight: '400'}}>
          We used the resulting model to conduct a detailed shading analysis for multiple points on each window. Our algorithm calculated shading conditions and incident angles for each calculation point (virtual sensor*) for the sun position for the entire year. Embedding local TRY weather data, we quantified the annual energy intake for each calculation point.
          </p>
          <img src={PImage1} alt="home" />
        </div>
      </div>
      <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Shading correction data for each window</b></h1>
          <p style={{ fontWeight: '400'}}>
            Next, we calculated the shading progression on each window 
            for the whole year and converted it into a shading correction data file. 
            This file was then integrated with the building controller and merged with measurements from the local weather sensor data to provide a time-based shading position. With this, we delivered the phase-one results.
          </p>
        </div>
      </div>
      <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Cloud-based control data</b></h1>
          <p style={{ fontWeight: '400'}}>
          We are enhancing the digital twin with additional system-specific data. Each calculation point, i.e virtual sensor on the window, is connected to the local weather forecast data. This uses the resulting forecast of solar radiation for each virtual sensor to quantify the expected solar radiation intake and accordingly, determines the best shading position to maximise comfort and efficiency.
          </p>
        </div>
      </div>
     
    </div>
   </div>
     </div>
  );
}
