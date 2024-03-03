import Image from 'next/image'
import './Navbar.scss'
import Logo from '../../assets/logo.png'
import Links from './links/Links'
import { IoMdSearch } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='container'>
                <div className="navbarContents">
                    <div className="logoContainer">
                        <Image src={Logo} />
                    </div>
                    <div className="search">
                        <label htmlFor="search">
                            <input placeholder='Search...' type="text" name="search" id="search" />
                            <div className="searchCategories">
                                <span className='all'>All Categories</span>
                                <div className="icon">
                                    <IoMdSearch />
                                </div>
                            </div>
                        </label>
                    </div>
                    <div className="login">
                        <div className="loginDetails">
                            Login
                            <div className="icon">
                                <MdOutlinePerson/>
                            </div>
                        </div>
                        <div className="navCart">
                            <div className="icon">
                                <IoBagOutline />
                            </div>
                            <p>
                                <span>Shoping Basket</span>
                                <strong>NRS 0.0</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar