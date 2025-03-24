import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { Routes, Route, Outlet } from "react-router"
import "./index.css"
import OrderHistory from "./layout/ProfileLayout"
import LandingPage from "./layout/LandingPage"
import Hero from "./pages/Hero"
import MovieAll from "./pages/MovieAll"
import Auth from "./layout/Auth"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import MovieDetails from "./pages/MovieDetails"
import OrderPage from "./layout/OrderPage"
import PrivateRoute from "./components/PrivateRoute"
import OrderMovie from "./pages/OrderMovie"
import Payment from "./components/order/Payment"
import TicketResult from "./components/order/TicketResult"
import ProfileLayout from "./layout/ProfileLayout"
import ProfilePage from "./pages/ProfilePage"
import ProfileHistory from "./pages/ProfileHistory"
import DashboardAdmin from "./pages/DashboardAdmin"
import AddMovie from "./pages/AddMovie"
function App() {
  return (
    <Routes>
      <Route element={<LandingPage />}>
        <Route index element={<Hero />} />
        <Route path='movies'>
          <Route index element={<MovieAll />} />
          <Route
            path=':id'
            element={
              <PrivateRoute redirectTo={"/auth"}>
                <MovieDetails />
              </PrivateRoute>
            }
          />
        </Route>
      </Route>
      <Route path='auth' element={<Auth />}>
        <Route index element={<SignIn />} />
        <Route path='new' element={<SignUp />} />
      </Route>
      <Route path='order' element={<OrderPage />}>
        <Route index element={<OrderMovie />} />
        <Route path='payment' element={<Payment />} />
        <Route path='ticket' element={<TicketResult />} />
      </Route>
      <Route path='profile' element={<ProfileLayout />}>
        <Route index element={<ProfilePage />} />
        <Route path='history-order' element={<ProfileHistory />} />
      </Route>
      <Route path='admin' element={<ProfileLayout />}>
        <Route index element={<DashboardAdmin />} />
        <Route path='add-movie' element={<AddMovie />} />
      </Route>
    </Routes>
  )
}

export default App
