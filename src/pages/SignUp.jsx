import React, { useState } from "react"
import eye1 from "../assets/icon/eye1.svg"
import google from "../assets/icon/google.svg"
import facebook from "../assets/icon/facebook.svg"

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const inputChangeHandler = (e) => {
    const newFrom = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(newFrom)
  }
  return (
    <main className='bg-white py-[52px] px-[10px] rounded-lg font-mulish md:w-[546px] mx-auto mt-5 md:px-[73px] md:py-[35px]'>
      <div className='line-proggress'>
        <div className='flex justify-center mb-[31px] gap-1 items-center'>
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-primary  w-[47px] h-[47px] rounded-full flex items-center justify-center text-white leading-[20.08px] '>
              1
            </div>
            <p>Fill Form</p>
          </div>
          <div className='w-[80px] border border-dashed border-[#a0a3bd]'></div>
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-[#A0A3BD]  w-[47px] h-[47px] rounded-full flex items-center justify-center text-white leading-[20.08px] '>
              2
            </div>
            <p>Activate</p>
          </div>
          <div className='w-[80px] border border-dashed border-[#a0a3bd]'></div>
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-[#A0A3BD]  w-[47px] h-[47px] rounded-full flex items-center justify-center text-white leading-[20.08px] '>
              3
            </div>
            <p>Done</p>
          </div>
        </div>
      </div>
      <form>
        <div className='mb-[12px]'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Write your email'
            value={form.email}
            onChange={inputChangeHandler}
          />
          <p></p>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <div className='mb-[25px] flex py-[12px] px-[24px] text-sm text-[#4E4B66] border-[#DEDEDE] items-center rounded-xl border w-full mt-[12px]'>
            <input
              type='password'
              placeholder='Write your password'
              className='border-none p-0 rouded-none  mr-auto text-sm '
              value={form.password}
              onChange={inputChangeHandler}
            />
            <img src={eye1} alt='' />
          </div>
          <p></p>
        </div>
        <div className='flex gap-6 items-center mb-[25px]'>
          <input type='checkbox' id='terms' className=' w-max h-max m-0' />
          <label htmlFor='terms'>I agree to terms & conditions</label>
        </div>
        <button
          type='submit'
          className='bg-primary text-[#F7F7FC] h-[48px] font-bold w-full  rounded-sm mb-[25px] '
        >
          Join for Free Now
        </button>
        <p>
          Already have an account? <a href='#'> Log in </a>
        </p>
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

export default SignUp
