interface InputProps {
  ref?: React.RefObject<null>,
  title: string,
  placeholder?: string,
  id: string,
  type?: string,
  className?: string,
  name: string,
  accept?: string,
}


const Input: React.FC<InputProps> = ({ title, ref, type, placeholder, id, className, name, accept }) => {
  return (
    <div className="flex flex-col gap-1 flex-grow">
      <label htmlFor={id} className="font-bold text-white">{title}</label>
      <input
        ref={ref}
        id={id}
        name={name} 
        type={type}
        placeholder={placeholder}
        className={`
          border-[0.1px] border-white/30 focus:border-primary/30
          rounded-md
          transition-all duration-300
          outline-none
          bg-semiblack text-white py-2 px-4
          ${className}
          `}
        accept={accept}
      />
    </div>
  )
}

export default Input