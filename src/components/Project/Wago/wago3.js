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


const steps = [
  {
    label: 'Digital twin setup',
    description: `We received the 3D model of the target building from the customer and created and merged it with the surroundings using satellite images and scans, and Leaftech’s in-house tool.`,
    img: './../../../assest/Images/project/trio/Mask group.png'
  },
  {
    label: 'Created the target surfaces & virtual sensor placement',
    description:
      'The rooftop and the windows were the target surfaces for sensor placement and shading control assessment respectively. We positioned the virtual sensors, i.e the calculation points on target surfaces, to simulate the influencing factors for every minute.',
      img: './../../../assest/Images/project/trio/24 1.png'
    },
  {
    label: 'Solar analysis',
    description: `Next, we did a detailed solar analysis for each virtual sensor 
    on the rooftop and the windows. This solar analysis included a solar radiation analysis, annual sunshine hours analysis, and shading analysis for the whole year.
    `,
  },
  {
    label: 'Wind flow analysis',
    description:
      'Using the digital twin model and local wind profile, we did a detailed CFD analysis to derive the wind flow pattern, pressure zone, and wakes for each calculation point around the building. ',
  },
  {
    label: 'Location for sensor placement',
    description:
      'Next, we derived the optimal location for rooftop weather sensors to ensure uninterrupted and stable measurements using the results from the solar analysis, wind flow analysis, and the local site-specific requirements',
  },
  {
    label: 'Shading control data for each window',
    description:
      'We analysed the shading progression for the whole year and generated a correction factor corresponding to the rooftop sensor measurement for each window. Also, we created a window-specific data file that could be locally deployed by the integration partner.',
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
    <Box sx={{ maxWidth: 400 }} className="phoenix_stepper">
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
              {/* <div>
              <img
                class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                src={step.img}
                alt="step"
              />
              </div> */}
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
      {/* <div class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12">
              <p>Digital Twin Creation</p>
              <img
                class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                src="https://dummyimage.com/1200x500"
                alt="step"
              />
            </div> */}
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
