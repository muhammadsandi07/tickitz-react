import React from "react"
import sign from "../../assets/company/tickitzSigin.svg"
import arrow from "../../assets/icon/arrow.svg"
import qr from "../../assets/other/qr.svg"
import download from "../../assets/icon/download.svg"
const TicketResult = () => {
  return (
    <div className='flex max-lg:flex-col font-mulish  '>
      <div className='relative bg-[url(../../src/assets/bg/bg-sign.png)] bg-cover   flex-1/2   bg-no-repeat py-[2rem] px-[7%] flex items-center  '>
        <div className='z-1'>
          <img
            src={sign}
            alt=''
            className='max-md:w-[127px] max-md:h-[48px] w-[276px] h-[104px] mb-[22px] max-md:mx-auto max-md:mt-[120px] '
          />
          <h2 className='max-md:text-[32px] max-md:text-center  text-5xl tracking-[0.3%] leading-[100%] text-white font-bold mb-[22px] '>
            Thankyou For Purchasing
          </h2>
          <p className='max-md:text-lg  max-md:w-[263px] max-md:text-center max-md:mx-auto  text-2xl leading-[100%] text-white/70  md:w-[571px] mb-[22px]'>
            Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor
            integer sed magna et.
          </p>
          <div className='flex items-center gap-[22px] max-lg:mb-[226px] max-md:flex-col '>
            <p className='text-lg leading-[100%] font-bold text-white'>
              Please Download Your Ticket
            </p>
            <img src={arrow} alt='arrow icon' className='max-md:rotate-90' />
          </div>
        </div>
        <div className='absolute bg-black/50 inset-0 '></div>
      </div>
      <div className='flex-1/4 mt-[93px]'>
        <div className='bg-white w-max mx-auto rounded-lg'>
          <div className='border-b-2 border-dashed border-[#DEDEDE]  px-[55px] py-[32px]  relative'>
            <img src={qr} alt='qr' className='w-[186px] h-[186px]' />
            <div className='w-[32px] h-[32px] bg-[#ECEDF2] rounded-full absolute bottom-[-17px] left-[-17px]'></div>
            <div className='w-[32px] h-[32px] bg-[#ECEDF2] rounded-full absolute bottom-[-17px] right-[-17px]'></div>
          </div>
          <div className='mt-[65px] grid grid-cols-2 px-6 gap-y-6 gap-x-10 mb-6'>
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
                Category
              </p>
              <p className='text-[#14142B] text-sm font-semibold leading-[26px] tracking-[0.75px]'>
                PG-13
              </p>
            </div>
            <div>
              <p className='text-[12px] font-semibold leading-[22px] tracking-[0.75px] text-[#aaaaaa]'>
                Date
              </p>
              <p className='text-[#14142B] text-sm font-semibold leading-[26px] tracking-[0.75px]'>
                date
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
                Movie
              </p>
              <p className='text-[#14142B] text-sm font-semibold leading-[26px] tracking-[0.75px]'>
                Spider-Man:..
              </p>
            </div>
            <div>
              <p className='text-[12px] font-semibold leading-[22px] tracking-[0.75px] text-[#aaaaaa]'>
                Category
              </p>
              <p className='text-[#14142B] text-sm font-semibold leading-[26px] tracking-[0.75px]'>
                PG-13
              </p>
            </div>
            <div className='py-2.5 px-6 border border-[#dedede] flex justify-between col-span-2 mb-8'>
              <p className='leading-7 tracking-[0.75px] '>Total</p>
              <p>$30.00</p>
            </div>
          </div>
        </div>
        <button className='flex items-center justify-center gap-[23px] text-primary leading-7 font-bold w-full max-w-[357px] h-[56px] rounded-md border border-primary mx-auto  mb-[10px]'>
          <img src={download} alt='' />
          <p>Download</p>
        </button>
        <button className='flex items-center justify-center gap-[23px] bg-primary text-[#F7F7FC] leading-7 font-bold  w-full max-w-[357px]  h-[56px] rounded-md border border-primary mx-auto mb-[46px] '>
          <p>Done</p>
        </button>
      </div>
    </div>
  )
}

export default TicketResult
