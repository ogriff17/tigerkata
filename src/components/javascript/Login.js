import '../css/Login.css';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import React, { useState } from "react";


export default function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }

  return (
      <div>
          <br></br><br></br>
        <div className = "Login" id="PwBox">
            <h2>Login</h2>
            <form onSubmit ={handleSubmit}>
                <br></br>
                <FormGroup controlId ="email" bsSize="large"> 
                    <FormLabel>Email</FormLabel>
                    <FormControl classname ="LoginInput"
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
                     type="password"
                     />
                </FormGroup>
                <br></br>
                <Button block bsSize ="large" disabled={!validateForm()} type="submit">
                Login
                </Button>
            </form>
        </div>
      </div>
  );

};

