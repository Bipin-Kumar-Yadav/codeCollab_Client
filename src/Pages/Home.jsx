import { useState } from "react"
import Modal from "../Components/Modal"


const Home = () => {
  const [joinModal,setJoinModal] = useState(false)
  const [createModal,setCreateModal] = useState(false)
  return (
    <div className=" h-screen overflow-hidden w-full  bg-gray-900  relative">
       <img src="/blob bottom right.svg"  className="absolute w-[36rem] -bottom-[22%] -right-[30%] lg:-bottom-[22%] lg:-right-[9%]"/>
       <img src="/blob bottom left.svg"  className=" absolute w-[36rem] -bottom-[10%] -left-[35%]  lg:-bottom-[22%] lg:-left-[12%]"/>
       <img src="/blob top right.svg"  className=" absolute w-[35rem]  -top-[10%] -right-[27%] lg:-top-[12%] lg:-right-[10%]"/>
       <img src="/blob top left.svg"  className=" absolute w-[35rem] -top-[4%] -left-[30%] lg:-top-[10%] lg:-left-[8%]"/>
       <div className=" w-[95%] h-[90%] rounded-md shadow-2xl bg-green-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> 
         <button className=" py-2 bg-orange-400 rounded-md px-2"
            onClick={()=> setCreateModal(!joinModal)}
         >Create a Room</button>
         <button className="py-2 bg-orange-400 rounded-md px-2"
           onClick={()=> setJoinModal(!createModal)}
         >Join a Room</button>
       </div>
       {
        joinModal && <Modal modalType={"join"} setModal={setJoinModal}/>
       }
       {
        createModal && <Modal modalType={'create'} setModal={setCreateModal}/>
       }
    </div>
  )
}

export default Home
