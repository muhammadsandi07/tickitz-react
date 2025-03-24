import React, { useState } from "react"
import check from "../assets/icon/check-small.svg"
import { useDispatch, useSelector } from "react-redux"
import noimage from "../assets/other/noimage.jpg"
import { Link } from "react-router"
import arrow from "../assets/icon/arrowForward.svg"
import cineone from "../assets/cinema/CineOne21.svg"

const OrderMovie = () => {
  const order = useSelector((state) => state.order)
  const dispatch = useDispatch()
  const [newForm, setNewForm] = useState({
    seat: [],
  })
  const seatChoosed = newForm.seat
    ?.sort((a, b) => {
      const hurufDataPertama = a.slice(0, 1)
      const hurufDataKedua = b.slice(0, 1)
      const angkaDataPertama = a.slice(1)
      const angkaDataKedua = b.slice(1)

      if (hurufDataPertama > hurufDataKedua) {
        return 1
      } else if (hurufDataPertama < hurufDataKedua) {
        return -1
      } else {
        return angkaDataPertama - angkaDataKedua
      }
    })
    .join(", ")

  const row = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
  ]
  const column = ["A", "B", "C", "D", "E", "F", "G"]

  return (
    <section className='bg-[#a0a3bd33]  '>
      <section className='bg-transparent flex  justify-center items-center  max-sm:hidden'>
        <div className='flex items-center justify-center gap-4'>
          <div className='flex flex-col gap-2.5 justify-center items-center'>
            <div className='bg-[#008000] w-[47px] h-[47px] rounded-full flex items-center justify-center'>
              <img src={check} alt='' />
            </div>
            <p>Dates And Time</p>
          </div>
          <div className='w-[80px]  border-b-2 border-dashed border-[#a0a3bd] '></div>
          <div className='flex flex-col gap-2.5 justify-center items-center'>
            <div className='bg-primary w-[47px] h-[47px] rounded-full flex items-center justify-center text-white '>
              2
            </div>
            <p>Seat</p>
          </div>
          <div className='w-[80px] border-b-2 border-dashed border-[#a0a3bd] '></div>
          <div className='flex flex-col gap-2.5 justify-center items-center'>
            <div className='bg-[#A0A3BD] text-white w-[47px] h-[47px] rounded-full flex items-center justify-center'>
              3
            </div>
            <p>payment</p>
          </div>
        </div>
      </section>
      <div className='flex gap-4 flex-wrap'>
        <section className='bg-white max-md:rounded-2xl rounded-md px-[12px] py-[13px] flex-1/2 shrink'>
          <div className='border border-[#dedede] px-[14px] py-[17px] rounded-lg flex flex-col justify-center items-center md:flex-row md:justify-start '>
            <img
              src={`${
                order?.data?.img
                  ? `https://image.tmdb.org/t/p/original${order.data.img}`
                  : noimage
              }`}
              alt=''
              className='w-[273px] h-[174px]  rounded-lg mb-[17px] '
            />
            <div className='flex-1'>
              <h3 className='text-xl leading-8 tracking-[0.75px] text-center max-md:mb-[17px]'>
                {order.data.title}
              </h3>
              <div className='flex justify-center'>
                {order?.data?.genre?.map((genre) => (
                  <p className='text-sm leading-6 tracking-[0.75px] text-[#A0A3BD] bg-[#A0A3BD1A] px-5 py[3.5px] rounded-[20px] mb-[17px]'>
                    {genre.name}
                  </p>
                ))}
              </div>
              <p className='leading-8 tracking-[0.75px] text-[#121212] text-center mb-[17px]'>
                Reguler - {order.data.time}
              </p>
            </div>
            <div className='flex justify-center md:justify-end mb-[25px] flex-1 h-full '>
              <Link to={"/movies"}>
                <button className='text-primary bg-[#1D4ED833] py-[8px] px-[35px] rounded-[20px] ml-auto '>
                  Change
                </button>
              </Link>
            </div>
          </div>
          <div className=' mt-[41px]'>
            <h3 className='text-lg font-semibold leading-[34px] tracking-[0.75px] text-[#14142B] mb-[36px]'>
              Choose Your seat
            </h3>
            <div>
              <div className='flex justify-center overflow-x-scroll'>
                <div className='flex flex-col '>
                  {column.map((column, index) => (
                    <div
                      key={index}
                      className='w-[26px] h-[26px] mx-2 my-2 rounded-sm  '
                    >
                      {column}
                    </div>
                  ))}
                </div>
                <div className='flex gap-[72px] '>
                  <div className=''>
                    {column.map((column, index) => (
                      <div key={index}>
                        <div className='flex'>
                          <div className='flex '>
                            {row.map((row, index) => (
                              <div className='flex' key={index}>
                                {index < 7 && (
                                  <div
                                    className={`${
                                      newForm.seat.includes(`${column}${row}`)
                                        ? "bg-primary"
                                        : "bg-[#D6D8E7]"
                                    } w-[26px] h-[26px] mx-2 my-2 rounded-sm `}
                                    onClick={() =>
                                      setNewForm((form) => {
                                        let newSeat = []
                                        const checkSeat = form.seat?.includes(
                                          `${column}${row}`
                                        )
                                        if (checkSeat) {
                                          newSeat = form.seat.filter(
                                            (seat) => seat !== `${column}${row}`
                                          )
                                        } else {
                                          newSeat = [
                                            ...form.seat,
                                            `${column}${row}`,
                                          ]
                                        }
                                        return { ...form, seat: newSeat }
                                      })
                                    }
                                  ></div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* <div className='flex '>
                      {row.map((row, index) => (
                        <div className='flex' key={index}>
                          {index < 7 && (
                            <div className='w-[26px] h-[26px] mx-2 my-2 rounded-sm flex justify-center items-center'>
                              {row}
                            </div>
                          )}
                        </div>
                      ))}
                    </div> */}
                  </div>

                  <div>
                    {column.map((column, index) => (
                      <div className='flex ' key={index}>
                        {row.map((row, index) => (
                          <div className='flex ' key={index}>
                            {index >= 7 && (
                              <div
                                className={`${
                                  newForm.seat.includes(`${column}${row}`)
                                    ? "bg-primary"
                                    : "bg-[#D6D8E7]"
                                } w-[26px] h-[26px] mx-2 my-2 rounded-sm `}
                                onClick={() =>
                                  setNewForm((form) => {
                                    let newSeat = []
                                    const checkSeat = form.seat?.includes(
                                      `${column}${row}`
                                    )
                                    if (checkSeat) {
                                      newSeat = form.seat.filter(
                                        (seat) => seat !== `${column}${row}`
                                      )
                                    } else {
                                      newSeat = [
                                        ...form.seat,
                                        `${column}${row}`,
                                      ]
                                    }
                                    return { ...form, seat: newSeat }
                                  })
                                }
                              ></div>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                    {/* <div className='flex '>
                      {row.map((row, index) => (
                        <div className='flex' key={index}>
                          {index >= 7 && (
                            <div className='w-[26px] h-[26px] mx-2 my-2 rounded-sm flex justify-center items-center'>
                              {row}
                            </div>
                          )}
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className='my-5'>Seating key</h3>
              <div className='flex flex-wrap  mb-4'>
                <div className='flex gap-2 flex-1'>
                  <img src={arrow} alt='' />
                  <p>A - G</p>
                </div>
                <div className='flex gap-2 flex-1'>
                  <img src={arrow} alt='' className='rotate-270' />
                  <p>1 - 14</p>
                </div>
              </div>
              <div className='flex  mb-4 flex-wrap'>
                <div className='flex gap-2 items-center flex-1 '>
                  <div className='w-[20px] h-[20px] rounded-sm bg-[#D6D8E7]'></div>
                  <p className='text-[13px] leading-[22px] tracking-[0.75px] text-[#4E4B66]'>
                    Available
                  </p>
                </div>
                <div className='flex gap-2 items-center flex-1 '>
                  <div className='w-[20px] h-[20px] rounded-sm bg-primary'></div>
                  <p className='text-[13px] leading-[22px] tracking-[0.75px] text-[#4E4B66]'>
                    Selected
                  </p>
                </div>
              </div>
              <div className='flex  flex-wrap'>
                <div className='flex gap-2  items-center flex-1 '>
                  <div className='w-[20px] h-[20px] rounded-sm bg-[#F589D7]'></div>
                  <p className='text-[13px] leading-[22px] tracking-[0.75px] text-[#4E4B66]'>
                    Love nest
                  </p>
                </div>
                <div className='flex gap-2 items-center flex-1 '>
                  <div className='w-[20px] h-[20px] rounded-sm bg-[#6E7191]'></div>
                  <p className='text-[13px] leading-[22px] tracking-[0.75px] text-[#4E4B66]'>
                    Sold
                  </p>
                </div>
              </div>
              <div className='flex gap-5 mt-5'>
                <select
                  name=''
                  id=''
                  className='w-[120px] h-[56px] bg-[#EFF0F6] outline-0 rounded-lg'
                >
                  {column.map((column, index) => (
                    <option value={column} key={index}>
                      {column}{" "}
                    </option>
                  ))}
                </select>
                <select
                  name=''
                  id=''
                  className='w-[120px] h-[56px] bg-[#EFF0F6] outline-0 rounded-lg'
                >
                  {row.map((row, index) => (
                    <option value={row} key={index}>
                      {row}{" "}
                    </option>
                  ))}
                </select>
              </div>
              <div className='mt-[28px] mb-[48px]'>
                <button className='w-full border border-primary rounded-xl h-[56px] text-primary font-bold leading-7 tracking-[0.75px]'>
                  Add new seat
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className='flex-1/4 flex flex-col basis-[358px] shrink-0'>
          <div className=' h-[413px] rounded-md bg-white'>
            <div className='border-b border-[#E6E6E6]'>
              <div className='flex flex-col items-center mt-[32px] mb-[32px]'>
                <img src={cineone} alt='' />
                <p className='text-2xl font-semibold leading-[34px] tracking-[0.75px] text-[#14142B]'>
                  CineOne21 Cinema
                </p>
              </div>
              <div>
                <div className='flex items-center justify-between px-[22px] py-4'>
                  <p className='text-[#6B6B6B] text-sm leading-6 tracking-[0.75px] '>
                    movie selected
                  </p>
                  <p className='text-[#14142B] font-semibold text-sm leading-6 tracking-[0.75px]'>
                    {order.data.title}
                  </p>
                </div>
                <div className='flex items-center justify-between px-[22px] py-2'>
                  <p className='text-[#6B6B6B] text-sm leading-6 tracking-[0.75px]'>
                    {order.data.date}
                  </p>
                  <p className='text-[#14142B] font-semibold text-sm leading-6 tracking-[0.75px]'>
                    {order.data.time}
                  </p>
                </div>
                <div className='flex items-center justify-between px-[22px] py-2'>
                  <p className='text-[#6B6B6B] text-sm leading-6 tracking-[0.75px]'>
                    One ticket price
                  </p>
                  <p className='text-[#14142B] font-semibold text-sm leading-6 tracking-[0.75px]'>
                    $10
                  </p>
                </div>
                <div className='flex items-center justify-between px-[22px] py-2'>
                  <p className='text-[#6B6B6B] text-sm leading-6 tracking-[0.75px]'>
                    Seat choosed
                  </p>
                  <p className='text-[#14142B] font-semibold text-sm leading-6 tracking-[0.75px]'>
                    {seatChoosed}
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-between  px-[22px] mt-8'>
              <p className='text-lg leading-[34px] tracking-[0.75px] font-semibold '>
                Total Payment
              </p>
              <p className='text-lg leading-[34px] tracking-[0.75px] font-semibold text-primary '>
                ${newForm.seat.length * 10}
              </p>
            </div>
          </div>
          <div>
            <Link to={"/order/payment"}>
              <button
                type='button'
                className='h-[56px] bg-primary text-[#F7F7FC] w-full mt-[42px] rounded-sm font-bold leading-7 tracking-[0.75px] '
              >
                Checkout now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OrderMovie
