import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    // console.log(props.Product)
    const{name,seller,price,img,ratings}=props.product;

   const handelAddToCart=props.handelAddToCart;
    return (
        <div className='product'>
             <img src={img} alt=""/>
            <div className='product-info'>
           
            <h6 className='product-name'>{name}</h6> 
            <p>Price:${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings} star</p>
            </div>
            <button className='btn-cart' onClick={()=>handelAddToCart(props.product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
        

        </div>
    );
};

export default Product;