import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import Title from '../Title/Title';
import './BestSeller.css'
import ProductItem from '../ProductItem/ProductItem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestSeller));
        setBestSeller(products.slice(0,6));
    },[])

  return (
    <div>
        <div className='latest-collection-text'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p> itaque facilis corporis accusamus iure veniam quidem aliquam et eius sequi repudiandae vitae.</p>
        </div>

        <div className='cards' >
        {
          bestSeller.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name}  price={item.price} />
          ))
        }
      </div>

    </div>
  )
}

export default BestSeller