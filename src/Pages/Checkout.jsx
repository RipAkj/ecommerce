import React from "react";
import CheckoutDetail from "../Components/CheckoutDetail/CheckoutDetail";

const Checkout = ({ cartItems, setCartItems, setPage }) => {
    return (
        <CheckoutDetail
            cartItems={cartItems}
            setCartItems={setCartItems}
            setPage={setPage}
        />
    );
};

export default Checkout;