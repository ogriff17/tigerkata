import '../css/Login.css';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";


const Login = (props)=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event){  
        event.preventDefault(); // no code here
        window.$Login = false;
        window.$Email = '';
        window.$Name = '';
        const user = {
            email:email,
            password:password 
        }
        console.log('user =' + {user})
        axios.get('/users/Login', user)
        .then(res => ChkResults(res, user) )
        .catch((error) => {console.log(error)});
    }

        function ChkResults(res, user) {
            var data = res.data;
            console.log('data ' + data);
            let okEmail = '';
            let okPw = '';
            let i;
            let loop = data.length;
            console.log('user.email = ' + user.email);
            for (i = 0;(i < loop && okEmail === '' && okPw === ''); i++){
                console.log('data ' + data[i].email);
                if (user.email === data[i].email){
                    okEmail = true
                    window.$Email = data[i].email
                    window.$Name = data[i].name
                    console.log('password ' + data[i].password);
                    console.log('user.password ' + user.password);
                   if (user.password === data[i].password)
                        {okPw = true}
                    else
                        {okPw = false};
                }
            };

            if (okEmail === true && okPw === true){
                window.$Login = true 
                DoRedirect()
            }

            else {
                alert('Login failed')
            };
            return;
        };

        function DoRedirect(){
            props.history.push("/Quiz")
            return;
        };

  return (
      <div id="loginPage">
        <div className = "Login" id="PwBox">
            <h2>Login</h2>
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
                     type="password"
                     />
                </FormGroup>
                <br></br>
                <Button block bsSize ="large" disabled={!validateForm()} type="submit" id ="button">
                Login
                </Button>
            </form>
        </div>
      </div>
  );

};

export default Login;

