export let CaseCard = ({ caseId, caseImg, MaxPrize, MinPrize, extraClass, caseName }) => {
    return <div className={`caseCard ${extraClass}`} key={caseId}>
        <img src={caseImg} alt='Case Picture' />
        <div className='caseTextContainer'>
            <h4 className='caseHeading'>{caseName}</h4>
            <div className='casePrize'>
                <p>
                    <span>Min. Prize</span>
                    <span>Max. Prize</span>
                </p>
                <p>
                    <span>{MinPrize}</span>
                    <span>{MaxPrize}</span>
                </p>
            </div>
            <button className='caseBtn'>Open Case</button>
        </div>
    </div>
}