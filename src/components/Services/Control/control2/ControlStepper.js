import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import StepContent from '@mui/material/StepContent';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import modelSetup from "../assest/Images/project/trio/Mask group.png";
// import m1 from "../../../assest/Images/project/manheim/Mask_group.png";
// import m2 from "../../../assest/Images/project/manheim/Group_1078.png";
// import m3 from "../../../assest/Images/project/manheim/Vertical_Bar_chart.png";
// import m4 from "../../../assest/Images/project/manheim/Graph_Trio.png";
// import solar from "../../../../assest/Images/services/Analytics/step1.png";
// import sunshine from "../../../../assest/Images/services/Analytics/step2.jpg";

// import shading from "../../../../assest/Images/services/Analytics/step3.jpg";
// import solar from "../../../../assest/Images/services/Analytics/step.jpg";
// import summer from "../../../../assest/Images/services/Analytics/step5.jpg";
// import cooling from "../../../../assest/Images/services/Analytics/step6.png";
// import assessment from "../../../../assest/Images/services/Analytics/step7.jpg";

// import solar from "../../../../assest/Images/services/Analytics/step.jpg";
import control from "../../../../assest/Images/services/Control/control1.jpg";
import cloud from "../../../../assest/Images/services/Control/control2.jpg";
import energy from "../../../../assest/Images/services/Control/control3.gif";



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
<div className="row service" style={{textAlign: 'left', marginTop:'120px'}}>

   <div className="allsteper">
    <div className="stepLabel">
         <div className="step completed">
      {/* <div className="v-stepper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      <div className="v-stepper">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      <div className="v-stepper">
        <div className="circle"></div>
      </div> */}
    
     <div className="nav step flex-column nav-pills" id="tab" role="tablist" aria-orientation="vertical">
        <a className="nav-link active" id="home-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{fontFamily: "NunitoSans-Regular", marginTop: '-10px', fontSize:'24px'}} href="#home" role="tab" aria-controls="home" aria-selected="true">
          <div className="circle" style={{marginLeft: '0px'}}></div>
          Control data for smart shading
          <div className="line" style={{marginLeft: '8px'}}></div>
        </a>
        <a className="nav-link" id="profile-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{fontFamily: "NunitoSans-Regular", marginTop: '48px', fontSize:'24px'}} href="#profile" role="tab" aria-controls="profile" aria-selected="false">
          <div className="circle"></div>
          Cloud-based forecast for smart shading
          <div className="line"></div>
        </a>
        <a className="nav-link" id="messages-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{fontFamily: "NunitoSans-Regular", marginTop: '48px', fontSize:'24px'}} href="#messages" role="tab" aria-controls="messages" aria-selected="false">
          <div className="circle"></div>
          Energy balance forecast
        </a>
       </div>
    </div>
   </div>

    <div className="tab-content" id="tabContent" style={{width:'70%'}}>
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>Control data for smart shading</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          Extend the capabilities of your local weather sensor to ensure secure, efficient, and comfortable control of your shading systems. To guarantee the highest level of system quality, we provide shading and wind correction factors for each window along with recommendations for weather sensor placement.  This solution is based on the VDI 3813/3814 and EN15232 standards.          </p>
          <img className="stepperService_desc_img" src={control} alt="control" />
        </div>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>Cloud-based forecast for smart shading</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          The digital twin continuously calculates the current and future shadowing, the irradiation angle, and the local wind profiles, and correlates them with local weather forecast data to provide forecasted control data related to the optimal shading positions and slat angles for each shading device. The data for each shading device is then integrated via Restful API for maximum thermal and visual comfort as well as energy efficiency.   </p>     </div>
          <img className="stepperService_desc_img" src={cloud} alt="cloud" />
      </div>
      <div className="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>Energy balance forecase</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          The Digital Twin forecasts the energy balance for each room, area, and the entire building after considering the influences from systems and people. This forecasted data is integrated into the HVAC control system to provide maximum efficiency while maintaining comfort at all times. </p>
          <img className="stepperService_desc_img" src={energy} alt="energy" />
        </div>
      </div>
    </div>
   </div>
   </div>
  
   
    
  );
}
