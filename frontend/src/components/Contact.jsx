import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Contact() {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
           <div className="relative border-[2px] shadow-md p-5 rounded-md">
            <div className="w-[300px] md:w-[600px]">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
       </Link>

    <h3 className="font-bold text-lg">
        Contact us!
        </h3>
                 <div className='mt-3 space-y-2'>
                        <span>Name</span>
                        <br/>
                        <input type='text'
                        placeholder='Enter your Full Name'
                        className="w-80 px-3 py-1 border rounded outline-none
                        bg-white dark:bg-slate-800
                        text-black dark:text-white
                        border-gray-300 dark:border-slate-600
                      placeholder-gray-400 dark:placeholder-gray-400"
                        {...register("name", { required: true })}
                        />
                        <br/>
                        {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
                    </div>

                    <div className='mt-3 space-y-2'>
                        <span>Email</span>
                        <br/>
                        <input type='email'
                        placeholder='Enter your email'
                        className='w-80 px-3 py-1 border rounded outline-none
                        bg-white dark:bg-slate-800
                          text-black dark:text-white
                          border-gray-300 dark:border-slate-600
                          placeholder-gray-400 dark:placeholder-gray-400'
                        {...register("email", { required: true })}
                        />
                        <br/>
                        {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
                    </div>

                 <div className='mt-3 space-y-2'>
                        <span>Message</span>
                        <br/>
                        <input type='text-area'
                        placeholder='Enter your Message'
                        className='w-80 px-3 py-1 border rounded outline-none
                        bg-white dark:bg-slate-800
                          text-black dark:text-white
                         border-gray-300 dark:border-slate-600
                         placeholder-gray-400 dark:placeholder-gray-400'
                        {...register("message", { required: true })}
                        />
                        <br/>
                        {errors.message && <span className='text-sm text-red-600'>This field is required</span>}
                    </div>
    <div className='flex mt-3 justify-around '>
         <button  className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700'>Submit</button> 
    </div>
   </form>
  </div>
    </div>
    </div>
    </>
  )
}

export default Contact
