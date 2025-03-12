import { BgDesign } from "../bgDesign"
import { Navbar } from "../navbar"
import { Footer } from "../Footer"
import { Landing } from "../Landing"

export let Home = () => {
    return <>
        <BgDesign />
        <Navbar />
        <main className="main">
            <Landing />
        </main>
        <Footer />
    </>
}