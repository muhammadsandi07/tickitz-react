const url = "https://api.themoviedb.org/3/genre/movie/list"

const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWUzNzg1YTRjZGI5MTIyMzQ2ZjI1OTRlZjZjODk2MiIsIm5iZiI6MTc0MTA5OTMyNy41MDQsInN1YiI6IjY3YzcxMTNmYzczZjE5OWY2YTkwODVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qlby1wwd_KrXolAztTVZ2l4WoAmiXb7iVhI25BSSvsU`,

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
