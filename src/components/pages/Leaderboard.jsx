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
import { useEffect, useState } from 'react';
export let Leaderboard = () => {

    useEffect(() => {
        document.title = 'Sodium | Leaderboard';
    }, []);

    let [activePartner, setActivePartner] = useState(
        {
            clash: false,
            big: true,
            rain: false,
        }
    );
    let clashBtnHandler = () => {
        setActivePartner((prevState) => {
            return {
                ...prevState,
                clash: true,
                big: false,
                rain: false,
            }
        })
    }
    let bigBtnHandler = () => {
        setActivePartner((prevState) => {
            return {
                ...prevState,
                clash: false,
                big: true,
                rain: false,
            }
        })
    }
    let rainBtnHandler = () => {
        setActivePartner((prevState) => {
            return {
                ...prevState,
                clash: false,
                big: false,
                rain: true,
            }
        })
    }

    let profiles = [];
    if (activePartner.big) {

        profiles = [
            { 'number': '#4', playerName: 'Bo****y' },
            { 'number': '#5', playerName: 'Bo****y' },
            { 'number': '#6', playerName: 'Bo****y' },
            { 'number': '#7', playerName: 'Bo****y' },
            { 'number': '#8', playerName: 'Bo****y' },
            { 'number': '#9', playerName: 'Bo****y' },
            { 'number': '#10', playerName: 'Bo****y' },
        ];
    }
    if (activePartner.rain) {

        profiles = [
            { 'number': '#4', playerName: 'Sc****y' },
            { 'number': '#5', playerName: 'Sc****y' },
            { 'number': '#6', playerName: 'Sc****y' },
            { 'number': '#7', playerName: 'Sc****y' },
            { 'number': '#8', playerName: 'Sc****y' },
            { 'number': '#9', playerName: 'Sc****y' },
            { 'number': '#10', playerName: 'Sc****y' },
        ];
    }
    if (activePartner.clash) {

        profiles = [
            { 'number': '#4', playerName: 'An****y' },
            { 'number': '#5', playerName: 'An****y' },
            { 'number': '#6', playerName: 'An****y' },
            { 'number': '#7', playerName: 'An****y' },
            { 'number': '#8', playerName: 'An****y' },
            { 'number': '#9', playerName: 'An****y' },
            { 'number': '#10', playerName: 'An****y' },
        ];

    }
    useEffect(() => {
        console.log('');
    }, [profiles]);
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
                            <button onClick={clashBtnHandler} type='button' className={`leaderBoardTag clashLogo ${activePartner.clash ? 'activeLeaderboard' : ''}`}><video src={gem} loop muted playsInline autoPlay /><img src={CLASHGG} /></button>
                            <button onClick={bigBtnHandler} type='button' className={`leaderBoardTag  csgoLogo ${activePartner.big ? 'activeLeaderboard' : ''}`}><img src={CSGOLogo} alt="CSGO-BIG Logo" /></button>
                            <button onClick={rainBtnHandler} type='button' className={`leaderBoardTag rainggLogo ${activePartner.rain ? 'activeLeaderboard' : ''}`}><img src={RAINGG} /></button>
                        </div>
                    </div>
                    <LeaderBoardCards activePartner={activePartner} />
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
                                    <span className="playerName">{prof.playerName}</span>
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