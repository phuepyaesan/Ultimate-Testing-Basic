"use client";
import React from "react";
export default class Fruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "banana",
      price: 2000,
    };
  }
  render() {
    return (
      <div
        style={{ background: "pink", marginBottom: "20px", padding: "20px" }}
      >
        <h2>Fruits Data</h2>
        <span>Friut Name : {this.state.name} ,</span>
        <span>price :{this.state.price}</span>
        <hr />
      </div>
    );
  }
}
