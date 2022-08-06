import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';//translator

// import modelSetup from "./../../../assest/Images/project/trio/24 1.png";
// import Selve from "../assest/Images/home/weCreate2/Selve Original.svg";

import PImage from "../../../assest/Images/project/trio/p1.png";
import PImage1 from "../../../assest/Images/project/trio/p22.svg"


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

  const { t, i18n } = useTranslation();//translator

  return (
    <div className="row" style={{textAlign: 'left',  marginTop:'120px'}}>
    <h2
        style={{ fontFamily: "Exo2-Bold" }}
        className="single_project_desc_head"
   >
            {t('phoenix_project_oursolution')}
        </h2>
        <p style={{ fontFamily: "NunitoSans-Regular" , margintop: '24px', marginBottom: '40px'}} className="single_project_desc_p">
        {t('phoenix_project_oursolution_desc')}
        </p>
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
        <div className="line"></div>
      </div>
      <div className="v-stepper">
        <div className="circle"></div>
      </div> */}
     <div className="nav step flex-column nav-pills" id="tab" role="tablist" aria-orientation="vertical">
        <a className="nav-link active" id="home-tab" onClick={() => window.scrollTo(0, 1700)} data-toggle="pill" style={{marginTop: '-10px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#home" role="tab" aria-controls="home" aria-selected="true">
          <div className="circle"></div>
          {t('phoenix_project_stephead1')}
          <div className="line"></div>
        </a>
        <a className="nav-link" id="profile-tab" onClick={() => window.scrollTo(0, 1700)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#profile" role="tab" aria-controls="profile" aria-selected="false">
          <div className="circle"></div>
          {t('phoenix_project_stephead2')}
          <div className="line"></div>
        </a>
        <a className="nav-link" id="messages-tab" onClick={() => window.scrollTo(0, 1700)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#messages" role="tab" aria-controls="messages" aria-selected="false">
          <div className="circle"></div>
          {t('phoenix_project_stephead3')}
          <div className="line"></div>
        </a>
        <a className="nav-link" id="settings-tab" onClick={() => window.scrollTo(0, 1700)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#settings" role="tab" aria-controls="settings" aria-selected="false">
          <div className="circle"></div>
          {t('phoenix_project_stephead4')}
        </a>
    </div>
    </div>
   </div>

    <div className="tab-content" id="tabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('phoenix_project_stephead1')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('phoenix_project_stepdesc1')}
          </p>
          <img className="stepper_desc_img" src={PImage} alt="home" />
        </div>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('phoenix_project_stephead2')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('phoenix_project_stepdesc2')}
          </p>
          <img className="stepper_desc_img" src={PImage1} alt="home" />
        </div>
      </div>
      <div className="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('phoenix_project_stephead3')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('phoenix_project_stepdesc3')}
          </p>
        </div>
      </div>
      <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('phoenix_project_stephead4')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('phoenix_project_stepdesc4')}
          </p>
        </div>
      </div>
     
    </div>
   </div>
     </div>
  );
}
