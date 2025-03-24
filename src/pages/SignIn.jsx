import React, { useContext, useEffect, useState } from "react"
import eye1 from "../assets/icon/eye1.svg"
import eyeopen from "../assets/icon/eyeopen.svg"
import google from "../assets/icon/google.svg"
import facebook from "../assets/icon/facebook.svg"
import { userContext } from "../contexts/userContext"
import { useLocation, useNavigate } from "react-router"
const SignIn = () => {
  const { user, setUser } = useContext(userContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [openPassword, setOpenPassword] = useState(false)
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    // IIFE => Immediately invoked function expression
    ;(function () {
      if (user.email && user.password) {
        console.log("object")
        if (location.state) {
          if (Object.prototype.hasOwnProperty.call(location?.state, "from")) {
            return navigate(location.state.from)
          }
        }
        navigate("/")
      }
    })()
  }, [user])

  const inputChangeHandler = (e) => {
    const newFrom = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setErrorEmail("")
    setErrorPassword("")
    setForm(newFrom)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (form.email == "" || form.email == undefined) {
      setErrorEmail("email required")
    }
    if (form.password == "" || form.password == undefined) {
      setErrorPassword("password required")
      return
    } else if (form.password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long ")
      return
    }

    setUser(form)
  }

  return (
    <main className='bg-white py-[52px] px-[10px] rounded-lg font-mulish md:w-[546px] mx-auto mt-5 md:px-[73px] md:py-[35px]'>
      <div className=''>
        <h2 className='text-xl leading-[24.2px] font-mulish mb-[25px]'>
          Welcome Back👋
        </h2>
        <p className='text-sm text-light-text leading-[21.78px] tracking-[0.7px] mb-[25px]'>
          Sign in with your data that you entered during your registration
        </p>
      </div>

      <form noValidate onSubmit={handleLogin}>
        <div className='pb-[24px] relative'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Write your email'
            value={form.email}
            name='email'
            onChange={inputChangeHandler}
          />
          {errorEmail && (
            <p
              className={`${
                errorEmail ? "visible" : "hidden"
              } text-red-400 text-sm absolute bottom-0  `}
            >
              {errorEmail}
            </p>
          )}
        </div>
        <div className='pb-[24px] relative'>
          <label htmlFor='password'>Password</label>
          <div className=' flex py-[12px] px-[24px] text-sm text-[#4E4B66] border-[#DEDEDE] items-center rounded-xl border w-full mt-[12px]'>
            <input
              type={openPassword ? "text" : "password"}
              placeholder='Write your password'
              className='border-none p-0 rouded-none  mr-auto text-sm '
              value={form.password}
              onChange={inputChangeHandler}
              name='password'
            />
            <button
              type='button'
              onClick={() => setOpenPassword((openPassword) => !openPassword)}
            >
              <img src={openPassword ? eyeopen : eye1} alt='' />
            </button>
          </div>
          {errorPassword && (
            <p
              className={`${
                errorEmail ? "visible" : "hidden"
              } text-red-400 text-sm absolute bottom-0  `}
            >
              {errorPassword}
            </p>
          )}
        </div>
        <div className='text-right text-primary mb-[26px] '>
          <a href='#'> Forgot your password? </a>
        </div>
        <button
          type='submit'
          className='bg-primary text-[#F7F7FC] h-[48px] font-bold w-full  rounded-sm mb-[25px] '
        >
          Login
        </button>
      </form>
      <div className='mb-14'>
        <div className='flex gap-[40px] mb-[25px]'>
          <div className='border-b border-[#dedede] w-full h-[8px]'></div>
          <p className='text-xs text-light-text leading-[14.52px]'>Or</p>
          <div className='border-b border-[#dedede] w-full h-[8px]'></div>
        </div>
        <div className='flex justify-center gap-8 items-center'>
          <div className='max-sm:w-[64px] max-sm:h-[64px] sm:w-[182px] sm:h-[64px] rounded-sm shadow-button flex justify-center'>
            <button className='flex flex-col items-center justify-center'>
              <img src={google} alt='google logo' />
              <p className='max-sm:hidden'>Google</p>
            </button>
          </div>
          <div className='max-sm:w-[64px] max-sm:h-[64px] sm:w-[182px] sm:h-[64px] rounded-sm shadow-button flex justify-center'>
            <button className='flex flex-col items-center justify-center'>
              <img src={facebook} alt='google logo' />
              <p className='max-sm:hidden'>Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignIn
