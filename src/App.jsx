import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./index.css"
import ProfilePage from "./pages/ProfilePage"
import OrderHistory from "./pages/ProfilePage"
import { Routes, Route, Outlet } from "react-router"
import LandingPage from "./pages/LandingPage"
import Hero from "./components/movie/Hero"
import MovieAll from "./components/movie/MovieAll"
import History from "./components/history/History"
import FormProfile from "./components/form-profile/FormProfile"
import Auth from "./pages/Auth"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import MovieDetails from "./components/movie/MovieDetails"
import OrderPage from "./pages/OrderPage"
function App() {
  return (
    <Routes>
      <Route element={<LandingPage />}>
        <Route index element={<Hero />} />
        <Route path='movies'>
          <Route index element={<MovieAll />} />
          <Route path=':id' element={<MovieDetails />} />
        </Route>
      </Route>
      <Route path='profile' element={<OrderHistory />}>
        <Route path='edit' element={<FormProfile />} />
        <Route path='history' element={<ProfilePage />} />
      </Route>
      <Route path='auth' element={<Auth />}>
        <Route index element={<SignIn />} />
        <Route path='new' element={<SignUp />} />
      </Route>
      <Route path='profile' element={<ProfilePage />}>
        <Route index element={<FormProfile />} />
        <Route path='history' element={<History />} />
      </Route>
      <Route path='order' element={<OrderPage />}>
        <Route index element={<FormProfile />} />
        <Route path='history' element={<History />} />
      </Route>
    </Routes>
  )
}

export default App
