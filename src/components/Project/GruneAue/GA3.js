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
import G1 from "../../../assest/Images/project/grune/Grune.png"
import G2 from "../../../assest/Images/project/grune/Grune1.png"
// import G3 from "../../../assest/Images/project/grune.png"

const steps = [
  {
    label: 'Digital twin setup',
    description: `Using the LIDAR raw scans and images, Leaftech created a 3D model of all buildings with the rooftops accurately shaped. This model also included the neighbouring buildings and vegetation.`,
    img: `${G1}`
  },
  {
    label: 'Solar radiation analysis',
    description:
      'We gathered solar radiation measurements from a nearby weather station and combined them with Leaftech’s shading analysis to conduct a detailed assessment of solar radiation intake on each roof. The data was provided for 2019-2021 as well as 2022 in 15-minute steps.',
      img: `${G2}`
    },
  {
    label: 'Photovoltaic yield assessment',
    description: `We used the results from the solar radiation analysis in combination with PV-Panel characteristics to quantify the potential yield and related feasibility for each building. `,
  },
  {
    label: 'Energy system design',
    description:
      'Based on the highly accurate PV yield data and the onsite energy demand, Leaftech provided an optimal count and layout of PV systems. The goal was to strike a balance between self-sufficient energy supply, and investment and operational costs.',
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
    <div className="">
      <h2
        style={{ fontFamily: "Exo2-Regular", marginLeft: '35px' }}
        class="text-[#2F2F2F] text-[50px] font-bold mb-4"
    >
        Our solution
    </h2>
    <p style={{fontFamily:"NunitoSans-Regular", marginLeft: '35px'}} class="leading-relaxed text-[20px] font-[400] mb-3">
       Here's our step-by-step approach to help this client assess the building's onsite energy potential.
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
        <a class="nav-link active" id="home-tab" data-toggle="pill" style={{marginTop: '-10px'}} href="#home" role="tab" aria-controls="home" aria-selected="true">Digital twin setup</a>
        <a class="nav-link" id="profile-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#profile" role="tab" aria-controls="profile" aria-selected="false">Solar radiation analysis</a>
        <a class="nav-link" id="messages-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#messages" role="tab" aria-controls="messages" aria-selected="false">Photovoltaic yield assessment</a>
        <a class="nav-link" id="settings-tab" data-toggle="pill" style={{marginTop: '40px'}} href="#settings" role="tab" aria-controls="settings" aria-selected="false">Energy system design</a>
    </div>
   </div>

    <div class="tab-content" id="tabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Digital twin setup</b></h1>
          <p style={{ fontWeight: '400'}}>
          Using the LIDAR raw scans and images, Leaftech created a 3D model of all buildings with the rooftops accurately shaped. This model also included the neighbouring buildings and vegetation.
          </p>
          <img src={G1} alt="home" />
        </div>
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Energy balance calculation</b></h1>
          <p style={{ fontWeight: '400'}}>
            We gathered solar radiation measurements from a nearby weather station and combined them with Leaftech’s shading analysis to conduct a detailed assessment of solar radiation intake on each roof. The data was provided for 2019-2021 as well as 2022 in 15-minute steps.
          </p>
          <img src={G2} alt="home" />
        </div>
      </div>
      <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Cooling load assessment</b></h1>
          <p style={{ fontWeight: '400'}}>
            We used the results from the solar radiation analysis in combination with PV-Panel characteristics to quantify the potential yield and related feasibility for each building.  
          </p>
        </div>
      </div>
      <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>Optimization recommendations</b></h1>
          <p style={{ fontWeight: '400'}}>
            Based on the highly accurate PV yield data and the onsite energy demand, Leaftech provided an optimal count and layout of PV systems. The goal was to strike a balance between self-sufficient energy supply, and investment and operational costs.
          </p>
        </div>
      </div>
    </div>
   </div>
   </div>
  );
}
