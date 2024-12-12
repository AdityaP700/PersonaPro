import React from 'react'
import CalenderIcon from "../assets/calender.svg"
import { Link } from 'react-router-dom'

export default function Card({ title, desc, src, link }) {
    return (

        <div className='flex justify-center items-center relative group'>
            {/* gradient div for border below */}
            <div className="hidden absolute w-full h-full inset-0 rounded-lg bg-gradient-to-br from-pink-500 via-cyan-500 to-violet-500 blur group-hover:animate-tilt group-hover:block"></div>

            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg relative w-[99%] h-[99%] bg-black ">
                <Link to={link}>
                    <img className="w-full h-3/5 bg-white" src={src} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-2xl mb-2 text-white font-nunito">{title}</div>
                        <p className=" text-base text-gray-400 font-nunito">
                            {desc}
                        </p>
                    </div>

                </Link>
            </div>

        </div >

    )
}
