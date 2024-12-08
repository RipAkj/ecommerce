import React from "react";
import './styles.css';
import shield from "../../Assets/shield.jpg"
import { getCartTotalAmount, getCartTotalAmountExcludingDiscount, getDiscountTotalAmount } from "../helperFunctions";

const PLATFORM_FEE = 3;
const OrderSummary = ({ cartItems }) => {
    return (
        <div className="overall_po">
            <div className="white">
                <div className="price_details">
                    PRICE DETAILS
                </div>
                <br></br>
                <div className="price_po">
                    <div className="price_left">Price({cartItems.length} items)</div>
                    <div className="price_right">₹{getCartTotalAmountExcludingDiscount(cartItems)}</div>
                </div>
                <div className="discount_po">
                    <div className="discount_left">Discount</div>
                    <div className="discount_right">- ₹{getDiscountTotalAmount(cartItems)}</div>
                </div>
                <div className="platform_fee">
                    <div className="platform_fee_left">Platform Fee</div>
                    <div className="platform_fee_right">₹{PLATFORM_FEE}</div>
                </div>
                <div className="delivery_charges">
                    <div className="delivery_charges_left">Delivery Charges</div>
                    <div className="delivery_charges_right">
                        <span className="cut">₹40</span> <span className="free">Free</span>
                    </div>
                </div>
                <div className="total_amount">
                    <div className="total_amount_left">Total Amount(Rounded)</div>
                    <div className="total_amount_right">₹{Math.floor(+getCartTotalAmount(cartItems) + PLATFORM_FEE)}</div>
                </div>
                <div className="saving">
                    You will save ₹{getDiscountTotalAmount(cartItems)} on this order
                </div>
            </div>

            <div className="safe">
                <img src={shield} alt="" className="shield" />
                <span className="safe_text">Safe and Secure Payments.Easy returns.100% Authentic products.</span>
            </div>
        </div>
    )
};

export default OrderSummary;