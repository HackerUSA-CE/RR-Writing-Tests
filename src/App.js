import "./App.css"
import { useState } from "react"

function App() {
  const [btnColor, setBtnColor] = useState("green")
  const newBtnColor = btnColor === "green" ? "blue" : "green"
  const [disabled, setDisabled] = useState(false)
  // Below two lines are for part 5
  const [initialText, setInitialText] = useState("Button is disabled")
  const newText = initialText === "Button is enabled" ? "Button is disabled" : "Button is enabled"

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
        // Below onClick is for part 5
        onClick={() => setInitialText(newText)}
      />
      {/* Below line is for part 5 */}
      <p role="paragraph">{newText}</p>
    </div>
  )
}

export default App
