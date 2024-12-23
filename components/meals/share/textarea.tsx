interface InputProps {
  title: string,
  placeholder?: string,
  id: string,
  className?: string,
  name: string,
  rows?: number,
}


const TextArea: React.FC<InputProps> = ({ title, placeholder, id, className, name, rows }) => {
  return (
    <div className="flex flex-col gap-1 flex-grow">
      <label htmlFor={id} className="font-bold text-white">{title}</label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={`
          border-[0.1px] border-white/30 focus:border-primary/30
          rounded-md
          transition-[border] duration-300
          outline-none
          bg-semiblack text-white py-2 px-4
          ${className}
          `}
        rows={rows}
      />
    </div>
  )
}

export default TextArea