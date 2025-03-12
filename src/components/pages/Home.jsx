import './../../assets/css/home.css';
import { BgDesign } from "../bgDesign"
import { Navbar } from "../navbar"
import { Footer } from "../Footer"
import { Landing } from "../Landing"
import { BonusSection } from "../BonusSection"
import { HomeLeaderboard } from '../HomeLeaderboard';
export let Home = () => {
    return <>
        <BgDesign />
        <Navbar />
        <main className="main">
            <Landing />
            <BonusSection />
            <HomeLeaderboard />
        </main>
        <Footer />
    </>
}