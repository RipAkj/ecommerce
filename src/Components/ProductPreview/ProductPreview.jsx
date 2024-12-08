import React from "react";
import { Link } from "react-router-dom";
import star_dull_icon from "../../Assets/star_dull_icon.png";
import star_icon from "../../Assets/star_icon.png"
import './styles.css';
import Description from "./Description";
import { handleAddToCartClick } from "../helperFunctions"

const ProductPreview = ({ product, key, cartItems, setCartItems, page, setPage, wishlist, setWishlist }) => {
    const showRating = (rating) => {
        let ratingArr = Array(Math.round(rating)).fill(0);
        const size = ratingArr.length;
        for (let i = 0; i < 5 - size; i++) {
            ratingArr.push(1);
        }
        return ratingArr;
    }
    const checkInWishlist = (product) => {
        for (let i = 0; i < wishlist.length; i++) {
            if (wishlist[i]['id'] === product.id) {
                return i;
            }
        }
        return null;
    }
    const handleAddToWishlist = (product) => {
        let temp = [...wishlist];
        if (Number.isInteger(checkInWishlist(product))) {
            return;
        }
        temp.push(product);
        setWishlist(temp);
        return;
    }

    const handleRemoveFromWishlist = (product) => {
        let temp = [...wishlist];
        let index = checkInWishlist(product);
        if (!Number.isInteger(index)) {
            return;
        }
        temp.splice(index, 1);
        setWishlist(temp);
        return;
    }
    console.log(wishlist)
    return (
        <div className="product_preview">
            <div className="product_preview_img">
                <Link style={{ textDecoration: 'none', color: '#ee3424' }} to={`/product/${product.id}`}>
                    <img className="thumbnail" onClick={() => { setPage('product') }} src={product.thumbnail} alt="" />
                </Link>
            </div>
            <div className="title">
                {product.title}
            </div>
            <Description text={product.description} />
            <div className="cart_review">
                <button className="add_to_cart" onClick={() => { handleAddToCartClick(product, cartItems, setCartItems) }}>ADD TO CART</button>
                <div className="discount">{product.discountPercentage}% off</div>
                <div className="review_stars">
                    <div style={{ paddingRight: '16px' }}>{product.rating}</div>
                    {showRating(product.rating).map((el, index) => (
                        (el === 0) ? <img src={star_icon} key={index} style={{ width: '18px' }} alt="" /> : <img src={star_dull_icon} key={index} alt="" />
                    ))}
                </div>
                <div className="price">
                    ₹{product.price}
                </div>
            </div>
            {Number.isInteger(checkInWishlist(product)) ? <div className="wish" onClick={() => { handleRemoveFromWishlist(product) }}>♥️</div> :
                <div className="wish" onClick={() => { handleAddToWishlist(product) }}>♡</div>}
        </div>
    );
};

export default ProductPreview;