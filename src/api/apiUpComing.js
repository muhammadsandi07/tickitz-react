import getGenre from "./apiGenre.js"

const url = "https://api.themoviedb.org/3/movie/popular"
const API_KEY = import.meta.env.VITE_API_KEY

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer e${API_KEY}`,

    accept: "application/json",
  },
}

const getUpcoming = async () => {
  try {
    const [responseUpcoming, listGenre] = await Promise.all([
      fetch(url, options),
      getGenre(),
    ])
    if (!responseUpcoming.ok) throw new Error("data tidak tersedia")
    const data = await responseUpcoming.json()
    const newData = data.results.map(
      ({ id, poster_path, title, genre_ids, release_date }) => {
        const newGenre = []
        for (let index = 0; index < genre_ids.length; index++) {
          if (index > 1) {
            newGenre.push(listGenre.get(genre_ids[index]))
            newGenre.push("more...")
            break
          }
          newGenre.push(listGenre.get(genre_ids[index]))
        }
        const dates = new Date(release_date)
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
        const month = montsList[dates.getMonth()]
        const year = dates.getFullYear()
        const newDate = `${month} ${year}`

        return { id, poster_path, title, genre: newGenre, newDate }
      }
    )

    return newData
  } catch (error) {
    console.log(error)
  }
}
export default getUpcoming
