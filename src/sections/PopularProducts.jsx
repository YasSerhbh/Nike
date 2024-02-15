import PopularProductCard from '../Components/PopularProductCard';
import {products} from '../constants'


const PopularProducts = () => {
        console.log(products);
    return (
        <section id="products" className="max-container max-sm:mt-12">
                <div className='flex flex-col justify-start gap-5'>
                        <h2 className='text-4xl font-palanquin font-bold'>Our 
                        <span className='text-coral-red'> Popular </span>
                         Products</h2>
                        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Unlock Your Performance Potential: Elevate Every Step with Nike&apos;s Premium Collection of Footwear and Apparel, Engineered to Push Boundaries and Propel You Towards Greatness</p>
                </div>

                <div className='grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4'>
                    {products.map((product) => (
                        <PopularProductCard key={product.id} {...product} />
                    ))}
                </div>
        </section>
    )
}

export default PopularProducts