import React from "react"
import "./App.css"
import { useState } from "react"

function App() {
  const [btnColor, setBtnColor] = useState("green")
  const newBtnColor = btnColor === "green" ? "blue" : "green"
  const [disabled, setDisabled] = useState(false)
  const [initialText, setInitialText] = useState("Button is disabled")
  const newText =
    initialText === "Button is enabled"
      ? "Button is disabled"
      : "Button is enabled"

  return (
    <div className="App">
      <h1>Testing Playground</h1>
      <button
        style={{ backgroundColor: btnColor }}
        onClick={() => setBtnColor(newBtnColor)}
        disabled={disabled}
      >
        Change to {newBtnColor}
      </button>

      <input
        type="checkbox"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
        onClick={() => setInitialText(newText)}
      />
      <p role="paragraph">{newText}</p>
    </div>
  );
}

export default App
