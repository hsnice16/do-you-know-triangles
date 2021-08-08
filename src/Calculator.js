import React, { useState } from "react";
import AnglesOfTriangle from "./AnglesOfTriangle";
import CalculateArea from "./CalculateArea";
import CheckHypotenuse from "./CheckHypotenuse";

export default function Calculator() {
  const [
    currentCalculatorSelectedTab,
    setCurrentCalculatorSelectedTab
  ] = useState("Angles of Triangle?");

  return (
    <div className="Calculator">
      <div className="InputDivContainer">
        <div className="InputDiv">
          <input
            type="radio"
            name="CalculatorCurrentTab"
            id="angles-of-triangle"
            value="Angles of Triangle?"
            checked={currentCalculatorSelectedTab === "Angles of Triangle?"}
            onChange={() =>
              setCurrentCalculatorSelectedTab("Angles of Triangle?")
            }
          />
          <label htmlFor="angles-of-triangle">Angles of Triangle?</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            name="CalculatorCurrentTab"
            id="check-hypotenuse"
            value="Check Hypotenuse"
            checked={currentCalculatorSelectedTab === "Check Hypotenuse"}
            onChange={() => setCurrentCalculatorSelectedTab("Check Hypotenuse")}
          />
          <label htmlFor="check-hypotenuse">Check Hypotenuse</label>
        </div>

        <div className="InputDiv">
          <input
            type="radio"
            name="CalculatorCurrentTab"
            id="calculate-area"
            value="Calculate Area"
            checked={currentCalculatorSelectedTab === "Calculate Area"}
            onChange={() => setCurrentCalculatorSelectedTab("Calculate Area")}
          />
          <label htmlFor="calculate-area">Calculate Area</label>
        </div>
      </div>

      {currentCalculatorSelectedTab === "Angles of Triangle?" && (
        <AnglesOfTriangle />
      )}

      {currentCalculatorSelectedTab === "Check Hypotenuse" && (
        <CheckHypotenuse />
      )}

      {currentCalculatorSelectedTab === "Calculate Area" && <CalculateArea />}
    </div>
  );
}
