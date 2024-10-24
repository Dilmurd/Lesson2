import React from 'react'
import "./Subs.scss"
import subs from "../../assets/subs.png"

function Subs() {
  return (
    <main>
        <section className="subs">
            <div className="container">
                <div className="subs__wrapper">
                    <div className="subs__text">
                        <p className='subs__title'>Subscribe To Newsletter</p>
                        <p className='subs__subtitle'>Get free guide about smart watches daily. </p>
                        <div className='inp'>
                            <input type="search" placeholder='Enter Email Address' />
                            <button>Subscribe</button>
                        </div>
                    </div>
                    <div className="subs__img">
                        <img src={subs} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Subs