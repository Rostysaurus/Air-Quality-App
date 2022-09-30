import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom'
import SearchForm from "../../../components/UI/searchForm/SearchForm"
import { expectationToBeInTheDocument } from "../../functions/expectationToBeInTheDocument"


test("Renders form", () => {
  render(<SearchForm/>)

  // Chech for searchbar
  const form = screen.getByTestId("searchForm")
  expectationToBeInTheDocument(form)
})

test("Renders input", () => {
  render(<SearchForm/>)

  // Check for input
  const input = screen.getByRole("textbox")
  expectationToBeInTheDocument(input)

})

test("Renders button", () => {
  render(<SearchForm/>)

   // Check for button
  const button = screen.getByRole("button")
  expectationToBeInTheDocument(button)

})
