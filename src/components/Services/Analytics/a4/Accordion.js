import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function SimpleAccordion() {
  const [accor, setaccor] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [expanded, setExpanded] = React.useState('panel1');
  const handleAccordion = () => {
    setaccor(!accor);
  };
  return (
    <div>
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
        //   expandIcon={accor === false ? (<AddCircleOutlineIcon />) : (<RemoveCircleOutlineIcon />)}
          expandIcon={expanded === 'panel1'?<RemoveCircleOutlineIcon />:<AddCircleOutlineIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={handleAccordion}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          <div>
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="https://dummyimage.com/502x302"
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={expanded === 'panel2'?<RemoveCircleOutlineIcon />:<AddCircleOutlineIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          onClick={handleAccordion}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
