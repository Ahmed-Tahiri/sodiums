import { Navbar } from "../navbar";
import { BgDesign } from "../bgDesign";
import { Footer } from '../Footer';
import { BonusCards } from "../BonusCards";
import './../../assets/css/bonuses.css';
import './../../assets/css/bonusCards.css';
export let Bonuses = () => {
    return <>
        <BgDesign />
        <Navbar />
        <section className="bonusSection">
            <div className="bonusTop">
                <div className="bonusTextContent">
                    <div className="bonusHeading">
                        <h2 className="sectionHeading">Bonuses</h2>
                        <p className="sectionPara">Claim exclusive Offers with Code "Sodiums"</p>
                    </div>
                </div>
            </div>
            <div className="bonusBottom">
                <div className="bonusCardsContainer">
                    <BonusCards />
                    <BonusCards />
                </div>
            </div>
        </section>
        <Footer />
    </>
}