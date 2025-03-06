import './../assets/css/header.css';
import './../index.css'
import sodiumLogo from './../assets/images/SodiumTransparentLogo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
export let Navbar = () => {
    let [isOpen, setIsOpen] = useState(false);
    let hamburgerHandler = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <div className="logoSection">
                        <img src={sodiumLogo} alt="sodium Logo" />
                    </div>
                    <ul className={`navUl ${isOpen ? 'flex' : 'none'}`}>
                        <li onClick={hamburgerHandler} className='navLi'><a className='' href='#'>Home</a></li>
                        <li onClick={hamburgerHandler} className='navLi'><a className='' href='#'>Bonuses</a></li>
                        <li onClick={hamburgerHandler} className='navLi'><a className='active' href='#'>Leaderboards</a></li>
                    </ul>
                    <button onClick={hamburgerHandler} type='Btn' className='hamBurgerBtn'><GiHamburgerMenu /></button>
                </nav>
            </header>
        </>
    );
}