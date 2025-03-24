import React, { useState } from "react"
import check from "../../assets/icon/check-small.svg"
import bca from "../../assets/payment/bca.svg"
import bri from "../../assets/payment/bri.svg"
import dana from "../../assets/payment/dana.svg"
import googlePay from "../../assets/payment/googlePay.svg"
import gopay from "../../assets/payment/gopay.svg"
import ovo from "../../assets/payment/ovo.svg"
import paypal from "../../assets/payment/paypal.svg"
import visa from "../../assets/payment/visa.svg"
import { Link } from "react-router"

const Payment = () => {
  const [modal, setModal] = useState(false)
  return (
    <div className='relative'>
      <section className='bg-transparent flex  justify-center items-center  max-sm:hidden'>
        <div className='flex items-center justify-center gap-4'>
          <div className='flex flex-col gap-2.5 justify-center items-center'>
            <div className='bg-[#008000] w-[47px] h-[47px] rounded-full flex items-center justify-center'>
              <img src={check} alt='' />
            </div>
            <p>Dates And Time</p>
          </div>
          <div className='w-[80px]  border-b-2 border-dashed border-[#a0a3bd] '></div>
          <div className='flex flex-col gap-2.5 justify-center items-center'>
            <div className='bg-[#008000] w-[47px] h-[47px] rounded-full flex items-center justify-center text-white '>
              <img src={check} alt='' />
            </div>
            <p>Seat</p>
          </div>
          <div className='w-[80px] border-b-2 border-dashed border-[#a0a3bd] '></div>
          <div className='flex flex-col gap-2.5 justify-center items-center'>
            <div className='bg-primary text-white w-[47px] h-[47px] rounded-full flex items-center justify-center'>
              3
            </div>
            <p>payment</p>
          </div>
        </div>
      </section>
      <main>
        <section className='bg-transparent'>
          <div className='bg-white px-[37px] py-[52px] max-w-[732px] mx-auto rounded-md'>
            <h2 className='text-2xl tracking-[0.25px] font-bold text-[#14142B] leading-[34px] mb-[26px]'>
              Payment Info
            </h2>
            <div>
              <div className='mb-[13px] border-b border-[#e6e6e6]'>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  DATE & TIME
                </p>
                <p className='text-base leading-8 tracking-[0.75px]  '>
                  Tuesday, 07 July 2020 at 02:00pm
                </p>
              </div>
              <div className='mb-[13px] border-b border-[#e6e6e6]'>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  MOVIE TITLE
                </p>
                <p className='text-base leading-8 tracking-[0.75px]  '>
                  Spider-Man: Homecoming
                </p>
              </div>
              <div className='mb-[13px] border-b border-[#e6e6e6]'>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  CINEMA NAME
                </p>
                <p className='text-base leading-8 tracking-[0.75px]  '>
                  CineOne21 Cinema
                </p>
              </div>
              <div className='mb-[13px] border-b border-[#e6e6e6]'>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  NUMBER OF TICKETS
                </p>
                <p className='text-base leading-8 tracking-[0.75px]  '>
                  3 pieces
                </p>
              </div>
              <div className='mb-[13px] border-b border-[#e6e6e6] mb-[47px]'>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  TOTAL PAYMENT
                </p>
                <p className='text-base leading-8 tracking-[0.75px] text-primary font-bold'>
                  $30,00
                </p>
              </div>
              <form noValidate>
                <div className=''>
                  <h2 className='text-2xl tracking-[0.25px] font-bold text-[#14142B] leading-[34px] mb-[26px]'>
                    Personal Information
                  </h2>
                  <div className='mb-[13px]'>
                    <label for='fullname' className='label'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      name='fullname'
                      id='fullname'
                      placeholder='Jonas El Rodriguez'
                    />
                    <span></span>
                  </div>
                  <div className='mb-[13px]'>
                    <label for='fullname' className='label'>
                      Email
                    </label>
                    <input
                      type='email'
                      name='fullname'
                      id='fullname'
                      placeholder='Jonas El Rodriguez'
                    />
                    <span></span>
                  </div>
                  <div className='mb-[13px]'>
                    <label for='phone' className='label'>
                      Phone Number
                    </label>
                    <div className='flex py-[12px] px-[24px] text-sm text-[#4E4B66] border-[#DEDEDE] rounded-xl border w-full mt-[12px]'>
                      <input
                        type='text'
                        value='+62'
                        placeholder='+62'
                        name='code'
                        id='code'
                        disabled
                        className='placeholder:text-light-text p-0 w-[40px] border-t-0  border-b-0  border-l-0 border-r-[0.5px] rounded-none border-[#DEDEDE]'
                      />
                      <input
                        type='number'
                        name='phone'
                        id='phone'
                        placeholder='81445687121'
                        className='border-none p-0 rouded-none ml-[16px]'
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className='text-2xl tracking-[0.25px] font-bold text-[#14142B] leading-[34px] mb-[26px]'>
                    Payment method
                  </h2>
                  <div className='payment-method grid max-sm:grid-cols-2 max-md:grid-cols-3 grid-cols-4 gap-3 mb-[49px]'>
                    <button className='w-[146px] h-[56px] rounded-md border border-[#dedede] flex items-center justify-center'>
                      <img src={googlePay} alt='google play logo' />
                    </button>
                    <button className='w-[146px] h-[56px] rounded-md border border-[#dedede] flex items-center justify-center'>
                      <img src={visa} alt='visa logo' />
                    </button>
                    <button className='w-[146px] h-[56px] rounded-md border border-[#dedede] flex items-center justify-center'>
                      <img src={gopay} alt='gopay logo' />
                    </button>
                    <button className='w-[146px] h-[56px] rounded-md border border-[#dedede] flex items-center justify-center'>
                      <img src={paypal} alt='paypal logo' />
                    </button>
                    <button className='w-[146px] h-[56px] rounded-md border border-[#dedede] flex items-center justify-center'>
                      <img src={dana} alt='dana logo' />
                    </button>
                    <button className='w-[146px] h-[56px] rounded-md border border-[#dedede] flex items-center justify-center'>
                      <img src={bca} alt='bca logo' />
                    </button>
                    <button className='w-[146px] h-[56px] rounded-md border border-[#dedede] flex items-center justify-center'>
                      <img src={bri} alt='bri logo' />
                    </button>
                    <button className='w-[146px] h-[56px] rounded-md border border-[#dedede] flex items-center justify-center'>
                      <img src={ovo} alt='ovo logo' />
                    </button>
                  </div>
                </div>
                <Link to={"/order/ticket"}>
                  <button
                    onClick={() => setModal(!modal)}
                    type='button'
                    className='bg-primary w-full h-[56px] text-[#F7F7FC] rounded-sm font-bold '
                  >
                    Pay Your Order
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </section>
      </main>
      <section
        className={`${
          modal ? "block" : "hidden"
        } absolute inset-0 bg-black/70 p-0`}
      >
        <div className='bg-white w-[573px] h-[506px] rounded-2xl px-4 py-[25px] absolute left-[50%] top-[50%] translate-y-[-50%]  translate-x-[-50%]'>
          <h3 className='text-center text-[#14142B] font-bold text-2xl leading-[100%] tracking-[0.25px] mb-[34px]'>
            Payment Info
          </h3>
          <div className=''>
            <div className='flex items-center justify-between mb-[34px]'>
              <div className='flex items-center w-[170px] justify-between'>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  No. Rekening Virtual
                </p>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  :
                </p>
              </div>
              <div className='flex items-center gap-5'>
                <p className='text-lg text-[#14142B] font-bold leading-[100%] tracking-[0.25px]'>
                  12321328913829724
                </p>
                <button className='text-primary border border-primary py-[12px] px-[18px] rounded-sm'>
                  Copy
                </button>
              </div>
            </div>
            <div className='flex items-center justify-between mb-[34px]'>
              <div className='flex items-center w-[170px] justify-between'>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  Total Payment
                </p>
                <p className='text-sm leading-6 tracking-[0.75px] text-[#8692A6]'>
                  :
                </p>
              </div>
              <p className='text-lg text-primary font-bold leading-[100%] leading-[0.25px]'>
                $30
              </p>
            </div>
            <p className='text-sm leading-8 tracking-[0.75px] text-[#8692A6] mb-[45px] '>
              Pay this payment bill before it is due,
              <span className='text-red-500'>on June 23, 2023</span>. If the
              bill has not been paid by the specified time, it will be forfeited
            </p>
            <button className='w-[100%] bg-primary h-[56px] text-[#F7F7FC] font-bold leading-7 tracking-[0.75px] rounded-sm mb-[23px]'>
              Check Payment
            </button>
            <Link>
              <p className='font-bold leading-7 tracking-[0.75px] text-primary text-center'>
                Pay Later
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Payment
