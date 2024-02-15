import ServicesCard from '../Components/ServicesCard'
import {services} from '../constants'


const Services = () => {
  return (
    <section className="flex flex-wrap gap-9 max-container justify-center">
        {services.map((service) => (
            <ServicesCard key={service.label} {...service} />
        ))}
    </section>
  )
}

export default Services