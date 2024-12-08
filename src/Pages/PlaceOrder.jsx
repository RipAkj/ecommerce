import React from "react";
import OrderSummary from "../Components/OrderSummary/OrderSummary";
import PlaceOrderDetail from "../Components/PlaceOrderDetail/PlaceOrderDetail";

const PlaceOrder = ({ cartItems, setCartItems, setPage }) => {
    return (
        <div className="place_order">
            <PlaceOrderDetail
                cartItems={cartItems}
                setCartItems={setCartItems}
                setPage={setPage}
            />
            <OrderSummary
                cartItems={cartItems}
            />
        </div>

    );
};

export default PlaceOrder;