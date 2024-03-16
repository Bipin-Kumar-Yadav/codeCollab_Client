import { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const CodeEditor = () => {
  // React hooks to manage state
  const { roomId } = useParams();
  const [modal, setModal] = useState(false);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [screen, setScreen] = useState(false);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io(import.meta.env.VITE_BACKEND_URL);
    setSocket(socketInstance);
    // Event listener for successful connection
    socketInstance.emit("join", {
      roomId: roomId,
      userDetails: {
        username: "BIPIN kr yadav",
        profileImage: "abhi nhi hai",
      },
    });

    socketInstance.on("joined", (message, clients) => {
      console.log(message, clients);
      setConnectedUsers(clients);
      // Emit an event to request the current code when a new user joins
      socketInstance.emit("requestCurrentCode", roomId);
    });

    socketInstance.on(
      "userDisconnected",
      (message, clients, disconnectedUserDetails) => {
        console.log(message);
        setConnectedUsers(clients);
        // Handle the disconnected user details as needed
        console.log("Disconnected user details:", disconnectedUserDetails);
      }
    );
    
    socketInstance.on('codeChange',(newCode)=>{
      setCode(newCode)
    })

    // Listen for the current code and update the state
    socketInstance.on("currentCode", (currentCode) => {
      setCode(currentCode);
    });

    // Clean up the socket connection on component unmount
    return () => {
      socketInstance.disconnect();
    };
  }, []);
  // Function to handle code execution
  const handleRun = async () => {

    const d =eval(code);
    console.log(d);
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    if (socket) {
      socket.emit("codeChange", newCode);
    }
  };

  return (
    <div className="flex w-full ">
      {/* Sidebar */}
      <div className="  h-[calc(100vh_-_80px)] ">
        <div className="  flex justify-end">{ modal ? (<ImCross className=" text-secondary text-[20px] mt-2 mx-2" onClick={()=> setModal(!modal)}/>) : (<GiHamburgerMenu className=" text-secondary text-[25px] mx-2
        " onClick={()=> setModal(!modal)}/>)}</div>
        {
          modal && <div className="flex flex-col justify-between h-full">
          <div>
            {/* connected user */}
            <div>
              <p className="text-xl font-semibold text-secondary text-center mt-2 mx-2">
                Connected Users
                {connectedUsers?.map((ele) => (
                  <p key={ele?.socketId}>{ele?.userDetails?.username}</p>
                ))}
              </p>
            </div>
          </div>
          {/* Buttons for room management */}
          <div className="flex flex-col gap-4 pb-2 mx-3">
            <button className="bg-green-500 rounded-md px-2 py-2 text-secondary font-semibold">
              Copy Room Id
            </button>
            <button
              className="bg-orange-700 rounded-md px-2 py-2 text-secondary font-semibold"
              onClick={() => {
                setModal(!modal);
              }}
            >
              Leave Room
            </button>
          </div>
        </div>
        }
      </div>
          
      {/* Main content area */}
      <div className="flex-1 h-screen overflow-y-scroll overflow-x-hidden">
        {/* Top bar with buttons */}
        <div className="bg-primary flex justify-start gap-8 h-[30px]">
          {!screen && (
            <button
              className="text-secondary font-bold pl-2"
              onClick={() => {
                handleRun();
                setScreen(!screen);
              }}
            >
              Run Code
            </button>
          )}
          <button
            className="text-secondary pl-2 font-bold"
            onClick={() => setScreen(!screen)}
          >
            {!screen ? "Output" : "Editor"}
          </button>
        </div>
        {/* Editor or output display based on screen state */}
        {!screen ? (
          <AceEditor
            mode='javascript'
            theme="twilight"
            onChange={handleCodeChange}
            name="my-ace-editor"
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="calc(100% - 90px)"
            fontSize="20px"
            value={code}
          />
        ) : (
          <div className="bg-gray-950 h-screen">
            <p className="text-secondary text-base font-semibold pl-2">
              Output:
            </p>
            <p className="pl-2 text-secondary text-base">{output}</p>
          </div>
        )}
      </div> 

    </div>
  );
};

export default CodeEditor;
