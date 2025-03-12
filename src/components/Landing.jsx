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
                <img className='sniper' src={sniper} alt='Sniper Image' />
                <img className='pistol' src={pistol} alt='Pistol Image' />
                <img className='pistolSp' src={pistolSp} alt='Pistol Image' />
                <img className='AR' src={AR} alt='Assault Rifle Image' />
            </div>
            <div className='landingMainContent'>
                <img className='landingMainImg' src={sodiumLogo} alt='Sodium Logo' />
                <p className='landingPara'>Enjoy the best Bonuses, Leaderboards, and more!</p>
                <div className='landingBtns'>
                    <button> <Link to='/leaderboard'>leaderboards</Link></button>
                    <button> <Link to='/bonuses'>All Bonuses</Link></button>
                </div>
            </div>
        </section>

    </>);
}