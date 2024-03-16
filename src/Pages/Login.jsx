import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate =useNavigate();
  const {register,handleSubmit,reset,formState:{errors}} = useForm()
  return (
    <div>
      <div className=" h-screen overflow-hidden w-full  bg-gray-900  relative">
       <img src="/blob bottom right.svg"  className="absolute w-[36rem] -bottom-[22%] -right-[30%] lg:-bottom-[22%] lg:-right-[9%]"/>
       <img src="/blob bottom left.svg"  className=" absolute w-[36rem] -bottom-[10%] -left-[35%]  lg:-bottom-[22%] lg:-left-[12%]"/>
       <img src="/blob top right.svg"  className=" absolute w-[35rem]  -top-[10%] -right-[27%] lg:-top-[12%] lg:-right-[10%]"/>
       <img src="/blob top left.svg"  className=" absolute w-[35rem] -top-[4%] -left-[30%] lg:-top-[10%] lg:-left-[8%]"/>
       <div className=" w-[80%] h-[90%] rounded-md shadow-2xl  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl"> 
        <form className='flex  justify-center items-center mx-auto w-full h-full md:w-[60%]  rounded-md '>
            <div className='flex flex-col items-center  gap-4 w-[90%] md:w-[70%]'>
            <img
                src=" codeCollab.jpeg" width={"100px"}
                className=" rounded-md "
            />
              <input
                type = "text"
                placeholder='email...'
                className=' w-full bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none'
              />
              <input
                type='password'
                placeholder='password...'
                className='w-full bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none'
              />
              <button type='submit' className='w-full bg-orange-500 rounded-md py-2 text-black font-semibold'>Login</button>
              <p className=' text-secondary font-semibold'>{`Don't`} have an account? <span className=' font-semibold text-orange-400 hover:cursor-pointer' onClick={()=> navigate('/register')}>Register</span> </p>
            </div>
        </form>
          
       </div>
    </div>
    </div>
  )
}

export default Login
