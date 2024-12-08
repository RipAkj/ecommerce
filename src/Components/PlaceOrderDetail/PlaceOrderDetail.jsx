import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css';
import { getCartTotalAmount } from "../helperFunctions";
import EachAddress from "./EachAddress";
import NewAddressForm from "./NewAddressForm";
const PLATFORM_FEE = 3
const ADDRESS = [
    {
        "name": "Abhishek Kumar Jha",
        "mobile_number": "7002447403",
        "address": "Plot 28 Cogoport Office Rsp Tower, Behind Fortis Hospital",
        "city": "gurugram",
        "state": "haryana",
        "pincode": "122003",
        "tag": "HOME"
    },
    {
        "name": "Abhishek Kumar Jha",
        "mobile_number": "7002447403",
        "address": "Plot 28 Cogoport Office Rsp Tower, Behind Fortis Hospital",
        "city": "gurugram",
        "state": "haryana",
        "pincode": "122003",
        "tag": "HOME"
    },
    {
        "name": "Abhishek Kumar Jha",
        "mobile_number": "7002447403",
        "address": "Plot 28 Cogoport Office Rsp Tower, Behind Fortis Hospital",
        "city": "gurugram",
        "state": "haryana",
        "pincode": "122003",
        "tag": "HOME"
    },
    {
        "name": "Abhishek Kumar Jha",
        "mobile_number": "7002447403",
        "address": "Plot 28 Cogoport Office Rsp Tower, Behind Fortis Hospital",
        "city": "gurugram",
        "state": "haryana",
        "pincode": "122003",
        "tag": "HOME"
    },
    {
        "name": "Abhishek Kumar Jha",
        "mobile_number": "7002447403",
        "address": "Plot 28 Cogoport Office Rsp Tower, Behind Fortis Hospital",
        "city": "gurugram",
        "state": "haryana",
        "pincode": "122003",
        "tag": "HOME"
    },
    {
        "name": "Abhishek Kumar Jha",
        "mobile_number": "7002447403",
        "address": "Plot 28 Cogoport Office Rsp Tower, Behind Fortis Hospital",
        "city": "gurugram",
        "state": "haryana",
        "pincode": "122003",
        "tag": "HOME"
    },
    {
        "name": "Abhishek Kumar Jha",
        "mobile_number": "7002447403",
        "address": "Plot 28 Cogoport Office Rsp Tower, Behind Fortis Hospital",
        "city": "gurugram",
        "state": "haryana",
        "pincode": "122003",
        "tag": "HOME"
    }
]

const PlaceOrderDetail = ({ cartItems, setCartItems, setPage }) => {
    const [div, setDiv] = useState(null);
    const [addressIndexSelected, setAddressIndexSelected] = useState(null);
    const [showAllAddress, setShowAllAddress] = useState(false);
    const [deliveryAddress, setDeliveryAddress] = useState(null);
    const [editAddressIndex, setEditAddressIndex] = useState(-1);
    const handlePayNowClick = () => {
        setPage('store');
        setDiv(null);
        setAddressIndexSelected(null);
        setShowAllAddress(false);
        setDeliveryAddress(null);
        setCartItems([]);
        alert("payment made successfully.");
        return;
    }
    return (
        <div className="po_overall">
            <div className={`delivery_address_whole_div`}>
                <div
                    className={`delivery_address_header ${(div === 'delivery_address') ? 'opened' : ''}`}
                    onClick={() => { setDiv('delivery_address') }}
                >
                    <div className="no">1</div>
                    <div className="delivery_address_title">DELIVERY ADDRESS</div>
                    {!deliveryAddress ? <div className="close" onClick={() => setDiv('payment_options')}>X</div> :
                        <div className="close">DONE</div>}

                </div>
                {div === 'delivery_address' && !deliveryAddress &&
                    <div className="addresses">
                        {ADDRESS.slice(0, showAllAddress ? ADDRESS.length : 3).map((address, index) => (
                            <EachAddress
                                address={address}
                                index={index}
                                addressIndexSelected={addressIndexSelected}
                                setAddressIndexSelected={setAddressIndexSelected}
                                setDeliveryAddress={setDeliveryAddress}
                                editAddressIndex={editAddressIndex}
                                setEditAddressIndex={setEditAddressIndex}
                                ADDRESS={ADDRESS}
                                setShowAllAddress={setShowAllAddress}
                                setDiv={setDiv}
                            />
                        ))}
                    </div>

                }
                {div === 'delivery_address' && !deliveryAddress && ADDRESS.length > 3 && !showAllAddress && (
                    <div className={`delivery_address_header`} onClick={() => setShowAllAddress(true)}>
                        <div className="plus_">&gt</div>
                        <div className="plus_right">View all {ADDRESS.length} addresses</div>
                    </div>
                )}
            </div>
            {!deliveryAddress && <div className="new_address_whole_div">
                {div !== 'add_new_address' ?
                    <div className={`delivery_address_header`} onClick={() => { setDiv('add_new_address') }}>
                        <div className="plus_">+</div>
                        <div className="plus_right">Add a new address</div>
                    </div> :
                    <NewAddressForm
                        ADDRESS={ADDRESS}
                        setAddressIndexSelected={setAddressIndexSelected}
                        setShowAllAddress={setShowAllAddress}
                        setDeliveryAddress={setDeliveryAddress}
                        setDiv={setDiv}
                        label={`ADD A NEW ADDRESS`}
                        setEditAddressIndex={setEditAddressIndex}
                    />}
            </div>}
            <div className="payment_options_whole_div">
                <div
                    className={`delivery_address_header ${(div === 'payment_options') ? 'opened' : ''}`}
                    onClick={() => { setDiv('payment_options') }}
                >
                    <div className="no">2</div>
                    <div className="delivery_address_title">PAYMENT OPTIONS</div>
                    <div className="close"></div>
                </div>
                {div === "payment_options" && (
                    <div className="amt_input">
                        <input type="text" placeholder={Math.floor(+getCartTotalAmount(cartItems) + PLATFORM_FEE)} />
                        <Link to="/"><button className="pay_now" onClick={handlePayNowClick}> PAY NOW </button></Link>
                    </div>
                )}
            </div>
        </div>
    )
};

export default PlaceOrderDetail;