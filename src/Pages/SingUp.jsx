import { useState } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [tags,setTags] = useState([]);
  const {register,handleSubmit,reset,formState:{errors}} = useForm();
  const handleTags = (e) => {
    if (e.key !== "Enter") return;
    const value = e.target.value.trim();
    if (!value) return;
    if (tags.includes(value)) return; 
    setTags([...tags, value]);
    e.target.value = "";
  }

  const removeTag = (index) => {
    setTags(tags.filter((tag, idx) => idx !== index));
  }

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  }
    return (
      <div>
        <div className=" h-screen overflow-hidden w-full  bg-gray-900  relative">
         <img src="/blob bottom right.svg"  className="absolute w-[36rem] -bottom-[22%] -right-[30%] lg:-bottom-[22%] lg:-right-[9%]"/>
         <img src="/blob bottom left.svg"  className=" absolute w-[36rem] -bottom-[10%] -left-[35%]  lg:-bottom-[22%] lg:-left-[12%]"/>
         <img src="/blob top right.svg"  className=" absolute w-[35rem]  -top-[10%] -right-[27%] lg:-top-[12%] lg:-right-[10%]"/>
         <img src="/blob top left.svg"  className=" absolute w-[35rem] -top-[4%] -left-[30%] lg:-top-[10%] lg:-left-[8%]"/>
         <div className=" w-[80%] h-[90%] rounded-md shadow-2xl  absolute top-1/2 left-1/2 
         transform -translate-x-1/2 -translate-y-1/2  backdrop-blur-xl"> 
          <form onSubmit={handleSubmit(onSubmit)} className='flex  bg-transparent  justify-center items-center md:w-[60%] mx-auto  h-full'>
              <div className='flex flex-col items-center gap-4 w-[90%] md:w-[70%]'>
              <img src="codeCollab.jpeg" width={"100px"} className=" rounded-md"/>
                <input
                  type="text"
                  placeholder="username..."
                  className='w-full bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none'
                />
                <input
                  type = "text"
                  placeholder='email...'
                  className='w-full bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none'
                />
                <input
                  type='password'
                  placeholder='password...'
                  className=' w-full bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none'
                />
                <input
                  type='confirm_password'
                  placeholder='confirm password...'
                  className=' w-full bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none'
                />
                 <div className="w-full min-h-10 rounded-md bg-secondary">
                {tags.map((tag, idx) => (
                  <div key={idx} className="inline-block bg-gray-700 text-secondary rounded-md py-1 px-2 m-1">
                    {tag}
                    <button type="button" onClick={() => removeTag(idx)} className="ml-1 text-red-500 focus:outline-none">×</button>
                  </div>
                ))}
                <input type="text" onKeyDown={handleTags} className="outline-none rounded-md bg-secondary px-2 py-1 placeholder:text-gray-700" placeholder="Add tag..." />
              </div>
                <button type='submit' className='w-full bg-orange-500 rounded-md py-2 text-black font-semibold'>Register</button>
                <p className=' text-secondary font-semibold'>Already have an account <span className=' font-semibold text-orange-400 hover:cursor-pointer' onClick={()=> navigate('/login')}>Login</span> </p>
              </div>
          </form>
        
         </div>
      </div>
      </div>
    )
}

export default SignUp
