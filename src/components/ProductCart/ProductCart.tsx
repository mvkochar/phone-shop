import React from 'react'
import './ProductCart.css'
import { ProductsArr } from '../ProductsArr/ProductsArr'

type ProductCartProps = {
    productNum: number
    handleTotalPrice: (productPrice: number) => void
}

const ProductCart = ({productNum, handleTotalPrice}:ProductCartProps) => {
  return (
    <div className='product'>
        <div className='product-img'><img src={ProductsArr[productNum].image} alt="product-img" /></div>
        <div className="product-title">{ProductsArr[productNum].title}</div>
        <div className="product-info d-f jc-sb">
            <div className="product-price">${ProductsArr[productNum].price}</div>
            <div className={ProductsArr[productNum].rating === 0 ? "d-n" : "product-rating d-f"}>
                <div><img src="images/rating.png" alt="rating" /></div>
                <div><img src={ProductsArr[productNum].rating > 1 ? "images/rating.png" : "images/unrating.png"} alt="rating/unrating" /></div>
                <div><img src={ProductsArr[productNum].rating > 2 ? "images/rating.png" : "images/unrating.png"} alt="rating/unrating" /></div>
                <div><img src={ProductsArr[productNum].rating > 3 ? "images/rating.png" : "images/unrating.png"} alt="rating/unrating" /></div>
                <div><img src={ProductsArr[productNum].rating > 4 ? "images/rating.png" : "images/unrating.png"} alt="rating/unrating" /></div>
            </div>
        </div>
        <p className="product-desc">{ProductsArr[productNum].desc}</p>
        <button onClick={()=>handleTotalPrice(ProductsArr[productNum].price)}>Add to cart</button>
    </div>
  )
}

export default ProductCart