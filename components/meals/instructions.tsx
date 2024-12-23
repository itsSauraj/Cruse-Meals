"use client"

interface InstructionsProps {
    instructions : string
}

const Instructions = ({ instructions } : InstructionsProps) => {
  return (
    <p className="w-full lg:w-[80%] bg-semiblack rounded-md p-5"
        dangerouslySetInnerHTML={{
            __html: instructions
        }}
    >
    </p>
  )
}

export default Instructions

