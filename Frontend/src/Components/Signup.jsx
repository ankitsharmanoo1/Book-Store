import { Link } from 'react-router-dom'
import Login from './Login'

const Signup = () => {
  return (
    <div className='flex h-screen items-center justify-center border-[2px] shadow-md'>
      <div id="my_modal_3" className="border-[2px] shadow-md p-6 rounded-md w-[600px]">
  <div className="model-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg flex align-center justify-center text-yellow-200">SignUp</h3>
    <div className="mt-4  space-y-2">
        <span>Name</span>
        <br/>
        <input type="name" placeholder="Enter Your Name" className="w-80 px-3 py-1 border rounded-md outline-none"/>
       </div>
       
       <div className="mt-4  space-y-2">
        <span>Email</span>
        <br/>
        <input type="email" placeholder="Enter Your Email" className="w-80 px-3 py-1 border rounded-md outline-none"/>
       </div>
       {/* {password} */}
       <div className="mt-4  space-y-2">
        <span>Password</span>
        <br/>
        <input type="text" placeholder="Enter Password" className="w-80 px-3 py-1 border rounded-md outline-none"/>
       </div>
       {/* buttton */}

       <div className="flex justify-around mt-4">
          <button className="bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-700 duration-200 ">SignUp</button>
          <p className='text-xl'>Have Account ?{" "} <a className="underline text-blue-500 cursor-pointer " 
           onClick={()=>document.getElementById("my_modal_3").showModal()}
          >
             Login
          </a>
          <Login/>
          </p>
       </div>

  </div>
</div>
    </div>
  )
}

export default Signup