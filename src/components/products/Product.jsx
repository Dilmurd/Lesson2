import React from 'react'
import "./Product.scss"
import watch from "../../assets/watch.png"
import stars from "../../assets/stars (2).png"

const PRODUCTS = [
    {
        id: 1,
        title: "Apple Smart I",
        img: stars,
        del: "$300.00",
        price: "$255.00",
        imgs: watch
    },
    {
        id: 2,
        title: "Apple Smart I",
        img: stars,
        del: "$300.00",
        price: "$255.00",
        imgs: watch
    },
    {
        id: 3,
        title: "Apple Smart I",
        img: stars,
        del: "$300.00",
        price: "$255.00",
        imgs: watch
    },
    {
        id: 4,
        title: "Apple Smart I",
        img: stars,
        del: "$300.00",
        price: "$255.00",
        imgs: watch
    },
    {
        id: 5,
        title: "Apple Smart I",
        img: stars,
        del: "$300.00",
        price: "$255.00",
        imgs: watch
    },
    {
        id: 6,
        title: "Apple Smart I",
        img: stars,
        del: "$300.00",
        price: "$255.00",
        imgs: watch
    },
   
]

function Product() {
  return (
    <main>
        <section className='product'>
            <div className="container">
                <div className="product__titles">
                    <p className='product__title'> Find your favourite smart watch.</p>
                    <p className='product__subtitle'>Our Latest Products</p>
                </div>
                <div className="product__wrapper">
                    {
                        PRODUCTS.map((prod)=>{
                            return  <div key={prod.id} className="product__card">
                            <img src={prod.imgs} alt="" />
                            <div className="product__text">
                        <p>{prod.title}</p>
                        <div className='stars'>
                            <img src={prod.img} alt="" />
                        </div>
                        <div className="product__prices">
                            <del>{prod.del}</del>
                            <p>{prod.price}</p>
                        </div>
                            </div>
                    </div>
                        })
                    }
                </div>
                <div className="btn">
                    <button>View More</button>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Product