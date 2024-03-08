import './footer.scss'
import Newsletter from './newsletter/Newsletter'
import Logo from '../../assets/footer-logo.png'
import Image from 'next/image'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='footer'>
            <Newsletter />
            <div className="container">
                <div className="footerContents">
                    <div className="left">
                        <Image src={Logo} />
                        <p>Nourishing communities sustainably. Discover the essence of
                            freshness with our handpicked selection of locally sourced organic
                            treasures. Join us in fostering a healthier world, one bite at a time.</p>
                        <div className="socials">
                            <div className="icon">
                                <FaFacebookF />
                            </div>
                            <div className="icon">
                                <FaInstagram />
                            </div>
                            <div className="icon">
                                <FaXTwitter />
                            </div>
                            <div className="icon">
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <h2>Category</h2>
                        <div className="links">
                            <Link href='/categroy/Vegetable'>Vegetable</Link>
                            <Link href='/categroy/Fruits'>Fruits</Link>
                            <Link href='/categroy/Meat'>Meat</Link>
                            <Link href='/categroy/Jadibuti'>Jadibuti</Link>
                            <Link href='/categroy/Honey'>Honey</Link>
                            <Link href='/categroy/Ghee'>Vegetable</Link>
                            <Link href='/categroy/Ingredients'>Vegetable</Link>
                            <Link href='/categroy/HomeMade'>Home Made</Link>
                        </div>
                    </div>
                    <div className="right">
                        <h2 >Contact</h2>
                        <div className="address">
                            <a href={`tel:+9779816731608`}>
                                <FaPhoneAlt className='icon' />
                                +977 9847516161
                            </a>
                            <a href={`mailto:sajhabajar@gmail.com`}>
                                <MdEmail className='icon' />
                                sajhabajar@gmail.com
                            </a>
                            <a>
                                <IoLocationSharp className='icon' />
                                Kathmandu, Balkhu
                            </a>

                        </div>
                    </div>
                </div>
                <div className="copyright" style={{ color:'white',textAlign:'center' }}>
                    <p>© 2024 SAJHA BAZAR ALL RIGHT RESERVED. MADE BY <span>SAJHA BAJAR</span></p>
                </div>
            </div>
        </div>
    )
}

export default Footer