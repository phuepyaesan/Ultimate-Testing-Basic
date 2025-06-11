import Example1 from "../components/Example1";
import { Person } from "../components/Example2";
import Example3 from "../components/Example3";
import Example4 from "../components/Example4";
import Example5 from "../components/Example5";
import Example6 from "../components/Example6";
import Example7 from "../components/Example7";
import Example8 from "../components/Example8";
import Example9 from "../components/Example9";
import Example10 from "../components/Example10";
import Example11 from "../components/Example11";
import Example16 from "../components/Example16";
import Example19 from "../components/Example19";
import Example23 from "../components/Example23";
import Example26 from "../components/Example26";
import Example25 from "../components/Example25";
import Example18 from "../components/Example18";
import Exercise1 from "../exercises/Exercise1";
import Exercise2 from "../exercises/Exercise2";
import Exercise3 from "../exercises/Exercise3";
import Exercise4 from "../exercises/Exercise4";

export default function Home() {
  const task = [
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
  ];
  return (
    <div>
      {/* <Example4 /> */}
      {/* <Example5 />
      <Example6 />
      <Example7 />
      <Example8 />
      <Example9 />
      <Example10 /> */}
      {/* <Example11 /> */}
      {/* <Example12 /> */}
      {/* <Example17 status={"success"} /> */}
      {/* <Example16 hasMessage={true} />
      <Example18 isLogined={false} />
      <Example19 /> */}
      {/* <Example23 todos={task} /> */}
      <Example26 />
      {/* <Exercise1 />
      <Exercise2 />
      <Exercise3 />
      <Exercise4 /> */}
    </div>
  );
}
