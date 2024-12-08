import React, { useContext } from "react";
import ProductPreview from "../Components/ProductPreview/ProductPreview";
import ShopContext from "./../Context/ShopContext";
import './styles.css';

const Shop = ({ cartItems, setCartItems, page, setPage, wishlist, setWishlist }) => {
    const { loading, all_products } = useContext(ShopContext);

    if (loading) {
        return (
            <div>Still loading </div>
        )
    }

    return (
        <div className={`shop`}>
            {all_products.length !== 0 ? (
                all_products['products'].map((product, index) => (
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
                <span className={'no_products_found'}> No Products Found </span>
            )}
        </div>
    );
};

export default Shop;