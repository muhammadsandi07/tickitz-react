import React from "react"
import { Link } from "react-router"
import noimage from "../../assets/other/noimage.jpg"

const Card = ({ title, poster_path, id, genre }) => {
  return (
    <div className='w-[240px] max-sm:mx-auto'>
      <div className=' w-[240px] h-[369px] relative group rounded-md '>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}) `
              : noimage
          }
          alt=''
          className='w-full h-full rounded-md'
        />
        <div className='hidden rounded-md absolute inset-0 bg-black/50 group-hover:flex flex-col justify-center items-center gap-3 transition duration-150 ease-in-out'>
          <Link to={`/movies/${id}`}>
            <button className=' w-[188px] h-[48px] bg-transparent rounded-[5px] border border-white text-white'>
              Details
            </button>
          </Link>
          <button className='w-[188px] h-[48px] hidden group-hover:block bg-primary rounded-[5px] border border-primary text-white'>
            Buy Tickets
          </button>
        </div>
      </div>
      <div>
        <h5 className='text-lg font-bold text-[#14142B] leading-[34px] tracking-[1px] max-sm:my-[5px] my-[19px] w-[240px] h-max'>
          {title}
        </h5>
        <div className='flex w-[240px] flex-wrap gap-2'>
          {genre.map((genre, id) => (
            <p
              key={id}
              className='leading-8 tracking-[0.75px] text-light-text px-[8px] py-[2px] bg-[#A0A3BD1A] rounded-[20px]'
            >
              {genre}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
