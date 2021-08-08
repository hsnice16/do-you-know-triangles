import React, { useState } from "react";
import CalculatingGIF from "./assets/calculating-gif.gif";
import QuizFormFragment from "./QuizFormFragment";

export default function Quiz() {
  const correctAnswers = {
    1: "Yes",
    2: "Scalene",
    3: "Yes",
    4: "No",
    5: "Isosceles",
    6: "30",
    7: "5"
  };

  const initialUserAnswersState = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: ""
  };

  const [userAnswers, setUserAnswers] = useState(initialUserAnswersState);
  const [checkAnswersBtnClicked, setCheckAnswersBtnClicked] = useState(false);
  const [showGIF, setShowGIF] = useState(false);
  const [points, setPoints] = useState(0);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (event) => {
    if (showError) setShowError(false);

    const value = event.target.value;

    switch (event.target.name) {
      case "QuestionOne":
        setUserAnswers((prevState) => ({ ...prevState, 1: value }));
        break;

      case "QuestionTwo":
        setUserAnswers((prevState) => ({ ...prevState, 2: value }));
        break;

      case "QuestionThree":
        setUserAnswers((prevState) => ({ ...prevState, 3: value }));
        break;

      case "QuestionFour":
        setUserAnswers((prevState) => ({ ...prevState, 4: value }));
        break;

      case "QuestionFive":
        setUserAnswers((prevState) => ({ ...prevState, 5: value }));
        break;

      case "QuestionSix":
        setUserAnswers((prevState) => ({ ...prevState, 6: value }));
        break;

      case "QuestionSeven":
        setUserAnswers((prevState) => ({ ...prevState, 7: value }));
        break;

      default:
        console.log("Not a Question");
    }
  };

  const noOfCorrectAnswers = () => {
    let countOfCorrectAnswers = 0;

    for (let key in correctAnswers) {
      if (correctAnswers[key] === userAnswers[key]) countOfCorrectAnswers += 1;
    }

    return countOfCorrectAnswers;
  };

  const hasAnswered = () => {
    for (let key in userAnswers) {
      if (userAnswers[key] !== "") return true;
    }
    return false;
  };

  const handleCheckAnswerBtnClick = () => {
    if (hasAnswered()) {
      setCheckAnswersBtnClicked(true);
      setShowGIF(true);

      setTimeout(() => {
        document.documentElement.scrollTop =
          document.documentElement.scrollHeight;

        setPoints(noOfCorrectAnswers());
        setShowGIF(false);
      }, 2000);
    } else {
      setShowError(true);
    }
  };

  const handleRetakeBtnClick = () => {
    setUserAnswers(initialUserAnswersState);
    setCheckAnswersBtnClicked(false);
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="Quiz">
      <QuizFormFragment
        userAnswers={userAnswers}
        handleInputChange={handleInputChange}
      />

      <div className="QuizBtnContainer">
        {checkAnswersBtnClicked === false && showGIF === false && (
          <>
            <button
              className="CheckAnswerBtn"
              onClick={handleCheckAnswerBtnClick}
            >
              Check Answers
            </button>
            {showError && (
              <div className="PointsDiv">
                {/* className has been used only for styling purpose */}
                Atleast answer one question
              </div>
            )}
          </>
        )}

        {checkAnswersBtnClicked === true && showGIF === true && (
          <>
            <img src={CalculatingGIF} alt="calculating gif taken from giphy" />
            <div>Just wait for a second...</div>
          </>
        )}

        {checkAnswersBtnClicked === true && showGIF === false && (
          <>
            <div className="PointsDiv">
              You got {points} point, your overall performance was{" "}
              {Math.trunc((points * 100) / 7)}%
            </div>
            <button className="CheckAnswerBtn" onClick={handleRetakeBtnClick}>
              Retake Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
}
