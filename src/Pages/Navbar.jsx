
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
const Navbar = () => {
    const navigate = useNavigate();
    const [modal,setModal] = useState(false)
    const [roomId,setRoomId] = useState(null)
    const [roomModal,setRoomModal] = useState(false);
  return (
    <div className=" h-[50px] flex items-center max-w-[80%] mx-auto  justify-between">
      <img src=" codeCollab.jpeg" width={"45px"} className=" rounded-md" onClick={()=> navigate('/')}/>
      <div className=" flex gap-3">
        <div className=" flex gap-3 items-center">
        <button className=" bg-green-500 rounded-md px-4 text-secondary h-fit py-1 font-semibold " 
            onClick={()=>{
                setRoomModal(!roomModal)
            }}
        >Room</button>
        <button className=" text-secondary font-bold text-[30px]" onClick={()=>{ navigate("/search")}}><BiSearchAlt/></button>
        </div>
        <div className=" w-[45px] h-[45px] rounded-full bg-green-500"
          onClick={()=> setModal(!modal)}
        >

        </div>
        {
          modal && <div className=" z-30 absolute w-[150px] rounded-md flex flex-col h-fit  text-secondary border-2  top-[8%] right-[10%] py-2">
            <button onClick={()=> navigate("/profile")}>Profile</button>
            <button >LogOut</button>
          </div>
        }
      </div>
      {roomModal && <div className=" w-screen h-screen  bg-transparent backdrop-blur-xl fixed top-0 right-0 z-50 flex  justify-center items-center">
            <div className=" border-2 border-secondary h-[400px] w-[450px] rounded-md flex flex-col  items-center">
                <div className=" w-full flex justify-end"><ImCross className=" text-secondary text-[20px] mt-1 mr-1 hover:cursor-pointer" onClick={()=>{setRoomModal(!roomModal)}}/></div>
                <img src="codeCollab.jpeg"  className=" rounded-md h-[100px] mt-5"/>
                <p className=" font-semibold text-secondary  mt-3">
                Enter Invitation Room Id
              </p>
              <input
                type="text"
                placeholder="roomId..."
                value={roomId}
                onChange={(e)=> setRoomId(e.target.value)}
                className=" bg-secondary rounded-md px-2 py-2 
                    placeholder:text-slate-800 placeholder:font-semibold
                     text-black font-semibold outline-none
                        w-[70%] mt-3
                     "
              />
              <button  className=" bg-green-500 rounded-md py-2 text-black font-semibold w-[70%] mt-2">Join</button>
              <div className=" w-[70%] mt-3">
              <span className=" text-base font-semibold text-secondary">
                  {`Don't`} have invitation{" "}
                </span>
                <button className=" text-green-500 hover:cursor-pointer" 
                  onClick={()=>{
                    setRoomModal(!roomModal)
                    navigate(`/editor/232`)
                  }}
                >Create Room</button>
              </div>
            </div>
      </div>}
    </div>
  )
}

export default Navbar
