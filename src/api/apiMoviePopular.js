import getGenre from "./apiGenre.js"

const url = "https://api.themoviedb.org/3/movie/popular"
const API_KEY = import.meta.env.VITE_API_KEY

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    accept: "application/json",
  },
}

const getMoviePopular = async () => {
  try {
    const [response, listGenre] = await Promise.all([
      fetch(url, options),
      getGenre(),
    ])
    const data = await response.json()
    const newData = data?.results?.map(
      ({ id, poster_path, title, genre_ids }) => {
        const newGenre = []
        for (let index = 0; index < genre_ids.length; index++) {
          if (index > 1) {
            newGenre.push(listGenre.get(genre_ids[index]))
            newGenre.push("more...")
            break
          }
          newGenre.push(listGenre.get(genre_ids[index]))
        }
        return { id, poster_path, title, genre: newGenre }
      }
    )
    return newData
  } catch (error) {
    console.log(error)
  }
}

export default getMoviePopular
