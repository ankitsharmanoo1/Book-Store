import toast from "react-hot-toast"
import { useAuth } from "../context/AuthProvider"

const Logout = () => {
  const [authUser, setAuthUser] = useAuth()
  const handleLogout = ()=>
  {
    try {
      setAuthUser({
        ...authUser,
        user:null
      });
      localStorage.removeItem("Users")
      toast.success("Logout Sucessfully");

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.error("error: "+error)
      setTimeout(() => {
        
      }, 2000);
    }
  }
  return (
    <div>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default Logout