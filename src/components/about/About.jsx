import React from 'react'
import "./About.scss"
import about from "../../assets/about.png"
import star from "../../assets/stars (2).png"
import glass from "../../assets/glass.png"


const INF = [
    {
        id: 1,
        title: "Hamza Faizi",
        desc: "Don’t waste time, just order! This is the best website to puschase smart watches.",
        img: star,
        imgs: about
    },
    {
        id: 2,
        title: "Hafiz Huzaifa",
        desc: "I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.",
        img: star,
        imgs: glass 
    }
]

function About() {
  return (
    <main>
        <section className="about">
            <div className="container">
                <div className="about__titles">
                    <p className='about__title'>Here are our some of the best clients.</p>
                    <p className='about__subtitle'>What People Say About Us</p>
                </div>
                <div className="about__wrapper">
                    {
                        INF.map((inf)=>{
                            return   <div key={inf.id} className="about__card">
                            <img src={inf.imgs} alt="" />
                            <div className='text'>
                            <p className='inf'>{inf.title}</p>
                            <p className='desc'>{inf.desc}</p>
                            <img src={inf.img} alt="" />
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

export default About