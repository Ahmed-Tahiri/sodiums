import './../../assets/css/Bonuses.css';
import { BgDesign } from "../bgDesign"
import { Navbar } from "../navbar"
import { Footer } from "../Footer"
import { Landing } from "../Landing"
import { BonusSection } from "../BonusSection"
export let Home = () => {
    return <>
        <BgDesign />
        <Navbar />
        <main className="main">
            <Landing />
            <BonusSection />
        </main>
        <Footer />
    </>
}