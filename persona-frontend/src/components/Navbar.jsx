import React from 'react'

export default function Navbar() {
  return (
    <div className="flex justify-end px-10 py-5 backdrop-blur-sm sticky left-0 right-0 ml-auto mr-auto top-8 rounded-full w-10/12 border-slate-800 border-2 z-10">

        <div>
            {/* left part with logo */}
        </div>

        <div className="flex justify-evenly gap-8">
            {/* right part with nav-links */}
            <h5 className="font-4xl text-gray-200 font-semibold font-nunito">Home</h5>
            <h5 className="font-4xl text-gray-200 font-semibold font-nunito">Events</h5>
            <h5 className="font-4xl text-gray-200 font-semibold font-nunito">About</h5>
            <h5 className="font-3xl text-gray-200 font-semibold ">Contribute</h5>
            
        </div>
      
    </div>
  )
}
