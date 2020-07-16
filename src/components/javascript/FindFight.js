import "../css/FindFight.css";
import { Button, FormGroup, FormControl, FormText, FormCheck } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import React, { useState } from "react";
import {Card} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/table';
// import {ButtonGroup, ToggleButton} from "react-bootstrap";
// import axios from "axios";
import {Radio, RadioGroup} from 'react-radio-group';

export default function FindFight() {
  const [
    Name,
    Weight,
    Height,
    Gender,
    Age,
    Experience,
    weightClass,
    Email,
  ] = useState("");

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
              <ListGroup>
                <ListGroup.Item value={Name}>Name:</ListGroup.Item>
                <ListGroup.Item value={Weight}>Weight:</ListGroup.Item>
                <ListGroup.Item value={Height}>Height:</ListGroup.Item>
                <ListGroup.Item value={Gender}>Gender:</ListGroup.Item>
                <ListGroup.Item value={Age}>Age:</ListGroup.Item>
                <ListGroup.Item value={Experience}>Experience:</ListGroup.Item>
                <ListGroup.Item value={weightClass}>
                  Weight Class:
                </ListGroup.Item>
                <ListGroup.Item value={Email}>Email:</ListGroup.Item>
              </ListGroup>
              <br></br>
              <Button variant="primary">Find my opponent</Button>
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
              <br></br>
              <Card>
                <Card.Header>Featured Opponents:</Card.Header>
                <Card.Body>
                  <Table responsive className="Table" bordered ='true'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name:</th>
                        <th>Weight:</th>
                        <th>Height:</th>
                        <th>Gender:</th>
                        <th>Age:</th>
                        <th>Yrs EXP:</th>
                        <th>Weight Class:</th>
                        <th>Email:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                    </tbody>
                  </Table>
                      <br></br>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </form>
      </div>
    </div>
  );
}