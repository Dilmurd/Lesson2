import React from 'react'
import "./Header.scss"
import navbar from "../../assets/navbar.png"
import hero from "../../assets/herowarp.png"
import icon from "../../assets/Group 5.png"
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const HEADER = ["Home", "Brands", "Recent Products", "Contact", "About"]

function Header() {
  return (
    <div className='main'>
    <header className='header'>
        <div className="container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <img src={navbar} alt="" />
                    <p>Mohid</p>
                </div>
                <ul className="navbar__collection">
                    {
                    HEADER.map((nav,index) =>{
                        return <li className="navbar__item">
                        <a href="#" key={index} className="navbar__link">
                            <span>{nav}</span>
                        </a>
                    </li>
                    })           
                    }   
                </ul>
                <div className="navbar__icons">
                    <FaSearch/>
                    <IoPersonSharp/>
                    <FaShoppingCart/>
                </div>
            </nav>
        </div>
    </header>
    <main>
        <section className='hero'>
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__text">
                        <h2 className='hero__title'>Discover Most Suitable Watches</h2>
                        <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                        <div className='hero__search'>
                            <img src={icon} alt="" />
                            <input type="search" placeholder='Find the best brands' />
                            <button className='hero__btn'>Search</button>
                        </div>
                    </div>
                    <div className="hero__img">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Header