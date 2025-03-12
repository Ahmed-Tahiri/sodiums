import './../../assets/css/cases.css';
import CaseImg from './../../assets/images/case.png';
import { BgDesign } from "../bgDesign"
import { Footer } from "../Footer"
import { Navbar } from "../navbar"
import { CaseCard } from '../CaseCard';


export let Cases = () => {
    let casesData = [
        {
            caseId: 'Case1',
            caseName: 'Daily',
            MinPrize: '100 Coins',
            MaxPrize: '1,000 Coins',
            extraClass: 'dailyCard',
            caseImg: CaseImg
        },
        {
            caseId: 'Case2',
            caseName: 'Weekly',
            MinPrize: '100 Coins',
            MaxPrize: '5,000 Coins',
            extraClass: 'weeklyCard',
            caseImg: CaseImg
        },
        {
            caseId: 'Case3',
            caseName: 'Monthly',
            MinPrize: '500 Coins',
            MaxPrize: '20,000 Coins',
            extraClass: 'monthlyCard',
            caseImg: CaseImg
        },
    ]
    return (
        <>
            <BgDesign />
            <Navbar />
            <section className="casesSection">
                <div className="casesTop">
                    <div className="casesTextContent">
                        <div className="casesHeading">
                            <h2 className="sectionHeading">Cases</h2>
                            <p className="sectionPara">Open Case to win Rewards!</p>
                        </div>
                    </div>
                </div>
                <div className="casesBottom">
                    <div className='casesContainer'>
                        {casesData.map((singleCase, index) => <CaseCard {...singleCase} />)}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}