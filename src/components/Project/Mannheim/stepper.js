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
// import Selve from "../assest/Images/home/weCreate2/Selve Original.svg";


const steps = [
  {
    label: '3D model setup',
    description: `Using building plans and geospatial data, we created a highly detailed 3D model of the target building (LOD 4) and merged it with models of surrounding buildings, vegetation, and terrain.`,
    img: 'src/assest/Images/project/trio/Mask group.png'
  },
  {
    label: 'Weather data integration & solar analysis*',
    description:
      'We used the resulting model to conduct a detailed shading analysis for multiple points on each window. Our algorithm calculated shading conditions and incident angles for each calculation point (virtual sensor*) for the sun position for the entire year. Embedding local TRY weather data, we quantified the annual energy intake for each calculation point.',
      img: './../assest/Images/project/trio/24 1.png'
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
    <Box sx={{ maxWidth: 400 }}>
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
              <h1 className="stepper_desc_head"><b>{step.label}</b></h1>
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
