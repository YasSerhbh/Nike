import { star } from "../assets/icons"


const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name}
            className="w-[270px] h-[270px]"
        />
        <div className="gap-2.5 mt-8 flex justify-start">
            <img src={star} alt="rating" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">4.5</p>
        </div>
        <h3 className="font-semibold text-2xl mt-2 font-palanquin leading-normal">{name}</h3>
        <p className="mt-2 font-semibold text-coral-red font-montserrat text-2xl">{price}</p>
    </div>
  )
}

export default PopularProductCard