import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import getMovieDetails from "../api/apiMovieDetails"
import noimage from "../assets/other/noimage.jpg"
import evbId from "../assets/cinema/ebv_id.svg"
import hiflix from "../assets/cinema/hiflix.svg"
import cineone from "../assets/cinema/CineOne21.svg"
import forward from "../assets/icon/forward.svg"
import BtnTime from "../components/button/BtnTime"
import { useDispatch } from "react-redux"
import { addOrder } from "../redux/slices/order"
const MovieDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [showTime, setShowTime] = useState(false)
  const [form, setForm] = useState({
    idMovie: "",
    img: "",
    date: "",
    time: "",
    title: "",
    location: "default",
    cinema: "",
    genre: [],
  })
  const navigate = useNavigate()

  const timeList = ["08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM"]
  const cinema = [evbId, hiflix, cineone]
  useEffect(() => {
    const getAllMovie = async (id) => {
      try {
        const dataMovie = await getMovieDetails(id)
        console.log(dataMovie, "ini data movie")

        setMovie(dataMovie)
      } catch (error) {
        console.log(error)
      }
    }
    getAllMovie(id)
  }, [])

  const inputChangeHandler = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    }

    console.log(newForm)
    setForm(newForm)
  }

  const handlerBookNow = (e) => {
    e.preventDefault()
    const newForm = {
      ...form,
      idMovie: id,
      img: movie.img,
      title: movie.title,
      genre: movie.genre,
    }
    dispatch(addOrder(newForm))
    navigate("/order")
  }
  return (
    <div>
      <div className='min-h-[415px]  relative '>
        <img
          src={`${
            movie.background
              ? `https://image.tmdb.org/t/p/original${movie.background}`
              : noimage
          } `}
          alt=''
          className='h-[415px] w-full  '
        />
        <div className='absolute inset-0 bg-black/50'></div>
      </div>
      <section className='pt-0'>
        <div className='flex flex-col max-md:justify-center relative max-md:pt-[190px] md:flex-row gap-5'>
          <div className=' max-md:w-[240px] md:w-[264px] max-md:h-[369px] md:h-[405px] max-md:absolute max-md:top-[-200px] max-md:left-[50%] max-md:translate-x-[-50%] group rounded-md shrink-0 '>
            <img
              src={`${
                movie.img
                  ? `https://image.tmdb.org/t/p/original${movie.img}`
                  : noimage
              } `}
              alt=''
              className='rounded-md h-full w-full md:relative md:top-[-150px]'
            />
          </div>
          <div>
            <h3 className='text-xl font-semibold leading-8 tracking-[0.75px] max-md:text-center mb-[20px] md:text-[32px] md:font-bold md:mt-[23px] '>
              {movie.title}
            </h3>
            <div className='flex gap-2 flex-wrap max-md:justify-center mb-[21px] ml-4'>
              {movie?.genre?.map((genre, index) => (
                <div key={index}>
                  {index < 2 ? (
                    <p
                      key={index}
                      className='text-light-text text-sm leading-6 trackking-[0.75px] text-center px-[8px] py-[2px] bg-[#A0A3BD1A] rounded-[20px] w-max md:py-[12px] px-[25px]  '
                    >
                      {genre.name}
                    </p>
                  ) : (
                    []
                  )}
                </div>
              ))}
            </div>
            <div className='flex justify-between'>
              <div className='flex-1 shrink-0'>
                <p className='text-[13px] md:text-sm text-[#8692A6] leading-[22px] tracking-[0.75px] '>
                  Release date
                </p>
                <p className='leading-7  tracking-[0.75px] text-[#121212]'>
                  {movie.releaseDate}
                </p>
              </div>
              <div className='flex-1'>
                <p
                  className='text-[13px] md:text-sm text-[#8692A6] leading-[22px]
                  tracking-[0.75px]'
                >
                  Directed by
                </p>
                <p className='leading-7  tracking-[0.75px] text-[#121212]'>
                  {movie.director}
                </p>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='flex-1 shrink-0'>
                <p
                  className='text-[13px] md:text-sm text-[#8692A6] leading-[22px]
                  tracking-[0.75px]'
                >
                  duration
                </p>
                <p className='leading-7  tracking-[0.75px] text-[#121212]'>{`${movie?.duration?.hour} hour ${movie?.duration?.minute} minutes`}</p>
              </div>
              <div className='  flex-1'>
                <p
                  className='text-[13px] text-[#8692A6] leading-[22px]
                  tracking-[0.75px]'
                >
                  Cast
                </p>
                <p className='leading-7  tracking-[0.75px] text-[#121212] overflow-hidden overflow-ellipsis'>
                  {movie.cast}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-lg leading-[34px] tracking-[0.75px] font-semibold'>
            Synopsis
          </h3>
          <p className='leading-[32px] tracking-[0.75px] text-[#A0A3BD]'>
            {movie.synopsis}
          </p>
        </div>
      </section>
      <section className=''>
        <div className='md:hidden'></div>
        <div className='book-tickets'>
          <h3 className='text-[32px] max-md:hidden font-bold leading-[34px] tracking-[0.75px] mb-[22px]  '>
            Book Tickets
          </h3>
          <h3 className='md:hidden text-lg font-bold leading-[34px] tracking-[0.75px] text-center basis-[172px] mb-[22px]'>
            Showtimes and Tickets
          </h3>
          <form>
            <div className='flex max-md:flex-col  items-center gap-3 '>
              <div className='max-md:w-full md:flex-1 md:basis-[172px]'>
                <label htmlFor='time'>Choose Date</label>
                <div>
                  <input
                    type='date'
                    name='date'
                    id='date'
                    value={form.date}
                    onChange={inputChangeHandler}
                    className='border-0 bg-[#EFF0F6] text-[#4E4B66] rounded-sm mt-3 '
                  />
                </div>
              </div>
              <div className='max-md:w-full md:flex-1 md:basis-[172px]'>
                <label htmlFor='time' className='max-sm:hidden'>
                  Choose time
                </label>
                <div>
                  <select
                    name='time'
                    id='time'
                    className=' bg-[#EFF0F6] text-[#4E4B66] rounded-sm w-full py-3 mt-3 px-6'
                    value={form.time}
                    onChange={inputChangeHandler}
                  >
                    <option disabled value='default'>
                      set a city
                    </option>
                    {timeList.map((time, index) => (
                      <option value={time} key={index}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='max-md:w-full md:flex-1 md:basis-[172px]'>
                <label htmlFor='time' className='max-sm:hidden'>
                  Choose Location
                </label>
                <div>
                  <select
                    name='location'
                    id='location'
                    className=' bg-[#EFF0F6] text-[#4E4B66] rounded-sm w-full py-3 mt-3 px-6'
                    value={form.location}
                    onChange={inputChangeHandler}
                  >
                    <option disabled value='default'>
                      set a city
                    </option>
                    <option value='purworejo'>Purworejo</option>
                    <option value='bandung'>Bandung</option>
                    <option value='jakarta'>Jakarta</option>
                  </select>
                </div>
              </div>
              <button className='max-md:w-full bg-primary rounded-[5px] flex-1 py-[12px] px-[28px] place-self-end text-sm leading-6 trackking-[0.75px] text-[#F8FAFC] '>
                Filter
              </button>
            </div>
            <div className='max-md:hidden'>
              <div className='flex mt-3.5 items-center gap-7'>
                <h3 className='text-xl leading-[34px] tracking-[0.5px] font-semibold border-0 '>
                  Choose Cinema
                </h3>
              </div>
              <div className='flex gap-3 mt-8'>
                {cinema.map((cinema, index) => (
                  <button
                    key={index}
                    type='button'
                    onClick={() =>
                      setForm((form) => {
                        const newForm = {
                          ...form,

                          cinema: `${cinema}`,
                        }
                        return newForm
                      })
                    }
                    className={`${
                      form.cinema === `${cinema}` ? "bg-primary" : "bg-white"
                    } w-[264px] h-[157px] border-2 border-[#dedede] rounded-lg flex items-center justify-center`}
                  >
                    <img src={cinema} alt='ebv logo' className='' />
                  </button>
                ))}
              </div>
            </div>

            <div className=' md:hidden py-[7px] border border-[#dedede] rounded-xl px-[17px] pt-[12px] pb-[41px] '>
              <div
                className={`${
                  showTime ? "border-b border-[#dedede] " : "border-0"
                }`}
              >
                <img src={evbId} alt='' />
                <div className='flex justify-between items-center'>
                  <p className='text-2xl font-bold tracking-[1px] leading-11'>
                    EBV.id
                  </p>
                  <img
                    src={forward}
                    alt=''
                    onClick={() => setShowTime(!showTime)}
                    className={!showTime ? " rotate-180" : ""}
                  />
                </div>
                <p className='text-[12px] leading-[18px] tracking-[0.75px] font-[300] text-[#6E7191] w-[207px]'>
                  Whatever street No.12, South Purwokerto
                </p>
              </div>
              <div className={showTime ? "block" : "hidden"}>
                <div>
                  <div className='grid grid-cols-[100px_100px] gap-5'>
                    {timeList.map((time, index) => (
                      <div key={index}>
                        <BtnTime
                          time={time}
                          setTime={setForm}
                          cinema='ebv.id'
                          dataForm={form}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className='flex flex-col gap-3.5'>
            <div className='flex justify-center mt-16 gap-2'>
              <button className='border-[0.5px] border-[#dedede] rounded-lg w-[40px] h-[40px] hover:bg-primary hover:text-white'>
                1
              </button>
              <button className='border-[0.5px] border-[#dedede] rounded-lg w-[40px] h-[40px] hover:bg-primary hover:text-white'>
                2
              </button>
              <button className='border-[0.5px] border-[#dedede] rounded-lg w-[40px] h-[40px] hover:bg-primary hover:text-white'>
                3
              </button>
              <button className='border-[0.5px] border-[#dedede] rounded-lg w-[40px] h-[40px] hover:bg-primary hover:text-white'>
                4
              </button>
            </div>
            <button
              onClick={handlerBookNow}
              className='bg-primary px-[18px] py-[12px] gap-1.5 rounded-[5px] text-sm leading-6 tracking-[0.75px] text-white mx-auto w-[188px] h-[56px] '
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MovieDetails
