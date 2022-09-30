import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import Topbar from "../../../components/topbar/Topbar"
import { expectationToBeInTheDocument } from "../../functions/expectationToBeInTheDocument"


test("Renders Left, Mid and Right divs", () => {
  render(<Topbar/>)
  const left = screen.getByTestId("left")
  const mid = screen.getByTestId("mid")
  const right = screen.getByTestId("right")
  expectationToBeInTheDocument(left)
  expectationToBeInTheDocument(mid)
  expectationToBeInTheDocument(right)
})
