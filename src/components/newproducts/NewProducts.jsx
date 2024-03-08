import Image from 'next/image'
import './newProduct.scss'
import { products } from './product'

const NewProducts = () => {
  return (
    <div className='newProducts'>
        <div className="container">
            <div className="newProductsContents">
                <span className='title'>Recently Added to Our Store</span>
                <h1>New Products</h1>
                <div className="products">
                  {products.map((product)=>(
                    <SingleProduct product={product}/>
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewProducts
import { FaCartShopping } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";

const SingleProduct =({product})=>{
  return (
    <div className="card">
      <div className="imgContainer">
        <Image src={product.img}/>
      </div>
      <div className="textContainer">
        <div className="name">
          <p>{product.category}</p>
          <div className="stars">
            <IoMdStarOutline className='icon' />
            <IoMdStarOutline className='icon' />
            <IoMdStarOutline className='icon' />
            <IoMdStarOutline className='icon' />
            <IoMdStarOutline className='icon' />
          </div>
        </div>
        <h3>{product.name}</h3>
        <span>NPR {product.price}</span>
      </div>
      <button>
        <FaCartShopping className='icon' />
        add to cart
      </button>
    </div>
  )
}