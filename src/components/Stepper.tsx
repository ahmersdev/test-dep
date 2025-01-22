import { useState } from "react";
import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";

interface StepperProps {
  steps: string[];
  children: React.ReactNode[];
  onFinish?: () => void; // Optional callback when finished
}

export default function CustomStepper({ steps, children, onFinish }: StepperProps) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      if (onFinish) onFinish();
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Box>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box mt={4}>
        {children[activeStep]}
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
