import './../assets/css/footer.css';
import sodiumsFullLogo from './../assets/images/sodiumTextLogo.png';
import discordLogo from './../assets/images/discordLogo.png';
import ytLogo from './../assets/images/ytLogo.png';
import kickLogo from './../assets/images/kickLogo.png';
import XLogo from './../assets/images/XLogo.png';
import { Link } from 'react-router-dom';
export let Footer = () => {
    let path = window.location.pathname;
    return (
        <footer className="footer">
            <div className='footerTop'>
                <div className="footerCopyright">
                    <img src={sodiumsFullLogo} alt='sodiums Logo' />
                    <p className='copyrightText'>Copyright 2025<br />Sodiums.GG</p>
                </div>
                <div className='footerLinksSection'>
                    <nav className='footerNav'>
                        <ul className='footerNavUl'>
                            <li className='footerNavLi'><Link to='/'>Home</Link></li>
                            <li className='footerNavLi'><Link to='/bonuses'>Bonuses</Link></li>
                            <li className='footerNavLi'><Link to='/leaderboard'>Leaderboards</Link></li>
                            <li className='footerNavLi'><Link to='/store'>Store</Link></li>
                            <li className='footerNavLi'><Link to='/cases'>Cases</Link></li>
                            <li className='footerNavLi'><Link to='/profile'>Profile</Link></li>
                        </ul>
                    </nav>

                    <ul className='socialLinks'>
                        <li className='socialLink'><Link to='#'><img src={discordLogo} alt='Discord Logo' /><span>Discord</span></Link></li>
                        <li className='socialLink'><Link to='#'><img src={ytLogo} alt='Youtube Logo' /><span>Youtube</span></Link></li>
                        <li className='socialLink'><Link to='#'><img src={kickLogo} alt='Kick Logo' /><span>Kick</span></Link></li>
                        <li className='socialLink'><Link to='#'><img src={XLogo} alt='X Logo' /><span>X / Twitter</span></Link></li>
                    </ul>
                </div>
            </div>
            <div className={path === '/profile' ? 'none' : 'borderContainer'}></div>
            <div className={path === '/profile' ? 'none' : 'footerBottom'}>
                <p className='infoMessage'>Gamble responsibility (18+). Only gamble for fun and enjoyment with money you can afford to lose. We do not take responsibility for any losses from gambling in casinos and betting sites which are linked or promoted on our website(s).</p>
            </div>
        </footer>
    );
}