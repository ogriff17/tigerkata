import "../css/Quiz.css";
import { Button, FormGroup, FormControl, FormText, FormCheck } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import {Radio, RadioGroup} from 'react-radio-group';
//import tigereyes from '/public/images/tigereyes.png'; //Somewhere here I have to import the image
//otherwise it wont work...

const Quiz = (props) => {
  const [email, setEmail] = useState(window.$Email);
  const [name, setName] = useState(window.$Name);
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [trainingHours, setTrainingHours] = useState("");
  const [style, setStyle] = useState("");
  // const [weightClass, setWeightClass] = useState("");
  const user = {
    email: email,
    name: name,
    age: age,
    weight: weight,
    height: height,
    gender: gender,
    experience: experience,
    trainingHours: trainingHours,
    style: style
  }
  console.log(user);
      axios.get('http://localhost:5000/users/Quiz', user)
      //.then(res => DoRedirect(res))
      .catch((error) => {console.log(error)});
  

  

  function handleSubmit(event) {
    event.preventDefault();
    alert("This is inside Quiz submit");

    const user = {
      email: email,
      name: name,
      age: age,
      weight: weight,
      height: height,
      gender: gender,
      experience: experience,
      trainingHours: trainingHours,
      style: style
     /*  weightClass: weightClass */
    }
    console.log(user);
        axios.post('http://localhost:5000/users/update', user)
        .then(res => DoRedirect(res))
        .catch((error) => {console.log(error)});
    
    function DoRedirect(res){
        alert(res.data);
        props.history.push("/FindFight");
        return;
      }

  }
  return (
    <div>
      <br></br>
      <br></br>
      <div className="Quiz" id="Quizbox">
        <h2 id ="startHere">Take Your Placement Quiz</h2>
        <form onSubmit={handleSubmit}>
          <fieldset id = "fieldset">
            <FormGroup controlId="formBasicQuiz">
            <FormLabel>Your email address:</FormLabel>
            <FormControl type="text" placeholder="email here" disabled="true" value={email} onChange={e => setEmail(e.target.value)}/>
          </FormGroup>
            <br></br>
            <FormGroup controlId="formBasicQuiz">
            <FormLabel>Your name:</FormLabel>
            <FormControl type="text" placeholder="Name here" disabled="true" value={name} onChange={e => setName(e.target.value)}/>
          </FormGroup>
          <br></br>

            <FormGroup>
              <FormLabel>Declare your style:</FormLabel>
          <RadioGroup name ="rbStyle">
            <br></br>
            <Radio type="radio" value ="S" onChange={e => setStyle(e.target.value)}
            /> Striker
      
            <Radio type="radio"   value ="G" onChange={e => setStyle(e.target.value)} 
            />
                Grappler 
           
            <Radio type="radio"   value ="B" onChange={e => setStyle(e.target.value)}
            /> Both
          </RadioGroup>
          </FormGroup>
          <br></br>
          <FormGroup controlId="formBasicQuiz">
            <FormLabel>How long have you trained?</FormLabel>
            <FormControl type="text" placeholder="years of experience" value = {experience} onChange={e => setExperience(e.target.value)}/>
          </FormGroup>
          <br></br>

          <RadioGroup name ="rbGender">


            <Radio type="radio" value="M" onChange={e => setGender(e.target.value)}/> 
          Male
        
            <Radio type="radio" value="F" onChange={e => setGender(e.target.value)}/>
           Female
           
          </RadioGroup>
          
          <br></br>
          
          <FormGroup controlId="formBasicQuiz">
            <FormLabel>What is your age?</FormLabel>
            <FormControl type="text"placeholder="" value={age} onChange={e => setAge(e.target.value)}/>
          </FormGroup>
        
          <br></br>
          <FormGroup controlId="formBasicQuiz">
            <FormLabel>How much do you train weekly?</FormLabel>
            <FormControl type="text" placeholder="i.e.hours a week" value={trainingHours} onChange={e => setTrainingHours(e.target.value)} />
          </FormGroup>
          <br></br>
          <FormGroup controlId="formBasicQuiz">
            <FormLabel>How much do you weigh?</FormLabel>
            <FormControl type="text" placeholder="determine your weight class" value={weight} onChange={e => setWeight(e.target.value)}/>
          </FormGroup>
          <br></br>
          <FormGroup controlId="formBasicQuiz">
            <FormLabel>How tall are you?</FormLabel>
            <FormControl type="text" placeholder="i.e.height in inches" value={height} onChange={e => setHeight(e.target.value)} />
          </FormGroup>
          </fieldset>
          <br></br>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Quiz;
