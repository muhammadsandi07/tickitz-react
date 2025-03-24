const url = "https://api.themoviedb.org/3/genre/movie/list"
const API_KEY = import.meta.env.VITE_API_KEY

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    accept: "application/json",
  },
}

const getGenre = async () => {
  try {
    const genreMovie = new Map()
    const response = await fetch(url, options)
    const dataGenre = await response.json()
    dataGenre.genres.forEach(({ id, name }) => {
      genreMovie.set(id, name)
    })
    return genreMovie
  } catch (error) {
    console.log(error)
  }
}

export default getGenre
