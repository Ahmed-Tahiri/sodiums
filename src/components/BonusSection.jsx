import './../assets/css/homeBonuses.css';
import './../assets/css/bonusCards.css';
import { BonusCards } from './BonusCards';
export let BonusSection = () => {
    return (<>
        <section className="bonusSection">
            <div className="bonusTop sectionTop">
                <h2 className="sectionHeading" data-aos='zoom-in-right'>Bonuses</h2>
                <p className="sectionPara" data-aos='zoom-in-left'>My Top Bonuses</p>
            </div>
            <div className="bonusBottom">
                <div className="bonusCardsContainer">
                    <BonusCards />
                </div>
            </div>
        </section>
    </>);
}