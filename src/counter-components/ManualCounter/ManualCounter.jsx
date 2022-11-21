import React, { useState } from "react";
import "./ManualCounter.css";
import AutoComplete from "../AutoComplete/AutoComplete";

const ManualCounter = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count- 1);
    }
  };


  return (
    <>
      <div className="counter-container">
        <h2 className="counter">{count}</h2>
        <p>{count > 9 && `You can't count more than that! :)`}</p>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </div>
      {count > 9 && <AutoComplete />}
    </>
  );
};

export default ManualCounter;