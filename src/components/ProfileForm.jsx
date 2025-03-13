import { useState } from 'react';
export let ProfileForm = () => {
    const [formData, setFormData] = useState({
        streamTrade: "",
        crrAdd: "",
        rainggId: "",
        CSGOBigId: "",
        clashGGId: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (<>
        <form className="idsForm" onSubmit={(e) => e.preventDefault()}>
            <div className="inputContainer">
                <label htmlFor="streamTrade">Stream Trade URL</label>
                <input type="text" id="streamTrade" name="streamTrade" value={formData.streamTrade} onChange={handleChange} />
            </div>
            <div className="inputContainer">
                <label htmlFor="crrAdd">BTC / ETH / LTC Address</label>
                <input type="text" id="crrAdd" name="crrAdd" value={formData.crrAdd} onChange={handleChange} />
            </div>
            <div className="inputContainer">
                <label htmlFor="rainggId">RainGG ID</label>
                <input type="text" id="rainggId" name="rainggId" value={formData.rainggId} onChange={handleChange} />
            </div>
            <div className="inputContainer">
                <label htmlFor="CSGOBigId">CSGOBig ID</label>
                <input type="text" id="CSGOBigId" name="CSGOBigId" value={formData.CSGOBigId} onChange={handleChange} />
            </div>
            <div className="inputContainer">
                <label htmlFor="clashGGId">ClashGG ID</label>
                <input type="text" id="clashGGId" name="clashGGId" value={formData.clashGGId} onChange={handleChange} />
            </div>
            <button type="submit" className="idFormBtn">Save and Verify</button>
        </form>
    </>);
}