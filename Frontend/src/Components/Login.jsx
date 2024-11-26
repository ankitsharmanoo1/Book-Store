import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"


const Login = () => {

   const {
    register,
    handleSubmit,
    formState:{errors},
   } = useForm();

   const onSubmit = (data) =>console.log(data);
   



  return (
    <>
      <div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" 
        onClick={()=> document.getElementById("my_model_3").close()}
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg flex align-center justify-center text-yellow-200">Login</h3>
       <div className="mt-4  space-y-2">
        <span>Email</span>
        <br/>
        <input type="email" placeholder="Enter Your Email" className="w-80 px-3 py-1 border rounded-md outline-none" 
          {...register("email",{ required:true })}
        />
        {errors.email && (<span className="text-sm  text-red-500">This field is Required</span>)}
       </div>
       {/* {password} */}
       <div className="mt-4  space-y-2">
        <span>Password</span>
        <br/>
        <input type="text" placeholder="Enter Password" className="w-80 px-3 py-1 border rounded-md outline-none"
         {...register("password", {required: true})}
        />
        {errors.password && (<span className="text-sm text-red-500">This field is Required</span>)}

       </div>
       {/* buttton */}

       <div className="flex justify-around mt-4">
          <button className="bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-700 duration-200 ">Login</button>
          <p>Not registered ? <Link to="/Signup" className="underline text-blue-500 cursor-pointer ">
             Signup
          </Link> {" "}
          </p>
       </div>
   </form>
  </div>
</dialog>
      </div>
    </>
  )
}

export default Login