import Link from "next/link"
import './Links.scss'
import { IoIosArrowForward } from "react-icons/io";
import Honey from '../../../assets/icons/honey.png'
import Fruits from '../../../assets/icons/fruits.png'
import HomeMade from '../../../assets/icons/homemade.png'
import Ingredients from '../../../assets/icons/ingredients.png'
import Jadibuti from '../../../assets/icons/jadibuti.png'
import Meat from '../../../assets/icons/meat.png'
import Veg from '../../../assets/icons/vegetables.png' 
import Ghee from '../../../assets/icons/ghee.png' 
import Image from "next/image";

const CategoryLinks = () => {
    const links=[
        {
            path:'/vegetables',
            title:'Vegetables',
            img:Veg,
        },
        {
            path:'/fruits',
            title:'Fruits',
            img:Fruits,
        },
        {
            path:'/meat',
            title:'Meat',
            img:Meat,
        },
        {
            path:'/jadibuti',
            title:'Jadibuti',
            img:Jadibuti,
        },
        {
            path:'/honey',
            title:'Honey',
            img:Honey,
        },
        {
            path:'/ghee',
            title:'Ghee',
            img:Ghee,
        },
        {
            path:'/homemade',
            title:'Home made',
            img:HomeMade,
        },
        {
            path:'/ghee',
            title:'Ghee',
            img:Ghee,
        },
    ]
  return (
    <div className="categoryLinks">
        {links.map((link)=>(
            <div className="linkList">
                <div className="links">
                    <Image src={link.img}/>
                    <Link href={`/category${link.path}`} key={link.path}>{link.title}</Link>
                </div>
                <IoIosArrowForward style={{ color:'var(--green)' }} />
            </div>
        ))}
    </div>
  )
}

export default CategoryLinks