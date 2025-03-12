export let LeaderboardTime = () => {
    return <div className="leaderboardEndTime">
        <p className="leaderboardEndText">Leaderboard Ends in:</p>
        <div className="leaderboardTime">
            <p className="timeCircle">
                <span>12</span>
                <span className="periodLetter">D</span>
            </p>
            <p className="timeCircle">
                <span>03</span>
                <span className="periodLetter">H</span>
            </p>
            <p className="timeCircle">
                <span>23</span>
                <span className="periodLetter">M</span>
            </p>
            <p className="timeCircle">
                <span>54</span>
                <span className="periodLetter">S</span>
            </p>
        </div>
    </div>
}