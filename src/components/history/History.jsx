import React from "react"
import cineone from "../../assets/cinema/CineOne21.svg"
import forward from "../../assets/icon/forward.svg"
const HistoryProfile = () => {
  return (
    <main>
      <div>
        <section>
          <div>
            <h3>Details Account</h3>
          </div>
          <div>
            <h3>Order History</h3>
          </div>
        </section>
        <section className='bg-white my-[32px] mx-[24px] rounded-2xl'>
          <div className='pt-[24px] px-[24px] pb-[32px] border-b border-[#dedede]'>
            <img src={cineone} alt='cineone21' className='w-[98px] mb-[18px]' />
            <p className='text-[#aaa] text-[13px] leading-[22px] tracking-[0.25px] mb-1] '>
              Tuesday, 07 July 2020 - 04:30pm
            </p>
            <h3 className='font-semibold text-lg leading-7 tracking-[0.75px]'>
              Spider-Man: Homecoming
            </h3>
          </div>
          <div className='pt-[24px] px-[24px] '>
            <p className='bg-[#00ba8833] text-[#00ba88] mb-4 h-[40px] font-bold text-sm leading-10 text-center rounded-lg'>
              Ticket in active
            </p>
            <p className='bg-[#e82c2c33] text-[#e82c2c] mb-4 h-[40px] font-bold text-sm leading-10 text-center rounded-lg'>
              Not Paid
            </p>
            <button className='w-[100%] flex justify-center text-lg leading-[34px] tracking-[0.75px] border-none flex text-[#AAAAAA]  '>
              Show Details
              <img src={forward} alt='forward icon' className='ml-4' />
            </button>
          </div>
          <div>
            <h3>Ticket Information</h3>
            <div className=' inline-grid grid-cols-3 grid-flow-row gap-3 '>
              <p>No. Rekening Virtual</p>
              <p>:</p>
              <p>12321328913829724</p>
              <button>Copy</button>
              <p>Total Payment</p>
              <p>:</p>
              <p>$30</p>
              <p>
                Pay this payment bill before it is due,
                <span>on June 23</span> , 2023. If the bill has not been paid by
                the specified time, it will be forfeited
              </p>
            </div>
            <button>Cek Pembayaran</button>
          </div>
        </section>
        <section>
          <div>
            <img src={cineone} alt='cineone21' />
            <p>Monday, 14 June 2020 - 02:00pm</p>
            <h3>Avengers: End Game</h3>
          </div>
          <div className='bg-red '>
            <p>Ticket used</p>
            <p>Not Paid</p>
            <button>
              Show Details
              <img src={forward} alt='forward icon' />
            </button>
          </div>
          <div>
            <h3>Ticket Information</h3>
            <div className=''>
              <img
                src='images/QR Code 2.svg'
                alt='qr code'
                width='136'
                height='138'
              />
              <div>
                <p>category</p>
                <p>PG-13</p>
              </div>
              <div>
                <p>time</p>
                <p>2:00pm</p>
              </div>
              <div>
                <p>seats</p>
                <p>C4,C5,C6</p>
              </div>
              <div>
                <p>Movie</p>
                <p>Spider-Man</p>
              </div>
              <div>
                <p>date</p>
                <p>07 Jul</p>
              </div>
              <div>
                <p>count</p>
                <p>3 pcs</p>
              </div>
              <p>Total</p>
              <p>$30.00</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default HistoryProfile
