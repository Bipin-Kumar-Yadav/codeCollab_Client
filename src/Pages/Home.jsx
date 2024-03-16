import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-[calc(100vh_-_50px)] overflow-hidden w-full  bg-gray-900  relative">
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
      <div className=" w-[80%] h-[90%] rounded-md shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex w-full h-full bg-transparent backdrop-blur-sm rounded-md">
          <div className="md:w-[60%] flex mx-auto flex-col justify-center gap-3">
            <h1 className=" text-2xl text-secondary font-bold text-center">
              Welcome to CodeCollab 
            </h1>
            <p className=" text-xl text-secondary font-bold text-center">Your Real-Time Code Collaboration Hub!</p>
            <p className=" text-xl text-secondary font-semibold text-center">Collaborate, and Connect with CodeCollab</p>
            <p className=" text-xl font-semibold text-secondary text-center">Get Started Today!</p>
            <p className=" text-base font-semibold text-secondary text-center">Sign up or log in to start collaborating with other developers in real-time, connect with peers. </p>
            <div className=" flex  mx-auto gap-10 ">
              <button className=" bg-green-500 rounded-md px-6 py-2 font-semibold "
                onClick={()=>{navigate('/login')}}
              >Login</button>
              <button className=" bg-orange-500 rounded-md px-6 py-2 font-semibold "
                onClick={()=>{navigate('/register')}}
              >SignUp</button>
            </div>
          </div>
          
        </div>
      </div>

      
    </div>
  );
};

export default Home;
