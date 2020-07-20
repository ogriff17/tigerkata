import "../css/FindFight.css";
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

export default class FindFight extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    /* this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeExperience = this.onChangeExperience.bind(this);
    this.onChangeTrainingHours = this.onChangeTrainingHours.bind(this);
    this.onChangeStyle= this.onChangeStyle.bind(this); */
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickOpponents = this.onClickOpponents.bind(this);
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
  }

  onClickOpponents(who, opponent) {
    console.log("FF inside onClickOpponents");
    console.log("opponents=" + opponent);
    window.$Opponent = true;
    const match = {
      email: who,
      opponent: opponent,
    };
  }

  componentDidMount() {
    console.log("inside componentDidMount");
    window.$Opponent = false;
    const user = {
      email: window.$Email,
    };
    console.log("email=" + user.email);
    axios
      .get("http://localhost:5000/users/quiz", user)
      .then((res) => {
        console.log("inside .then");
        let i;
        let loop = res.data.length;
        let okEmail = false;
        for (i = 0; i < loop; i++) {
          if (res.data[i].email === user.email) {
            this.setState({
              email: res.data[i].email,
              name: res.data[i].name,
              age: res.data[i].age,
              weight: res.data[i].weight,
              height: res.data[i].height,
              gender: res.data[i].gender,
              experience: res.data[i].experience,
              trainingHours: res.data[i].trainingHours,
              style: res.data[i].style,
              weightClass: res.data[i].weightClass,
            });
            console.log(res.data[i].name);
            i = loop;
            okEmail = true;
          }
        }
        console.log(res.data);
        console.log("after setState");
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("finished");
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    //this.forceUpdate();
    const user = {
      email: this.state.email,
      name: this.state.name,
    };
    window.$Opponent = true;
    axios.get("http://localhost:5000/users/FindFight", user).then((res) => {
      console.log(res.data);
      let i;
      let gender = "";
      let weightClass = "";
      let experienceLevel = "";
      let ageGroup = "";
      for (i = 0; i < res.data.length; i++) {
        if (res.data[i].email === user.email) {
          console.log("deleting i =" + i);
          gender = res.data[i].gender;
          weightClass = res.data[i].weightClass;
          experienceLevel = res.data[i].experienceLevel;
          ageGroup = res.data[i].ageGroup;
          res.data.splice(i, 1);
        }
      }
      console.log('ready to check the gender');
      // if (res.data.length === 0){
      //   console.log("Sorry. No opponent found!");
      // }
      //console.log('res.data.length=' + res.data.length);
      for (i = 0; i < res.data.length; i++) {
        if (
          res.data[i].gender !== gender ||
          res.data[i].weightClass !== weightClass ||
          res.data[i].experienceLevel !== experienceLevel ||
          res.data[i].ageGroup !== ageGroup
        ) {
          res.data.splice(i, 1)
          i = -1
          console.log('inside the loop!')
        }
      }
     if (res.data.length === 0){
        //if(1 == 1){
        alert("Sorry. No opponent found!");
      } 
      console.log('res.data.length=' + res.data.length);

      if (res.data.length >= 1) {
        this.setState({
          email0: res.data[0].email,
          name0: res.data[0].name,
          age0: res.data[0].age,
          gender0: res.data[0].gender,
          height0: res.data[0].height,
          weight0: res.data[0].weight,
          experience0: res.data[0].experience,
          weightClass0: res.data[0].weightClass,
        });
      }
      if (res.data.length >= 2) {
        this.setState({
          email1: res.data[1].email,
          name1: res.data[1].name,
          age1: res.data[1].age,
          gender1: res.data[1].gender,
          height1: res.data[1].height,
          weight1: res.data[1].weight,
          experience1: res.data[1].experience,
          weightClass1: res.data[1].weightClass,
        });
      }
      if (res.data.length >= 3) {
        this.setState({
          email2: res.data[2].email,
          name2: res.data[2].name,
          age2: res.data[2].age,
          gender2: res.data[2].gender,
          height2: res.data[2].height,
          weight2: res.data[2].weight,
          experience2: res.data[2].experience,
          weightClass2: res.data[2].weightClass,
        });
      }
    });
  }
  render() {
    //window.opponent = true;
    console.log("window.opponent =" + window.$Opponent);
    return (
      <div>
        <br></br>
        <br></br>
        <div className="Fight" id="Cardbox">
          <h2 id="startHere">My Stats</h2>
          <form onSubmit={this.onSubmit}>
            <Card>
              <Card.Header as="h5"></Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <FormGroup controlId="formBasicQuiz">
                  <FormLabel>Name:</FormLabel>
                  <FormControl
                    type="text"
                    disabled="true"
                    value={this.state.name}
                    onChange={this.onChangeName}
                  />
                </FormGroup>
                <FormGroup controlId="formBasicQuiz">
                  <FormLabel>Weight:</FormLabel>
                  <FormControl
                    type="text"
                    disabled="true"
                    value={this.state.weight}
                    onChange={this.onChangeWeight}
                  />
                </FormGroup>
                <FormGroup controlId="formBasicQuiz">
                  <FormLabel>Height:</FormLabel>
                  <FormControl
                    type="text"
                    disabled="true"
                    value={this.state.height}
                    onChange={this.onChangeHeight}
                  />
                </FormGroup>
                <FormGroup controlId="formBasicQuiz">
                  <FormLabel>Gender:</FormLabel>
                  <FormControl
                    type="text"
                    disabled="true"
                    value={this.state.gender}
                    onChange={this.onChangeGender}
                  />
                </FormGroup>
                <FormGroup controlId="formBasicQuiz">
                  <FormLabel>Age:</FormLabel>
                  <FormControl
                    type="text"
                    disabled="true"
                    value={this.state.age}
                    onChange={this.onChangeAge}
                  />
                </FormGroup>
                <FormGroup controlId="formBasicQuiz">
                  <FormLabel>Experience:</FormLabel>
                  <FormControl
                    type="text"
                    disabled="true"
                    value={this.state.experience}
                    onChange={this.onChangeExperience}
                  />
                </FormGroup>
                <FormGroup controlId="formBasicQuiz">
                  <FormLabel>Weight Class:</FormLabel>
                  <FormControl
                    type="text"
                    disabled="true"
                    value={this.state.weightClass}
                    onChange={this.onChangeWeightClass}
                  />
                </FormGroup>
                <FormGroup controlId="formBasicQuiz">
                  <FormLabel>Email address:</FormLabel>
                  <FormControl
                    type="text"
                    disabled="true"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </FormGroup>
                <br></br>
                <Button variant="primary" type="submit">
                  Find my Opponent
                </Button>
                <Card>
                  <If condition={window.$Opponent}>
                    <br></br>
                    <Card.Header>Featured Opponents:</Card.Header>
                    <Card.Body>
                      <Table responsive className="Table" bordered="true">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Weight</th>
                            <th>Height</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Yrs EXP</th>
                            <th>Weight Class</th>
                            <th>Email</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <If condition = {this.state.email0}>
                          <tr>
                            <td>1</td>
                            <td>{this.state.name0}</td>
                            <td>{this.state.weight0}</td>
                            <td>{this.state.height0}</td>
                            <td>{this.state.gender0}</td>
                            <td>{this.state.age0}</td>
                            <td>{this.state.experience0}</td>
                            <td>{this.state.weightClass0}</td>
                            <td>{this.state.email0}</td>
                            <td>
                              <Button
                                onClick={() =>
                                  this.onClickOpponents(
                                    this.state.email,
                                    this.state.email0
                                  )
                                }
                              >
                                Contact
                              </Button>
                            </td>
                          </tr>
                          </If>
                          <If condition = {this.state.email1}>
                          <tr>
                            <td>2</td>
                            <td>{this.state.name1}</td>
                            <td>{this.state.weight1}</td>
                            <td>{this.state.height1}</td>
                            <td>{this.state.gender1}</td>
                            <td>{this.state.age1}</td>
                            <td>{this.state.experience1}</td>
                            <td>{this.state.weightClass1}</td>
                            <td>{this.state.email1}</td>
                            <td>
                              <Button
                                onClick={() =>
                                  this.onClickOpponents(
                                    this.state.email,
                                    this.state.email1
                                  )
                                }
                              >
                                Contact
                              </Button>
                            </td>
                          </tr>
                          </If>
                          <If condition = {this.state.email2}>
                          <tr>
                            <td>3</td>
                            <td>{this.state.name2}</td>
                            <td>{this.state.weight2}</td>
                            <td>{this.state.height2}</td>
                            <td>{this.state.gender2}</td>
                            <td>{this.state.age2}</td>
                            <td>{this.state.experience2}</td>
                            <td>{this.state.weightClass2}</td>
                            <td>{this.state.email2}</td>
                            <td>
                              <Button
                                onClick={() =>
                                  this.onClickOpponents(
                                    this.state.email,
                                    this.state.email2
                                  )
                                }
                              >
                                Contact
                              </Button>
                            </td>
                          </tr>
                          </If>
                        </tbody>
                      </Table>
                    </Card.Body>
                  </If>
                </Card>
              </Card.Body>
            </Card>
          </form>
        </div>
      </div>
    );
  }
}
