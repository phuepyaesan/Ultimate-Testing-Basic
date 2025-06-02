"use client";
import React, { useState } from "react";
export default function Person() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("mgmg123@gmail.com");
  const [phoneNo, setPhoneNo] = useState("09787867675");

  const onChangeEmail = (changedEmail) => {
    setEmail(changedEmail);
  };

  const onChangePhoneNo = (event) => {
    console.log("onChangPhoneNo", event);
    setPhoneNo(event.target.value);
  };

  const onClickButton = () => {
    alert("Button one clicked !");
  };

  const onClickButton2 = () => {
    alert("Button two clicked !");
  };
  return (
    <div>
      <h1>Event in Function Component</h1>
      <input
        value={name}
        placeholder="Enter Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        value={email}
        placeholder="Enter Email"
        onChange={(event) => onChangeEmail(event.target.value)}
      />
      <input
        value={phoneNo}
        placeholder="Enter Phone Number"
        onChange={onChangePhoneNo}
      />

      <button onClick={onClickButton}>Button</button>
      <button onClick={() => onClickButton2()}>Button2</button>
    </div>
  );
}
