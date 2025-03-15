import { useEffect } from 'react';
import './../../assets/css/home.css';
import { BgDesign } from "../bgDesign"
import { Navbar } from "../navbar"
import { Footer } from "../Footer"
import { Landing } from "../Landing"
import { BonusSection } from "../BonusSection"
import { HomeLeaderboard } from '../HomeLeaderboard';

export let Home = () => {
    useEffect(() => {
        document.title = 'Sodium | Home'
    }, []);
    return <>
        <BgDesign />
        <Navbar />
        <main className="main">
            <Landing />
            <div data-aos="fade-up-right"><BonusSection /></div>
            <div data-aos="fade-up-left">  <HomeLeaderboard /></div>
        </main>
        <Footer />
    </>
}