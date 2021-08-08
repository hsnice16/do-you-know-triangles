import React, { useState } from "react";
import AreaWithSideLength from "./AreaWithSideLength";
import RightTriangleArea from "./RightTriangleArea";

export default function CalculateArea() {
  const [calculateAreaWith, setCalculateAreaWith] = useState("height and base");

  const handleCalculateAreaWithBtnClick = () => {
    setCalculateAreaWith(
      calculateAreaWith === "height and base"
        ? "length of 3 sides"
        : "height and base"
    );
  };

  return (
    <div className="CalculateArea">
      {calculateAreaWith === "height and base" && <RightTriangleArea />}

      {calculateAreaWith === "length of 3 sides" && <AreaWithSideLength />}

      <div className="CalculateAreaWithBtnContainer">
        <button onClick={handleCalculateAreaWithBtnClick}>
          {calculateAreaWith === "height and base"
            ? "have length of 3 sides?"
            : "have value of height and base?"}
        </button>
      </div>
    </div>
  );
}
