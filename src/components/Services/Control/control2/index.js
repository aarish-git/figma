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
    label: 'Control data for smart shading',
    description: `Extend the capabilities of your local weather sensor to ensure secure, efficient, and comfortable control of your shading systems. To guarantee the highest level of system quality, we provide shading and wind correction factors for each window along with recommendations for weather sensor placement.  This solution is based on the VDI 3813/3814 and EN15232 standards.`,
    img: './../../../assest/Images/project/trio/Mask group.png'
  },
  {
    label: 'Cloud-based forecast for smart shading',
    description:
      'The digital twin continuously calculates the current and future shadowing, the irradiation angle, and the local wind profiles, and correlates them with local weather forecast data to provide forecasted control data related to the optimal shading positions and slat angles for each shading device. The data for each shading device is then integrated via Restful API for maximum thermal and visual comfort as well as energy efficiency.',
      img: './../../../assest/Images/project/trio/24 1.png'
    },
  {
    label: 'Energy balance forecast',
    description: `The Digital Twin forecasts the energy balance for each room, area, and the entire building after considering the influences from systems and people. This forecasted data is integrated into the HVAC control system to provide maximum efficiency while maintaining comfort at all times.`,
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
    <Box sx={{ maxWidth: 400 }} className="phoenix_stepper" style={{ marginTop: '80px', marginBottom: '100px'}}>
         {/* <h2
            style={{ fontFamily: "Exo2-Regular" }}
            class="text-[#2F2F2F] text-[50px] font-bold mb-4"
        >
            Our solution
        </h2>
        <p style={{fontFamily:"NunitoSans-Regular"}} class="leading-relaxed text-[20px] font-[400] mb-3">
             Our solution included the following steps.
        </p> */}
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
