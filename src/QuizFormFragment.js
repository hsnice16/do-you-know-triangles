import React from "react";

export default function QuizFragment({ userAnswers, handleInputChange }) {
  return (
    <>
      <div className="QuizQuestionDiv FirstQuestion">
        <div>
          <span role="img" aria-label="digit one emoji">
            ❓
          </span>
          &nbsp;&nbsp;If a triangle has angles 135&deg;, 15&deg;, 30&deg;. Is it
          an obtuse triangle?
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="yes-obtuse"
            name="QuestionOne"
            value="Yes"
            checked={userAnswers[1] === "Yes"}
            onChange={handleInputChange}
          />
          <label htmlFor="yes-obtuse">Yes</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="no-obtuse"
            name="QuestionOne"
            value="No"
            checked={userAnswers[1] === "No"}
            onChange={handleInputChange}
          />
          <label htmlFor="no-obtuse">No</label>
        </div>
      </div>

      <div className="QuizQuestionDiv">
        <div>
          <span role="img" aria-label="digit one emoji">
            ❓
          </span>
          &nbsp;&nbsp;If a triangle has sides of 2cm, 3cm, 4cm, what is the type
          of triangle?
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="equilateral-side"
            name="QuestionTwo"
            value="Equilateral"
            checked={userAnswers[2] === "Equilateral"}
            onChange={handleInputChange}
          />
          <label htmlFor="equilateral-side">Equilateral</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="isosceles-side"
            name="QuestionTwo"
            value="Isosceles"
            checked={userAnswers[2] === "Isosceles"}
            onChange={handleInputChange}
          />
          <label htmlFor="isosceles-side">Isosceles</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="scalene-side"
            name="QuestionTwo"
            value="Scalene"
            checked={userAnswers[2] === "Scalene"}
            onChange={handleInputChange}
          />
          <label htmlFor="scalene-side">Scalene</label>
        </div>
      </div>

      <div className="QuizQuestionDiv">
        <div>
          <span role="img" aria-label="digit one emoji">
            ❓
          </span>
          &nbsp;&nbsp;A triangle has angles 60&deg;, 60&deg;, 60&deg;. Is it an
          equilateral triangle?
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="yes-equilateral"
            name="QuestionThree"
            value="Yes"
            checked={userAnswers[3] === "Yes"}
            onChange={handleInputChange}
          />
          <label htmlFor="yes-equilateral">Yes</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="no-equilateral"
            name="QuestionThree"
            value="No"
            checked={userAnswers[3] === "No"}
            onChange={handleInputChange}
          />
          <label htmlFor="no-equilateral">No</label>
        </div>
      </div>

      <div className="QuizQuestionDiv">
        <div>
          <span role="img" aria-label="digit one emoji">
            ❓
          </span>
          &nbsp;&nbsp;If a triangle has angles 115&deg;, 25&deg;, 40&deg;. Is it
          an acute triangle?
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="yes-actue"
            name="QuestionFour"
            value="Yes"
            checked={userAnswers[4] === "Yes"}
            onChange={handleInputChange}
          />
          <label htmlFor="yes-actue">Yes</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="no-actue"
            name="QuestionFour"
            value="No"
            checked={userAnswers[4] === "No"}
            onChange={handleInputChange}
          />
          <label htmlFor="no-actue">No</label>
        </div>
      </div>

      <div className="QuizQuestionDiv">
        <div>
          <span role="img" aria-label="digit one emoji">
            ❓
          </span>
          &nbsp;&nbsp;If a triangle has 2 sides with equal lengths and 75&deg;
          angle between them. What is the type of triangle?
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="equilateral-angle"
            name="QuestionFive"
            value="Equilateral"
            checked={userAnswers[5] === "Equilateral"}
            onChange={handleInputChange}
          />
          <label htmlFor="equilateral-angle">Equilateral</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="isosceles-angle"
            name="QuestionFive"
            value="Isosceles"
            checked={userAnswers[5] === "Isosceles"}
            onChange={handleInputChange}
          />
          <label htmlFor="isosceles-angle">Isosceles</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="right-angle"
            name="QuestionFive"
            value="Right Angle triangle"
            checked={userAnswers[5] === "Right Angle triangle"}
            onChange={handleInputChange}
          />
          <label htmlFor="right-angle">Right Angle triangle</label>
        </div>
      </div>

      <div className="QuizQuestionDiv">
        <div>
          <span role="img" aria-label="digit one emoji">
            ❓
          </span>
          &nbsp;&nbsp;If a triangle has 2 angles of 75&deg;. What is the measure
          of third angle in degree?
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="twenty-five-degree"
            name="QuestionSix"
            value="25"
            checked={userAnswers[6] === "25"}
            onChange={handleInputChange}
          />
          <label htmlFor="twenty-five-degree">25&deg;</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="thirty-degree"
            name="QuestionSix"
            value="30"
            checked={userAnswers[6] === "30"}
            onChange={handleInputChange}
          />
          <label htmlFor="thirty-degree">30&deg;</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="fifteen-degree"
            name="QuestionSix"
            value="15"
            checked={userAnswers[6] === "15"}
            onChange={handleInputChange}
          />
          <label htmlFor="fifteen-degree">15&deg;</label>
        </div>
      </div>

      <div className="QuizQuestionDiv">
        <div>
          <span role="img" aria-label="digit one emoji">
            ❓
          </span>
          &nbsp;&nbsp;The perimeter of an equilateral triangle is 15cm. What is
          the length of one side?
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="length-fifteen-side"
            name="QuestionSeven"
            value="15"
            checked={userAnswers[7] === "15"}
            onChange={handleInputChange}
          />
          <label htmlFor="length-fifteen-side">15cm</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="length-forty-five-side"
            name="QuestionSeven"
            value="45"
            checked={userAnswers[7] === "45"}
            onChange={handleInputChange}
          />
          <label htmlFor="length-forty-five-side">45cm</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            id="length-five-side"
            name="QuestionSeven"
            value="5"
            checked={userAnswers[7] === "5"}
            onChange={handleInputChange}
          />
          <label htmlFor="length-five-side">5cm</label>
        </div>
      </div>
    </>
  );
}
