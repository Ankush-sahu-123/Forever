import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import './LatestCollection.css'
import Title from '../Title/Title';
import ProductItem from '../ProductItem/ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,10));
    },[])

  return (
    <div className="latest-collection">
      <div className="latest-collection-text">
        <Title text1={'LATEST'}  text2={'COLLECTIONS'} />
        <p>Lorem ipsum dolor sit, maiores rerum aliquid corrupti fugit delectus officia quibusdam.</p>
      </div>

      <div className='cards' >
        {
          latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name}  price={item.price} />
          ))
        }
      </div>

    </div>
  )
}

export default LatestCollection