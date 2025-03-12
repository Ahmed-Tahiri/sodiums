
export let InventoryCard = ({ productName, productPrice, productId, productImg }) => {
    return (
        <div className="inventoryCard" key={productId}>
            <div className="productDetails">
                <p className="productName">{productName}</p>
                <p className="productPrice">{productPrice}</p>
                <img className="productImg" src={productImg} alt="product Picture" />
            </div>
            <button type="button" className="requestBtn">Request</button>
        </div>);
}