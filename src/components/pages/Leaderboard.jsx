import { Navbar } from "../navbar";
import './../../assets/css/leaderboard.css';
import { BgDesign } from "../bgDesign";
import CSGOLogo from './../../assets/images/CSGOBIG.png';
import RAINGG from '../../assets/images/RAINGG.svg'
import CLASHGG from "../../assets/images/CLASH.svg";
import gem from './../../assets/images/gem.webm';
import babyBoss from './../../assets/images/babyBoss.png';
import { BsFillPentagonFill } from "react-icons/bs";
export let Leaderboard = () => {

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
            {/* <BgDesign /> */}
            <Navbar />
            {/* <section className="leaderboardSection">
                <div className="leaderboardTop">
                    <div className="leaderboardTextContent">
                        <div className="leaderboardHeading">
                            <h2 className="sectionHeading">Leaderboard</h2>
                            <p className="sectionPara">Complete in Wager Races and win huge Prizes!</p>
                        </div>
                        <div className="leaderboardPartners">
                            <p className="leaderBoardTag clashLogo"><video src={gem} loop muted playsInline autoPlay /><img src={CLASHGG} /></p>
                            <p className="leaderBoardTag  csgoLogo"><img src={CSGOLogo} alt="CSGO-BIG Logo" /></p>
                            <p className="leaderBoardTag rainggLogo"><img src={RAINGG} /></p>
                        </div>
                    </div>
                    <div className="leaderboardTextCards">
                        <div className="leaderboardCard">
                            <div className="cardTop">
                                <div className="cardImageContainer">
                                    <img src={babyBoss} alt="Baby Boss Picture" />
                                    <p className="pentagon pen2"><span>2</span></p>
                                </div>
                                <p className="leaderName">Bo****y</p>
                            </div>

                            <div className="cardBottom">
                                <div className="wagered">
                                    <span></span>
                                    <p className="wageredText">Wagered</p>
                                    <span></span>
                                </div>
                                <div className="prizeContainer">
                                    <p className="score">$12,245.86</p>
                                    <p className="cashPrize">$1,000.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="leaderboardCard slideTop">
                            <div className="cardTop">
                                <div className="cardImageContainer">
                                    <img src={babyBoss} alt="Baby Boss Picture" />
                                    <p className="pentagon pen1"><span>1</span></p>
                                </div>
                                <p className="leaderName">Bo****y</p>
                            </div>

                            <div className="cardBottom">
                                <div className="wagered">
                                    <span></span>
                                    <p className="wageredText">Wagered</p>
                                    <span></span>
                                </div>
                                <div className="prizeContainer">
                                    <p className="score">$12,245.86</p>
                                    <p className="cashPrize">$1,000.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="leaderboardCard">
                            <div className="cardTop">
                                <div className="cardImageContainer">
                                    <img src={babyBoss} alt="Baby Boss Picture" />
                                    <p className="pentagon pen3"><span>3</span></p>
                                </div>
                                <p className="leaderName">Bo****y</p>
                            </div>

                            <div className="cardBottom">
                                <div className="wagered">
                                    <span></span>
                                    <p className="wageredText">Wagered</p>
                                    <span></span>
                                </div>
                                <div className="prizeContainer">
                                    <p className="score">$12,245.86</p>
                                    <p className="cashPrize">$1,000.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="leaderboardEndTime">
                        <p className="leaderboardEndText">Leaderboard Ends in:</p>
                        <div className="leaderboardTime">
                            <p className="timeCircle">
                                <span>12</span>
                                <span className="periodLetter">D</span>
                            </p>
                            <p className="timeCircle">
                                <span>03</span>
                                <span className="periodLetter">H</span>
                            </p>
                            <p className="timeCircle">
                                <span>23</span>
                                <span className="periodLetter">M</span>
                            </p>
                            <p className="timeCircle">
                                <span>54</span>
                                <span className="periodLetter">S</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="leaderboardBottom">
                    <div className="leaderboardHeading">
                        <p className="playerNumber subHeading">#</p>
                        <p className="playerUsername subHeading">Username</p>
                        <div className="wegRew">  <p className="wagered subHeading">Wagered</p>
                            <p className="reward subHeading">Reward</p></div>

                    </div>
                    <div className="leaderBoardProfilesContainer">
                        {
                            profiles.map((prof) => <div className="leaderboardProfile" key={`profile${prof.number}`}>
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

            </section> */}
        </>
    );
}