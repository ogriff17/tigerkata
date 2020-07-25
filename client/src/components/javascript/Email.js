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
import Table from "react-bootstrap/Table";
import axios from "axios";
// import {ButtonGroup, ToggleButton} from "react-bootstrap";
import { Radio, RadioGroup } from "react-radio-group";
import { render } from "@testing-library/react";
import { If } from "rc-if-else";
import { Col, Form,  Label, Input} from 'reactstrap';

export default class Email extends Component {
  constructor(props) {
    super(props);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeSubject = this.onChangeSubject.bind(this);
      this.onChangeMessage = this.onChangeMessage.bind(this);
     this.state = {
      email: "",
      subject: "",
      message: ""
    };
  };
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeSubject(e) {
    this.setState({
      subject: e.target.value,
    });
  }
  onChangeMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    return (
     <div id ="email-div">
              <Form>
                 <FormGroup row>
                  <Label for="email">Email</Label>
                  {/* <Col sm={10}> */}
                    <Input type="email"  value={this.state.email}
                    onChange={this.onChangeEmail}  name="email" id="exampleEmail" placeholder="" />
                  {/* </Col> */}
                </FormGroup>
                 <FormGroup row>
                  <Label for="subject">Subject</Label>
                  {/* <Col sm={10}> */}
                    <Input type="text" value={this.state.subject}
                    onChange={this.onChangeSubject} name="subject" id="subexample" placeholder="" />
                  {/* </Col> */}
                </FormGroup>
                <FormGroup controlId="exampleForm.ControlTextarea1">
                <Label for ="message">Message</Label>
                <Input type="textarea"  value={this.state.message}
                    onChange={this.onChangeMessage}rows="9" cols ="50" name ="message" />
                </FormGroup>
                <br></br>
                <Button variant="primary" type="submit" id="button">
                Submit
                </Button>
                <br></br>
                </Form>
      </div>
    );
  }
};