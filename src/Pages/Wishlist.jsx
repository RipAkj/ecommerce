import React from "react";
import ProductPreview from "../Components/ProductPreview/ProductPreview";
import './styles.css';

const Wishlist = ({ cartItems, setCartItems, page, setPage, wishlist, setWishlist }) => {

    return (
        <div className={`shop`}>
            {wishlist.length !== 0 ? (
                wishlist.map((product, index) => (
                    <ProductPreview
                        product={product}
                        key={index}
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        page={page}
                        setPage={setPage}
                        wishlist={wishlist}
                        setWishlist={setWishlist}
                    />
                ))
            ) : (
                <span className={'no_products_found'}> No Products Found In Wishlist</span>
            )}
        </div>
    );
};

export default Wishlist;