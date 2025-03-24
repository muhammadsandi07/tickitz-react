import React from "react"
import { Outlet } from "react-router"
import tickitzSigin from "../assets/company/tickitzSigin.svg"
import heroSignIn from "../assets/bg/bg-sign.png"

const Auth = () => {
  return (
    <>
      <main className='bg-[url(../src/assets/bg/bg-sign.png)] bg-cover  min-h-[900px] bg-center relative py-[139px]'>
        <div className='bg-overlay p-[24px] absolute inset-0  pb-[139px]'>
          <header className='text-center '>
            <img
              src={tickitzSigin}
              alt='company icon'
              className='mx-auto  max-sm:w-[85px] max-sm:h-[32px] sm:w-[276px] sm:h-[104px] max-sm:mb-[51px] sm:mb-[21px] '
            />
          </header>
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Auth
