// StepWizard.js
import Card from "antd/lib/card/Card";
import React, { useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  ProgressBar,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { BsCheck } from "react-icons/bs";

const stepsContent = [
  "User Registration",
  "Personal Information",
  "Education Information",
  "Experience Information",
  "Salery Rivision",
  "Certification Information",
  "settings",
];

const steps = [
  "User Registration",
  "Personal Information",
  "Education Information",
  "Experience Information",
  "Salery Rivision",
  "Certification Information",
  "settings",
];

const StepWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle the submission logic here
    alert("Form Submitted!");
  };

  const isLastStep = currentStep === steps.length;

  const handleButtonClick = isLastStep ? handleSubmit : handleNext;
  const buttonText = isLastStep ? "Submit" : "Next";

  return (
    <div id="comp_wizard">
      <Card className="step-wizard">
        <Row>
          <Col md={3}>
            <ListGroup>
              {steps.map((step, index) => (
                <ListGroup.Item
                  key={index}
                  className={`${
                    currentStep > index + 1 ? "completed-step" : ""
                  }`}
                  onClick={() => setCurrentStep(index + 1)}
                  action
                >
                  {currentStep > index + 1 ? (
                    <Badge pill bg="success" className="me-2">
                      <BsCheck className="" />
                    </Badge>
                  ) : (
                    <Badge pill bg="primary" className="me-2">
                      {index + 1}
                    </Badge>
                  )}
                  {step}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={9}>
            <ProgressBar
              now={(currentStep / steps.length) * 100}
              label={`${currentStep}/${steps.length}`}
            />

            <div className="content">
              <h2 className="wizard-title">{steps[currentStep - 1]}</h2>
              <p>{stepsContent[currentStep - 1]}</p>
            </div>
            <div className="d-flex justify-content-between">
              <Button
                variant="secondary"
                onClick={handlePrev}
                disabled={currentStep === 1}
              >
                Previous
              </Button>{" "}
              <Button variant="primary" onClick={handleButtonClick}>
                {buttonText}
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default StepWizard;
