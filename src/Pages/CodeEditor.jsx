
const CodeEditor = () => {
  return (
    <div className=" h-screen overflow-hidden w-full  bg-gray-900  relative">
    <img src="/blob bottom right.svg"  className="absolute w-[36rem] -bottom-[22%] -right-[30%] lg:-bottom-[22%] lg:-right-[9%]"/>
    <img src="/blob bottom left.svg"  className=" absolute w-[36rem] -bottom-[10%] -left-[35%]  lg:-bottom-[22%] lg:-left-[12%]"/>
    <img src="/blob top right.svg"  className=" absolute w-[35rem]  -top-[10%] -right-[27%] lg:-top-[12%] lg:-right-[10%]"/>
    <img src="/blob top left.svg"  className=" absolute w-[35rem] -top-[4%] -left-[30%] lg:-top-[10%] lg:-left-[8%]"/>
    </div>
  )
}

export default CodeEditor
