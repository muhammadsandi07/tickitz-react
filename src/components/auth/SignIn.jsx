import React from "react"
import eye1 from "../../assets/icon/eye1.svg"
import google from "../../assets/icon/google.svg"
import facebook from "../../assets/icon/facebook.svg"
const SignIn = () => {
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

      <form>
        <div className='mb-[12px]'>
          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Write your email' />
          <p></p>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <div className='mb-[25px] flex py-[12px] px-[24px] text-sm text-[#4E4B66] border-[#DEDEDE] items-center rounded-xl border w-full mt-[12px]'>
            <input
              type='password'
              placeholder='Write your password'
              className='border-none p-0 rouded-none  mr-auto '
            />
            <img src={eye1} alt='' />
          </div>
          <p></p>
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
      <section>
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
      </section>
    </main>
  )
}

export default SignIn
