import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center gap-10 max-container max-xl:flex-col-reverse">
        <div className="flex-1">
            <img
                src={offer}
                alt="Shoe 9"
                width={773}
                height={687}
                className="object-contain w-full"
            />
        </div>

        <div className="flex flex-1 flex-col">
            <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"></span>
                <br />
                <span className="text-coral-red">Special </span>
                Offer
            </h2>
            <p className="mt-4 lg:max-w-lg info-text">
            Unleash your potential with Nike&apos;s super quality shoes, now available at an exclusive special offer. Experience the perfect blend of performance and style, crafted with precision engineering and premium materials.
                <br /> <br />
                Don&apos;t miss this limited-time opportunity to step up your game with Nike&apos;s unbeatable offer.
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop Now" iconURL={arrowRight} />
            <Button label="Learn More" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
            </div>
        </div>
    </section>
  )
}

export default SpecialOffer