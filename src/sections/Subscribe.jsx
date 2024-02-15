import Button from '../Components/Button'


const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center gap-10 max-lg:flex-col" id="contact-us">
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
            Sign Up For
            <span className="text-coral-red"> Updates </span>
            & Newsletter
        </h3>
        <div className='lg:max-w-[40%] w-full max-sm:flex-col flex items-center rounded-full gap-5 p-2.5 sm:border sm:border-slate-gray'>
            <input type="email" placeholder="subscribe@nike.com" className="input" />
            <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                <Button 
                    label={"Sign Up"}
                    fullWidth
                />
            </div>
        </div>
    </section>
  )
}

export default Subscribe