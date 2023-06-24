import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          hello jackie
        </AccordionSummary>
        <AccordionDetails>
          <Typography textAlign={'left'} sx={{ color: "red" }}>
            If you've previously installed create-react-app globally via npm install -g create-react-app,
            we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global
            remove create-react-app to ensure that npx always uses the latest version.
          </Typography>
          <Button variant='contained'> this is button</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>

        </AccordionSummary>
        <AccordionDetails>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}