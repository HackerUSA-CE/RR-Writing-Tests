import { fireEvent, render, screen } from "@testing-library/react"
import App from './App'

test('header renders with correct text', () => {
  render(<App />)
  const headerEl = screen.getByRole("heading")
  expect(headerEl.textContent).toBe("Testing Playground")
})

test("button has correct initial color", () => {
  render(<App />)

  const colorBtn = screen.getByRole("button")
  expect(colorBtn).toHaveStyle({ backgroundColor: "green" })
})

test("button changes color when clicked", () => {
  render(<App />)
  const colorBtn = screen.getByRole("button")

  fireEvent.click(colorBtn)

  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
  expect(colorBtn.textContent).toBe("Change to green")
})

// below code is for bonus
test("initial conditions of button and checkbox", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button")
  expect(colorBtn).toBeEnabled()

  const checkbox = screen.getByRole("checkbox")
  expect(checkbox).not.toBeChecked()
});

test("checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const colorBtn = screen.getByRole("button")
  const checkbox = screen.getByRole("checkbox")

  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled()

  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled()
});

test("correct text appears when button is disabled or enabled", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button")
  const checkbox = screen.getByRole("checkbox");
  const paragraphEl = screen.getByRole("paragraph")

  expect(paragraphEl.textContent).toBe("Button is enabled")

  fireEvent.click(checkbox);
  expect(paragraphEl.textContent).toBe("Button is disabled")

  fireEvent.click(checkbox);
  expect(paragraphEl.textContent).toBe("Button is enabled")
});