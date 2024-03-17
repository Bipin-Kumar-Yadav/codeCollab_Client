import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../Utils/axiosConfig'
import { useDispatch, useSelector } from 'react-redux';
import { login, setLoading } from '../redux/slice/authSlice';
import { setUser } from '../redux/slice/userSlice';
const Login = () => {
  const navigate =useNavigate();
  const loading = useSelector((state)=>state.auth.loading);
  const dispatch = useDispatch();
  const {register,handleSubmit,reset,formState:{errors}} = useForm();
  const submitForm= async(data)=>{
    try {
      dispatch(setLoading(true))
      const res = await axiosInstance.post('auth/login',data);
      dispatch(setLoading(false));
      reset();
      if(res.status===200){
        dispatch(setUser(res.data.user))
        dispatch(login(res.data.token));
        navigate('/')
        console.log(res.data);
      }
    } catch (error) {
      dispatch(setLoading(false))
      console.log("frontend error while loging",error)
    }
  }
  return (
    <div>
      <div className=" h-screen overflow-hidden w-full  bg-gray-900  relative">
       <img src="/blob bottom right.svg"  className="absolute w-[36rem] -bottom-[22%] -right-[30%] lg:-bottom-[22%] lg:-right-[9%]"/>
       <img src="/blob bottom left.svg"  className=" absolute w-[36rem] -bottom-[10%] -left-[35%]  lg:-bottom-[22%] lg:-left-[12%]"/>
       <img src="/blob top right.svg"  className=" absolute w-[35rem]  -top-[10%] -right-[27%] lg:-top-[12%] lg:-right-[10%]"/>
       <img src="/blob top left.svg"  className=" absolute w-[35rem] -top-[4%] -left-[30%] lg:-top-[10%] lg:-left-[8%]"/>
       <div className=" w-[80%] h-[90%] rounded-md shadow-2xl  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl"> 
        <form onSubmit={handleSubmit(submitForm)} className='flex  justify-center items-center mx-auto w-full h-full md:w-[60%]  rounded-md '>
            <div className='flex flex-col items-center  gap-4 w-[90%] md:w-[70%]'>
            <img
                src=" codeCollab.jpeg" width={"100px"}
                className=" rounded-md "
            />
              <input
                type = "text"
                placeholder='email...'
                className=' w-full bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none'
                {
                  ...register('email',{
                    required:true
                  })
                }
              />
              <input
                type='password'
                placeholder='password...'
                className='w-full bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none'
                {
                  ...register('password',{
                    required:true,
                  })
                }
              />
                {(
                errors.email ||
                errors.password 
                ) && (
                <span className="block bg-red-100 text-red-600 border border-red-400 px-4 py-2 rounded mt-2">
                   Email and Password all are
                  required
                </span>
              )}
              <button type='submit' className='w-full bg-orange-500 rounded-md py-2 text-black font-semibold'>
                {
                  loading ? "Loading.." : "Login"
                }
              </button>
              <p className=' text-secondary font-semibold'>{`Don't`} have an account? <span className=' font-semibold text-orange-400 hover:cursor-pointer' onClick={()=> navigate('/register')}>Register</span> </p>
            </div>
        </form>
          
       </div>
    </div>
    </div>
  )
}

export default Login
