import React from 'react'
import Card from './Card'
import CodeDoodle from "../assets/coding-notion-illustration.svg"
import EventsDoodle from "../assets/events-notion-illustration.svg"
import ToolsDoodle from "../assets/tools-notion-illustration.svg"
import RocketDoodle from "../assets/rocket-notion-illustration.svg"

export default function CardContainer() {
  return (
    <div className='flex flex-wrap w-4/6 justify-around mx-auto gap-y-10 mb-56'>
        <Card title={"Tools"} desc={"Explore the widest variety of AI tools, sorted by category - from making presentations to composing beautiful stories"} src={ToolsDoodle} link={"/"}/>
        <Card title={"Events"} desc={"Explore AI events, talks, workshops and more happening all across the globe"} src={EventsDoodle} link={"/events"}/>
        <Card title={"Productivity"} desc={"Productivity tools that make you 10X faster, saving you more time"} src={RocketDoodle} link={"/"} />
        <Card title={"Code"} desc={"Code better, faster and cleaner with bleeding-edge AI tools and copilots. From designing websites to inverting binary trees - you can do it all."} src={CodeDoodle} link={"/"} />
      
    </div>
  )
}
