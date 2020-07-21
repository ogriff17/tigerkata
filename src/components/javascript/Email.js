import "../css/Email.css";
import {
  Button,
  FormGroup,
  FormControl,
  FormText,
  FormCheck,
} from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import React, { useState, Component } from "react";
import { Card } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/table";
import axios from "axios";
// import {ButtonGroup, ToggleButton} from "react-bootstrap";
import { Radio, RadioGroup } from "react-radio-group";
import { render } from "@testing-library/react";
import { If } from "rc-if-else";
import { Col, Form,  Label, Input} from 'reactstrap';

export default class Email extends Component {
  constructor(props) {
    // super(props);
    // // this.onChangeName = this.onChangeName.bind(this);
    // // this.onSubmit = this.onSubmit.bind(this);
    // // this.onClickOpponents = this.onClickOpponents.bind(this);
     this.state = {
      email: "",
      name: "",
      age: 0,
      weight: 0,
      height: 0,
      gender: "",
      experience: 0,
      trainingHours: 0,
      style: "",
      weightClass: "",
    };
  };

  render() {
    console.log("window.opponent =" + window.$Opponent);
    return (
     <div>
              <Form>
                 <FormGroup row>
                  <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </Col>
                </FormGroup>
                 <FormGroup row>
                  <Label for="exampleEmail" sm={2}>Subject</Label>
                  <Col sm={10}>
                    <Input type="text" name="email" id="exampleEmail" placeholder="with a placeholder" />
                  </Col>
                </FormGroup>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
                </Form.Group>
                </Form>
      </div>
    );
  }
};