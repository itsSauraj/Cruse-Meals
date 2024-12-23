const loading = () => {
  return (
    <div className="w-full h-svh flex justify-center items-center">
      <div className="relative flex items-center justify-center h-[80px] w-[80px] rounded-full">
      <div className="h-[85%] w-[85%] rounded-full bg-background z-[30]"></div>
      <div className="absolute top-0 left-0 w-[100%] h-[100%] 
          bg-gradient-to-r from-black to-gray-400 rounded-full
          animate-spin
      "></div>
    </div>
    </div>
  )
}

export default loading