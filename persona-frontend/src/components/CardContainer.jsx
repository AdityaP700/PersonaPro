import React from 'react'
import Card from './Card'

export default function CardContainer() {
  return (
    <div className='flex flex-wrap w-4/6 justify-around mx-auto gap-y-10 mb-56'>
        <Card title={"Tools"} desc={"Explore the widest variety of AI tools handpicked by category"}/>
        <Card title={"Events"} desc={"Explore AI events happening all across the globe"} />
        <Card title={"Productivity"} desc={"Productivity tools that make save you 10X more time"} />
        <Card/>
      
    </div>
  )
}
