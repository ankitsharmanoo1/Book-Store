import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

const Signup = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || "/";
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = async (data) =>{
    const userInfo={
      name: data.name,
      email: data.email,
      password: data.password,
    };
   await axios
   .post("/user/signup", userInfo)
    .then((res)=>{
      console.log(res.data);
      if (res.data){      
        toast.success("Signup Sucessfully");
        navigate(from,{replace:true})
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }).catch((err)=>{
       if(err.response)
       {
        console.log(err);
        toast.error("Error:"+ err.response.data.message);
        
       }
    });
   };
   

  return (
    <div className='flex h-screen items-center justify-center border-[2px] shadow-md'>
      <div id="my_modal_3" className="border-[2px] shadow-md p-6 rounded-md w-[600px]">
  <div className="model-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg flex align-center justify-center text-yellow-200">SignUp</h3>
    <div className="mt-4  space-y-2">
        <span>Name</span>
        <br/>
        <input type="name" placeholder="Enter Your Name" className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })} 
        />
              <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
       </div>
       
       <div className="mt-4  space-y-2">
        <span>Email</span>
        <br/>
        <input type="email" placeholder="Enter Your Email" className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
        />
        <br/>
        {errors.email && (
           <span className='text-sm text-red-500'>
                This Field is Required
           </span>
        )}
       </div>
       {/* {password} */}
       <div className="mt-4  space-y-2">
        <span>Password</span>
        <br/>
        <input type="text" placeholder="Enter Password" className="w-80 px-3 py-1 border rounded-md outline-none"
          {...register("password",{ required: true})}
        />
         <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
       </div>
       {/* buttton */}

       <div className="flex justify-around mt-4">
          <button className="bg-yellow-500 text-white rounded-md px-3 py-1 hover:bg-yellow-700 duration-200 ">SignUp</button>
          <p className='text-xl'>Have Account ?{" "} <button className="underline text-blue-500 cursor-pointer " 
           onClick={()=>document.getElementById("my_modal_3").showModal()}
          >
             Login
          </button>{" "}
          <Login />
        </p>
      </div>
    </form>
  </div>
 </div>
</div>
  )
}

export default Signup