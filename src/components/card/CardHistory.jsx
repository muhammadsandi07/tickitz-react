import React, { useState } from "react"
import cineone from "../../assets/cinema/CineOne21.svg"
import forward from "../../assets/icon/forward.svg"
import qr from "../../assets/other/qr.svg"
const CardHistory = ({ paid }) => {
  const [showDetail, setShowDetail] = useState(false)
  return (
    <div className='bg-white rounded-2xl pb-[32px]'>
      <div className='pt-[40px] px-[44px] pb-[32px] border-b border-[#dedede] md:flex md:items-center flex-row-reverse justify-between'>
        <img src={cineone} alt='cineone21' className='w-[98px] mb-[18px]' />
        <div>
          <p className='text-[#aaa] text-[13px] leading-[22px] tracking-[0.25px] mb-1] '>
            Tuesday, 07 July 2020 - 04:30pm
          </p>
          <h3 className='font-semibold text-lg leading-7 tracking-[0.75px]'>
            Spider-Man: Homecoming
          </h3>
        </div>
      </div>
      <div className='pt-[24px] px-[44px]  flex max-md:flex-col items-center justify-between'>
        {paid ? (
          <div className='flex max-md:flex-col  max-md:w-full  flex-1 gap-2'>
            <p className='bg-[#00ba8833] text-[#00ba88] max-md:w-full  h-[40px]  md:basis-[190px] font-bold text-sm leading-10 text-center rounded-lg'>
              Ticket in active
            </p>
            <p className='bg-[#e82c2c33] text-[#e82c2c]  h-[40px] md:basis-[190px] font-bold text-sm leading-10 text-center rounded-lg'>
              Not Paid
            </p>
          </div>
        ) : (
          <div className='flex max-md:flex-col  max-md:w-full  flex-1 gap-2'>
            <p className='bg-[#6E719133] text-[#6E7191] max-md:w-full  h-[40px]  md:basis-[190px] font-bold text-sm leading-10 text-center rounded-lg'>
              Ticket used
            </p>
            <p className='bg-[#6E719133] text-primary  h-[40px] md:basis-[190px] font-bold text-sm leading-10 text-center rounded-lg'>
              Paid
            </p>
          </div>
        )}

        <button
          onClick={() => setShowDetail((showDetail) => !showDetail)}
          className='w-max flex justify-center text-lg h-[40px] flex items-center leading-[34px] tracking-[0.75px] border-none flex text-[#AAAAAA]  '
        >
          Show Details
          <img src={forward} alt='forward icon' className='ml-4' />
        </button>
      </div>
      {paid ? (
        <div
          className={`${
            showDetail ? "block" : "hidden"
          } bg-white  rounded-2xl px-[44px] py-[25px]`}
        >
          <h3 className=' text-[#14142B]  text-lg leading-[34px] tracking-[0.75px] mb-[34px]'>
            Ticket Information
          </h3>
          <div className=''>
            <div className='flex items-center justify-between mb-[34px]'>
              <div className='flex items-center w-[170px] justify-between'>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  No. Rekening Virtual
                </p>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  :
                </p>
              </div>
              <div className='flex items-center gap-5'>
                <p className='text-lg text-[#14142B] font-bold leading-[100%] tracking-[0.25px]'>
                  12321328913829724
                </p>
                <button className='text-primary border border-primary py-[12px] px-[18px] rounded-sm'>
                  Copy
                </button>
              </div>
            </div>
            <div className='flex items-center justify-between mb-[34px]'>
              <div className='flex items-center w-[170px] justify-between'>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  Total Payment
                </p>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  :
                </p>
              </div>
              <p className='text-lg text-primary font-bold leading-[100%] leading-[0.25px]'>
                $30
              </p>
            </div>
            <p className='text-sm leading-8 tracking-[0.75px] text-[#8692A6] mb-[45px] '>
              Pay this payment bill before it is due,
              <span className='text-red-500'>on June 23, 2023</span>. If the
              bill has not been paid by the specified time, it will be forfeited
            </p>
            <button className='w-[191px] bg-primary h-[56px] text-[#F7F7FC] font-bold leading-7 tracking-[0.75px] rounded-sm mb-[23px]'>
              cek pembayaran
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`${
            showDetail ? "block" : "hidden"
          } bg-white  rounded-2xl px-[44px] py-[25px]`}
        >
          <h3 className=' text-[#14142B]  text-lg leading-[34px] tracking-[0.75px] '>
            Ticket Information
          </h3>
          <div className='bg-white w-max rounded-lg'>
            <div className='   '>
              <img src={qr} alt='qr' className='w-[136px] h-[136px]' />
            </div>
            <div className=' grid grid-cols-3  gap-y-6 gap-x-10 mb-6'>
              <div>
                <p className='text-[12px] font-semibold leading-[22px] tracking-[0.75px] text-[#aaaaaa]'>
                  Category
                </p>
                <p className='text-[#14142B] text-sm font-semibold leading-[26px] tracking-[0.75px]'>
                  PG-13
                </p>
              </div>
              <div>
                <p className='text-[12px] font-semibold leading-[22px] tracking-[0.75px] text-[#aaaaaa]'>
                  time
                </p>
                <p className='text-[#14142B] text-sm font-semibold leading-[26px] tracking-[0.75px]'>
                  2:00pm
                </p>
              </div>
              <div>
                <p className='text-[12px] font-semibold leading-[22px] tracking-[0.75px] text-[#aaaaaa]'>
                  seat
                </p>
                <p className='text-[#14142B] text-sm font-semibold leading-[26px] tracking-[0.75px]'>
                  C4,C5,C6
                </p>
              </div>
              <div>
                <p className='text-[12px] font-semibold leading-[22px] tracking-[0.75px] text-[#aaaaaa]'>
                  Movie
                </p>
                <p className='text-[#14142B] text-sm font-semibold leading-[26px] tracking-[0.75px]'>
                  Spider-Man:..
                </p>
              </div>
              <div>
                <p className='text-[12px] font-semibold leading-[22px] tracking-[0.75px] text-[#aaaaaa]'>
                  Date
                </p>
                <p className='text-[#14142B] text-sm font-semibold leading-[26px] tracking-[0.75px]'>
                  07 Jul
                </p>
              </div>

              <div>
                <p className='text-[12px] font-semibold leading-[22px] tracking-[0.75px] text-[#aaaaaa]'>
                  count
                </p>
                <p className='text-[#14142B] text-sm font-semibold leading-[26px] tracking-[0.75px]'>
                  3 pcs
                </p>
              </div>
              <div className='py-2.5   justify-between col-span-2 mb-8'>
                <p className='leading-7 tracking-[0.75px] '>Total</p>
                <p className='text-2xl leading-7 font-semibold mt-[9px]'>
                  $30.00
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardHistory
