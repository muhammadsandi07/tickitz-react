import React from "react"

const BtnTime = ({ time, setTime, cinema, dataForm }) => {
  return (
    <button
      onClick={() =>
        setTime((form) => {
          const newForm = {
            ...form,
            time: time,
            cinema: cinema,
          }
          return newForm
        })
      }
      className={`${
        dataForm.time === time
          ? "bg-primary text-white"
          : "text-[#4E4B66] bg-[#A0A3BD33] "
      } text-sm leading-6 tracking-[0.75px]  py-[4px] px-[14px] rounded-[20px] `}
    >
      {time}
    </button>
  )
}

export default BtnTime
