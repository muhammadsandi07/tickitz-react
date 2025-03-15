import React from "react"
import spiderman from "../../assets/other/spiderman-hero.png"
import lionking from "../../assets/other/lionking.png"
import jhonwitch from "../../assets/other/jhonwitch.png"
import roblox from "../../assets/other/roblox.png"
import sheild from "../../assets/icon/shield.svg"
import field from "../../assets/icon/circle_fill.svg"
import speach from "../../assets/icon/buble_speach.svg"

const Hero = () => {
  return (
    <div>
      <section className='flex max-md:flex-col items-center'>
        <div>
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
          <div className='grid  max-md:justify-center max-sm:grid-cols-[159px_159px] max-sm:grid-rows-[120px_58px_120px]   grid-cols-[217px_217px] grid-rows-[170px_80px_170px] gap-1 '>
            <div className=''>
              <img
                src={jhonwitch}
                alt='jhonwitch image'
                className='max-sm:w-[159px] max-sm:h-[125px]    w-[217px] h-[170px]'
              />
            </div>
            <div className='row-span-2'>
              <img
                src={lionking}
                alt='lionking image'
                className='max-sm:w-[159px] max-sm:h-[185px] w-[217px] h-[250px]'
              />
            </div>
            <div className='row-span-2'>
              <img
                src={spiderman}
                alt='spiderman'
                className='max-sm:w-[159px] max-sm:h-[185px] w-[217px] h-[250px]'
              />
            </div>
            <div className=''>
              <img
                src={roblox}
                alt='roblox image'
                className='max-sm:w-[159px] max-sm:h-[125px]  w-[217px] h-[170px]'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='choose-us'>
        <h3 className='text-lg leading-[34px] text-primary font-bold text-center'>
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
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
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
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
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
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </p>
          </div>
        </div>
      </section>
      <section class='movies'>
        <h3 className='mb-14px text-primary leading-[34px] tracking-[0.75px] font-bold text-lg'>
          MOVIES
        </h3>
        <h2 className='text-[32px] leading-[45px] tracking-[1px] text-[#121212] '>
          Exciting Movies That Should Be Watched Today
        </h2>
        <div class='contendo'>
          <div class='carrousel'></div>
        </div>
      </section>
      <section class='movies-up-coming'>
        <div>
          <div>
            <h3 className='mb-14px text-primary leading-[34px] tracking-[0.75px] font-bold text-lg'>
              UPCOMING MOVIES
            </h3>
            <h2 className='text-[32px] leading-[45px] tracking-[1px] text-[#121212] '>
              Exciting Movies That Should Be Watched Today
            </h2>
          </div>
          <div>
            <button>
              <img src='images/arrow-previous.svg' alt='' />
            </button>
            <button>
              <img src='images/arrow-next-2.svg' alt='' />
            </button>
          </div>
        </div>
        <div class='contendo2'>
          <div class='carrousel2'></div>
        </div>
      </section>
    </div>
  )
}

export default Hero
