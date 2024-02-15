
const ServicesCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className="flex bg-coral-red rounded-full justify-center items-center w-11 h-11">
            <img
                src={imgURL}
                alt={label}
                width={24}
                height={24}
            />
        </div>
        <h3 className="mt-5 font-palanquin leading-normal text-3xl font-bold">{label}</h3>
        <p className="font-montserrat leading-normal mt-3 break-words text-lg text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServicesCard