import './../assets/css/Landing.css';
import sodiumLogo from './../assets/images/sodiumTextLogo.png';
import sniper from './../assets/images/sniper.png';
import pistol from './../assets/images/pistol.png';
import pistolSp from './../assets/images/pistolSup.png';
import AR from './../assets/images/AR.png';
import { Link } from 'react-router-dom';
export let Landing = () => {

    return (<>
        <section className="landingSection">
            <div className='weaponImageContainer'>
                <img data-aos='zoom-in-right' className='sniper' src={sniper} alt='Sniper Image' />
                <img data-aos='zoom-in-right' className='pistol' src={pistol} alt='Pistol Image' />
                <img data-aos='zoom-in-left' className='pistolSp' src={pistolSp} alt='Pistol Image' />
                <img data-aos='zoom-in-left' className='AR' src={AR} alt='Assault Rifle Image' />
            </div>
            <div className='landingMainContent'>
                <img className='landingMainImg' src={sodiumLogo} alt='Sodium Logo' data-aos='zoom-in' />
                <p data-aos='zoom-in' className='landingPara'>Enjoy the best Bonuses, Leaderboards, and more!</p>
                <div className='landingBtns'>
                    <button data-aos='zoom-in-right'> <Link to='/leaderboard'>leaderboards</Link></button>
                    <button data-aos='zoom-in-left'> <Link to='/bonuses'>All Bonuses</Link></button>
                </div>
            </div>
        </section>

    </>);
}