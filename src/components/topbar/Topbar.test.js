import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Topbar from "./Topbar";

it("Topbar div should be rendered", () => {
	render(<Topbar />);
	const topbar = screen.getByTestId("topbar");
	expect(topbar).toBeInTheDocument();
});
