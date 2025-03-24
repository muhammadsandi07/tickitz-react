import React, { useState } from "react"
import NavbarProfile from "../components/navbar/NavbarProfile"
import Sidebar from "../components/sidebar/Sidebar"

import CardHistory from "../components/card/CardHistory"

const ProfileHistory = () => {
  return (
    <div className='flex font-mulish'>
      <div className='max-md:hidden'>
        <Sidebar />
      </div>
      <div className=' md:py-[48px] md:px-[24px] w-full'>
        <NavbarProfile />
        <main>
          <div className='flex max-md:mx-6 max-md:my-8 flex-col gap-7'>
            <CardHistory paid={true} />
            <CardHistory paid={false} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProfileHistory
