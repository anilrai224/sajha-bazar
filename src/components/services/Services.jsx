import './Services.scss'
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdTrolley , MdOutlineUTurnLeft } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import Image from 'next/image';

const services =[
    {
        title:'Free Shipping',
        desc:'Free Ship Over NRS.150',
        logo:<LiaShippingFastSolid />,
    },
    {
        title:'Best Deal Online',
        desc:'We Provide Free-in-home',
        logo:<MdTrolley />,
    },
    {
        title:'7 Days Return',
        desc:'We have 7 day return plicy',
        logo:<MdOutlineUTurnLeft />,
    },
    {
        title:'Secure Payment',
        desc:'We provide easy wallet',
        logo:<IoWalletOutline />,
    },
]

const Services = () => {
  return (
    <div className='services'>
        <div className="container">
            <div className="servicesContents">
                {services.map((service)=>(
                    <ServiceCard service={service}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services
const ServiceCard = ({service})=>{
    const rotateImage = 'roatate(90deg)';
    return (
        <div className="serviceCard">
            <div className="imgContainer" style={service.title === '7 Days Return' ? {rotate:'90deg',transform:'rotateX(190deg)'}:{}}>
                {service.logo}
            </div>
            <div className="desc">
                <p>{service.title}</p>
                <span>{service.desc}</span>
            </div>
        </div>
    )
}