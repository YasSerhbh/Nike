import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, feedback, rating}) => {
  return (
    <div className="flex items-center justify-center flex-col mt-5">
        <img 
            src={imgURL}
            alt="Customer"
            className="w-[120px] h-[120px] object-contain rounded-full"
        />
        <h4 className="font-palanquin font-bold text-2xl mt-6">{customerName}</h4>
        <p className="info-text text-center max-w-md mt-2">{feedback}</p>
        <div className="flex items-center justify-center mt-4">
            <img src={star} alt="star" className="w-6 h-6" />
            <span className="font-palanquin font-bold text-lg ml-2">{rating}</span>
        </div>
    </div>
  )
}

export default ReviewCard