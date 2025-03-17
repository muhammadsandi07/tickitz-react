import React, { useState } from "react"
import eye from "../../assets/icon/eye.svg"

const FormProfile = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  // uncontrol input
  // ref
  // control input

  const inputChangeHandler = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(newForm)
  }

  // function submitHandlerWithControlledInput(e){
  //   e.preventDefault()
  //   const {title, body} = form
  //   setTodos((todos) =>{
  //     const newTodos = {...todos}
  //     newTodos.push({
  //       title,body
  //     })
  //     localStorage.setItem("fgo23:todos", JSON.stringify(newTodos))
  //     return newTodos
  //   })
  //   setForm({title:"", body:""})
  //   closeModal()
  // }
  return (
    <main className='absolute top-0 left-0 right-0  mb-0 bg-[black]/70 py-[48px] px-[24px]  z-3'>
      <div className=' px-[24px] pb-[48px] pt-[31px] pb-[40px] z-3 bg-[white] rounded-2xl'>
        <section className='hidden'>
          <div>
            <h3>Account Settings</h3>
          </div>
          <div>
            <h3>Order History</h3>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-[#14142B] text-2xl tracking-tight font-bold'>
              Account Settings
            </h3>
          </div>
        </section>
        <form>
          <section>
            <div>
              <h3>Details Information</h3>
            </div>
            <div>
              <div>
                <label
                  htmlFor='firstname'
                  value={form.firstName}
                  onChange={inputChangeHandler}
                >
                  {" "}
                  Firstname{" "}
                </label>
                <input
                  type='text'
                  name='firstName'
                  id='firstname'
                  placeholder='Jonas'
                />
                <p className='error '>error</p>
              </div>
              <div>
                <label htmlFor='lastname'> Lastname </label>
                <input
                  type='text'
                  name='lastName'
                  id='lastname'
                  placeholder='El Rodriguez'
                />
                <p className='error'>error</p>
              </div>
              <div>
                <label htmlFor='email'> email </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='jonasrodrigu123@gmail.com'
                />
                <p className='error'>error</p>
              </div>
              <div>
                <label htmlFor='phone'>Phone Number</label>
                <div className='flex py-[12px] px-[24px] text-sm text-[#4E4B66] border-[#DEDEDE] rounded-xl border w-full mt-[12px]'>
                  <input
                    name=''
                    id=''
                    placeholder='+62'
                    disabled
                    className='placeholder:text-light-text p-0 w-[40px] border-t-0  border-b-0  border-l-0 border-r-[0.5px] rounded-none border-[#DEDEDE]'
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
          </section>
          <section>
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
          </section>
          <div>
            <button className='h-[40px] w-full bg-primary border-primary rounded-lg text-[#F7F7FC] leading-[24px] tracking-[0.75px]'>
              Update changes
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default FormProfile
