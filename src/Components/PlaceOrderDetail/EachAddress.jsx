import React from "react";
import './styles.css';
import NewAddressForm from "./NewAddressForm";

const EachAddress = ({
    address,
    index,
    addressIndexSelected,
    setAddressIndexSelected,
    setDeliveryAddress,
    editAddressIndex,
    setEditAddressIndex,
    ADDRESS,
    setShowAllAddress,
    setDiv
}) => {
    return (
        (editAddressIndex !== index) ? (
            <div className={`each_address_whole_div ${addressIndexSelected === index ? 'selected_address' : ''}`} >
                <input
                    type="radio"
                    name="address_radio"
                    id="address_radio"
                    onClick={() => { setAddressIndexSelected(index) }}
                />
                <div className="actual_address_middle">
                    <div className="actual_address_middle_top">
                        <div className="actual_address_name">{address.name}</div>
                        <div className="actual_address_tag">{address.tag}</div>
                        <div className="actual_address_name">{address.mobile_number}</div>
                    </div>
                    <div className="actual_address_middle_middle">{address.address}</div>
                    {addressIndexSelected === index && (
                        <button
                            className="actual_address_middle_bottom"
                            onClick={() => setDeliveryAddress(address)}
                        >
                            DELIVER HERE
                        </button>
                    )}
                </div>
                <div className="edit" onClick={() => { setEditAddressIndex(index) }}>EDIT</div>
            </div >
        ) :
            <NewAddressForm
                ADDRESS={ADDRESS}
                setAddressIndexSelected={setAddressIndexSelected}
                setShowAllAddress={setShowAllAddress}
                setDeliveryAddress={setDeliveryAddress}
                setDiv={setDiv}
                label={`EDIT EXISTING ADDRESS`}
                to_be_edited_address={address}
                setEditAddressIndex={setEditAddressIndex}
            />
    );
};


export default EachAddress;