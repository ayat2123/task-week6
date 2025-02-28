import { useState } from "react"
import { useForm } from "react-hook-form"
import{yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-toastify"
import { client } from "../lib/axios"
import logo1 from "../assets/logo1.png"
import { Link } from "react-router-dom"
export default function Signup(){
    const schema=yup.object({
        username:yup.string().required(),
        email:yup.string().email().required(),
        password:yup.string().required().min(8).max(16)

    })
    const [isshowpassword,setIsshowpassword]=useState(false)// هوک برای نمایش یا عدم نمایش رمز عبور استفاده شدهUSESTATE 
    const{register,handleSubmit,formState:{errors}}=useForm({//هوک برای مقداردهی و مدیریت ورودی های فرم استفاده شده استuseForm 
        resolver:yupResolver(schema),
        mode:"onBlur"
    }) 
    function toggleshowpassword(){
        setIsshowpassword(!isshowpassword)
    }
    async function submitForm(user){//خروجیش object
        try {
            
            console.log(user);
           const response=await client.post("/auth/local/register", user)
           localStorage.setItem('token',response.data.jwt)

           toast.success("user added successfull",{
            type:"success",
           })
        } catch (error) {
            toast.error("error",{
                type:"error"
            });
        }
    }
    return(
        
        <section className="w-100 flex flex-col items-center justify-center  py-6 bg-white shadow-[0px_19px_40px_0px_rgba(0,0,0,0.05)] mt-6! rounded-lg">
            <div className="w-full  flex justify-center items-center text-left ml-11">
            <h1 className="text-black text-5xl mt-35 ">signup</h1>
                <img src={logo1} className="w-[200px] h-[200px]  bg-white shadow-md"/>
            </div>

            <form onSubmit={handleSubmit(submitForm)} action="" className="mt-3 flex flex-col gap-y-6">

                <label className="input input-bordered flex items-center gap-2">
                <input {...register("username")} type="text" className="grow" placeholder="test1" />
                </label>
                {errors?.username?<span className="text-error"> {errors.username.message}</span>:null}
                
                <label className="input input-bordered flex items-center gap-2">
                <input {...register("email")} type="text" className="grow" placeholder="test1@gmail.com" />
                </label>
                {errors?.email?<span className="text-error"> {errors.email.message}</span>:null}

                <label className="input input-bordered flex items-center gap-2">
                <input {...register("password")} type={isshowpassword ? "text":"password"} className="grow w-[250px]" placeholder="password" />
                 <svg
                 onClick={toggleshowpassword}
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 16 16"
                 fill="currentColor"
                 className="h-4 w-4 opacity-70">
                 <path
                 fillRule="evenodd"
                 d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                 clipRule="evenodd" />
                 </svg>
                </label>
                { errors?.password?<span className="text-error"> {errors.password.message}</span>:null}

                <button className="w-[150px] h-[30px]  bg-[#f47458] rounded-2xl ml-17" >Signup</button>
                <span className="ml-10 " >Already have an account ?  <Link to="/Login" className="text-[#f47458] "> Login</Link></span>

            </form>
        </section>
    )
}