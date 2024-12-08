import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import { getDistinctCartItems, getCurrentProductCountInCart, getCartTotalAmount, handleAddToCartClick, handleDeleteFromCartClick } from "../helperFunctions";

const CheckoutDetail = ({ cartItems, setCartItems, setPage }) => {
    const distinct_items = getDistinctCartItems(cartItems);
    return (
        <>
            {distinct_items.length !== 0 ? (
                distinct_items.map((product, index) => (
                    <div className="row">
                        <div className="img">{product.thumbnail}</div>
                        <div className="minus" onClick={() => { handleDeleteFromCartClick(cartItems, setCartItems) }}>-</div>
                        <div className="qty">{getCurrentProductCountInCart(cartItems, product.id)}</div>
                        <div className="plus" onClick={() => { handleAddToCartClick(product, cartItems, setCartItems) }}>+</div>
                        <div className="price">₹{(getCurrentProductCountInCart(cartItems, product.id) * product.price).toFixed(2)}</div>
                    </div>
                ))
            ) : (
                <span className={'no_products_found'}> No Products Found in Cart</span>
            )}
            {(cartItems.length !== 0) ? (
                <div className="total">
                    {getCartTotalAmount(cartItems)}
                </div>

            ) : <></>}
            {(cartItems.length !== 0) ? (
                <Link
                    className="place_order"
                    to='/place_order'
                    onClick={() => { setPage("place_order"); }}
                >
                    <button className="place_order_btn">
                        PLACE ORDER HERE
                    </button>
                </Link >

            ) : <Link
                className="place_order"
                to='/'
                onClick={() => { setPage("store"); }}
            >
                <button className="place_order_btn">
                    GO TO STORE
                </button>
            </Link >}
        </>
    )
};

export default CheckoutDetail;