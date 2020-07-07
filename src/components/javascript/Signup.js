import '../css/Signup.css';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import React, { useState } from "react";


export default function Signup () {
    const [email, setEmail] = useState("");
    const [password, setPassword,] = useState("");
    const [verify, setVerify,] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0 && verify.length > 0 && password === verify;
    /*  if(email !== password){
        alert("Password do not match!");
      }; */
    };
    

    function handleSubmit(event){
        event.preventDefault();
        alert("This is a test");

    };
  return (
      <div>
          <br></br><br></br>
        <div className = "Login" id="PwBox">
            <h2>Sign Up</h2>
            <form onSubmit ={handleSubmit}>
                <br></br>
                <FormGroup controlId ="email" bsSize="large"> 
                    <FormLabel>Email</FormLabel>
                    <FormControl className ="LoginInput"
                    autoFocus
                    type="email"
                    value={email}
                    onChange = {e => setEmail(e.target.value)}
                    />
                    <br></br><br></br>
                </FormGroup>
                <FormGroup controlId ="password" bsSize ="large">
                    <FormLabel>Password</FormLabel>
                     <FormControl className ="LoginInput"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                     type="text"
                     />
                </FormGroup>
                <FormGroup controlId ="verifyPassword" bsSize ="large">
                    <FormLabel>Verify Password</FormLabel>
                     <FormControl className ="LoginInput"
                     value={verify}
                     onChange={e => setVerify(e.target.value)}
                     type="text"
                     />
                </FormGroup>
                <br></br>
                <Button block bsSize ="large" disabled={!validateForm()} type="submit">
               Sign Up!
                </Button>
            </form>
        </div>
      </div>
  );

};

