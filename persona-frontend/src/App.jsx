import { Route, Routes } from "react-router-dom"
import Events from "./pages/Events"
import Home from "./pages/Home"
import About from "./pages/About"
import Contribute from "./pages/Contribute"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/contribute" element={<Contribute/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  )
}