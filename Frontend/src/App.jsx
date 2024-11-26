import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Courses from "./Courses/Courses"
import Signup from "./Components/Signup"


const App = () => {
  return (
    <div>
        <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Course" element={<Courses/>}/>
             <Route path="/Signup" element={<Signup/>}/>

        </Routes>
    </div>
  )
}

export default App