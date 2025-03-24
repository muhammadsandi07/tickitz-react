const formatterDate = (inputDate) => {
  const data = new Date(inputDate)
  const montsList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const month = montsList[data.getMonth()]
  const date = data.getDate()
  const year = data.getFullYear()
  return { month, date, year }
}

export default formatterDate
