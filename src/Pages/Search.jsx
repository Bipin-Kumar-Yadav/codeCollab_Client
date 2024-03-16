import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
const Search = () => {
    const [query,setQuery] = useState(null)
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
      <div className=" w-[80%] h-[90%] rounded-md shadow-2xl  absolute top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl
                flex flex-col items-center 
            ">
            <div className="flex mt-4 h-fit items-center bg-secondary  rounded-md">
                <input
                    type="text"
                    placeholder="Enter your query..."
                    value={query}
                    className=" outline-none bg-secondary px-2 rounded-md py-2"
                />
                <BiSearchAlt className=" text-[25px] "/>
            </div>
            <div className=" max-w-md">
                <p className=" text-secondary text-start mt-3">Search Result</p>
                <div className=" flex gap-10 items-center mt-3">
                    <img  src="codeCollab.jpeg" width={'45px'} className=" rounded-md"/>
                    <p className=" text-secondary">Bipin Kumar Yadav</p>
                    <button className=" bg-green-500 px-2 py-1 rounded-md font-semibold">Chat</button>
                </div>
            </div>

      </div>
    </div>
  );
};

export default Search;
