import "../css/Quiz.css";
import { Button, FormGroup, FormControl, FormText, FormCheck } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import React, { useState } from "react";
import {ButtonGroup, ToggleButton} from "react-bootstrap";

export default function Quiz() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verify, setVerify] = useState("");

/*   function validateForm() {
    return (
      email.length > 0 &&
      password.length > 0 &&
      verify.length > 0 &&
      password === verify
    );
    /*  if(email !== password){
        alert("Password do not match!");
      }; */
  

  function handleSubmit(event) {
    event.preventDefault();
    alert("This is a test");
  }
  return (
    <div>
      <br></br>
      <br></br>
      <div className="Quiz" id="Quizbox">
        <h2 id ="startHere">Take Your Placement Quiz</h2>
        <form onSubmit={handleSubmit}>
          {/* <FormGroup controlId="formBasicEmail">
              <FormLabel>What is your style? Striker  Grappler, Both?</FormLabel>
              <FormControl type="radio" placeholder="i.e. striker, grappler, both" />
            </FormGroup> */}
            <FormGroup>
              <FormLabel>Declare your style:</FormLabel>
          <ButtonGroup toggle>
            <br></br>
            <ToggleButton type="radio" name="radio" defaultChecked value="1">
           Striker
            </ToggleButton>
            <ToggleButton type="radio" name="radio" value="2">
            Grappler
            </ToggleButton>
            <ToggleButton type="radio" name="radio" value="3">
              Both
            </ToggleButton>
          </ButtonGroup>
          </FormGroup>
          <br></br>
          <FormGroup controlId="formBasicQuiz">
            <FormLabel>How long have you trained?</FormLabel>
            <FormControl type="text" placeholder="years of experience" />
          </FormGroup>
          <br></br>
          <FormGroup>
              <FormLabel>What is your gender?</FormLabel>
          <ButtonGroup toggle>
            <br></br>
            <ToggleButton type="radio" name="radio" defaultChecked value="1">
          Male
            </ToggleButton>
            <ToggleButton type="radio" name="radio" value="2">
           Female
            </ToggleButton>
          </ButtonGroup>
          </FormGroup>
          <br></br>
          <FormGroup controlId="formBasicQuiz">
            <FormLabel>What is your age?</FormLabel>
            <FormControl
              type="text"
              placeholder=""
            />
          </FormGroup>
          <br></br>
          <FormGroup controlId="formBasicQuiz">
            <FormLabel>How long have you trained?</FormLabel>
            <FormControl
              type="text"
              placeholder="years of experience"
            />
          </FormGroup>
          <br></br>
          <FormGroup controlId="formBasicQuiz">
            <FormLabel>How much do you train weekly?</FormLabel>
            <FormControl type="text" placeholder="i.e.hours a week" />
          </FormGroup>
          <br></br>
          <FormGroup controlId="formBasicQuiz">
            <FormLabel>How much do you weigh?</FormLabel>
            <FormControl
              type="text"
              placeholder="determine your weight class"
            />
          </FormGroup>
          <br></br>
          <FormGroup controlId="formBasicQuiz">
            <FormLabel>How tall are you?</FormLabel>
            <FormControl type="text" placeholder="i.e.height in inches" />
          </FormGroup>
          <br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
