import '../css/Signup.css';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";



const Signup = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword,] = useState("");
    const [verify, setVerify,] = useState("");

    function validateForm() {
        return email.length > 0
         && name.length > 0
         && password.length > 0
         && verify.length > 0
         && password === verify;
    };
    

    function handleSubmit(event){
        event.preventDefault();
        alert("This is a test");
        const user = {
            email: email,
            name: name,
            password: password
        }
        alert(user);
        axios.post('/users/add', user)
        .then(res => DoRedirect(res))
        .catch((error) => {console.log(error)});

    }
        function DoRedirect(res){
            alert(res.data);
            props.history.push("/Login");
            return;
        }

  return (
      <div id="SignUp">
          <br></br><br></br>
        <div className = "Login" id="SignUp">
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
                <FormGroup controlId ="name" bsSize="large"> 
                    <FormLabel>Name:</FormLabel>
                    <FormControl className ="NameInput"
                    autoFocus
                    type="text"
                    value={name}
                    onChange = {e => setName(e.target.value)}
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
                <Button block bsSize ="large" disabled={!validateForm()} type="submit" id="button">
               Sign Up!
                </Button>
            </form>
        </div>
      </div>
  );

};




export default Signup;
