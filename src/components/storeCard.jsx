import saleBadge from './../assets/images/saleShape.png';
export let StoreCard = ({ productName, productImage, productPrice, productQuantity, display }) => {
    return <div className='storeCard' data-aos="fade-up">
        <div className={`saleBadge ${display}`}>
            <img src={saleBadge} alt='Sale Badge' />
            <span>Limited Offer</span>
        </div>
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