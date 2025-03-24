import React from "react"

const Subscribe = () => {
  return (
    <section className='py-[2rem] px-[7%] bg-white '>
      <div className='bg-primary px-[36px] py-[61px] rounded-[20px] relative max-sm:h-[536px] overflow-hidden'>
        <h2 className='max-sm:text-[32px] sm:text-[48px] mb-[37px] text-white text-center max-sm:mb-[37px]'>
          Subcribe to our newslater
        </h2>
        <form className='flex max-lg:flex-col gap-[11px] items-end mt-[37px] p-0  mb-[20px] justify-center'>
          <label htmlFor='firstname' hidden></label>
          <input
            type='text'
            name='firstname'
            id='firstname'
            placeholder='First name'
            className='rounded-[5px] leading-[26px] placeholder:text-white py-[16px] px-[12px] mt-0 mb-0 lg:w-[230px]'
          />
          <label htmlFor='email' hidden></label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Last name'
            className='rounded-[5px] leading-[26px] placeholder:text-white py-[16px] px-[12px] mt-0 mb-0 lg:w-[230px]'
          />
          <button className='w-full rounded-[5px] text-primary font-bold text-lg bg-white py-[16px] px-[12px] lg:w-[220px]'>
            subcribe now
          </button>
        </form>
        <div className='absolute w-[237px] h-[237px] rounded-full border-[7px] border-white right-[-155px] bottom-[-150px]'></div>
      </div>
    </section>
  )
}

export default Subscribe
