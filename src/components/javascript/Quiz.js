import "../css/Quiz.css";
import { Button, FormGroup, FormControl, FormText, FormCheck } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import React, { useState } from "react";

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
      <div className="Login" id="PwBox">
        <h2>Quiz</h2>
        <form onSubmit={handleSubmit}>
            <FormGroup controlId="formBasicEmail">
              <FormLabel>Email address</FormLabel>
              <FormControl type="email" placeholder="Enter email" />
              <FormText className="text-muted">
                We'll never share your email with anyone else.
              </FormText>
            </FormGroup>

            <FormGroup controlId="formBasicPassword">
              <FormLabel>Password</FormLabel>
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup controlId="formBasicCheckbox">
              <FormCheck type="checkbox" label="Check me out" />
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
        
        </form>
      </div>
    </div>
  );
}
