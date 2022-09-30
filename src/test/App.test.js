import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "../App"

test("Renders Home", () => {
  render(<App/>)
  const home = screen.getByRole("home")
  expect(home).toBeInTheDocument()
})
