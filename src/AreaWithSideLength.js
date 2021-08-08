import React, { useState } from "react";
import AreaThreeSideImg from "./assets/area-three-side.png";
import CalculatingGIF from "./assets/calculating-gif.gif";
import { inputHasValidValue } from "./functions";

export default function AreaWithSideLength() {
  const [edgeZero, setEdgeZero] = useState("");
  const [edgeOne, setEdgeOne] = useState("");
  const [edgeTwo, setEdgeTwo] = useState("");
  const [showGIF, setShowGIF] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    if (message) setMessage("");

    const value = event.target.value;

    switch (event.target.name) {
      case "EdgeZero":
        setEdgeZero(value);
        break;

      case "EdgeOne":
        setEdgeOne(value);
        break;

      case "EdgeTwo":
        setEdgeTwo(value);
        break;

      default:
        console.log("Not a Input");
    }
  };

  const handleCalculateAreaBtnClick = () => {
    if (
      !inputHasValidValue(edgeZero) ||
      !inputHasValidValue(edgeOne) ||
      !inputHasValidValue(edgeTwo)
    ) {
      setMessage("Enter valid values for sides");
      return;
    }

    setMessage("");
    setShowGIF(true);

    setTimeout(() => {
      const semiPerimeter =
        (Number(edgeZero) + Number(edgeOne) + Number(edgeTwo)) / 2;

      const areaSq =
        semiPerimeter *
        (semiPerimeter - Number(edgeZero)) *
        (semiPerimeter - Number(edgeOne)) *
        (semiPerimeter - Number(edgeTwo));

      const area = Math.sqrt(areaSq);

      setMessage(`the value of area is ${area.toFixed(2)}cm sq`);

      setShowGIF(false);
    }, 2000);
  };

  return (
    <div className="AnglesOfTriangle CheckHypotenuse">
      {/* className has been used only for styling purpose */}

      <h3>Enter the length of sides of a triangle</h3>

      <div className="ImageNInputContainer">
        {/* className has been used only for styling purpose */}
        {showGIF ? (
          <div style={{ padding: "2rem" }}>
            <img src={CalculatingGIF} alt="calculating gif taken from giphy" />
            <div>Just wait for a second...</div>
          </div>
        ) : (
          <img
            src={AreaThreeSideImg}
            alt="png of a triangle with legend for sides"
          />
        )}

        <div>
          <div className="AoTInputDiv">
            {/* className has been used only for styling purpose */}
            <label htmlFor="edgeZero">Edge 0 (in cm)</label>
            <input
              type="number"
              min="0"
              id="edgeZero"
              name="EdgeZero"
              value={edgeZero}
              onChange={handleInputChange}
            />
          </div>

          <div className="AoTInputDiv">
            {/* className has been used only for styling purpose */}
            <label htmlFor="edgeOne">Edge 1 (in cm)</label>
            <input
              type="number"
              min="0"
              id="edgeOne"
              name="EdgeOne"
              value={edgeOne}
              onChange={handleInputChange}
            />
          </div>

          <div className="AoTInputDiv">
            {/* className has been used only for styling purpose */}
            <label htmlFor="edgeTwo">Edge 2 (in cm)</label>
            <input
              type="number"
              min="0"
              id="edgeTwo"
              name="EdgeTwo"
              value={edgeTwo}
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
