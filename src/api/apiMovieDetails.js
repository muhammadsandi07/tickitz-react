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
    }
    const [responseDetails, responseCredits] = await Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/${id}`, options),
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options),
    ])

    const dataDetails = await responseDetails.json()
    const dataCredits = await responseCredits.json()
    const { title, backdrop_path, poster_path, release_date, runtime, genres } =
      dataDetails
    dataMovie.title = title
    dataMovie.background = backdrop_path
    dataMovie.img = poster_path
    dataMovie.duration.hour = Math.floor(runtime / 60)
    dataMovie.duration.minute = runtime - dataMovie.duration.hour * 60
    dataMovie.genre = genres

    for (let index = 0; index < dataCredits.cast.length; index++) {
      if (index > 2) {
        dataMovie.cast += dataCredits.crew[index].name + ", "
        dataMovie.cast += "..."
        break
      }
      dataMovie.cast += dataCredits.crew[index].name + ", "
    }
    dataMovie.director = dataCredits.crew
      .filter((pekerja) => pekerja.job === "Director")
      .map((pekerja) => pekerja.name)
      .join(", ")

    return dataMovie
  } catch (error) {
    console.log(error)
  }
}

export default getMovieDetails
