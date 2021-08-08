import React, { useState } from "react";
import CheckHypotenuseImg from "./assets/check-hypotenuse.png";
import CalculatingGIF from "./assets/calculating-gif.gif";
import { inputHasValidValue } from "./functions";

export default function CheckHypotenuse() {
  const [perpendicular, setPerpendicular] = useState("");
  const [base, setBase] = useState("");
  const [showGIF, setShowGIF] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    if (message) setMessage("");

    const value = event.target.value;

    switch (event.target.name) {
      case "Perpendicular":
        setPerpendicular(value);
        break;

      case "Base":
        setBase(value);
        break;

      default:
        console.log("Not a Input");
    }
  };

  const handleCalculateHypoBtnClick = () => {
    if (!inputHasValidValue(perpendicular) || !inputHasValidValue(base)) {
      setMessage("Enter valid value for Perpendicular and Base");
      return;
    }

    setMessage("");
    setShowGIF(true);

    setTimeout(() => {
      const perpendicularSq = Number(perpendicular) ** 2;
      const baseSq = Number(base) ** 2;

      const hypotenuseSq = perpendicularSq + baseSq;
      const hypotenuse = Math.sqrt(hypotenuseSq);

      setMessage(
        `For ${perpendicular}cm perpendicular, and ${base}cm base, the value of hypotenuse is ${hypotenuse.toFixed(
          2
        )}cm`
      );

      setShowGIF(false);
    }, 2000);
  };

  return (
    <div className="AnglesOfTriangle CheckHypotenuse">
      {/* className has been used only for styling purpose */}

      <h3>Enter the length of sides of a right angle triangle</h3>

      <div className="ImageNInputContainer">
        {/* className has been used only for styling purpose */}
        {showGIF ? (
          <div style={{ padding: "2rem" }}>
            <img src={CalculatingGIF} alt="calculating gif taken from giphy" />
            <div>Just wait for a second...</div>
          </div>
        ) : (
          <img
            src={CheckHypotenuseImg}
            alt="png of a right angled triangle with legend for sides"
          />
        )}

        <div>
          <div className="AoTInputDiv">
            {/* className has been used only for styling purpose */}
            <label htmlFor="perpendicular">Perpendicular (in cm)</label>
            <input
              type="number"
              min="0"
              id="perpendicular"
              name="Perpendicular"
              value={perpendicular}
              onChange={handleInputChange}
            />
          </div>

          <div className="AoTInputDiv">
            {/* className has been used only for styling purpose */}
            <label htmlFor="base">Base (in cm)</label>
            <input
              type="number"
              min="0"
              id="base"
              name="Base"
              value={base}
              onChange={handleInputChange}
            />
          </div>

          <div className="QuizBtnContainer">
            {/* className has been used only for styling purpose */}
            {showGIF === false && (
              <button
                className="CheckAnswerBtn"
                onClick={handleCalculateHypoBtnClick}
              >
                Calculate
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
