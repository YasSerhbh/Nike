
const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={
        `flex justify-center rounded-full items-center gap-2 py-4 px-7 border font-montserrat text-lg leading-none
        
        ${
            backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` 
            : 'bg-coral-red  text-white border-coral-red'
        }
        
        ${
            fullWidth && 'w-full'}
        `
         }>
        {label}

        {iconURL && <img 
            src={iconURL}
            className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button