import CSGOBIG from './../assets/images/CSGOBIG.png';
import RallLogo from './../assets/images/RALLLogo.png'
export let BonusCards = () => {
    return (<>
        <div data-aos="zoom-in-right" className="bonusCard">
            <div className="gradient"></div>
            <div className="color"></div>
            <div className="cardContent">
                <div className='imageCont'>
                    <img className="bonusImage" src={CSGOBIG} alt="Bonus Image" />
                </div>
                <div className="sponsorHeading">
                    <span className="line"></span>
                    <span className="sponsorName">CSGOBIG</span>
                    <span className="line"></span>
                </div>
                <div className="bonusPrizeContainer">
                    <div className="bonusDepositContainer">
                        <span>Bonus</span>
                        <p>5% Deposit Bonus</p>
                    </div>
                    <div className="bonusCodeContainer">
                        <span>Code</span>
                        <p>"SODIUMS"</p>
                    </div>
                </div>
                <button type="button" className="claimBtn">Claim Bonus</button>
            </div>
        </div>
        <div data-aos="zoom-in" className="bonusCard">
            <div className="gradientRed"></div>
            <div className="color"></div>
            <div className="cardContent">
                <div className='imageCont'>
                    <img className="bonusImage" src={RallLogo} alt="Bonus Image" />
                </div>
                <div className="sponsorHeading">
                    <span className="line"></span>
                    <span className="sponsorName">CSGOROLL</span>
                    <span className="line"></span>
                </div>
                <div className="bonusPrizeContainer">
                    <div className="bonusDepositContainer">
                        <span>Bonus</span>
                        <p>5% Deposit Bonus</p>
                    </div>
                    <div className="bonusCodeContainer redBorder">
                        <span>Code</span>
                        <p>"SODIUMS"</p>
                    </div>
                </div>
                <button type="button" className="claimBtn">Claim Bonus</button>
            </div>
        </div>
        <div data-aos="zoom-in-left" className="bonusCard">
            <div className="gradient"></div>
            <div className="color"></div>
            <div className="cardContent">
                <div className='imageCont'>
                    <img className="bonusImage" src={CSGOBIG} alt="Bonus Image" />
                </div>
                <div className="sponsorHeading">
                    <span className="line"></span>
                    <span className="sponsorName">CSGOBIG</span>
                    <span className="line"></span>
                </div>
                <div className="bonusPrizeContainer">
                    <div className="bonusDepositContainer">
                        <span>Bonus</span>
                        <p>5% Deposit Bonus</p>
                    </div>
                    <div className="bonusCodeContainer">
                        <span>Code</span>
                        <p>"SODIUMS"</p>
                    </div>
                </div>
                <button type="button" className="claimBtn">Claim Bonus</button>
            </div>
        </div>
    </>);
}