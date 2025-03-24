import React from "react"
import { Link, useLocation } from "react-router"

const NavbarProfile = () => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <section className=' flex max-md:justify-between md:rounded-3xl md:mb-[48px] gap-[56px] py-0'>
      <Link to={"/profile"}>
        <div
          className={`${
            location.pathname == "/profile"
              ? "border-b-2 border-primary"
              : "border-0"
          } py-4 md:py-8`}
        >
          <h3>Account Settings</h3>
        </div>
      </Link>
      <Link to={"/profile/history-order"}>
        <div
          className={`${
            location.pathname == "/profile/history-order"
              ? "border-b-2 border-primary"
              : "border-0"
          } py-4 md:py-8`}
        >
          <h3>Order History</h3>
        </div>
      </Link>
    </section>
  )
}

export default NavbarProfile
