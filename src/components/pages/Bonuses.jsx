import { useEffect } from "react";
import { Navbar } from "../navbar";
import { BgDesign } from "../bgDesign";
import { Footer } from '../Footer';
import { BonusCards } from "../BonusCards";
import './../../assets/css/bonuses.css';
import './../../assets/css/bonusCards.css';
export let Bonuses = () => {
    useEffect(() => {
        document.title = 'Sodium | Bonuses'
    }, []);
    return <>
        <BgDesign />
        <Navbar />
        <section className="bonusSection">
            <div className="bonusTop">
                <div className="bonusTextContent">
                    <div className="bonusHeading">
                        <h2 className="sectionHeading" data-aos='zoom-in-right'>Bonuses</h2>
                        <p className="sectionPara" data-aos='zoom-in-left'>Claim exclusive Offers with Code "Sodiums"</p>
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