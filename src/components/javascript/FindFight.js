import "../css/Quiz.css";
import { Button, FormGroup, FormControl, FormText, FormCheck } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import React, { useState } from "react";
import {Card} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

export default function FindFight() {
  const [Weight, Height, Gender, Age, Experience] = useState("");
  

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
      <div className="Fight" id="Cardbox">
        <h2 id="startHere">Find my Fight</h2>
        <form onSubmit={handleSubmit}>
          <Card>
            <Card.Header as="h5"></Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                This will take you to the closest person that shares similar
                attributes and one we think will be a good sparring partner for
                you.
              </Card.Text>
              <Button variant="primary">Go!</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header as="h2">This is your opponent</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                Based on their statistics, this is the match that we would
                suggest. 
              </Card.Text>
             
              <ListGroup>
                <ListGroup.Item value = {Weight}>Weight:</ListGroup.Item>
                <ListGroup.Item value = {Height}>Height:</ListGroup.Item>
                <ListGroup.Item value = {Gender}>Gender:</ListGroup.Item>
                <ListGroup.Item value = {Age}>Age:</ListGroup.Item>
                <ListGroup.Item value = {Experience}>Experience:</ListGroup.Item>
              </ListGroup>
              <br></br>
              <Button variant="primary">Chat now!</Button>
            </Card.Body>
          </Card>
        </form>
      </div>
    </div>
  );
}