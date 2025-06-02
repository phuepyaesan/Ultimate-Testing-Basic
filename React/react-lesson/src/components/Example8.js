"use client";
function Greeting(props) {
  const { name, age } = props.user;
  return (
    <div>
      <h1>
        Hello My Name is {name} and {age} Year old !
      </h1>
    </div>
  );
}

function Parent() {
  const user1 = { name: "Alice", age: 32 };
  const user2 = { name: "BoB", age: 22 };

  return (
    <div>
      <Greeting user={user1} />
      <Greeting user={user2} />
    </div>
  );
}
export default Parent;
