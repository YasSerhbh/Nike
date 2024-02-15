import {footerLogo} from '../assets/images'
import {footerLinks, socialMedia} from '../constants'


const Footer = () => {
  return (
    <footer className="max-container">
        <div className="flex justify-between items-start gap-20 max-lg:flex-col flex-wrap">
            <div className="flex flex-col items-start">
                <a href="/">
                    <img 
                        src={footerLogo}
                        width={150}
                        height={46}
                    />
                </a>
                <p className='mt-6 text-base leading-7 text-white-400 sm:max-w-sm font-montserrat'>
                    Get Shoes ready for the next adventure, with the latest styles and colors, and enjoy free shipping and returns.
                </p>
                <div className='flex items-center gap-5 mt-8'>
                    {
                        socialMedia.map((icon) => (
                            <div key={icon.alt} className='flex justify-center items-center bg-white h-12 w-12 rounded-full cursor-pointer'>
                                <a href={icon.link} rel='noreferrer' target='_blank'>
                                <img 
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={24}
                                    height={24}
                                />
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='gap-20 lg:gap-10 flex-wrap flex flex-1 justify-between'>
                {
                    footerLinks.map((link) => (
                        <div key={link.title}>
                            <h4 className="text-white font-montserrat leading-normal text-2xl mb-6 font-medium">
                                {link.title}
                            </h4>
                            <ul className='mt-4'>
                                {
                                    link.links.map((item) => (
                                        <li key={item.name} className='text-white-400 text-base leading-7 font-montserrat mt-3 hover:text-white'>
                                            <a href={item.link}>{item.name}</a>
                                        </li>
                                    
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className='flex justify-between text-white-400 max-sm:flex-col max-sm:items-center mt-24'>
            <div className='flex flex-1 justify-start items-center'>
                <p className='text-base leading-7 font-montserrat'>
                    © Copyright. All rights reserved
                </p>
            </div>
            <p className='font-montserrat cursor-pointer'>
                Terms & Conditions
            </p>
        </div>
    </footer>
  )
}

export default Footer