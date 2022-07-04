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
    label: 'Solar radiation analysis',
    description: `Our solar radiation analysis maps and analyses the sun's effects over a building's target surface to calculate the direct, diffuse, and global radiations. Understand the impact of solar radiation on your building's energy balance throughout the year and make informed decisions. Use this data service to assess your building's PV potential and glazing requirements, and accordingly, identify the optimal positions for outdoor seatings. `,
    img: './../../../assest/Images/project/trio/Mask group.png'
  },
  {
    label: 'Sunshine hour analysis',
    description: "Leaftech's Sunshine hour analysis provides the number of unobstructed hours of sunlight your building gets each year. Comply with the Right to light law and make the necessary design and architectural changes with this service. Combine it with shading analysis to derive the daylight factor of the building, which in turn, enhances your building's value and increases its appeal.",
    img: './../../../assest/Images/project/trio/24 1.png'
    },
  {
    label: 'Shading analysis',
    description: `Shading analysis provides information on solar access to different parts of the building and the site for the whole year and even generates a yearly shading progression for the areas of interest. Use this service to understand the passive design opportunities, choose a location for your outdoor seating area or swimming pool, smarten up your sun protection control, and more.`,
  },
  {
    label: 'Daylight analysis',
    description: 'Leverage our daylight analysis to assess the natural light intake for any given area or a room in a building. Our simulations and results are according to the DIN EN 17037, 5034, and LM-83 standards.',
      img: './../../../assest/Images/project/trio/24 1.png'
    },
  {
    label: 'Summer heat protection',
    description: `Our summer heat protection analysis encompasses the solar energy intake assessment of every window and the thermal simulation for each individual room. Use this data to understand if the room or target area is overheating, so you can make appropriate decisions to avoid the same. This service complies with the DIN 4108-2 regulations.`,
    img: './../../../assest/Images/project/trio/Mask group.png'
  },
  
  {
    label: 'Cooling & heating demand assessment ',
    description: `Understand the energy demands of your building with Leaftech's cooling and heating load assessment. We consider critical factors like weather effects including solar energy intake, building specification, user information, etc, in detail, to generate high-quality data with high resolution. The simulations and results are according to the DIN 4108, VDI 207, and DIN EN 12831. You can even utilise these results for the DIN 18599 assessment.`,
  },
  {
    label: 'Photovoltaic assessment ',
    description: `Get a detailed assessment of your building's solar PV potential and match it with your requirements and needs. We forecast the yield for the entire year and recommend the optimal position, number, orientation, and tilt of the PV panels on the roof and facade to ensure the highest efficiency and return on investment for your project. Our assessment includes both cost-benefit analysis and PV shading analysis.`,
    img: './../../../assest/Images/project/trio/Mask group.png'
  },
  {
    label: 'Building wind analysis',
    description:'Gain a better understanding of the wind flow patterns, wakes, and pressure zones with our CFD wind analysis for buildings. Use this data from our building wind analysis to know your wind energy potential, areas for natural ventilation and openings, operate shading devices safely and efficiently, understand passive design opportunities, and more.',
      img: './../../../assest/Images/project/trio/24 1.png'
    },
  {
    label: 'Weather sensor placement analysis ',
    description: `Obtain the number of sensors and their optimal locations to generate the most accurate and stable data, after considering local site-specific factors. We offer assessments for wind speed, wind direction, brightness, and global radiation sensors.`,
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
