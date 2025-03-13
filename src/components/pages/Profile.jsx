import { useState } from "react";
import { BgDesign } from "../bgDesign";
import { Footer } from "../Footer";
import { Navbar } from "../navbar";
import karambit from './../../assets/images/karambit.png';
import './../../assets/css/profile.css';
import babyBoss from './../../assets/images/babyBoss.png';
import { InventoryCard } from "../InventoryCard";
import { ProfileForm } from "../ProfileForm";
export let Profile = () => {
    let inventoryData = [
        {
            productName: 'Karambit | Slaughter',
            productPrice: '$1000',
            productImg: karambit,
            productId: 'inventory1',
        },
        {
            productName: 'Karambit | Slaughter',
            productPrice: '$1000',
            productImg: karambit,
            productId: 'inventory2',
        },
        {
            productName: 'Karambit | Slaughter',
            productPrice: '$1000',
            productImg: karambit,
            productId: 'inventory3',
        },

    ]
    return (
        <>
            <BgDesign />
            <Navbar />
            <section className="profileSection">
                <div className="profileTop">
                    <div className="profileTextContent">
                        <div className="profileHeading">
                            <h2 className="sectionHeading">Profile</h2>
                        </div>
                    </div>
                </div>
                <div className="profileBottom">
                    <div className="profileContent">
                        <div className="ProfileDisplay">
                            <img className="profilePicture" alt="Profile Picture" src={babyBoss} />
                            <span className="divider"></span>
                            <div className="profileTextContent">
                                <p className="profileHeading">My Profile</p>
                                <div className="profileInfoSection">
                                    <p className="profileData">
                                        <span>Username</span>
                                        <span>.bossbaby</span>
                                    </p>
                                    <p className="profileData">
                                        <span>E-Mail</span>
                                        <span>bossbaby@gmail.com</span>
                                    </p>
                                    <p className="profileData">
                                        <span>Wagered</span>
                                        <span>$20,018.27</span>
                                    </p>
                                    <p className="profileData">
                                        <span>Rank</span>
                                        <span>SodiumHero</span>
                                    </p>
                                </div>
                                <div className="progressDetail">
                                    <p className="progressHeading">Progress</p>
                                    <div className="progress-container">
                                        <div className="progress-fill"></div>
                                        <div className="progress-text">64%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ProfileDetails">
                            <div className="idsSection">
                                <ProfileForm />
                            </div>
                            <div className="inventorySection">
                                <h2 className="sectionHeading">My Inventory</h2>
                                <div className="inventoryCardsContainer">
                                    {inventoryData.map((inventoryCard, index) => <InventoryCard {...inventoryCard} key={inventoryCard.productId} />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}