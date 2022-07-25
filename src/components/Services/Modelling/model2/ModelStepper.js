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
// import solar from "../../../../assest/Images/services/Analytics/step1.png";
// import sunshine from "../../../../assest/Images/services/Analytics/step2.jpg";

// import solar from "../../../../assest/Images/services/Analytics/step.jpg";
// import summer from "../../../../assest/Images/services/Analytics/step5.jpg";
// import cooling from "../../../../assest/Images/services/Analytics/step6.png";
// import assessment from "../../../../assest/Images/services/Analytics/step7.jpg";

// import solar from "../../../../assest/Images/services/Analytics/step.jpg";
// import solar from "../../../../assest/Images/services/Analytics/step.jpg";

import target from "../../../../assest/Images/services/Model/model1.gif";
import context from "../../../../assest/Images/services/Model/model2.jpg";
import access from "../../../../assest/Images/services/Model/model3.gif";


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
<div className="row service" style={{textAlign: 'left', marginTop:'120px'}}>
    <div className="allsteper">
    <div className="stepLabel">
    <div className="step completed" style={{marginLeft: "-20px"}}>
     <div className="nav step flex-column nav-pills" id="tab" role="tablist" aria-orientation="vertical">
        <a className="nav-link active" id="home-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{marginTop: '-10px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#home" role="tab" aria-controls="home" aria-selected="true">
        <div className="circle" style={{marginLeft: '0px'}}></div>
          The target building
          <div className="line" style={{marginLeft: '8px'}}></div>
        </a>
        <a className="nav-link" id="profile-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#profile" role="tab" aria-controls="profile" aria-selected="false">
        <div className="circle"></div>
          Site context
          <div className="line"></div>
        </a>
        <a className="nav-link" id="messages-tab" onClick={() => window.scrollTo(0, 650)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#messages" role="tab" aria-controls="messages" aria-selected="false">
        <div className="circle"></div>
          Access your 3D models
         </a>
    </div>
   </div>
   </div>

    <div className="tab-content" id="tabContent" style={{width:'70%'}}>
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>The target building</b></h1>
          <p className="stepper_desc_p" style={{ fontFamily: "NunitoSans-Regular", fontWeight: '400'}}>
          Access your accurate digital models through our digital twin platform. We build these 3D models using advanced tools, and they come with different Levels of Detail (LoD 2 to LoD4) based on your specific requirements. We use 2D plans, pictures, satellite scans, etc. to build your model.          </p>
          <img className="stepperService_desc_img" src={target} alt="target" />
        </div>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>Site context</b></h1>
          <p className="stepper_desc_p" style={{ fontFamily: "NunitoSans-Regular", fontWeight: '400'}}>
          Gain a better understanding of your building and its interaction with the immediate environment using neighbourhood context site-specific models. This includes the neighbouring infrastructures like buildings, bridges, vegetation, and terrain. We use the latest geo datasets, digital surface models, LIDAR scans, and terrain models, to gain this contextual site analysis, and integrate them with our in-house software.         </p>
          <img className="stepperService_desc_img" src={context} alt="context" />
        </div>
      </div>
      <div className="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>Access your 3D models </b></h1>
          <p className="stepper_desc_p" style={{ fontFamily: "NunitoSans-Regular", fontWeight: '400'}}>
          Access your 3D models, interactive building plans, and all related information through our platform, and even export/share this with your relevant stakeholders.  No additional software, licences, or tools are needed when you use Leaftech's platform, as we take care of everything for you.        </p>
          <img className="stepperService_desc_img" src={access} alt="access" />
        </div>
      </div>
    </div>
   </div>
   </div>
   
    
  );
}
