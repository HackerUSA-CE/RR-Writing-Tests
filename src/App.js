import "./App.css"
import { useState } from "react"

function App() {
  const [btnColor, setBtnColor] = useState("green")
  const newBtnColor = btnColor === "blue" ? "green" : "blue"
  const [inputDisabled, setInputDisabled] = useState(false)
  // Below two lines are for part 5
  const [buttonStatus, setButtonStatus] = useState("Button is disabled")
  const newButtonStatus = buttonStatus === "Button is enabled" ? "Button is disabled" : "Button is enabled"

  return (
    <div className="App">
      <h1>Testing Playground</h1>
      {/* Below line is for part 5 */}
      <p role="paragraph">{newButtonStatus}</p>

      <button
        style={{ backgroundColor: btnColor }}
        onClick={() => setBtnColor(newBtnColor)}
        disabled={inputDisabled}
      >
        Change button color to {newBtnColor}
      </button>

      <input
        type="checkbox"
        defaultChecked={inputDisabled}
        onChange={(event) => setInputDisabled(event.target.checked)}
        // Below onClick is for part 5
        onClick={() => setButtonStatus(newButtonStatus)}
      />
    </div>
  )
}

export default App
