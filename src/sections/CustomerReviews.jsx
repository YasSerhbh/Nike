import ReviewCard from '../Components/ReviewCard'
import {reviews} from '../constants'


const CustomerReviews = () => {
  return (
    <section>
        <h3 className="font-palanquin font-bold text-4xl text-center">
            What Our
            <span className="text-coral-red font-montserrat"> Customers </span>
            Say ?
        </h3>
        <p className="m-auto mt-4 info-text text-center max-w-lg">
        Customers rave about Nike&apos;s super quality shoes, praising their unmatched comfort,

        durability, and performance.
        </p>

        <div className="flex flex-1 items-center justify-evenly mt-24 gap-14 max-lg:flex-col">
            {
                reviews.map((review) => (
                    <ReviewCard key={review.customerName} {...review} />
                ))
            }
        </div>
    </section>
  )
}

export default CustomerReviews