import dot from "../../assets/other/dot.svg"
import userCircle from "../../assets/profile/user-circle.png"
import star from "../../assets/other/star.svg"

const Sidebar = () => {
  return (
    <aside className=' mt-[32px] mx-[24px] bg-white rounded-3xl'>
      <div className='p-[40px]'>
        <p className='text-light-text text-base'>INFO</p>
        <img src={dot} alt='dot icon' className='hidden' />
      </div>
      <div className='border-b border-[#DEDEDE] px-[40px] pb-[40px] text-center'>
        <img
          src={userCircle}
          alt='user image'
          className='w-[136px] mx-auto h-[136px] '
        />
        <p className='text-xl text-[#14142B] font-semibold leading-[34px]  tracking-[0.75px] mb-[4px]'>
          Jonas El Rodriguez
        </p>
        <p className='text-light-text'>Moviegoers</p>
      </div>
      <div className='p-[40px]'>
        <div className='text-[#4E4B66]'>
          <p className='font-semibold text-[#4E4B66] mb-[24px] leading-[34px]  tracking-[0.75px]'>
            Loyalty Points
          </p>
        </div>
        <div className='card-points relative p-[15px] bg-primary px-[15px] flex flex-col justify-between w-[248px] h-[125px] rounded-[16px] mx-auto mb-[32px]'>
          <div className='flex justify-between'>
            <p className='text-[white] text-lg font-bold leading-[34px]  tracking-[0.75px]    '>
              Moviegoers
            </p>
            <img src={star} alt='star icon' className='z-2' />
          </div>
          <p className='text-2xl font-semibold  text-[white] leading-[38px]  tracking-[0.75px] '>
            320
            <span className='text-[10px] leading-[24px]  tracking-[0.75px] '>
              points
            </span>
          </p>
          <div className='absolute w-[122px] h-[122px] rounded-full top-[-30px] right-[-35px] bg-[white]/30'></div>
          <div className='absolute w-[122px] h-[122px] rounded-full top-[-50px] right-[-25px] bg-[white]/30'></div>
        </div>
        <div>
          <p className='leading-[24px]  tracking-[0.75px] text-light-text w-max mx-auto'>
            180 points become a master
          </p>
          <div className='w-full h-[12px] bg-[#F5F6F8] rounded-lg mt-[10px] mb-[48px]'>
            <div className='w-[50%] bg-primary h-full rounded-lg shadow-[0 2px 4px 0] shadow-black'></div>
          </div>
        </div>
        <button className='h-[56px] w-full border-1 rounded-2xl border-primary text-primary  md:hidden'>
          Edit Profile
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
