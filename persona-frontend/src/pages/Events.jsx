import React from 'react'
import calender from "../assets/calender.svg"
import filterIcon from "../assets/filterIcon.svg"
const eventList = [
    {
        id: 1,
        title: "Llama 3 Launch",
        desc: "meta is going to dropa huge announcement",
        date: "18 August, 24",
        venue: "Online",
        link: "https://llama.meta.com/"
    },
    {
        id: 2,
        title: "OpenAI board meeting",
        desc: "the og board meeting again",
        date: "28 August, 24",
        venue: "Miami, USA",
        link: "https://llama.meta.com/"
    },
    {
        id: 3,
        title: "Mistral AI app update",
        desc: "Mistral  going to launch a new version",
        date: "06 September, 24",
        venue: "Mumbai, India",
        link: "https://llama.meta.com/"
    },
    {
        id: 4,
        title: "Sora Announcement",
        desc: "Google to display Sora's best features",
        date: "16 September, 24",
        venue: "Seattle, USA",
        link: "https://llama.meta.com/"
    },
    {
        id: 5,
        title: "Mistral AI app update",
        desc: "Mistral  going to launch a new version",
        date: "28 November, 24",
        venue: "Washington DC",
        link: "https://llama.meta.com/"
    },
    {
        id: 6,
        title: "Mistral AI app update",
        desc: "Mistral  going to launch a new version",
        date: "25 December, 24",
        venue: "Online",
        link: "https://llama.meta.com/"
    }
]

export default function Events() {
    return (
        <div className="w-5/6 mx-auto ">

            <section className='flex justify-between items-center mt-16 border-b-[1px] border-slate-700 pb-4'>
                <h1 className="font-nunito text-5xl text-white font-bold text-center">
                    AI Events Across The Globe
                </h1>

                <div className="font-nunito text-white text-xl bg-slate-700 pr-2 py-1.5 rounded-2xl mr-5 border-blue-600 border-2 hover:bg-slate-800 hover:cursor-pointer flex">
                <img src={filterIcon} className='h-6 w-6 mr-2 ml-2' />
                    Filter
                </div>

            </section>

            <section className='grid grid-cols-5 text-center mt-10 items-center gap-x-6'>
                <h3 className='font-nunito text-xl text-gray-200 '>Name</h3>
                <h3 className='font-nunito text-xl  text-gray-200 '>Description</h3>
                <h3 className='font-nunito text-xl  text-gray-200 '>Date</h3>
                <h3 className='font-nunito text-xl  text-gray-200 '>Venue</h3>
                <h3 className='font-nunito text-xl  text-gray-200 '>Link</h3>

            </section>

            <div className='border-b-[1px] border-slate-700'></div>

            <section className='grid grid-cols-5 text-center mt-4 items-center gap-x-6'>

                {eventList.map(event => (
                    <React.Fragment key={event.id}>
                        <h4 className='font-nunito text-lg text-gray-200 mt-8'>{event.title}</h4>

                        <h4 className='font-nunito text-lg text-gray-300 mt-8'>{event.desc}</h4>

                            <div className='font-nunito text-lg text-gray-300 mt-8 bg-slate-700 border-blue-600 border-2 rounded-lg hover:bg-slate-800 hover:cursor-pointer flex justify-start'> <img src={calender} className='h-6 w-6 mr-3 ml-3' /> {event.date} </div>

                        <h4 className='font-nunito text-lg text-gray-300 mt-8'>{event.venue}</h4>

                        <h4 className='font-nunito text-lg text-gray-300 mt-8'><a href={event.link}>{event.link}
                        </a></h4>
                    </React.Fragment>
                ))}

            </section>

        </div>
    )
}
