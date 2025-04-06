import React, { useState } from "react"
import eye1 from "../assets/icon/eye1.svg"
import google from "../assets/icon/google.svg"
import facebook from "../assets/icon/facebook.svg"
import validate from "../utils/validate"
import eyeopen from "../assets/icon/eyeopen.svg"
import useLocalStorage from "../hooks/useLocalStorage"
import { useNavigate } from "react-router"

const SignUp = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
    term: false,
    role: "user",
  })
  const [listUser, setListUser] = useLocalStorage("fgo23:listUser", [])
  const [isOpen, setIsOpen] = useState(true)
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })
  const [openPassword, setOpenPassword] = useState(false)
  const inputChangeHandler = (e) => {
    const { name, value, type, checked } = e.target
    const newFrom = {
      ...form,
      [name]: type === "checkbox" ? checked : value,
    }
    setErrors((error) => {
      const newErrorMsg = validate(name, value, type, checked)
      return {
        ...error,
        [Object.keys(newErrorMsg)]: newErrorMsg[Object.keys(newErrorMsg)],
      }
    })
    setForm(newFrom)
  }
  const [existingUsers, _] = useLocalStorage("fgo23:listUser", []) || []

  const handleRegister = (e) => {
    e.preventDefault()
    let isValid = true
    const isEmailExist = existingUsers.some((user) => user.email === form.email)

    if (isEmailExist) {
      setErrors({ ...errors, email: "email sudah terdaftar" })
      isValid(true)
    }
    for (const field in form) {
      const newErrorMsg = validate(field, form[field])
      setErrors((error) => {
        return {
          ...error,
          [Object.keys(newErrorMsg)]: newErrorMsg[Object.keys(newErrorMsg)],
        }
      })
      if (errors[field]) {
        isValid = false
      }
    }

    if (!isValid) {
      return
    } else {
      setListUser((listUser) => {
        const newListuser = [...listUser]
        newListuser.push(form)
        return newListuser
      })
      navigate("/auth")
    }
  }
  return (
    <main className='bg-white py-[52px] px-[10px] rounded-lg font-mulish sm:w-[546px] sm:mx-auto mt-5 sm:px-[73px] sm:py-[35px]'>
      <div className='line-proggress'>
        <div className='flex justify-center mb-[31px] gap-1 items-center'>
          <div className='flex flex-col justify-center items-center  basis-[w-62px] shrink-0'>
            <div className='bg-primary w-[47px] h-[47px] rounded-full flex items-center justify-center text-white leading-[20.08px] '>
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
      <form onSubmit={handleRegister}>
        <div className='pb-[24px] relative'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Write your email'
            value={form.email}
            name='email'
            onChange={inputChangeHandler}
          />
          {errors.email && (
            <p
              className={`${
                errors.email ? "visible" : "hidden"
              } text-red-400 text-sm absolute bottom-0  `}
            >
              {errors.email}
            </p>
          )}
        </div>

        <div className='pb-[24px] relative'>
          <label htmlFor='password'>Password</label>
          <div className=' flex py-[12px] px-[24px] text-sm text-[#4E4B66] border-[#DEDEDE] items-center rounded-xl border w-full mt-[12px]'>
            <input
              type={openPassword ? "text" : "password"}
              placeholder='Write your password'
              className='border-none p-0 rounded-none  mr-auto text-sm '
              value={form.password}
              onChange={inputChangeHandler}
              name='password'
            />
            <button
              type='button'
              onClick={() => setOpenPassword((openPassword) => !openPassword)}
            >
              <img src={openPassword ? eyeopen : eye1} alt='' />
            </button>
          </div>
          {errors.password && (
            <p
              className={`${
                errors.password ? "visible" : "hidden"
              } text-red-400 text-sm absolute bottom-0  `}
            >
              {errors.password}
            </p>
          )}
        </div>
        <div className='flex gap-5 items-center mb-[12px] relative pb-[27px]'>
          <input
            type='checkbox'
            id='terms'
            checked={form.term}
            onChange={inputChangeHandler}
            name='term'
            className=' w-max h-max m-0'
          />
          <label htmlFor='terms'>I agree to terms & conditions</label>
          {errors.term && (
            <p
              className={`${
                errors.term ? "visible" : "hidden"
              } text-red-400 text-sm absolute bottom-0  `}
            >
              {errors.term}
            </p>
          )}
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
