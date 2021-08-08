import React from "react";

export default function Header({ currentSelectedTab, setCurrentSelectedTab }) {
  return (
    <header>
      <h3>
        <span role="img" aria-label="triangular ruler emoji">
          📐&nbsp;
        </span>
        fun with Triangles
      </h3>
      <small>
        Do you know Triangles? Check yourself{" "}
        <span role="img" aria-label="thumbs up emoji">
          👍
        </span>
      </small>

      <div className="ButtonContainer">
        <button
          className={`${currentSelectedTab === "Learn" ? "ActiveBtn" : ""}`}
          onClick={() => setCurrentSelectedTab("Learn")}
        >
          Learn
        </button>
        <button
          className={`${
            currentSelectedTab === "Take a Quiz" ? "ActiveBtn" : ""
          }`}
          onClick={() => setCurrentSelectedTab("Take a Quiz")}
        >
          Take a Quiz
        </button>
        <button
          className={`${
            currentSelectedTab === "Calculator" ? "ActiveBtn" : ""
          }`}
          onClick={() => setCurrentSelectedTab("Calculator")}
        >
          Calculator
        </button>
      </div>
    </header>
  );
}
