import React, { useState } from "react";
import './styles.css';

const NewAddressForm = ({
    ADDRESS,
    setAddressIndexSelected,
    setShowAllAddress,
    setDeliveryAddress,
    setDiv,
    to_be_edited_address,
    label,
    setEditAddressIndex
}) => {

    const [formData, setFormData] = useState(
        (to_be_edited_address) ? to_be_edited_address : {
            name: "",
            mobile_number: "",
            address: "",
            city: "",
            state: "",
            pincode: "",
            tag: ""
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDiv("payment_options");
        if (setEditAddressIndex !== -1 && setEditAddressIndex < ADDRESS.length) {
            ADDRESS[setEditAddressIndex] = formData;
        }
        else {
            ADDRESS.push(formData);
        }
        setDeliveryAddress(formData);
        setAddressIndexSelected(null);
        setShowAllAddress(false);
        setEditAddressIndex(-1);

        return;
    };

    const handleCancelClick = () => {
        setDiv("delivery_address");
        setAddressIndexSelected(null);
        setShowAllAddress(false);
        setDeliveryAddress(null);
        setEditAddressIndex(-1);
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="add_a_new_address">
                <input
                    type="radio"
                    name="address_radio"
                    id="address_radio"
                    checked={true}
                />
                <div className="add_a_new_address_text">{label}</div>
            </div>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="input"
            />
            <input
                type="text"
                id="mobile_number"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className="input"
            />
            <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="address"
                required
                className="input"
            />
            <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="input"
            />
            <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                required
                className="input"
            />
            <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pin Code"
                required
                className="input"
            />
            <input
                type="text"
                id="tag"
                name="tag"
                value={formData.tag}
                onChange={handleChange}
                placeholder="Tag"
                required
                className="input"
            />
            <button
                type="submit"
                className="actual_address_middle_bottom"
            >
                SAVE AND DELIVER HERE
            </button>
            <div
                type="submit"
                className="cancel"
                onClick={handleCancelClick}
            >
                CANCEL
            </div>
        </form>
    );
};

export default NewAddressForm;
