import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from '../Utils/axiosConfig'
import {setLoading,setUser} from '../redux/slice/userSlice'
const Profile = () => {
  const user = useSelector((state) => state.user.loggedInUser);
  const prevtag = user.tags;
  const token = useSelector((state)=> state.auth.token)
  const fileRef = useRef(null)
  const [imgFileUrl,setImgFileUrl] = useState(null)
  const [tags, setTags] = useState([]);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
  } = useForm();
  const handleTags = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      if (!e.target.value.trim()) return;
      const value = e.target.value.trim();
      if (tags.includes(value)) return;
      setTags([...tags, value]);
      e.target.value = "";
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((tag, idx) => idx !== index));
  };

  const handleImageUpload = (e)=>{
    const file = e.target.files[0];
    if(file){
      setImgFileUrl(URL.createObjectURL(file));
    }
  }

  
  const onSubmit =async (data) => {
    setEdit(!edit)
    if(!data.username){
      data.username = user.username
    }
    if(!data.email){
      data.email = user.email;
    }
    if(!data.password){
      data.password = null
    }
    data.tags = tags;
    try {
      dispatch(setLoading(true))
      const res = await axiosInstance.post('profile/update_profile', data,{
        headers : {
          Authorization: `Bearer ${token}`
        }
    });
      dispatch(setLoading(false));
      if(res.status === 200){
        console.log(res.data)
        dispatch(setUser(res.data.user))
      }
    } catch (error) {
      console.log("Frontend error while updating user",error)
    }
  };


  useEffect(()=>{
    if(prevtag){
      setTags(prevtag)
    }
  },[prevtag])

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
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileRef}
          hidden
        />
        <img
          src={imgFileUrl ||user.profilePicture}
          className=" rounded-full mt-10 object-cover w-[100px] h-[100px]"
          onClick={()=> fileRef.current.click()}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-4 w-[300px]"
        >
          <label className="flex flex-col text-secondary font-semibold">
            Username
            <input
              type="text"
              placeholder="username..."
              defaultValue={user.username}
              disabled={!edit}
              className="m bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
              {...register("username")}
            />
          </label>
          <label className="flex flex-col font-semibold text-secondary">
            Email
            <input
              type="email"
              defaultValue={user.email}
              disabled={!edit}
              className=" bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
              {...register("email")}
            />
          </label>
          <label className="flex flex-col text-secondary">
            Password
            <input
              type="password"
              placeholder="password..."
              disabled={!edit}
              className="bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
              {
                ...register("password")
              }
            />
          </label>

          <label className="flex flex-col text-secondary">
            Expertise
            <div className="w-full min-h-10 rounded-md bg-secondary">
              {tags?.map((tag, idx) => (
                <div
                  key={idx}
                  className="inline-block bg-gray-700 text-secondary rounded-md py-1 px-2 m-1"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(idx)}
                    className="ml-1 text-red-500 focus:outline-none"
                  >
                    ×
                  </button>
                </div>
              ))}
              <input
                type="text"
                onKeyDown={handleTags}
                disabled={!edit}
                className="outline-none rounded-md bg-secondary px-2 py-1 text-black placeholder:text-gray-700"
                placeholder="Add tag..."
              />
            </div>
          </label>
          {

            !edit && <button className=" bg-green-500 rounded-md py-1 font-bold" type="button" onClick={() => setEdit(!edit)}>Edit</button>
          }
          {

            edit && <button className=" bg-green-500 rounded-md py-1 font-bold" type="submit">Save</button>
          }
        </form>
      </div>
    </div>
  );
};

export default Profile;
