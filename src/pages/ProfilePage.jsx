import React, { useState } from "react"
import Sidebar from "../components/sidebar/Sidebar"
import NavbarProfile from "../components/navbar/NavbarProfile"
import eye from "../assets/icon/eye.svg"
const ProfilePage = () => {
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const inputChangeHandler = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(newForm)
  }
  return (
    <div className='flex max-md:flex-col font-mulish'>
      <div className='md:hidden mb-0'>
        <NavbarProfile />
      </div>
      <div className=''>
        <Sidebar setModal={setModal} />
      </div>
      <div className=' md:py-[48px] md:px-[24px] w-full'>
        <div className='max-md:hidden'>
          <NavbarProfile />
        </div>
        <main
          className={`${
            modal
              ? "max-md:block max-md:absolute max-md:top-0 max-md:left-0 max-md:right-0 z-3 max-md:bg-black/70 max-md:py-[48px] max-md:px-[10px] max-md:m-0"
              : "max-md:hidden"
          }`}
        >
          <div className='z-3 bg-transparent '>
            <form
              className={`${
                modal ? "bg-white rounded-3xl" : ""
              } max-md:mx-[24px] my-[48px] py-[24px]`}
            >
              <div className='bg-white px-[24px]  md:pt-[31px] md:pb-[40px] rounded-3xl md:mb-[51px] '>
                <h3 className='text-[#14142B] text-2xl tracking-tight font-bold border-0 '>
                  Account Settings
                </h3>
                <div className='mb-[48px]'>
                  <h3>Details Information</h3>
                </div>
                <div>
                  <div className='flex flex-wrap gap-x-[34px] gap-y-0'>
                    <div className='flex-1 shrink-0 basis-[238px]'>
                      <label
                        htmlFor='firstname'
                        value={form.firstName}
                        onChange={inputChangeHandler}
                      >
                        Firstname
                      </label>
                      <input
                        type='text'
                        name='firstName'
                        id='firstname'
                        placeholder='Jonas'
                      />
                      <p className='error '>error</p>
                    </div>
                    <div className='flex-1 shrink basis-[238px]'>
                      <label htmlFor='lastname'> Lastname </label>
                      <input
                        type='text'
                        name='lastName'
                        id='lastname'
                        placeholder='El Rodriguez'
                      />
                      <p className='error'>error</p>
                    </div>
                  </div>
                  <div className='flex flex-wrap gap-x-[34px] gap-y-0'>
                    <div className='flex-1 shrink-0 basis-[238px]'>
                      <label htmlFor='email'> email </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='jonasrodrigu123@gmail.com'
                      />
                      <p className='error'>error</p>
                    </div>
                    <div className='flex-1 shrink basis-[238px]'>
                      <label htmlFor='phone'>Phone Number</label>
                      <div className='flex py-[4px] px-[24px] text-sm text-[#4E4B66] border-[#DEDEDE] rounded-xl border w-full mt-[12px]'>
                        <input
                          name=''
                          id=''
                          placeholder='+62'
                          disabled
                          className='placeholder:text-light-text p-0 m-0 w-[40px] border-t-0  border-b-0  border-l-0 border-r-[0.5px] rounded-none border-[#DEDEDE]'
                          value='+62'
                        />
                        <input
                          type='number'
                          name='phone'
                          id='phone'
                          placeholder='81445687121'
                          className='border-none p-0 rouded-none ml-[16px]'
                        />
                      </div>
                      <p className='error'>sd</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-white px-[24px]  md:pt-[31px] md:pb-[40px] rounded-3xl mb-[48px] '>
                <div>
                  <h3>Account and Privacy</h3>
                </div>
                <div>
                  <div>
                    <label htmlFor='password'> New Password </label>
                    <div className='flex items-center py-[12px] px-[8px] text-sm text-[#4E4B66] border-[#DEDEDE] rounded-xl border w-full mt-[12px]'>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Write your password'
                        className='border-none p-0 rouded-none ml-[16px] mr-auto'
                      />
                      <button className='max-sm:hidden'>
                        <img src={eye} alt='eye icon' />
                      </button>
                    </div>
                    <p className='error'>sd</p>
                  </div>
                  <div>
                    <label htmlFor='password'> New Password </label>
                    <div className='flex items-center py-[12px] px-[8px] text-sm text-[#4E4B66] border-[#DEDEDE] rounded-xl border w-full mt-[12px] '>
                      <input
                        type='password'
                        name='confirmPassword'
                        id='confirm-password'
                        placeholder='Write your password'
                        className='border-none p-0 rouded-none ml-[16px] mr-auto'
                      />
                      <button className='border-none max-sm:hidden'>
                        <img src={eye} alt='eye icon' />
                      </button>
                    </div>
                    <p className='error'>sd</p>
                  </div>
                </div>
              </div>
              <div className='px-6 pb-[49px]'>
                <button className='h-[56px] max-md:w-full md:w-[360px] bg-primary border-primary rounded-lg text-[#F7F7FC] leading-[24px] tracking-[0.75px]'>
                  Update changes
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProfilePage
