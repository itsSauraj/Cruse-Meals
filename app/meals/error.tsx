"use client";

const error = ({ error }) => {

  return (
    <div className="text-center p-20">
      <h1 className="text-transparent bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-6xl font-bold">
        An Error occured
      </h1>
      <p className="text-white">{error.message}</p>
    </div>
  )
}

export default error