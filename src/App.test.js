import { render, screen } from "@testing-library/react"
import App from './App'
import userEvent from '@testing-library/user-event'

test('header renders with correct text', () => {
  render(<App />)
  const headerEl = screen.getByRole("heading")
  expect(headerEl.textContent).toBe("Testing Playground")
})

describe('tests for button', () =>{
  test("button has initial background color of green", () => {
    render(<App />)
  
    const colorBtn = screen.getByRole("button")
    expect(colorBtn).toHaveStyle({ backgroundColor: "green" })
  })
  
  test("button changes color when clicked", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
  
    userEvent.click(colorBtn)
  
    expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
    expect(colorBtn.textContent).toBe("Change to green")
  })
})

describe('initial conditions of button and checkbox', () => {
  test("button is initially enabled and checkbox is initially not checked", () => {
    render(<App />);
  
    const colorBtn = screen.getByRole("button")
    // https://github.com/testing-library/jest-dom#tobeenabled
    expect(colorBtn).toBeEnabled()
  
    const checkbox = screen.getByRole("checkbox")
    // https://github.com/testing-library/jest-dom#tobechecked, note that the assertion is checking that the checkbox is not checked
    expect(checkbox).not.toBeChecked()
  })
})

describe('tests related to checkbox and enabling/disabling button', () => {
  test("checkbox disables button when first clicked, then enables button on second click", () => {
    render(<App />)
    const colorBtn = screen.getByRole("button")
    const checkbox = screen.getByRole("checkbox")
  
    userEvent.click(checkbox)
    // https://github.com/testing-library/jest-dom#tobedisabled
    expect(colorBtn).toBeDisabled()
  
    userEvent.click(checkbox)
    expect(colorBtn).toBeEnabled()
  })
  
  test("accurate text appears when button is enabled or disabled", () => {
    render(<App />)
    const checkbox = screen.getByRole("checkbox")
    const paragraphEl = screen.getByRole("paragraph")
  
    expect(paragraphEl.textContent).toBe("Button is enabled")
  
    userEvent.click(checkbox)
    expect(paragraphEl.textContent).toBe("Button is disabled")
  
    userEvent.click(checkbox)
    expect(paragraphEl.textContent).toBe("Button is enabled")
  })
})