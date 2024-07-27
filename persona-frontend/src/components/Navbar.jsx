import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex justify-end px-10 py-5 backdrop-blur-sm sticky left-0 right-0 ml-auto mr-auto top-8 rounded-full w-10/12 border-slate-800 border-2 z-10">

      <div>
        {/* left part with logo */}
      </div>

      <div className="flex justify-evenly gap-8">
        {/* right part with nav-links */}
        <h5 className="font-4xl text-gray-200 font-semibold font-nunito"><Link to="/">Home</Link></h5>
        <h5 className="font-4xl text-gray-200 font-semibold font-nunito"><Link to="/events">Events</Link></h5>
        <h5 className="font-4xl text-gray-200 font-semibold font-nunito"><Link to="/about"> About </Link> </h5>
        <h5 className="font-3xl text-gray-200 font-semibold "><Link to="/contribute"> Contribute </Link> </h5>

      </div>

    </div>
  )
}
