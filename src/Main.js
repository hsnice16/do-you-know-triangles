import React from "react";
import Learn from "./Learn";
import Quiz from "./Quiz";
import Calculator from "./Calculator";

export default function Main({ currentSelectedTab }) {
  return (
    <main>
      {currentSelectedTab === "Learn" && <Learn />}
      {currentSelectedTab === "Take a Quiz" && <Quiz />}
      {currentSelectedTab === "Calculator" && <Calculator />}
    </main>
  );
}
