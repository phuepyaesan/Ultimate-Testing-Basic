"use client";
function Greeting(props) {
  return (
    <div>
      <h2>Hello ,{props.name} !</h2>
    </div>
  );
}

export default function Parent() {
  return (
    <div>
      <Greeting name="Ko Ko" />
      <Greeting name="Ma Ma" />
    </div>
  );
}
