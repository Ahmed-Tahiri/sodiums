import { useEffect } from 'react';
import babyBoss from './../assets/images/babyBoss.png';
export let LeaderBoardCards = ({ activePartner }) => {
    let cardsData;
    if (activePartner.big) {
        cardsData = [
            {
                cardId: 'card1',
                leaderName: 'Bo****y',
                pen: 'pen2',
                leaderPosition: '2',
                animation: 'zoom-in-right',
                leaderImg: babyBoss,
                score: '$12,245.86',
                price: '$1,000.00',
                cardExtraClass: '',
            },
            {
                cardId: 'card2',
                leaderName: 'Bo****y',
                pen: 'pen1',
                leaderPosition: '1',
                animation: 'zoom-in',
                leaderImg: babyBoss,
                score: '$12,245.86',
                price: '$1,000.00',
                cardExtraClass: 'slideTop',
            },
            {
                cardId: 'Card3',
                leaderName: 'Bo****y',
                pen: 'pen3',
                leaderPosition: '3',
                animation: 'zoom-in-left',
                leaderImg: babyBoss,
                score: '$12,245.86',
                price: '$1,000.00',
                cardExtraClass: '',
            }
        ]
    }
    if (activePartner.rain) {
        cardsData = [
            {
                cardId: 'card1',
                leaderName: 'Sc****y',
                pen: 'pen2',
                leaderPosition: '2',
                animation: 'zoom-in-right',
                leaderImg: babyBoss,
                score: '$11,390.14',
                price: '$1,200.00',
                cardExtraClass: '',
            },
            {
                cardId: 'card2',
                leaderName: 'Sc****y',
                pen: 'pen1',
                leaderPosition: '1',
                animation: 'zoom-in',
                leaderImg: babyBoss,
                score: '$11,390.14',
                price: '$1,200.00',
                cardExtraClass: 'slideTop',
            },
            {
                cardId: 'Card3',
                leaderName: 'Sc****y',
                pen: 'pen3',
                leaderPosition: '3',
                animation: 'zoom-in-left',
                leaderImg: babyBoss,
                score: '$11,390.14',
                price: '$1,200.00',
                cardExtraClass: '',
            }
        ]

    }
    if (activePartner.clash) {
        cardsData = [
            {
                cardId: 'card1',
                leaderName: 'An****y',
                pen: 'pen2',
                leaderPosition: '2',
                animation: 'zoom-in-right',
                leaderImg: babyBoss,
                score: '$10,220.29',
                price: '$1,100.00',
                cardExtraClass: '',
            },
            {
                cardId: 'card2',
                leaderName: 'An****y',
                pen: 'pen1',
                leaderPosition: '1',
                animation: 'zoom-in',
                leaderImg: babyBoss,
                score: '$10,220.29',
                price: '$1,100.00',
                cardExtraClass: 'slideTop',
            },
            {
                cardId: 'Card3',
                leaderName: 'An****y',
                pen: 'pen3',
                leaderPosition: '3',
                animation: 'zoom-in-left',
                leaderImg: babyBoss,
                score: '$10,220.29',
                price: '$1,100.00',
                cardExtraClass: '',
            }
        ]

    }
    useEffect(() => {
        console.log('');
    }, [cardsData]);
    return (
        <div className="leaderboardTextCards">
            {
                cardsData.map((card, index) => <div className={`leaderboardCard ${card.cardExtraClass}`} data-aos={card.animation} key={card.cardId}>
                    <div className="cardTop">
                        <div className="cardImageContainer">
                            <img src={card.leaderImg} alt="Baby Boss Picture" />
                            <p className={`pentagon ${card.pen}`}><span>{card.leaderPosition}</span></p>
                        </div>
                        <p className="leaderName">{card.leaderName}</p>
                    </div>

                    <div className="cardBottom">
                        <div className="wagered">
                            <span></span>
                            <p className="wageredText">Wagered</p>
                            <span></span>
                        </div>
                        <div className="prizeContainer">
                            <p className="score">{card.score}</p>
                            <p className="cashPrize">{card.price}</p>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
}