import React from 'react'

export default function Card({title, desc}) {
    return (
        <div className='flex justify-center items-center relative group'>
        {/* gradient div for border below */}
        <div class="hidden absolute w-full h-full inset-0 rounded-lg bg-gradient-to-br from-pink-500 via-cyan-500 to-violet-500 blur group-hover:animate-tilt group-hover:block"></div>


        <div class="max-w-sm rounded-xl overflow-hidden shadow-lg relative w-[99%] h-[99%] bg-black ">
            <img class="w-full h-3/5" src="https://media.istockphoto.com/id/1404881385/vector/beautiful-landscape-nature-hills-rocks.jpg?s=2048x2048&w=is&k=20&c=F9SQRkgFC9zrNlqzL31l-k1Zb2019cswqlAez7N1J30=" alt="Sunset in the mountains"/>
                <div class="px-6 py-4">
                    <div className="font-bold text-2xl mb-2 text-white font-nunito">{title}</div>
                    <p className=" text-base text-gray-400 font-nunito">
                        {desc}
                    </p>
                </div>
                

        </div>
        </div>
    )
}
