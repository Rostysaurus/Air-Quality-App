import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import CountryStates from "./CountryStates";

it("Renderes the list of states", () => {
	render(<CountryStates />);
	const states = screen.getByTestId("statesList");
	expect(states).toBeInTheDocument();
});
