"use client";

import React from "react";

function UserListItem({ name, age }) {
  return (
    <li>
      {name} , {age} Year old ...
    </li>
  );
}

export default function UserList() {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  return (
    <ul>
      {users.map((user, index) => (
        <UserListItem key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
}
