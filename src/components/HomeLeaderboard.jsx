import { LeaderBoardCards } from "./LeaderBoardCards";
import { LeaderboardTime } from "./LeaderboardTime";
import { Link } from "react-router-dom";
export let HomeLeaderboard = () => {
    return (<>
        <section className="leaderboardHomeSection">
            <div className="sectionTop">
                <h2 className="sectionHeading" data-aos='zoom-in-right'>Leaderboard</h2>
                <p className="sectionPara" data-aos='zoom-in-left'>Compete in Wager Races and win huge Prizes!</p>
            </div>
            <LeaderBoardCards />
            <LeaderboardTime />
            <button data-aos='zoom-in' className="leaderboardsBtn"><Link to='/leaderboard'>Leaderboards</Link></button>
        </section>
    </>);
}