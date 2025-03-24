import React from "react"
import img from "../assets/bg/imgTable.png"
import eye from "../assets/icon/Eye.svg"
import edit from "../assets/icon/edit.svg"
import deleteIcon from "../assets/icon/delete.svg"

const DashboardAdmin = () => {
  return (
    <main>
      <section className='bg-[#F5F6F8] h-screen font-mulish'>
        <div className='bg-white px-[58px] py-[39px] min-h-[567px] rounded-[20px] flex flex-col justify-between '>
          <div className='flex items-center justify-between mb-[40px]'>
            <h2 className='text-2xl leading-[100%] font-bold text-[#14142B]'>
              List Movie
            </h2>
            <div className='flex items-center gap-3 '>
              <form action=''>
                <input
                  type='date'
                  name='date'
                  id='date'
                  className='rounded-sm  bg-[#EFF0F6] h-[56px] rounded-lg'
                />
              </form>
              <button type='button' className='md:hidden '>
                <img src='images/plus.svg' alt='' />
                Add
              </button>
              <button className='bg-primary text-[#F7F7FC] px-[18px] h-[56px] mt-3 rounded-lg'>
                Add Movies
              </button>
            </div>
          </div>
          <div className='flex-1'>
            <table className='w-full'>
              <thead>
                <tr className='border-b border-[#E6EAF0] '>
                  <th className='text-[#1F4173] text-[12px] font-bold leading-[100%]  py-[17px]'>
                    No
                  </th>
                  <th className='text-[#1F4173] text-[12px] font-bold leading-[100%] py-[17px] '>
                    Thumbnail
                  </th>
                  <th className='text-[#1F4173] text-[12px] font-bold leading-[100%] py-[17px]'>
                    Movie Name
                  </th>
                  <th className='text-[#1F4173] text-[12px] font-bold leading-[100%] py-[17px]'>
                    Category
                  </th>
                  <th className='text-[#1F4173] text-[12px] font-bold leading-[100%] py-[17px] '>
                    Release Date
                  </th>
                  <th className='text-[#1F4173] text-[12px] font-bold leading-[100%] py-[17px]'>
                    Duration
                  </th>
                  <th
                    colspan='3'
                    className='text-[#1F4173] text-sm font-bold leading-[100%] '
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-[#E6EAF0] '>
                  <td className='text-sm text-[#1F4173] leading-[100%] '>1</td>
                  <td>
                    <img
                      src={img}
                      alt='spiderman image'
                      className='py-[9px] '
                    />
                  </td>
                  <td className='text-primary text-sm text-center'>
                    Spiderman HomeComing
                  </td>
                  <td className='text-sm text-[#1F4173] leading-[100%] text-center '>
                    Action, Adventure
                  </td>
                  <td className='text-sm text-[#1F4173] leading-[100%] text-center'>
                    07/05/2023
                  </td>
                  <td className='text-sm text-[#1F4173] leading-[100%] text-center'>
                    2 Hours 15 Minute
                  </td>
                  <td className=''>
                    <button className='bg-primary w-[31px] h-[31px] flex items-center justify-center rounded-md'>
                      <img src={eye} alt='eye icon' />
                    </button>
                  </td>
                  <td>
                    <button className='bg-[#5D5FEF] w-[31px] h-[31px] flex items-center justify-center rounded-md'>
                      <img src={edit} alt='eye icon' />
                    </button>
                  </td>
                  <td>
                    <button className='bg-[#E82C2C] w-[31px] h-[31px] flex items-center justify-center rounded-md'>
                      <img src={deleteIcon} alt='eye icon' />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <button className='hover:bg-primary hover:text-white h-[40px] w-[40px] rounded-lg border-[0.5px] border-[#DEDEDE]'>
              1
            </button>
            <button className='hover:bg-primary hover:text-white h-[40px] w-[40px] rounded-lg border-[0.5px] border-[#DEDEDE]'>
              2
            </button>
            <button className='hover:bg-primary hover:text-white h-[40px] w-[40px] rounded-lg border-[0.5px] border-[#DEDEDE] '>
              3
            </button>
            <button className='hover:bg-primary hover:text-white h-[40px] w-[40px] rounded-lg border-[0.5px] border-[#DEDEDE]'>
              4
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DashboardAdmin
