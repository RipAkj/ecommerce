import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../../Context/ShopContext";
import './styles.css';
import { getCurrentProductCountInCart, handleAddToCartClick, handleDeleteFromCartClick } from "../helperFunctions";

const ProductDetail = ({ productId, cartItems, setCartItems, setPage }) => {
    const { all_products } = useContext(ShopContext);
    const product = all_products['products'].filter((item) => { return item['id'] === (+productId) })[0];
    if (!product) {
        return <> Wrong </>
    }

    return (
        <>
            <div className="right">
                <div className="minus" onClick={() => { handleDeleteFromCartClick(cartItems, setCartItems) }}>-</div>
                <div className="cnt">{getCurrentProductCountInCart(cartItems, productId)}</div>
                <div className="plus" onClick={() => { handleAddToCartClick(product, cartItems, setCartItems) }}>+</div>
                <div className="price">₹{(getCurrentProductCountInCart(cartItems, productId) * product.price).toFixed(2)}</div>
                <Link style={{ textDecoration: 'none', color: '#ee3424' }} to={`/checkout`}>
                    <button className="checkout" onClick={() => { setPage('checkout') }}>Go To Checkout</button>
                </Link>
            </div >
            <div className="left">
                <div className="product_preview_img_list">
                    {product.images.length !== 0 ? (
                        product.images.map((imageLink, index) => (
                            <img src={imageLink} alt="" />
                        ))
                    ) : (
                        <span className={'no_tasks'}> No Image Found </span>
                    )}
                </div>
            </div>
        </>
    )
};

export default ProductDetail;