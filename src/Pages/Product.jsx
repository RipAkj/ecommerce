import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../Components/ProductDetail/ProductDetail";

const Product = ({ cartItems, setCartItems, setPage }) => {
    const { productId } = useParams();
    return (
        <ProductDetail
            productId={productId}
            cartItems={cartItems}
            setCartItems={setCartItems}
            setPage={setPage}
        />
    );
};

export default Product;