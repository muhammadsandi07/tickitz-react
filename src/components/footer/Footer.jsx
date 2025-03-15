import React from "react"
import CineOne from "../../assets/cinema/CineOne21.svg"
import ebv_id from "../../assets/cinema/ebv_id.svg"
import hiflix from "../../assets/cinema/hiflix.svg"
import tickitz from "../../assets/company/tickitz.svg"
import tickitzMobile from "../../assets/company/tickitzMobile.svg"
import facebook from "../../assets/social-media/facebook.svg"
import instagram from "../../assets/social-media/instagram.svg"
import twitter from "../../assets/social-media/twitter.svg"
import youtube from "../../assets/social-media/youtube.svg"
import "../../index.css"

const Footer = () => {
  return (
    <footer className='text-light-text  px-16 py-8 max-h-max bg-white'>
      <div className='md:flex gap-x-[24px]'>
        <div className='mb-[40px] md: flex-1 ]'>
          <img
            src={tickitz}
            alt='company logo'
            className='hidden md:block mb-[12px]'
          />
          <img
            src={tickitzMobile}
            alt='company logo'
            className='mb-[12px] md:hidden'
          />
          <p className='text-light-text  text-sm md:leading-[24px] md:tracking-[0.75px] md:w-[284px] md:text-base'>
            Stop waiting in line. Buy tickets conveniently, watch movies
            quietly.
          </p>
        </div>
        <div className='mb-[40px] md:flex-1'>
          <h5 className='font-semibold mb-[16px] md:mb-[30px]'>Explore</h5>
          <div className='flex gap-x-[40px] gap-y-[12px] flex-wrap md:flex-col'>
            <p className='text-light-text text-sm'>Cinemas</p>
            <p className='text-light-text text-sm'>Movies List</p>
            <p className='text-light-text text-sm'>My Ticket</p>
            <p className='text-light-text text-sm'>Notification</p>
          </div>
        </div>
        <div className='mb-[40px]  md:flex-1 '>
          <h5 className='font-semibold  mb-[16px] md:mb-[30px]'>Our Sponsor</h5>
          <div className='flex gap-x-[24px] max-sm:items-center sm:items-center  md:flex-col gap-y-[24px] md:items-start '>
            <div>
              <img src={ebv_id} alt='ebv logo' />
            </div>
            <div>
              <img src={CineOne} alt='CineOne21' />
            </div>
            <div>
              <img src={hiflix} alt='hiflix' />
            </div>
          </div>
        </div>
        <div className='mb-[40px] md:flex-1'>
          <h5 className='font-semibold  mb-[16px] md:mb-[30px]'>follow us</h5>
          <div className='flex  gap-x-[32px] md:flex-col gap-y-[28px] '>
            <div className='flex gap-x-[16px] items-center'>
              <img src={facebook} alt='facebook icon' />
              <span className='hidden text-light-text md:block '>
                Tickitz Cinema id
              </span>
            </div>
            <div className='flex gap-x-[16px] items-center'>
              <img src={instagram} alt='instagram icon' />
              <span className='hidden text-light-text md:block'>
                tickitz.id
              </span>
            </div>
            <div className='flex gap-x-[16px] items-center'>
              <img src={twitter} alt='twitter icon' />
              <span className='hidden text-light-text md:block'>
                tickitz.id
              </span>
            </div>
            <div className='flex gap-x-[16px] items-center'>
              <img src={youtube} alt='youtube icon' />
              <span className='hidden text-light-text md:block'>
                Tickitz Cinema id
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className='text-gray-text text-[14px] leading-[22px] tracking-[0.75px] md:text-center'>
          &copy; 2020 Tickitz. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
