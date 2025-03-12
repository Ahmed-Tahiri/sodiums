
export let StoreCard = ({ productId, productName, productImage, productPrice, productQuantity }) => {
    return <div className='storeCard'>
        <div className='stockContainer'>
            <span className='stockText'>In Stock:</span>
            <span className='stockQua'>{productQuantity}</span>
        </div>
        <img className='storeItemImg' src={productImage} alt="Product Image" />
        <div className='itemDetails'>
            <p className='itemText'>Item</p>
            <p className='itemName'>{productName}</p>
        </div>
        <button type='button' className='purchaseBtn'>Buy for {productPrice}</button>
    </div>
}