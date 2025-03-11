import './../assets/css/footer.css';
import sodiumsFullLogo from './../assets/images/sodiumTextLogo.png';
import discordLogo from './../assets/images/discordLogo.png';
import ytLogo from './../assets/images/ytLogo.png';
import kickLogo from './../assets/images/kickLogo.png';
import XLogo from './../assets/images/XLogo.png';
export let Footer = () => {

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
                            <li className='footerNavLi'><a href='#'>Home</a></li>
                            <li className='footerNavLi'><a href='#'>Bonuses</a></li>
                            <li className='footerNavLi'><a href='#'>Leaderboards</a></li>
                        </ul>
                    </nav>

                    <ul className='socialLinks'>
                        <li className='socialLink'><a><img src={discordLogo} alt='Discord Logo' /><span>Discord</span></a></li>
                        <li className='socialLink'><a><img src={ytLogo} alt='Youtube Logo' /><span>Youtube</span></a></li>
                        <li className='socialLink'><a><img src={kickLogo} alt='Kick Logo' /><span>Kick</span></a></li>
                        <li className='socialLink'><a><img src={XLogo} alt='X Logo' /><span>X / Twitter</span></a></li>
                    </ul>
                </div>
            </div>
            <div className='borderContainer'></div>
            <div className='footerBottom'>
                <p className='infoMessage'>Gamble responsibility (18+). Only gamble for fun and enjoyment with money you can afford to lose. We do not take responsibility for any losses from gambling in casinos and betting sites which are linked or promoted on our website(s).</p>
            </div>
        </footer>
    );
}