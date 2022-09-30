import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { selectCity } from "../../../context/searchContext/searchActions";
import { SearchContext } from "../../../context/searchContext/searchContext";
import "./searchForm.scss";

export default function SearchForm() {
	// Context
	const { dispatch, selectedLanguage } = useContext(SearchContext);

	// State
	const [input, setInput] = useState("");

	// Handlers
	const formSubmitHandler = (e) => {
		e.preventDefault();

		dispatch(selectCity(input));
		setInput("");
	};

	return (
		<form
			data-testid="searchForm"
			className="searchForm"
			onSubmit={formSubmitHandler}
		>
			<input
				value={input}
				type="text"
				placeholder={selectedLanguage === `en` ? `Search` : `Suche`}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button>
				<FaSearch />
			</button>
		</form>
	);
}
