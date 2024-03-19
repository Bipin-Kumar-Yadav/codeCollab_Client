import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useParams } from "react-router-dom";
import axiosInstance from "../Utils/axiosConfig";
import { BsSendFill } from "react-icons/bs";

const CommunityChat = () => {
  const [modal, setModal] = useState(false);
  const { communityId } = useParams();
  const [members, setMembers] = useState([]);
  const [message, setMessage] = useState([]);
  const [inputValue,setInputValue] = useState('')
  const getAllMember = async () => {
    try {
      const res = await axiosInstance.get(`community/members/${communityId}`);
      setMembers(res?.data?.users?.members);
    } catch (error) {
      console.log("Frontend Error while getting all memebers", error);
    }
  };
  const sendMessage = () =>{
    if(inputValue.trim() !== ''){
      setMessage([...message,inputValue])
       console.log(inputValue)
    }
    setInputValue('')
  }
  useEffect(() => {
    getAllMember();
  }, []);
  return (
    <div className=" flex">
      <div className={`${modal ? "w-[250px]" : "w-[30px]"} flex flex-col`}>
        {modal ? (
          <ImCross
            className=" text-secondary font-semibold text-[20 px]    w-full"
            onClick={() => {
              setModal(!modal);
            }}
          />
        ) : (
          <GiHamburgerMenu
            className=" text-secondary font-semibold text-[25px] "
            onClick={() => {
              setModal(!modal);
            }}
          />
        )}
        {modal && (
          <div className=" mt-2  h-[calc(100vh_-_50px)]">
            {members?.map((ele) => (
              <div
                key={ele._id}
                className=" md:mx-3 w-full flex flex-col md:flex-row items-center gap-2"
              >
                <img
                  src={ele.profilePicture}
                  className=" w-[40px] md:[45px] rounded-md object-cover"
                  alt="profile pic"
                />
                <p className=" text-secondary font-semibold  text-center">
                  Bipin Kumar Yadav
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        className={`flex flex-1 justify-center  h-[calc(100vh_-_60px)] bg-gray-900`}
      >
        <div className=" flex flex-col w-[250px] md:w-[600px] mt-2 rounded-md">
          <div className="flex-1 rounded-md bg-fuchsia-600 overflow-y-scroll">
            {message?.map((el, idx) => (
              <div key={idx}
                className={`${idx%2===0 ? " justify-start":" justify-end"} w-full flex`}
              ><p className="w-fit bg-secondary my-1 px-2 text-xl rounded-md font-semibold">{el}</p></div>
            ))}
          </div>
          <div className="my-2 flex items-center bg-secondary rounded-md">
            <input
              className=" w-full outline-none rounded-md px-2 py-1 bg-secondary text-black font-semibold"
              type="text"
              placeholder="type your message..."
              value={inputValue}
              onChange={(e)=>{
                  setInputValue(e.target.value)
              }}
              onKeyDown={(e)=> e.key === 'Enter' && sendMessage()}
            />
            <BsSendFill className=" mx-2  text-xl"  onClick={sendMessage}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityChat;
