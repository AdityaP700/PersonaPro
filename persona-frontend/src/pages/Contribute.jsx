import React from 'react'

export default function Contribute() {
  return (
    <div className='w-5/6 mx-auto font-roboto text-lg leading-loose lowercase'>
      <h2 className='font-nunito text-5xl text-white mt-16 border-b-[1px] border-slate-600 pb-4 normal-case'>
        Let's Build Together
      </h2>

      <p className=' text-gray-300 mt-8'>
        hey there, from the persona team! We are glad that you stumbled upon our little corner of the digital universe. we are a small team of curious humans and need your support to grow.
      </p>
      <p className=' text-gray-300 mt-5'>
        so grab your keyboard, pull up a chair, and let's build something amazing together. No matter your skill level, your ideas matter -- big time.
      </p>

      <p className='text-gray-300 mt-5'>
        we have added bunch of things you can do, if you are not sure where to begin :
        <ul className='list-disc pl-12 pt-4 list leading-loose'>
          <li>add mobile responsiveness to site, ensure site can be accessed across any device</li>
          <li>send us the complete list of AI events ( conferences, meetings, meetups, launches, anything )</li>
          <li>if you know any great AI tools, message us anytime</li>
          <li>add cool 3D models ( most probably using three.js ) to the home page</li>
          <li>add an efficient caching method for faster load times</li>
        </ul>

        <p className=' text-gray-300 mt-5'>well, the list can go infinitely long. but if you have any idea please add a pull-request to
          <a href="https://github.com/AdityaP700/PersonaPro" target='_blank' className='underline'> https://github.com/AdityaP700/PersonaPro </a>
        </p>

        <p className=' text-gray-300 mt-5'>
          we would finally like to give a big thanks to <a href="https://popsy.co/" className='underline italic'>https://popsy.co/</a> for granting us access to the amazing notion-illustrations.
        </p>
      </p>
    </div>
  )
}
