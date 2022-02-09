import React from 'react-dom'
import Stepper from "./components/Stepper";
import styled from 'styled-components';
import {useStepper} from "./context";

function App() {
    const {incrementCurrentStep, decrementCurrentStep} = useStepper();

    return (
        <div className="container">
            <Stepper>
                <Stepper.Steps>
                    <Stepper.Step id="first" name="Step 1">
                        <StepBody>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div>
                                <Button onClick={incrementCurrentStep}>Next step</Button>
                            </div>
                        </StepBody>
                    </Stepper.Step>
                    <Stepper.Step id="second" name="Step 2">
                        <StepBody>
                            <p>Ad alias debitis dolore, doloribus ducimus, eaque illum ipsum laboriosam libero
                                magnam.</p>
                            <div>
                                <Button onClick={decrementCurrentStep}>Previous step</Button>
                                <Button onClick={incrementCurrentStep}>Next step</Button>
                            </div>                        </StepBody>
                    </Stepper.Step>
                    <Stepper.Step id="third" name="Step 3">
                        <StepBody>
                            <p>Molestiae nihil nulla odio repellendus rerum similique suscipit unde veniam!</p>
                            <div>
                                <Button onClick={decrementCurrentStep}>Previous step</Button>
                                <Button onClick={incrementCurrentStep}>Next step</Button>
                            </div>                        </StepBody>
                    </Stepper.Step>
                    <Stepper.Step id="forth" name="Step 4">
                        <StepBody>
                            <p>Accusamus alias asperiores beatae dolores et expedita molestias nihil tempora?</p>
                            <div>
                                <Button onClick={decrementCurrentStep}>Previous step</Button>
                                <Button onClick={incrementCurrentStep}>Next step</Button>
                            </div>                        </StepBody>
                    </Stepper.Step>
                </Stepper.Steps>
            </Stepper></div>
    );
}

const StepBody = styled.div`
  text-align:center;
`

const Button = styled.button`
  margin:0 20px;
  cursor:pointer;
  outline:none;
  background:#fff;
  border:1px solid #000;
  padding:6px 12px;
`

export default App;
