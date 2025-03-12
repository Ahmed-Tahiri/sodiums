import './../../assets/css/store.css';
import { BgDesign } from "../bgDesign";
import { Footer } from "../Footer";
import { Navbar } from "../navbar";

export let Store = () => {
    return <>
        <BgDesign />
        <Navbar />
        <section className="storeSection">
            <div className="storeTop">
                <div className="storeTextContent">
                    <div className="storeHeading">
                        <h2 className="sectionHeading">Store</h2>
                        <h2 className="sectionPara">Buy Rewards & more with your Points</h2>
                    </div>
                </div>
            </div>
            <div className="storeBottom">
            </div>
        </section>
        <Footer />
    </>
}