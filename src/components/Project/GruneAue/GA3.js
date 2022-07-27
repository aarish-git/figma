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
import { useTranslation } from 'react-i18next';//translator

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
  const { t, i18n } = useTranslation();//translator

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

  // function scroll() {
      // ('html,body').animate({
      // scrollTop: $(".second").offset().top},
      // 'slow');
      // console.log()
  // }

  return (
    <div className="row" style={{textAlign: 'left'}}>
    <h2
        style={{ fontFamily: "Exo2-Bold" }}
        className="single_project_desc_head"
   >
      {t('grune_project_oursolution')}
   </h2>
    <p style={{ fontFamily: "NunitoSans-Regular" , margintop: '24px', marginBottom: '40px'}} className="single_project_desc_p">
      {t('grune_project_oursolution_desc')}
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
        <div className="circle"></div> */}
        {/* <div className="line"></div> */}
      {/* </div>
       </div> */}
     <div className="nav step flex-column nav-pills" id="tab" role="tablist" aria-orientation="vertical">
        <a className="nav-link active" id="home-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '-10px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#home" role="tab" aria-controls="home" aria-selected="true">
        <div className="circle" style={{marginLeft: '0px'}}></div>
        {t('grune_project_stephead1')}
          <div className="line"  style={{marginLeft: '8px'}}></div>
        </a>
        <a className="nav-link" id="profile-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#profile" role="tab" aria-controls="profile" aria-selected="false">
        <div className="circle"></div>
        {t('grune_project_stephead2')}
        <div className="line"></div>
        </a>
        <a className="nav-link" id="messages-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#messages" role="tab" aria-controls="messages" aria-selected="false">
        <div className="circle"></div>
        {t('grune_project_stephead3')}
        <div className="line"></div>
        </a>
        <a className="nav-link" id="settings-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#settings" role="tab" aria-controls="settings" aria-selected="false">
        <div className="circle"></div>
        {t('grune_project_stephead4')}
        </a>
    </div>
    </div>
   </div>

    <div className="tab-content" id="tabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('grune_project_stephead1')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('grune_project_stepdesc1')}
          </p>
          <img  className="stepper_desc_img" src={G1} alt="home" />
        </div>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('grune_project_stephead2')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('grune_project_stepdesc2')}
          </p>
          <img  className="stepper_desc_img" src={G2} alt="home" />
        </div>
      </div>
      <div className="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('grune_project_stephead3')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('grune_project_stepdesc3')}
          </p>
        </div>
      </div>
      <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
         <div className="subcontent">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('grune_project_stephead4')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('grune_project_stepdesc4')}
          </p>
        </div>
      </div>
    </div>
   </div>
   </div>
  );
}
