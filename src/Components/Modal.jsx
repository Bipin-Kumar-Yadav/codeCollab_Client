const Modal = ({ modalType, setModal }) => {
  console.log(modalType + " " + setModal);
  return (
    <div className="h-screen overflow-hidden w-full bg-modal backdrop:blur-3xl fixed ">
      {modalType === "join" ? (
        <div
          className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          rounded-md flex flex-col  w-[250px] h-[250px] md:w-[400px] md:h-[300px]
         items-center justify-center gap-14 bg-primary"
        >
          <div className=" flex flex-col w-[100%] justify-center items-center gap-5">
            <input
              type="text"
              placeholder="Enter room id"
              className=" w-[90%] bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
            />
            <input
              type="text"
              placeholder="enter username"
              className=" w-[90%] bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
            />
          </div>
          <div className="flex  gap-20">
            <button className=" bg-green-600 rounded-md py-2 px-2 text-black font-semibold">
              Join Room
            </button>
            <button
              className=" bg-orange-400 rounded-md px-2 py-2 text-black font-semibold"
              onClick={() => setModal(false)}
            >
              Cancle
            </button>
          </div>
        </div>
      ) : (
        <div
          className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          rounded-md flex flex-col  w-[250px] h-[250px] md:w-[400px] md:h-[300px]
         items-center justify-center gap-14 bg-primary"
        >
          <div className=" flex flex-col w-[100%] justify-center items-center gap-5">
            <input
              type="text"
              placeholder="Enter room id"
              className=" w-[90%] bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
            />
            <input
              type="text"
              placeholder="enter username"
              className=" w-[90%] bg-secondary rounded-md px-2 py-2 placeholder:text-slate-800 placeholder:font-semibold text-black font-semibold outline-none"
            />
          </div>
          <div className="flex  gap-20">
            <button className=" bg-green-600 rounded-md py-2 px-2 text-black text-sm md:text-base font-semibold">
              Create Room
            </button>
            <button
              className=" bg-orange-400 rounded-md px-2 py-2 text-black font-semibold text-sm md:text-base"
              onClick={() => setModal(false)}
            >
              Cancle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
