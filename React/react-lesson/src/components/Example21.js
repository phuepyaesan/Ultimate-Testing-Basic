"use client";

export default function UserList() {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];

  return (
    <div>
      {users.map((user, index) => (
        <h2 key={user.id}>
          {user.name} and {user.age} year old
        </h2>
      ))}
    </div>
  );
}
