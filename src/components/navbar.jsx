import './../assets/css/header.css';
import './../index.css'
import sodiumLogo from './../assets/images/SodiumTransparentLogo.png';
export let Navbar = () => {


    return (<>
        <header className="header">
            <nav className="navbar">
                <div className="logoSection">
                    <img src={sodiumLogo} alt="sodium Logo" />
                </div>
                <ul className='navUl'>
                    <li className='navLi'><a className='' href='#'>Home</a></li>
                    <li className='navLi'><a className='' href='#'>Bonuses</a></li>
                    <li className='navLi'><a className='active' href='#'>Leaderboards</a></li>
                </ul>
            </nav>
        </header>
    </>);
}