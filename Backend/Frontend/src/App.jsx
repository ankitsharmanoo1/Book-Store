import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Courses from "./Courses/Courses"
import Signup from "./Components/Signup"
import {Toaster} from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [authUser,setAuthUser] = useAuth();
  
  return (
    <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
             <Route path="/" element={<Home />}/>
             <Route path="/course" element={authUser ? <Courses /> : <Navigate to='/signup' /> }/>
             <Route path="/signup" element={<Signup />}/>

        </Routes>
        <Toaster/>
    </div>
  )
}

export default App