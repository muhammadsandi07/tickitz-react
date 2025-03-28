import React, { useContext, useEffect, useState } from "react"
import company from "../../assets/company/tickitz.svg"
import companyMobile from "../../assets/company/tickitzMobile.svg"
import hamburger from "../../assets/icon/hamburger-menu.svg"
import search from "../../assets/icon/search.svg"
import profile from "../../assets/profile/user-circle.png"
import { Link } from "react-router"
import { userContext } from "../../contexts/userContext"

const Header = () => {
  const { user, setUser } = useContext(userContext)
  const [show, setShow] = useState(false)
  useEffect(() => {
    setShow(false)
  }, [])
  return (
    <div className='relative'>
      <header className='py-[2rem] px-[7%] flex items-center justify-between bg-white md:border-b border-[#dedede] '>
        <div>
          <img
            src={company}
            alt='company logo'
            className='w-[130px] h-[51px] max-sm:hidden'
          />
          <img src={companyMobile} alt='' className='sm:hidden' />
        </div>
        <nav className='max-md:hidden md:flex gap-14'>
          <Link to={"/"}>
            <p className='cursor-pointer'>home</p>
          </Link>
          <Link to={"/movies"}>
            <p className='cursor-pointer'>movie</p>
          </Link>
          <Link>
            <p className='cursor-pointer'>Buy Ticket</p>
          </Link>
        </nav>
        {user.email && user.password ? (
          <div>
            <div className='max-sm:hidden sm:flex gap-2 '>
              <select name='' id=''>
                <option value=''>location</option>
              </select>
              <img src={search} alt='search icon' />
              <img
                src={profile}
                alt='user image'
                className='w-[56px] h-[56px]'
              />
            </div>
          </div>
        ) : (
          <div className='max-sm:hidden sm:flex gap-3'>
            <Link to={"/auth"}>
              <button className=' py-[12px] px-[18px] text-sm leading-[24px] tracking-[0.75px] rounded-[5px] text-primary border border-primary bg-transparent'>
                SignIn
              </button>
            </Link>
            <Link to={"/auth/new"}>
              <button className=' py-[12px] px-[18px] text-sm leading-[24px] tracking-[0.75px] rounded-[5px] bg-primary border border-primary text-white'>
                signUp
              </button>
            </Link>
          </div>
        )}

        <button
          id='menu'
          className='max-sm:flex sm:hidden'
          type='button'
          onClick={() => setShow((show) => !show)}
        >
          <img src={hamburger} alt='menu icon' />
        </button>
      </header>
      <div
        className={` ${
          show ? "block right-[0px] duration-500" : "hidden "
        } absolute top-0  bg-white h-screen w-[150px] py-[7%] px-[1rem] z-100 `}
      >
        <div className='px-3 py-2.5'>
          <button
            type='button'
            onClick={() => setShow((show) => !show)}
            className='hover:text-red-500 text-2xl ml-[100%] mb-3 '
          >
            x
          </button>
        </div>
        <Link to={"/auth"}>
          <div className='w-full border border-transparent hover:hover:border-light-text py-1.5 px-2 rounded-br-2xl mb-3'>
            Login
          </div>
        </Link>
        <Link to={"/"}>
          <div className='w-full border border-transparent hover:hover:border-light-text py-1.5 px-2 rounded-br-2xl mb-3'>
            Home
          </div>
        </Link>
        <Link to={"/movies"}>
          <div className='w-full border border-transparent hover:hover:border-light-text py-1.5 px-2 rounded-br-2xl mb-3'>
            Movie
          </div>
        </Link>
        <Link to={"/order"}>
          <div className='w-full border border-transparent hover:hover:border-light-text py-1.5 px-2 rounded-br-2xl mb-3'>
            Buy Ticket
          </div>
        </Link>
        <button className='w-full text-left hover:bg-red-500 hover:text-white py-1.5 px-2 rounded-br-2xl mb-3'>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Header
