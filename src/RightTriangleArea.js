import React, { useState } from "react";
import AreaImg from "./assets/area.PNG";
import CalculatingGIF from "./assets/calculating-gif.gif";
import { inputHasValidValue } from "./functions";

export default function RightTriangleArea() {
  const [height, setHeight] = useState("");
  const [base, setBase] = useState("");
  const [showGIF, setShowGIF] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    if (message) setMessage("");

    const value = event.target.value;

    switch (event.target.name) {
      case "Height":
        setHeight(value);
        break;

      case "Base":
        setBase(value);
        break;

      default:
        console.log("Not a Input");
    }
  };

  const handleCalculateAreaBtnClick = () => {
    if (!inputHasValidValue(height) || !inputHasValidValue(base)) {
      setMessage("Enter valid value of Height and Base");
      return;
    }

    setMessage("");
    setShowGIF(true);

    setTimeout(() => {
      const area = (1 / 2) * Number(height) * Number(base);
      setMessage(
        `For ${height}cm height, and ${base}cm base, the value of area is ${area.toFixed(
          2
        )}cm sq`
      );

      setShowGIF(false);
    }, 2000);
  };

  return (
    <div className="AnglesOfTriangle CheckHypotenuse">
      {/* className has been used only for styling purpose */}

      <h3>
        You give us the value of Height and Base, and we will give you the value
        of Area
      </h3>

      <div className="ImageNInputContainer">
        {/* className has been used only for styling purpose */}
        {showGIF ? (
          <div style={{ padding: "2rem" }}>
            <img src={CalculatingGIF} alt="calculating gif taken from giphy" />
            <div>Just wait for a second...</div>
          </div>
        ) : (
          <img src={AreaImg} alt="png of a triangle with base and height" />
        )}

        <div>
          <div className="AoTInputDiv">
            {/* className has been used only for styling purpose */}
            <label htmlFor="height">Height (in cm)</label>
            <input
              type="number"
              min="0"
              id="height"
              name="Height"
              value={height}
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
                onClick={handleCalculateAreaBtnClick}
              >
                Calculate Area
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
