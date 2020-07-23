import React from "react";
import "../css/ContactForm.css";
import {
    Button,
    FormGroup,
    FormControl,
    FormText,
    FormCheck,
  } from "react-bootstrap";
  import { Col, Form,  Label, Input} from 'reactstrap';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
    this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeSubject = this.onChangeSubject.bind(this);
      this.onChangeMessage = this.onChangeMessage.bind(this);
     this.state = {
      email: window.$OpponentEmail,
      subject: "",
      message: ""
    };
  }
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
    const { status } = this.state;
    return (
        <div id ="Contactform">
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mvowdrvq"
        method="POST"
      >
        
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
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}