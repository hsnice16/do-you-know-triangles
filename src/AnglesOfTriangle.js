import React, { useState } from "react";
import AnglesOfTriangleImg from "./assets/angles-of-triangle.png";
import CalculatingGIF from "./assets/calculating-gif.gif";
import { inputHasValidValue } from "./functions";

export default function AnglesOfTriangle() {
  const [angleZero, setAngleZero] = useState("");
  const [angleOne, setAngleOne] = useState("");
  const [angleTwo, setAngleTwo] = useState("");
  const [showGIF, setShowGIF] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    if (message) setMessage("");

    const value = event.target.value;

    switch (event.target.name) {
      case "AngleZero":
        setAngleZero(value);
        break;
      case "AngleOne":
        setAngleOne(value);
        break;
      case "AngleTwo":
        setAngleTwo(value);
        break;
      default:
        console.log("Not a Input");
    }
  };

  const handleCheckAnswerBtnClick = () => {
    if (
      !inputHasValidValue(angleZero) ||
      !inputHasValidValue(angleOne) ||
      !inputHasValidValue(angleTwo)
    ) {
      setMessage("Enter valid values for Angles");
      return;
    }

    setMessage("");
    setShowGIF(true);

    setTimeout(() => {
      const anglesSum = Number(angleZero) + Number(angleOne) + Number(angleTwo);

      if (anglesSum === 180) {
        setMessage("Yuhu! these angles can make a triangle");
      } else {
        setMessage("Oops! these angles cannot make a triangle");
      }

      setShowGIF(false);
    }, 2000);
  };

  return (
    <div className="AnglesOfTriangle">
      <h3>
        Enter the angles in below input boxes and we will tell you if those
        angles make a Triangle or Not.
      </h3>

      <div className="ImageNInputContainer">
        {showGIF ? (
          <div style={{ padding: "2rem" }}>
            <img src={CalculatingGIF} alt="calculating gif taken from giphy" />
            <div>Just wait for a second...</div>
          </div>
        ) : (
          <img
            src={AnglesOfTriangleImg}
            alt="png of triangle with legend for angles"
          />
        )}

        <div>
          <div className="AoTInputDiv">
            <label htmlFor="angle-zero">Angle 0 (in deg)</label>
            <input
              type="number"
              min="0"
              id="angle-zero"
              name="AngleZero"
              value={angleZero}
              onChange={handleInputChange}
            />
          </div>

          <div className="AoTInputDiv">
            <label htmlFor="angle-one">Angle 1 (in deg)</label>
            <input
              type="number"
              min="0"
              id="angle-one"
              name="AngleOne"
              value={angleOne}
              onChange={handleInputChange}
            />
          </div>

          <div className="AoTInputDiv">
            <label htmlFor="angle-two">Angle 2 (in deg)</label>
            <input
              type="number"
              min="0"
              id="angle-two"
              name="AngleTwo"
              value={angleTwo}
              onChange={handleInputChange}
            />
          </div>

          <div className="QuizBtnContainer">
            {/* className has been used only for styling purpose */}
            {showGIF === false && (
              <button
                className="CheckAnswerBtn"
                onClick={handleCheckAnswerBtnClick}
              >
                Check
              </button>
            )}
            {message && (
              <div className="PointsDiv ShowMessageDiv">{message}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
