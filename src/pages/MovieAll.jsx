import React, { useEffect, useState } from "react"
import Subscribe from "../components/subscribe/Subscribe"
import search from "../assets/icon/search.svg"
import frameSlide from "../assets/other/frame-slide.svg"
import Card from "../components/card/Card"
import getMoviePopular from "../api/apiMoviePopular"
import getUpcoming from "../api/apiUpComing"

const MovieAll = () => {
  const [movie, setMovie] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const getAllMovie = async () => {
      try {
        setIsLoading(true)
        const dataMovie = await getMoviePopular()
        const dataUpcoming = await getUpcoming()
        // console.log(dataMovie.length)
        // console.log(dataUpcoming.length)
        // setMovie((movie) => {
        //   const newMovie = [...movie, ...dataMovie, ...dataUpcoming]
        //   return newMovie
        // })
        setMovie(dataMovie.slice(0, 12))
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getAllMovie()
  }, [])

  return (
    <>
      <section
        className={`bg-[url(src/assets/bg/hero.png)]    h-[342px] bg-cover relative min-h-[462px]`}
      >
        <div className=' py-[104px] px-[2rem]  absolute inset-0 bg-black/50 px-[7%]'>
          <h3 className='text-lg leading-[34px] tracking-[0.75px] font-bold text-white mb-[10px] '>
            LIST MOVIE OF THE WEEK
          </h3>
          <h1 className='max-sm:text-[32px] max-sm:leading-10  text-5xl leading-[70px] max-w-[638px] font-medium tracking-[1px] text-white '>
            Experience the Magic of Cinema: Book Your Tickets Today
          </h1>
          <img
            src={frameSlide}
            alt=''
            className='absolute bottom-[25px] left-[50%]'
          />
        </div>
      </section>
      <section className='movie'>
        <div className='flex gap-[20px] mb-[55px] flex-wrap '>
          <div>
            <form>
              <label
                htmlFor='event'
                className='font-semibold leading-[20.08px] text-lg text-[#4e4b66] mb-[12px] leading-[100%] '
              >
                Cari Event
              </label>
              <div className='mb-[25px] flex py-[24px] px-[24px]  border-[#DEDEDE] items-center rounded-xl border w-full mt-[12px] gap-[15px] w-max'>
                <img src={search} alt='Search icon' />
                <input
                  type='text'
                  placeholder='New Born Expert'
                  className='border-none p-0 rouded-none  mr-auto rounded-none  mt-0 placeholder:text-[#a0a3bd] placeholder:text-base text-base  text-[#a0a3bd]  '
                />
              </div>
            </form>
          </div>
          <div>
            <p className='font-semibold  text-[#4e4b66] mb-[35px] leading-[100%] text-lg '>
              filter
            </p>
            <div>
              <button className='px-[24px] py-[10px]  leading-5 tracking-normal bg-transparent rounded-[10px] text-[#4e4b66] hover:bg-primary hover:text-white text-lg'>
                Thriller
              </button>
              <button className='px-[24px] py-[10px]  leading-5 tracking-normal bg-transparent rounded-[10px] text-[#4e4b66] hover:bg-primary hover:text-white text-lg'>
                Horror
              </button>
              <button className='px-[24px] py-[10px]  leading-5 tracking-normal bg-transparent rounded-[10px] text-[#4e4b66] hover:bg-primary hover:text-white text-lg'>
                Romantic
              </button>
              <button className='px-[24px] py-[10px]  leading-5 tracking-normal bg-transparent rounded-[10px] text-[#4e4b66] hover:bg-primary hover:text-white text-lg'>
                Sci-fi
              </button>
            </div>
          </div>
        </div>
        <div className='grid max-sm:grid-cols-1 max-md:grid-cols-2  max-lg:grid-cols-3 grid-cols-4 max-sm:gap-4 gap-y-20'>
          {isLoading && <p>Loading...</p>}
          {isLoading || (
            <>
              {movie?.map((data, index) => (
                <Card {...data} key={index + 1} />
              ))}
            </>
          )}
        </div>
        {/* <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>
            <img src='images/arrow-next-2.svg' alt='next icon' />
          </button>
        </div> */}
      </section>
      <Subscribe />
    </>
  )
}

export default MovieAll
