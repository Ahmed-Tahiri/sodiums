import './../assets/css/header.css';
import './../index.css'
import sodiumLogo from './../assets/images/SodiumTransparentLogo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { Link } from 'react-router-dom';
export let Navbar = () => {
    let [isOpen, setIsOpen] = useState(false);
    let hamburgerHandler = () => {
        setIsOpen(!isOpen);
    }
    let path = window.location.pathname;
    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <div className="logoSection">
                        <img src={sodiumLogo} alt="sodium Logo" />
                    </div>
                    <ul className={`navUl ${isOpen ? 'flex' : 'none'}`}>
                        <li onClick={hamburgerHandler} className='navLi'><Link to='/' className={path === '/' ? 'active' : ''}>Home</Link></li>
                        <li onClick={hamburgerHandler} className='navLi'><Link to='/bonuses' className={path === '/bonuses' ? 'active' : ''} href='#'>Bonuses</Link></li>
                        <li onClick={hamburgerHandler} className='navLi'><Link to='/leaderboard' className={path === '/leaderboard' ? 'active' : ''}>Leaderboards</Link></li>
                    </ul>
                    <button onClick={hamburgerHandler} type='Btn' className='hamBurgerBtn'><GiHamburgerMenu /></button>
                </nav>
            </header>
        </>
    );
}