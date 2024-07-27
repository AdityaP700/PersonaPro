import React from 'react'

export default function TabHead({ title, isActive }) {
  return (
    <div className='flex justify-center items-center relative group'>
      {/* gradient div for border below */}
      `{isActive ? (<div className=" absolute w-full h-full inset-0 rounded-lg bg-gradient-to-br from-pink-500 via-cyan-500 to-violet-500 blur group-hover:animate-tilt"></div>):null}`

      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg relative w-[99%] h-[99%] bg-black ">
        <div className="px-6 py-2">
          <div className="font-bold text-xl text-white font-nunito text-center">{title}</div>
        </div>


      </div>
    </div>
  )
}
