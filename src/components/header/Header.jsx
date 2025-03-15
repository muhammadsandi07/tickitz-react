import React, { useState } from "react"
import company from "../../assets/company/tickitz.svg"
import hamburger from "../../assets/icon/hamburger-menu.svg"
import search from "../../assets/icon/search.svg"
import profile from "../../assets/profile/user-circle.png"

const Header = () => {
  const [isLogged, setLogged] = useState(false)
  return (
    <header className='py-[2rem] px-[7%] flex items-center justify-between bg-white'>
      <div>
        <img src={company} alt='company logo' className='w-[130px] h-[51px]' />
        <img src='images/Tickitz.svg' alt='' />
      </div>
      <nav className='max-sm:hidden sm:flex gap-14'>
        <a href='./index.html' className='text-sm text-[#0f172a] leading-5'>
          home
        </a>
        <a href='./index2.html' className='text-sm text-[#0f172a] leading-5'>
          movie
        </a>
        <a href='' className='text-sm text-[#0f172a] leading-5'>
          Buy Ticket
        </a>
      </nav>
      {isLogged ? (
        <div>
          <div className='max-sm:hidden sm:flex'>
            <select name='' id=''>
              <option value=''>location</option>
            </select>
            <img src={search} alt='search icon' />
            <img src={profile} alt='user image' className='w-[56px] h-[56px]' />
          </div>
        </div>
      ) : (
        <div className='max-sm:hidden sm:flex gap-3'>
          <button className=' py-[12px] px-[18px] text-sm leading-[24px] tracking-[0.75px] rounded-[5px] text-primary border border-primary bg-transparent'>
            SignIn
          </button>

          <button className=' py-[12px] px-[18px] text-sm leading-[24px] tracking-[0.75px] rounded-[5px] bg-primary border border-primary text-white'>
            signUp
          </button>
        </div>
      )}

      <button id='menu' className='max-sm:flex sm:hidden'>
        <img src={hamburger} alt='menu icon' />
      </button>
    </header>
  )
}

export default Header
