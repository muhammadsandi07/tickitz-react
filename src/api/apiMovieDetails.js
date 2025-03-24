import formatterDate from "../utils/formatterDate.js"
import getGenre from "./apiGenre.js"

const API_KEY = import.meta.env.VITE_API_KEY
const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_KEY}`,

    accept: "application/json",
  },
}

const getMovieDetails = async (id) => {
  try {
    const dataMovie = {
      title: "",
      background: "",
      img: "",
      releaseDate: "",
      duration: {
        hour: 0,
        minute: 0,
      },
      cast: "",
      genre: [],
      director: "",
      synopsis: "",
    }
    const [responseDetails, responseCredits] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/${id}`, options),
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options),
    ])

    const dataDetails = await responseDetails.json()
    const dataCredits = await responseCredits.json()

    const {
      title,
      backdrop_path,
      poster_path,
      release_date,
      runtime,
      genres,
      overview,
    } = dataDetails

    const { date, month, year } = formatterDate(release_date)
    dataMovie.releaseDate = `${month} ${date}, ${year}`
    dataMovie.title = title
    dataMovie.background = backdrop_path
    dataMovie.img = poster_path
    dataMovie.duration.hour = Math.floor(runtime / 60)
    dataMovie.duration.minute = runtime - dataMovie.duration.hour * 60
    dataMovie.genre = genres
    dataMovie.synopsis = overview
    const arrCast = []
    for (let index = 0; index < dataCredits.cast.length; index++) {
      if (index > 2) {
        arrCast.push(dataCredits.cast[index].name)

        break
      } else {
        arrCast.push(dataCredits.cast[index].name)
      }
    }
    dataMovie.cast = arrCast.join(", ")

    dataMovie.director = dataCredits.crew
      .filter((pekerja) => pekerja.job === "Director")
      .map((pekerja) => pekerja.name)
      .join(", ")
    console.log(dataMovie, "data movie")
    return dataMovie
  } catch (error) {
    console.log(error)
  }
}

export default getMovieDetails
