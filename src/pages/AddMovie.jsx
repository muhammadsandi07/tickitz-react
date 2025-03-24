import React from "react"

const AddMovie = () => {
  return (
    <form className='max-md:mx-[24px] my-[52px] max-w-[732px] mx-auto bg-white my-8 rounded-md px-[37px] py-[52px] font-mulish'>
      <h2 className='text-2xl text-[#14142B] font-bold tracking-[0.25px] leading-[100%]'>
        Add New Movie
      </h2>
      <div className='mb-6'>
        <p>Upload Image</p>
        <p className='text-[#696F79] text-base visible leading-[100%]  tracking-[0.25px] mb-5'>
          Upload Image
        </p>
        <label
          htmlFor='image'
          className='bg-primary text-[#F7F7FC] text-sm leading-7 py-2 px-10 rounded-lg '
        >
          Upload
        </label>
        <input type='file' name='image' id='image' className='hidden' />
        <p></p>
      </div>
      <div>
        <label htmlFor='movie-name'>Movie Name</label>
        <input
          type='text'
          name='movie-name'
          id='movie-name'
          placeholder='Spider-Man: Homecoming'
          className='rounded-sm'
        />
        <p>error</p>
      </div>

      <div>
        <label htmlFor='movie-name'>Category</label>
        <input
          type='text'
          name='movie-name'
          id='movie-name'
          placeholder='Action, Adventure, Sci-Fi'
          className='rounded-sm'
        />
        <p>err</p>
      </div>
      <div>
        <div className='flex gap-[45px] max-md:flex-col'>
          <div className='flex-1'>
            <label htmlFor='release-date'>release date</label>
            <input
              type='date'
              name='release-date'
              id='release-date'
              className='rounded-sm'
            />
          </div>
          <div className='flex-1  '>
            <label htmlFor='duration'>Duration (hour /minute)</label>
            <div className='flex max-md:gap-1  gap-6 max-md:flex-col  '>
              <div className='h-max'>
                <input
                  type='number'
                  name='hour'
                  id='duration'
                  min='0'
                  placeholder='2'
                  className=' max-md:w-full md:text-center  w-[135px] rounded-sm'
                />
              </div>
              <div className=''>
                <input
                  type='number'
                  name='minute'
                  id='duration'
                  min='0'
                  max='60'
                  className=' max-md:w-full md:text-center  w-[135px] rounded-sm'
                  placeholder='12'
                />
                <p>err</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor='director'>Director Name</label>
        <input
          type='text'
          name='director'
          id='director'
          placeholder='jhon watts'
          className='rounded-sm'
        />
        <p>err</p>
      </div>
      <div>
        <label htmlFor='cast'>Cast </label>
        <input
          type='text'
          name='cast'
          id='cast'
          placeholder='Tom Holland, Michael Keaton, Robert Down'
          className='rounded-sm'
        />
        <p>error</p>
      </div>
      <div className='flex flex-col'>
        <label htmlFor='cast' className='mb-3'>
          Sysnopsis
        </label>
        <textarea
          name=''
          id='cast'
          className='border border-[#dedede] rounded-sm h-[207px] '
        ></textarea>
        <p>error</p>
      </div>
      <div>
        <label htmlFor='cast'>Add Location </label>
        <input
          type='text'
          name='cast'
          id='cast'
          className='rounded-sm'
          placeholder='Purwokerto, Bandung, Bekasi'
        />
        <p>error</p>
      </div>

      <div>
        <label htmlFor='date'>Set Date & Time </label>
        <div>
          <input
            type='date'
            name='date'
            id='date'
            className='w-[203px] py-[7px] px-[15px] bg-[#EFF0F6] rounded-sm'
          />
        </div>
        <p>error</p>
      </div>
      <div>
        <label htmlFor='time'> </label>
        <div>
          <input
            type='time'
            name='time'
            id='time'
            className='w-[203px] py-[7px] px-[15px] bg-[#EFF0F6] rounded-sm '
          />
        </div>
        <p>error</p>
      </div>
      <div>
        <button className='text-[#F7F7FC] bg-primary font-bold leading-7 tracking-[0.75px] w-full  h-[56px] rounded-sm'>
          Save Movie
        </button>
      </div>
    </form>
  )
}

export default AddMovie
