import getGenre from "./apiGenre.js"

const url = "https://api.themoviedb.org/3/movie/popular"
const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWUzNzg1YTRjZGI5MTIyMzQ2ZjI1OTRlZjZjODk2MiIsIm5iZiI6MTc0MTA5OTMyNy41MDQsInN1YiI6IjY3YzcxMTNmYzczZjE5OWY2YTkwODVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qlby1wwd_KrXolAztTVZ2l4WoAmiXb7iVhI25BSSvsU`,

    accept: "application/json",
  },
}

const getMoviePopular = async () => {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    const listGenre = await getGenre()
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
