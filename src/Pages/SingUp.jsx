
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux'
import {setLoading} from '../redux/slice/authSlice'
import axiosInstace from '../Utils/axiosConfig'
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const loading = useSelector((state)=>state.auth.loading);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      dispatch(setLoading(true));
      console.log("yaha tak aaya")
      const res = await axiosInstace.post('auth/register',{data});
      dispatch(setLoading(false));
      reset();
      console.log(res);
      if(res.status === 201){
        console.log("yaha tak aaya");
        // here i am sending a verification link which verify the email then how to switch to login when user verify email then verified field get true
      }
    } catch (error) {
       dispatch(setLoading(false))
      reset();
    }
  };
  return (
    <div>
      <div className=" h-screen overflow-hidden w-full  bg-gray-900  relative">
        <img
          src="/blob bottom right.svg"
          className="absolute w-[36rem] -bottom-[22%] -right-[30%] lg:-bottom-[22%] lg:-right-[9%]"
        />
        <img
          src="/blob bottom left.svg"
          className=" absolute w-[36rem] -bottom-[10%] -left-[35%]  lg:-bottom-[22%] lg:-left-[12%]"
        />
        <img
          src="/blob top right.svg"
          className=" absolute w-[35rem]  -top-[10%] -right-[27%] lg:-top-[12%] lg:-right-[10%]"
        />
        <img
          src="/blob top left.svg"
          className=" absolute w-[35rem] -top-[4%] -left-[30%] lg:-top-[10%] lg:-left-[8%]"
        />
        <div
          className=" w-[80%] h-[90%] rounded-md shadow-2xl  absolute top-1/2 left-1/2 
         transform -translate-x-1/2 -translate-y-1/2  backdrop-blur-xl"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex  bg-transparent  justify-center items-center md:w-[60%] mx-auto  h-full"
          >
            <div className="flex flex-col items-center gap-4 w-[90%] md:w-[70%]">
              <img
                src="codeCollab.jpeg"
                width={"100px"}
                className=" rounded-md"
              />
              <input
                type="text"
                placeholder="username..."
                className="w-full bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
                {...register("username", {
                  required: true,
                })}
              />
              <input
                type="text"
                placeholder="email..."
                className="w-full bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
                {...register("email", {
                  required: true,
                })}
              />
              <input
                type="password"
                placeholder="password..."
                className=" w-full bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
                {...register("password", {
                  required: true,
                })}
              />
              <input
                type="password"
                placeholder="confirm password..."
                className=" w-full bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
                {...register("confirmPassword", {
                  required: true,
                })}
              />

              {(errors.username ||
                errors.email ||
                errors.password ||
                errors.confirmPassword) && (
                <span className="block bg-red-100 text-red-600 border border-red-400 px-4 py-2 rounded mt-2">
                  Username, Email, Password, and Confirm Password all are
                  required
                </span>
              )}
              <button
                type="submit"
                className="w-full bg-orange-500 rounded-md py-2 text-black font-semibold"
              >
                { loading ? "Loading..." : "Register"}
              </button>
              <p className=" text-secondary font-semibold">
                Already have an account{" "}
                <span
                  className=" font-semibold text-orange-400 hover:cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
