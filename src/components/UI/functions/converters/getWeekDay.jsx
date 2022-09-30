export const getWeekDay = (date, language) => {
  return new Date(date).toLocaleDateString(`${language}-${language}`, {
    weekday: "long"
  })
}
