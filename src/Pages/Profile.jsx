import { useState } from "react";
import { useForm } from "react-hook-form";

const Profile = () => {
  const [tags, setTags] = useState([]);
  const {register,handleSubmit,formState:{errors},reset} = useForm();
  const handleTags = (e) => {
    if (e.key !== "Enter" || !e.target.value.trim()) return;
    const value = e.target.value.trim();
    if (tags.includes(value)) return;
    setTags([...tags, value]);
    e.target.value = "";
  };
  
  const onSubmit=(data)=>{
    console.log(data)
  }
  const removeTag = (index) => {
    setTags(tags.filter((tag, idx) => idx !== index));
  };
  return (
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
            transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl
                flex flex-col items-center
            "
      >
        <img
          src=" codeCollab.jpeg"
          width={"100px"}
          className=" rounded-full mt-10"
        />
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-4 w-[300px]">
          <p className=" flex flex-col text-secondary">
            Username :
            <input
              type="text"
              placeholder="username..."
              className=" bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
            />
          </p>
          <p className=" flex flex-col text-secondary">
            Email :
            <input
              type="email"
              placeholder="email..."
              className=" bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
            />
          </p>
          <p className=" flex flex-col text-secondary">
            Password :
            <input
              type=" password"
              placeholder="password..."
              className=" bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
            />
          </p>
          <p className="flex flex-col text-secondary">
            Expertise:
            <div className="w-full min-h-10 rounded-md bg-secondary">
              {tags.map((tag, idx) => (
                <div key={idx} className="inline-block bg-gray-700 text-secondary rounded-md py-1 px-2 m-1">
                  {tag}
                  <button type="button" onClick={() => removeTag(idx)} className="ml-1 text-red-500 focus:outline-none">×</button>
                </div>
              ))}
              <input type="text" onKeyDown={handleTags} className="outline-none rounded-md bg-secondary px-2 py-1 text-black placeholder:text-gray-700" placeholder="Add tag..." />
            </div>
          </p>
          <div>
            <button>Edit</button>
            <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
