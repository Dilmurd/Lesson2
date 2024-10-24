import React from 'react'
import "./Category.scss"
import cat from "../../assets/cat.png"
import red from "../../assets/red.png"
import xia from "../../assets/xi.png"

const CATEGORY = [
    {
        id: 1,
        title: "Apple",
        desc: "Apple is one of the most famous smart watches providing company.",
        img: cat
    },
    {
        id: 2,
        title: "Xiaomi",
        desc: "Xiaomi smart watches are produced by MI company.",
        img: red
    },
    {
        id: 3,
        title: "FitBit",
        desc: "FitBit smart watches are best for there health and fitness features.",
        img: xia
    },

    
]

function Category() {
  return (
    <main>
        <section className="category">
            <div className="container">
                <div className="category__wrapper">
                    {
                        CATEGORY.map((product)=>{
                            return  <div key={product.id} className="category__card">
                            <img src={product.img} alt="" />
                            <div>
                                <p className='category__title'>{product.title}</p>
                                <p className='category__desc'>{product.desc}</p>
                            </div>
                        </div>
                        })
                    }
               
                </div>
            </div>
        </section>
    </main>
  )
}

export default Category