import './../assets/css/homeBonuses.css';
import './../assets/css/bonusCards.css';
import { BonusCards } from './BonusCards';
export let BonusSection = () => {
    return (<>
        <section className="bonusSection">
            <div className="bonusTop sectionTop">
                <h2 className="sectionHeading">Bonuses</h2>
                <p className="sectionPara">My Top Bonuses</p>
            </div>
            <div className="bonusBottom">
                <div className="bonusCardsContainer">
                    <BonusCards />
                </div>
            </div>
        </section>
    </>);
}