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

import wimg from "../../../assest/Images/project/wago/Mask.png";
import wimg1 from "../../../assest/Images/project/wago/project_wago_step3_solarAnalysis.svg"
import wimg2 from "../../../assest/Images/project/wago/w2.png"
import wimg3 from "../../../assest/Images/project/wago/project_wago_step5_location.svg"
import wimg4 from "../../../assest/Images/project/wago/w4.png"
import { useTranslation } from 'react-i18next';//translator


const steps = [
  {
    label: 'Digital twin setup',
    description: `We received the 3D model of the target building from the customer and created and merged it with the surroundings using satellite images and scans, and Leaftech’s in-house tool.`,
    img:`${wimg}`
  },
  {
    label: 'Created the target surfaces & virtual sensor placement',
    description:
      'The rooftop and the windows were the target surfaces for sensor placement and shading control assessment respectively. We positioned the virtual sensors, i.e the calculation points on target surfaces, to simulate the influencing factors for every minute.',
      img: `${wimg2}`
    },
  {
    label: 'Solar analysis',
    description: `Next, we did a detailed solar analysis for each virtual sensor 
    on the rooftop and the windows. This solar analysis included a solar radiation analysis, annual sunshine hours analysis, and shading analysis for the whole year.
    `,
    img: `${wimg1}`
  },
  {
    label: 'Wind flow analysis',
    description:
      'Using the digital twin model and local wind profile, we did a detailed CFD analysis to derive the wind flow pattern, pressure zone, and wakes for each calculation point around the building. ',
      img: `${wimg4}`
  },
  {
    label: 'Location for sensor placement',
    description:
      'Next, we derived the optimal location for rooftop weather sensors to ensure uninterrupted and stable measurements using the results from the solar analysis, wind flow analysis, and the local site-specific requirements',
      img: `${wimg3}`
  },
  {
    label: 'Shading control data for each window',
    description:
      'We analysed the shading progression for the whole year and generated a correction factor corresponding to the rooftop sensor measurement for each window. Also, we created a window-specific data file that could be locally deployed by the integration partner.',
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

  return (
    <div className="row" style={{textAlign: 'left',  marginTop:'120px'}}>
    <h2
        style={{ fontFamily: "Exo2-Bold" }}
        className="single_project_desc_head"
   >
            {t('wago_project_oursolution')}
        </h2>
        <p style={{ fontFamily: "NunitoSans-Regular" , margintop: '24px', marginBottom: '40px'}} className="single_project_desc_p">
        {t('wago_project_oursolution_desc')}
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
        <a className="nav-link active" id="home-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '-10px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#home" role="tab" aria-controls="home" aria-selected="true">
          <div className="circle"></div>
          {t('wago_project_stephead1')}
          <div className="line"></div>
        </a>
        <a className="nav-link" id="profile-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '32px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#profile" role="tab" aria-controls="profile" aria-selected="false">
          <div style={{display:'flex', alignItems: 'center'}}>
          <div className="circle"></div>
          {t('wago_project_stephead2')}
          </div>
          <div className="line"></div>
        </a>
        <a className="nav-link" id="messages-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#messages" role="tab" aria-controls="messages" aria-selected="false">
          <div className="circle"></div>
          {t('wago_project_stephead3')}
          <div className="line"></div>
        </a>
        <a className="nav-link" id="settings-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#settings" role="tab" aria-controls="settings" aria-selected="false">
          <div className="circle"></div>
          {t('wago_project_stephead4')}
          <div className="line"></div>
        </a>
        <a className="nav-link" id="build-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#build" role="tab" aria-controls="build" aria-selected="false">
          <div className="circle"></div>
          {t('wago_project_stephead5')}
          <div className="line"></div>
        </a>
        <a className="nav-link" id="wind-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px', fontFamily: "NunitoSans-Regular"}} href="#wind" role="tab" aria-controls="wind" aria-selected="false">
          <div className="circle"></div>
          {t('wago_project_stephead6')}
        </a>
    </div>
    </div>
   </div>

    <div className="tab-content" id="tabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="subcontent2">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('wago_project_stephead1')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('wago_project_stepdesc1')}
          </p>
          <img className="stepper_desc_img" src={wimg} alt="home" />
        </div>
      </div>
      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
         <div className="subcontent2">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('wago_project_stephead2')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('wago_project_stepdesc2')}
          </p>
          <img className="stepper_desc_img" src={wimg2} alt="home" />
        </div>
      </div>
      <div className="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
         <div className="subcontent2">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('wago_project_stephead3')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('wago_project_stepdesc3')}
          </p>
          <img className="stepper_desc_img" src={wimg1} alt="home" />
        </div>
      </div>
      <div className="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
         <div className="subcontent2">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('wago_project_stephead4')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('wago_project_stepdesc4')}
          </p>
          <img className="stepper_desc_img" src={wimg4} alt="home" />

        </div>
      </div>
      <div className="tab-pane fade" id="build" role="tabpanel" aria-labelledby="build-tab">
         <div className="subcontent2">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('wago_project_stephead5')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('wago_project_stepdesc5')}
          </p>
          <img className="stepper_desc_img" src={wimg3} alt="home" />

        </div>
      </div>
      <div className="tab-pane fade" id="wind" role="tabpanel" aria-labelledby="wind-tab">
         <div className="subcontent2">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>{t('wago_project_stephead6')}</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400', fontFamily: "NunitoSans-Regular"}}>
          {t('wago_project_stepdesc6')}
          </p>
        </div>
      </div>
     
    </div>
   </div>
     </div>
  );
}





{/* <Box sx={{ maxWidth: 400 }} className="phoenix_stepper">
<h2
   style={{ fontFamily: "Exo2-Regular" }}
   className="text-[#2F2F2F] text-[50px] font-bold mb-4"
>
   Our solution
</h2>
<p style={{fontFamily:"NunitoSans-Regular"}} className="leading-relaxed text-[20px] font-[400] mb-3">
    Our solution included the following steps.
</p>
<Stepper  activeStep={activeStep} orientation="vertical">
{steps.map((step, index) => (
 <Step key={step.label}>
   <StepLabel className="steplabel"
     optional={
       index === 2 ? (
         <Typography variant="caption">Last step</Typography>
       ) : null
     }
   >
     {step.label}
   </StepLabel>
   <StepContent>
     <h1 className="stepper_desc_head" style={{ fontFamily: "Exo2-Regular" }}><b>{step.label}</b></h1>
     <Typography>
       {step.description}
       <img src={step.img} alt="stepimg" />
     </Typography>
    
     <Box sx={{ mb: 2 }}>

       <div>
         <Button
           variant="contained"
           onClick={handleNext}
           sx={{ mt: 1, mr: 1 }}
         >
           {index === steps.length - 1 ? 'Finish' : 'Continue'}
         </Button>
         <Button
           disabled={index === 0}
           onClick={handleBack}
           sx={{ mt: 1, mr: 1 }}
         >
           Back
         </Button>
       </div>
     </Box>
   </StepContent>
 </Step>
))}
</Stepper>

{activeStep === steps.length && (
<Paper square elevation={0} sx={{ p: 3 }}>
 <Typography>All steps completed - you&apos;re finished</Typography>
 <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
   Reset
 </Button>
</Paper>
)}
</Box> */}