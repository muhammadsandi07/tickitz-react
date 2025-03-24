import React from "react"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router"

const OrderPage = () => {
  return (
    <div>
      <Header />
      <div className=''>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default OrderPage
