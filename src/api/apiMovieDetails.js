import getGenre from "./apiGenre.js"

// const API_KEY = import.meta.env.VITE_API_KEY
const api =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWUzNzg1YTRjZGI5MTIyMzQ2ZjI1OTRlZjZjODk2MiIsIm5iZiI6MTc0MTA5OTMyNy41MDQsInN1YiI6IjY3YzcxMTNmYzczZjE5OWY2YTkwODVmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qlby1wwd_KrXolAztTVZ2l4WoAmiXb7iVhI25BSSvsU"
const options = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${api}`,

    accept: "application/json",
  },
}

const getMovieDetails = async (id) => {
  try {
    const responseDetails = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    )
    const dataDetails = await responseDetails.json()
    const responseCredits = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      options
    )
    const dataCredits = await responseCredits.json()
    const listGenre = await getGenre()

    console.log("ini data details", dataDetails)
    console.log("ini data credits", dataCredits)

    // const newData = data?.results?.map(
    //   ({ id, poster_path, title, genre_ids }) => {
    //     const newGenre = []
    //     for (let index = 0; index < genre_ids.length; index++) {
    //       if (index > 1) {
    //         newGenre.push(listGenre.get(genre_ids[index]))
    //         newGenre.push("more...")
    //         break
    //       }
    //       newGenre.push(listGenre.get(genre_ids[index]))
    //     }
    //     return { id, poster_path, title, genre: newGenre }
    //   }
    // )
    // return newData
  } catch (error) {
    console.log(error)
  }
}

export default getMovieDetails

getMovieDetails(1286773)
