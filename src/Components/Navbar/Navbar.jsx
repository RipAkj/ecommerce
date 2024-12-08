import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
import store from "../../Assets/reshot-icon-store-GJ467FDTV3.svg";

const Navbar = ({ cartItems, page, setPage }) => {
    return (
        <div className="overall">
            <div className="logo">
                <Link
                    className="logo"
                    to='/'
                    onClick={() => { setPage("store"); }}
                >
                    <img className="store" src={store} alt="" />
                    Smash Kart
                </Link>
            </div>
            <div className="main">
                <Link
                    className={`main_option ${page === 'store' ? 'main_underline' : ''}`}
                    to='/'
                    onClick={() => { setPage("store"); }}
                >Store</Link>
                {(page === 'product') ? <Link
                    className={`main_option ${page === 'product' ? 'main_underline' : ''}`}
                    to='/product'
                    onClick={() => { setPage("product"); }}
                >Product</Link> : <></>}
                <Link
                    className={`main_option ${page === 'checkout' ? 'main_underline' : ''}`}
                    to='/checkout'
                    onClick={() => { setPage("checkout"); }}>
                    Checkout
                </Link>
                <Link
                    className={`main_option ${page === 'wishlist' ? 'main_underline' : ''}`}
                    to='/wishlist'
                    onClick={() => { setPage("wishlist"); }}>
                    WishList
                </Link>
            </div>
            <div className="cart_sign">
                <div className="cart_count">
                    {cartItems.length}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" xmlSpace="preserve"><path fill="#18CEF6" d="M26.029 58.156c-1.683 0-3.047 1.334-3.047 2.979 0 1.646 1.364 2.979 3.047 2.979s3.047-1.333 3.047-2.979c0-1.645-1.364-2.979-3.047-2.979zm17.795 0c-1.682 0-3.046 1.334-3.046 2.979 0 1.646 1.364 2.979 3.046 2.979 1.683 0 3.047-1.333 3.047-2.979 0-1.645-1.364-2.979-3.047-2.979zM22.515 26.997l5.416 14.5h21.793l6.189-14.5H22.515z" /><path fill="#233251" d="m58.753 13-9.67 28.181H23.85l-6.527-17.968h29.111v-2.27H14.036l7.722 21.258-6.281 10.643h35.794v-2.271H19.494l4.207-7.125h27.051l9.67-28.18H71V13H58.753zm-33.4 41.861c-3.134.002-5.674 2.484-5.676 5.548.002 3.065 2.542 5.548 5.676 5.549 3.133-.002 5.672-2.485 5.672-5.549 0-3.064-2.539-5.546-5.672-5.548zm0 8.827c-1.853-.003-3.35-1.468-3.353-3.279.003-1.81 1.5-3.274 3.353-3.277 1.849.003 3.349 1.467 3.352 3.277-.003 1.812-1.503 3.276-3.352 3.279zm17.794-8.827c-3.134.002-5.673 2.484-5.674 5.548.001 3.065 2.54 5.548 5.674 5.549 3.134-.002 5.672-2.485 5.674-5.549-.002-3.064-2.54-5.546-5.674-5.548zm0 8.827c-1.851-.003-3.349-1.468-3.352-3.279.003-1.81 1.501-3.274 3.352-3.277 1.851.003 3.35 1.467 3.353 3.277-.003 1.812-1.502 3.276-3.353 3.279z" /></svg>
                Cart
            </div>
        </div>
    )
};

export default Navbar;
