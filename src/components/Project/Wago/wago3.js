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
import wimg1 from "../../../assest/Images/project/wago/w1.png"
import wimg2 from "../../../assest/Images/project/wago/w2.png"
import wimg3 from "../../../assest/Images/project/wago/w3.png"
import wimg4 from "../../../assest/Images/project/wago/w4.png"


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
    <div className="row" style={{textAlign: 'left'}}>
    <h2
        style={{ fontFamily: "Exo2-Bold" }}
        className="single_project_desc_head"
   >
            Our solution
        </h2>
        <p style={{ fontFamily: "NunitoSans-Regular" , margintop: '24px', marginBottom: '40px'}} className="single_project_desc_p">
          Below is our detailed solution for Wago. 
        </p>
        <div className="allsteper">
    <div className="stepLabel">
         <div class="step completed">
      {/* <div class="v-stepper">
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
      </div> */}
     <div class="nav step flex-column nav-pills" id="tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link active" id="home-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '-10px', fontSize:'24px'}} href="#home" role="tab" aria-controls="home" aria-selected="true">
          <div class="circle"></div>
          Digital twin setup
          <div class="line"></div>
        </a>
        <a class="nav-link" id="profile-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '32px', fontSize:'24px'}} href="#profile" role="tab" aria-controls="profile" aria-selected="false">
          <div style={{display:'flex', alignItems: 'center'}}>
          <div class="circle"></div>
           Created the target surfaces & virtual sensor placement
          </div>
          <div class="line"></div>
        </a>
        <a class="nav-link" id="messages-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px'}} href="#messages" role="tab" aria-controls="messages" aria-selected="false">
          <div class="circle"></div>
          Solar analysis
          <div class="line"></div>
        </a>
        <a class="nav-link" id="settings-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px'}} href="#settings" role="tab" aria-controls="settings" aria-selected="false">
          <div class="circle"></div>
          Wind flow analysis
          <div class="line"></div>
        </a>
        <a class="nav-link" id="build-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px'}} href="#build" role="tab" aria-controls="build" aria-selected="false">
          <div class="circle"></div>
          Location for sensor placement
          <div class="line"></div>
        </a>
        <a class="nav-link" id="wind-tab" onClick={() => window.scrollTo(0, 1500)} data-toggle="pill" style={{marginTop: '48px', fontSize:'24px'}} href="#wind" role="tab" aria-controls="wind" aria-selected="false">
          <div class="circle"></div>
          Shading control data for each window
        </a>
    </div>
    </div>
   </div>

    <div class="tab-content" id="tabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div className="subcontent2">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>Digital twin setup</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400'}}>
          We received the 3D model of the target building from the customer and created and merged it with the surroundings using satellite images and scans, and Leaftech’s in-house tool.
          </p>
          <img className="stepper_desc_img" src={wimg} alt="home" />
        </div>
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
         <div className="subcontent2">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>Created the target surfaces & virtual sensor* placement</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400'}}>
          The rooftop and the windows were the target surfaces for sensor placement and shading control assessment respectively. We positioned the virtual sensors, i.e the calculation points on target surfaces, to simulate the influencing factors for every minute.
          </p>
          <img className="stepper_desc_img" src={wimg2} alt="home" />
        </div>
      </div>
      <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">
         <div className="subcontent2">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>Solar analysis</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400'}}>
          Next, we did a detailed solar analysis for each virtual sensor 
          on the rooftop and the windows. This solar analysis included a solar radiation analysis, annual sunshine hours analysis, and shading analysis for the whole year.
          </p>
          <img className="stepper_desc_img" src={wimg1} alt="home" />
        </div>
      </div>
      <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">
         <div className="subcontent2">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>Wind flow analysis</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400'}}>
          Using the digital twin model and local wind profile, we did a detailed CFD analysis to derive the wind flow pattern, pressure zone, and wakes for each calculation point around the building. 
          </p>
          <img className="stepper_desc_img" src={wimg4} alt="home" />

        </div>
      </div>
      <div class="tab-pane fade" id="build" role="tabpanel" aria-labelledby="build-tab">
         <div className="subcontent2">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>Location for sensor placement</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400'}}>
            Next, we derived the optimal location for rooftop weather sensors to ensure uninterrupted and stable measurements using the results from the solar analysis, wind flow analysis, and the local site-specific requirements
          </p>
          <img className="stepper_desc_img" src={wimg3} alt="home" />

        </div>
      </div>
      <div class="tab-pane fade" id="wind" role="tabpanel" aria-labelledby="wind-tab">
         <div className="subcontent2">
          <h1 className="stepper_desc_head" style={{ fontFamily: "NunitoSans-Regular" }}><b>Shading control data for each window</b></h1>
          <p className="stepper_desc_p" style={{ fontWeight: '400'}}>
            We analysed the shading progression for the whole year and generated a correction factor corresponding to the rooftop sensor measurement for each window. Also, we created a window-specific data file that could be locally deployed by the integration partner.
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
   class="text-[#2F2F2F] text-[50px] font-bold mb-4"
>
   Our solution
</h2>
<p style={{fontFamily:"NunitoSans-Regular"}} class="leading-relaxed text-[20px] font-[400] mb-3">
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