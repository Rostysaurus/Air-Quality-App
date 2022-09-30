import { useContext } from "react"
import { selectLanguage } from "../../../context/searchContext/searchActions"
import { SearchContext } from "../../../context/searchContext/searchContext"
import "./languages.scss"

export default function Languages() {

  const {dispatch, selectedLanguage} = useContext(SearchContext)
  const languages = ["en", "de"]

    // Handlers
    const selectLanguageHandler = (e) => {
      e.preventDefault()
      dispatch(selectLanguage(e.target.innerText))
    }

  return (
    <ul className='languages'>
          {languages.map((language, index) => (
            <li
              className={`${language === selectedLanguage ? `selected` : null}`}
              key={index}
              onClick={selectLanguageHandler}
              >
                {language}</li>
          ))}
        </ul>
  )
}
