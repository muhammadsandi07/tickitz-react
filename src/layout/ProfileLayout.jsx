import React, { useState } from "react"
import { Outlet } from "react-router"
import Header from "../components/header/Header"
import NavbarProfile from "../components/navbar/NavbarProfile"

const ProfileLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default ProfileLayout
