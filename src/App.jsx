import "./styles.css";
import { useState } from "react";
export default function App() {
  const [inputValue, setInputValue] = useState("0");
  const handleButtonClick = (value) => {
    if (inputValue === "0") {
      setInputValue(value);
    } else {
      setInputValue(inputValue + value);
    }
  };
  const handleClear = () => {
    setInputValue("0");
  };
  const handleBackspace = () => {
    if (inputValue.length > 1) {
      setInputValue(inputValue.slice(0, -1));
    } else {
      setInputValue("0");
    }
  };
  const handleCalculate = () => {
    try {
      const result = eval(inputValue);
      setInputValue(String(result));
    } catch (error) {
      setInputValue("Error");
    }
  };
  return (
    <div classNameName="container">
      <div className="warp">
        <h1 className="font">CALC-U-LATER</h1>
        <div className="panelBox">
          <input value={inputValue} className="input font" />
        </div>
        <div className="panelBox">
          <button className="btn font">ENTER SOME NUMBERS</button>
        </div>
        <div className="numberBock">
          <div className="numPanel">
            <button onClick={handleClear} className="numBtn font whiteBtn">
              C
            </button>
            <button onClick={handleBackspace} className="numBtn font whiteBtn">
              ⬅
            </button>
            <button
              onClick={() => handleButtonClick("-")}
              className="numBtn font whiteBtn"
            >
              -/+
            </button>
            <button
              onClick={() => handleButtonClick("/")}
              className="numBtn font blackBtn"
            >
              /
            </button>
          </div>
          <div className="numPanel">
            <button
              onClick={() => handleButtonClick("7")}
              className="numBtn font orangeBtn"
            >
              7
            </button>
            <button
              onClick={() => handleButtonClick("8")}
              className="numBtn font orangeBtn"
            >
              8
            </button>
            <button
              onClick={() => handleButtonClick("9")}
              className="numBtn font orangeBtn"
            >
              9
            </button>
            <button
              onClick={() => handleButtonClick("*")}
              className="numBtn font blackBtn"
            >
              *
            </button>
          </div>
          <div className="numPanel">
            <button
              onClick={() => handleButtonClick("4")}
              className="numBtn font orangeBtn"
            >
              4
            </button>
            <button
              onClick={() => handleButtonClick("5")}
              className="numBtn font orangeBtn"
            >
              5
            </button>
            <button
              onClick={() => handleButtonClick("6")}
              className="numBtn font orangeBtn"
            >
              6
            </button>
            <button
              onClick={() => handleButtonClick("-")}
              className="numBtn font blackBtn"
            >
              -
            </button>
          </div>
          <div className="numPanel">
            <button
              onClick={() => handleButtonClick("1")}
              className="numBtn font orangeBtn"
            >
              1
            </button>
            <button
              onClick={() => handleButtonClick("2")}
              className="numBtn font orangeBtn"
            >
              2
            </button>
            <button
              onClick={() => handleButtonClick("3")}
              className="numBtn font orangeBtn"
            >
              3
            </button>
            <button
              onClick={() => handleButtonClick("+")}
              className="numBtn font blackBtn"
            >
              +
            </button>
          </div>
          <div className="numPanel">
            <button
              onClick={() => handleButtonClick("0")}
              className="numBtnBig font orangeBtn"
            >
              0
            </button>
            <button
              onClick={() => handleButtonClick(".")}
              className="numBtn font orangeBtn"
            >
              .
            </button>
            <button onClick={handleCalculate} className="numBtn font whiteBtn">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
//ReactDOM.render(<App />, document.querySelector('#root'));
