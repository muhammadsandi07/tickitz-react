import React, { useEffect, useState } from "react"
import spiderman from "../../assets/other/spiderman-hero.png"
import lionking from "../../assets/other/lionking.png"
import jhonwitch from "../../assets/other/jhonwitch.png"
import roblox from "../../assets/other/roblox.png"
import sheild from "../../assets/icon/shield.svg"
import field from "../../assets/icon/circle_fill.svg"
import speach from "../../assets/icon/buble_speach.svg"
import arrowNext from "../../assets/icon/arrow-next.svg"
import arrowPrevious from "../../assets/icon/arrow-previous.svg"
import arrowRedirect from "../../assets/icon/arrow-up.svg"
import getMoviePopular from "../../api/apiMoviePopular"
import getUpcoming from "../../api/apiUpComing"
import { Link } from "react-router"
import Card from "../card/Card"
import Subscribe from "../subscribe/Subscribe"

const Hero = () => {
  const [movie, setMovie] = useState([])
  const [upComing, setUpComing] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getAllMovie = async () => {
      try {
        setIsLoading(true)
        const [dataMovie, dataUpcoming] = await Promise.all([
          getMoviePopular(),
          getUpcoming(),
        ])
        setUpComing(dataUpcoming.slice(0, 4))
        setMovie(dataMovie.slice(0, 4))
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    getAllMovie()
  }, [])

  return (
    <>
      <div>
        <section className='flex max-md:flex-col gap-[19px]  items-center'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-primary max-md:text-center text-lg leading-8 tracking-[0.75px] font-bold'>
              MOVIE TICKET PURCHASES #1 IN INDONESIA
            </h3>
            <h1 className='max-md:text-[32px] font-bold max-md:leading-[45px] text-[48px] leading-[70px] font-medium tracking-[1px] max-md:text-center text-[#121212]'>
              Experience the Magic of Cinema: Book Your Tickets Today
            </h1>
            <p className='max-md:text-center text-light-text leading-8 tracking-[0.75px] '>
              Sign up and get the ticket with a lot of discount
            </p>
          </div>
          <div>
            <div className='grid  max-md:justify-center max-lg:grid-cols-[159px_159px] max-lg:grid-rows-[120px_58px_120px]   grid-cols-[217px_217px] grid-rows-[170px_80px_170px] gap-1 '>
              <div className=''>
                <img
                  src={jhonwitch}
                  alt='jhonwitch image'
                  className='max-lg:w-[159px] max-lg:h-[125px]    w-[217px] h-[170px]'
                />
              </div>
              <div className='row-span-2'>
                <img
                  src={lionking}
                  alt='lionking image'
                  className='max-lg:w-[159px] max-lg:h-[185px] w-[217px] h-[250px]'
                />
              </div>
              <div className='row-span-2'>
                <img
                  src={spiderman}
                  alt='spiderman'
                  className='max-lg:w-[159px] max-lg:h-[185px] w-[217px] h-[250px]'
                />
              </div>
              <div className=''>
                <img
                  src={roblox}
                  alt='roblox image'
                  className='max-lg:w-[159px] max-lg:h-[125px]  w-[217px] h-[170px]'
                />
              </div>
            </div>
          </div>
        </section>
        <section className='choose-us'>
          <h3 className='text-lg leading-[34px] text-primary font-bold max-sm:text-center'>
            WHY CHOOSE US
          </h3>
          <h2 className='text-[32px] text-[#121212] mt-[14px] mb-[24px]'>
            Unleashing the Ultimate Movie Experience
          </h2>
          <div className='flex max-sm:flex-col gap-8'>
            <div className='flex flex-col gap-[14px] max-sm:items-center max-sm:justify-center '>
              <div className='w-[54px] h-[54px] rounded-full flex justify-center items-center bg-[#1d4ed833] '>
                <img src={sheild} alt='guaranteed icon' />
              </div>
              <h4 className='text-lg leading-6 tracking-normal text-[#18181b] font-bold'>
                Guaranteed
              </h4>
              <p className='leading-8 tracking-[0.75px] text-light-text '>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
            <div className='flex flex-col gap-[14px] max-sm:items-center max-sm:justify-center '>
              <div className='w-[54px] h-[54px] rounded-full flex justify-center items-center bg-[#1d4ed833]'>
                <img src={field} alt='guaranteed icon' />
              </div>
              <h4 className='text-lg leading-6 tracking-normal text-[#18181b] font-bold'>
                Affordable
              </h4>
              <p className='leading-8 tracking-[0.75px] text-light-text '>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
            <div className='flex flex-col gap-[14px] max-sm:items-center max-sm:justify-center '>
              <div className='w-[54px] h-[54px] rounded-full flex justify-center items-center bg-[#1d4ed833]'>
                <img src={speach} alt='guaranteed icon' />
              </div>
              <h4 className='text-lg leading-6 tracking-normal text-[#18181b] font-bold'>
                24/7 Customer Support
              </h4>
              <p className='leading-8 tracking-[0.75px] text-light-text '>
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </div>
        </section>
        <section className='movies'>
          <h3 className='mb-14px text-primary leading-[34px] tracking-[0.75px] font-bold text-lg'>
            MOVIES
          </h3>
          <h2 className='text-[32px] leading-[45px] tracking-[1px] text-[#121212] mb-[28px]'>
            Exciting Movies That Should Be Watched Today
          </h2>
          <div className=' relative'>
            <div className='flex overflow-x-scroll gap-3'>
              {isLoading && <p>Loading...</p>}
              {isLoading || (
                <>
                  {movie?.map((data) => (
                    <Card {...data} key={data.id} />
                  ))}
                </>
              )}
            </div>
          </div>
          <div>
            <Link
              to={"/movies"}
              className='flex items-center justify-center mt-[38px] gap-2 '
            >
              <p className='text-primary text-lg leading-[34px] tracking-[1px] '>
                View All
              </p>
              <img src={arrowRedirect} alt='' width={20} height={20} />
            </Link>
          </div>
        </section>
        <section className='movies-up-coming'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='mb-14px text-primary leading-[34px] tracking-[0.75px] font-bold text-lg'>
                UPCOMING MOVIES
              </h3>
              <h2 className='text-[32px] leading-[45px] tracking-[1px] text-[#121212] mb-[28px]'>
                Exciting Movies That Should Be Watched Today
              </h2>
            </div>
            <div className='flex gap-[9px]'>
              <button className=' max-sm:hidden flex items-center justify-between rounded-full bg-[#A0A3BD] w-[69px] h-[69px]'>
                <img src={arrowPrevious} alt='' className='mx-auto' />
              </button>
              <button className='flex max-sm:hidden items-center justify-between rounded-full bg-primary w-[69px] h-[69px]'>
                <img src={arrowNext} alt='' className='mx-auto' />
              </button>
            </div>
          </div>
          <div className=' relative   '>
            <div className='flex  overflow-x-scroll gap-3'>
              {isLoading && <p>Loading...</p>}
              {isLoading || (
                <>
                  {upComing?.map((data) => (
                    <Card {...data} key={data.id} />
                  ))}
                </>
              )}
            </div>
          </div>
        </section>
      </div>
      <Subscribe />
    </>
  )
}

export default Hero
