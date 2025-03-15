import './../../assets/css/leaderboard.css';
import { Navbar } from "../navbar";
import { BgDesign } from "../bgDesign";
import { Footer } from '../Footer';
import { LeaderBoardCards } from '../LeaderBoardCards';
import { LeaderboardTime } from '../LeaderboardTime';
import CSGOLogo from './../../assets/images/CSGOBIG.png';
import RAINGG from '../../assets/images/RAINGG.svg'
import CLASHGG from "../../assets/images/CLASH.svg";
import gem from './../../assets/images/gem.webm';
import babyBoss from './../../assets/images/babyBoss.png';
import { useEffect } from 'react';
export let Leaderboard = () => {

    useEffect(() => {
        document.title = 'Sodium | Leaderboard';
    }, []);
    let profiles = [
        { 'number': '#4' },
        { 'number': '#5' },
        { 'number': '#6' },
        { 'number': '#7' },
        { 'number': '#8' },
        { 'number': '#9' },
        { 'number': '#10' },
    ]
    return (
        <>
            <BgDesign />
            <Navbar />
            <section className="leaderboardSection">
                <div className="leaderboardTop">
                    <div className="leaderboardTextContent">
                        <div className="leaderboardHeading">
                            <h2 className="sectionHeading" data-aos='zoom-in-right'>Leaderboard</h2>
                            <p className="sectionPara" data-aos='zoom-in-left'>Complete in Wager Races and win huge Prizes!</p>
                        </div>
                        <div className="leaderboardPartners">
                            <button data-aos='zoom-in-right' type='button' className="leaderBoardTag clashLogo"><video src={gem} loop muted playsInline autoPlay /><img src={CLASHGG} /></button>
                            <button data-aos='zoom-in' type='button' className="leaderBoardTag  csgoLogo"><img src={CSGOLogo} alt="CSGO-BIG Logo" /></button>
                            <button data-aos='zoom-in-left' type='button' className="leaderBoardTag rainggLogo"><img src={RAINGG} /></button>
                        </div>
                    </div>
                    <LeaderBoardCards />
                    <LeaderboardTime />
                </div>
                <div className="leaderboardBottom">
                    <div className="leaderboardHeading" data-aos='zoom-in'>
                        <p className="playerNumber subHeading">#</p>
                        <p className="playerUsername subHeading">Username</p>
                        <div className="wegRew">  <p className="wagered subHeading">Wagered</p>
                            <p className="reward subHeading">Reward</p></div>

                    </div>
                    <div className="leaderBoardProfilesContainer">
                        {
                            profiles.map((prof) => <div className="leaderboardProfile" key={`profile${prof.number}`} data-aos='zoom-in'>
                                <p className="playerNumber"><span>{prof.number}</span></p>
                                <div className="playerData">
                                    <img src={babyBoss} alt="Player Profile Picture" />
                                    <span className="playerName">Bo****y</span>
                                </div>
                                <div className="wegRewContainer">
                                    <p className="wageredData">
                                        <span className="rewardIcon"></span>
                                        <span className="rewardPrize">9,291.55</span>
                                    </p>
                                    <p className="rewardData">
                                        <span className="rewardIcon"></span>
                                        <span className="rewardPrize">800.00</span>
                                    </p>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}