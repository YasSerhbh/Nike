import Button from "../Components/Button"
import {arrowRight} from '../assets/icons'
import {shoes, statistics} from '../constants'
// import { bigShoe1 } from "../assets/images"
import ShoeCard from "../Components/ShoeCard"
import { useState } from "react"

const Hero = () => {

    const [bigShoeImg, setBigShoeImg] = useState(shoes[0].bigShoe)

  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container" id="home">
        <div className="xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
            <p className="text-xl font-montserrat text-coral-red">Our Spring Collection</p>
            <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                <br />
                <span className="text-coral-red inline-block mt-3">Nike </span>
                Shoes
            </h1>
            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover Stylish Nike Arrivals, quality comfort, and innovation for your active life.</p>
            <Button label="Shop Now" iconURL={arrowRight} />

            <div className="flex flex-wrap justify-start items-start gap-16 mt-20 w-full">
                {
                    statistics.map((stat, index) => (  
                        <div key={index}>
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                        </div>
                     ))
                }
            </div>
        </div>


        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 
            bg-primary bg-hero bg-center bg-cover">
            <img src={bigShoeImg} alt="Shoe Collection"
                className="z-10 object-contain relative"
                width={610}
                height={500}

            />

            <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                {shoes.map((shoe) => (
                    <div key={shoe}>
                        <ShoeCard
                            imgURL={shoe}
                            changeBigShoeImage={(shoe) => {setBigShoeImg(shoe)}}
                            bigShoeImage={bigShoeImg}
                        />
                    </div>
                    ))
                    }
            </div>
        </div>
    </section>
  )
}

export default Hero