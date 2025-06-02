"use client";
function Greeting({ name = "Guest", age = "Unknown" }) {
  return (
    <h1>
      Hello {name} , Age {age}
    </h1>
  );
}

function Parent() {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Greeting />
    </div>
  );
}
export default Parent;
