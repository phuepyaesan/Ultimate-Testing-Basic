"use client";
import React from "react";
//Event in class component
export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mg Kyaw Min",
      email: "kyaw123@gmail.com",
      phoneNo: "09898787876",
    };
    this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
  }

  onChangeEmail(changedEmail) {
    this.setState({ email: changedEmail });
  }

  onChangePhoneNo(event) {
    this.setState({ phoneNo: event.target.value });
  }

  onClickButton() {
    alert("Button one clicked !");
  }
  onClickButton2() {
    alert("Button two clicked !");
  }

  render() {
    return (
      <div>
        <h1>Event in Class Component</h1>
        <input
          value={this.state.name}
          placeholder="Enter Name"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />

        <input
          value={this.state.email}
          placeholder="Enter Email"
          onChange={(event) => {
            this.onChangeEmail(event.target.value);
          }}
        />

        <input
          value={this.state.phoneNo}
          placeholder="Enter Phone Number"
          onChange={this.onChangePhoneNo}
        />
        <button onClick={this.onClickButton}>Button</button>
        <button onClick={() => this.onClickButton2()}>Button2</button>
      </div>
    );
  }
}
