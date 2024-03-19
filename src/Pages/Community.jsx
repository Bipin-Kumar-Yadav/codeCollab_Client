import { useEffect, useState } from "react"
import axiosInstance from  "../Utils/axiosConfig"
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Community = () => {
    const [community,setCommunity] = useState([]);
    const navigate = useNavigate();
    const [myCommunities, setMyCommunities] = useState([]);
    const token = useSelector((state)=>state.auth.token)
    const user = useSelector((state) => state.user.loggedInUser)
    const {register,handleSubmit,formState:{errors},reset} = useForm();
    const allCommunity = async()=>{
        try {
            const res = await axiosInstance.get('community/getAllCommunity');
            setCommunity(res.data.communities)
        } catch (error) {
            console.log("Frontend Error while fetching all comunity",error);
        }
    }
    useEffect(()=>{
        allCommunity();
    },[])

    const handleJoin = async (communityId) =>{
      try {
          const res = await axiosInstance.get( `community/join/${communityId}`,{
              headers:{
                  Authorization: `Bearer ${token}`
              }
          })
          userCommunities();
      } catch (error) {
         console.log("Frontend Error while Joining Community",error)
      }
    }

    const handleForm= async(data)=>{
        try {
            const res = axiosInstance.post('community/create',data,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            });
            reset();
            
                userCommunities();
                allCommunity()
                   
        } catch (error) {
            console.log("Frontend Error while creating community",error)
        }
    }

    const userCommunities = async() =>{
        try {
            const res = await axiosInstance.get('community/myCommunity',{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            });
            setMyCommunities(res.data.communities)
        } catch (error) {
            console.log("Frontend Error while fetching my comunity",error);
        }
    }
    useEffect(()=>{
        userCommunities();
    },[])

    const handleDelete = async(communityId)=>{
        try {
            const res = await axiosInstance.get( `community/delete/${communityId}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            allCommunity()
            userCommunities()
        } catch (error) {
           console.log("Frontend Error while deleting Community",error)
        }
    }
  return (
    <div className="flex flex-col  items-center mt-3">
        <form onSubmit={handleSubmit(handleForm)} className=" shadow-2xl w-[300px] md:w-[450px] flex flex-col gap-4">
            <label
            className=" flex flex-col text-secondary font-semibold"
            >
                Name     
                <input
                    type="text"
                    placeholder="community name"
                    className=" outline-none rounded-md px-2 py-2 bg-secondary text-black font-semibold max-w-[450px]"
                    {
                        ...register('name',{
                            required:true
                        })
                    }
                />
            </label>
            <label className=" flex flex-col text-secondary font-semibold">
                Description
                <input
                    type="text"
                    placeholder="community description"
                    className=" outline-none rounded-md px-2 py-2 bg-secondary text-black font-semibold max-w-[450px]"
                    {
                        ...register('description',{
                            required:true
                        })
                    }
                />
            </label>
            {
                (errors.name || errors.description) && <span className=" text-orange-500">Both are required Field</span>
            }
            <button type="submit" className=" bg-green-500 py-2 rounded-md font-semibold">Create Community</button>
        </form>
        <div className="flex flex-col gap-2 md:flex-row md:gap-10 ">
       {/* all comunity  */}
       <div className=" rounded-md border-2 px-4 py-2 mt-3">
            <p className=" text-xl text-orange-500 font-semibold">All Commuinties</p>
            {
                community?.map((el)=>(
                    <div key={el._id} className="hover:cursor-pointer flex justify-between  items-center gap-2 border-b-[1px] border-b-orange-200  pb-2">
                        <div>
                        <p className=" text-xl text-secondary font-semibold">{el.name}</p>
                        <p className=" text-base text-gray-300">{el.description}</p>
                        </div>
                        <div className=" flex flex-col gap-1">
                    {
                        user._id !== el.creator && <button className=" bg-green-500 px-2  rounded-md  font-semibold" onClick={()=>{
                            handleJoin(el._id)
                        }}>Join</button>
                    }
                        {
                            user._id ===  el.creator && <button className="bg-orange-500 px-2 rounded-md font-semibold"
                             onClick={()=>{handleDelete(el._id)}}
                            >Delete</button>
                        }
                        </div>
                    </div>
                ))
            }
       </div>

       {/* my community  */}
       <div className=" rounded-md border-2 px-4 py-2 mt-3">
            <p className=" text-xl text-orange-500 font-semibold">My Commuinties</p>
            {
                myCommunities?.map((el)=>(
                    <div key={el._id}
                     onClick={()=>{
                        navigate(`/community/${el._id}`)
                     }}
                     className=" hover:cursor-pointer flex justify-between  items-center gap-2 border-b-[1px] border-b-orange-200  pb-2">
                        <div>
                        <p className=" text-xl text-secondary font-semibold">{el.name}</p>
                        <p className=" text-base text-gray-300">{el.description}</p>
                        </div>
                        <div className=" flex flex-col gap-1">
                    {
                        user._id !== el.creator && <button className=" bg-green-500 px-2  rounded-md  font-semibold" onClick={()=>{
                            handleJoin(el._id)
                        }}>Join</button>
                    }
                        {
                            user._id ===  el.creator && <button className="bg-orange-500 px-2 rounded-md font-semibold"
                            onClick={()=>{handleDelete(el._id)}}
                            >Delete</button>
                        }
                        </div>
                    </div>
                ))
            }
       </div>

    </div>
    </div>
  )
}

export default Community
