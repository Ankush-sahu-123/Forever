import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import './ProductItem.css'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link className='product-card' to={`/product/${id}`}>
        <div className='product-image-container'>
            <img src={image[0]} alt="" />
        </div>
        <p>{name}</p>
        <p>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem