export const getFullDate = (date, language) => {

  return new Date(date).toLocaleDateString(`${language}-${language}`, {
    month: "short",
    day: "numeric",
    weekday: "long"
  })
}
