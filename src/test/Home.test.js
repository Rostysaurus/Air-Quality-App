import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Home from "../pages/home/Home"
import { expectationToBeInTheDocument } from "./functions/expectationToBeInTheDocument"

test("Renders Topbar, Main and Footer", () => {
  render(<Home/>)
  const topbar = screen.getByTestId("topbar")
  const main = screen.getByTestId("main")
  const footer = screen.getByTestId("footer")
  expectationToBeInTheDocument(topbar)
  expectationToBeInTheDocument(main)
  expectationToBeInTheDocument(footer)
})
