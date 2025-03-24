import { useEffect } from "react"
import { useState } from "react"
import getMoviePopular from "../api/apiMoviePopular.js"
import getUpcoming from "../api/apiUpComing.js"
import { Outlet } from "react-router"
import Header from "../components/header/Header.jsx"
import Subscribe from "../components/subscribe/Subscribe.jsx"
import Footer from "../components/footer/Footer.jsx"

const LandingPage = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default LandingPage
