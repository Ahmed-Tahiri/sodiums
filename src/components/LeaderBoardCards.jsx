import babyBoss from './../assets/images/babyBoss.png';
export let LeaderBoardCards = () => {
    return <div className="leaderboardTextCards">
        <div className="leaderboardCard" data-aos='zoom-in-right'>
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
        <div className="leaderboardCard slideTop" data-aos='zoom-in'>
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
        <div className="leaderboardCard" data-aos='zoom-in-left'>
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
}