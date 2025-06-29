import Image from "next/image";
import styles from "./page.module.css";
import StudentList from "./students/page";
import BookList from "./books/page";

export default function Home() {
  return (
    <div>
      {/* <StudentList /> */}
      <BookList />
    </div>
  );
}
