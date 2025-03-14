import { useEffect } from 'react';
import './../../assets/css/store.css';
import { BgDesign } from "../bgDesign";
import { Footer } from "../Footer";
import { Navbar } from "../navbar";
import { LiaSlidersHSolid } from "react-icons/lia";
import { LuSearch } from "react-icons/lu";
import storeSniper from './../../assets/images/storeSniper.png';
import { StoreCard } from '../storeCard';

export let Store = () => {
    useEffect(() => {
        document.title = 'Sodium | Store';
    }, []);
    let storeData = [
        {
            productId: 'Prod1',
            productQuantity: '5',
            productImage: storeSniper,
            productName: 'AWP | Gungnir (Factory New)',
            productPrice: '100,000',
            display: 'none'
        },
        {
            productId: 'Prod2',
            productQuantity: '5',
            productImage: storeSniper,
            productName: 'AWP | Gungnir (Factory New)',
            productPrice: '100,000',
            display: 'flex'
        },
        {
            productId: 'Prod3',
            productQuantity: '5',
            productImage: storeSniper,
            productName: 'AWP | Gungnir (Factory New)',
            productPrice: '100,000',
            display: 'none'
        },
        {
            productId: 'Prod4',
            productQuantity: '5',
            productImage: storeSniper,
            productName: 'AWP | Gungnir (Factory New)',
            productPrice: '100,000',
            display: 'flex'
        },
        {
            productId: 'Prod5',
            productQuantity: '5',
            productImage: storeSniper,
            productName: 'AWP | Gungnir (Factory New)',
            productPrice: '100,000',
            display: 'none'
        },
        {
            productId: 'Prod6',
            productQuantity: '5',
            productImage: storeSniper,
            productName: 'AWP | Gungnir (Factory New)',
            productPrice: '100,000',
            display: 'flex'
        },
        {
            productId: 'Prod7',
            productQuantity: '5',
            productImage: storeSniper,
            productName: 'AWP | Gungnir (Factory New)',
            productPrice: '100,000',
            display: 'none'
        },
        {
            productId: 'Prod8',
            productQuantity: '5',
            productImage: storeSniper,
            productName: 'AWP | Gungnir (Factory New)',
            productPrice: '100,000',
            display: 'flex'
        },
    ];
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
                <div className='storePreferences'>
                    <div className='searchBox'>
                        <span><LuSearch /></span>
                        <input type='text' placeholder='Search' autoComplete='off' name='search' id='search' />
                    </div>
                    <div className='filterContainer'>
                        <button type='button' className='filterBtn'><LiaSlidersHSolid /></button>
                        <p className='sliderMessage'>From High to Low</p>
                    </div>
                </div>
                <div className='storeCardsContainer'>
                    {storeData.map((product, index) => <StoreCard {...product} key={product.productId} />)}
                </div>
            </div>
        </section>
        <Footer />
    </>
}