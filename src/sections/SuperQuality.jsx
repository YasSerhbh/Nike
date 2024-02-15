import Button from "../Components/Button"
import {shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section
        id='about-us'
        className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
        <div className="flex flex-1 flex-col">
            <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We provide you</span>
                <br />
                <span className="text-coral-red">Super </span>
                <span className="text-coral-red">Quality </span>
                Shoes
            </h2>
            <p className="mt-4 lg:max-w-lg info-text">
                Discover the pinnacle of performance and style with Nike&apos;s super quality shoes. Meticulously crafted with cutting-edge technology and premium materials, these shoes deliver unparalleled comfort, durability, and style.
                <br /> <br />
                 Elevate your game and step into excellence with Nike.
            </p>
            <div className="mt-11">
            <Button label="View Details" />
            </div>
        </div>

        <div className="flex flex-1 justify-center items-center">
            <img src={shoe8} alt="Shoe 8"
                className="object-contain"
                width={570}
                height={522}
            />
        </div>
    </section>
  )
}

export default SuperQuality