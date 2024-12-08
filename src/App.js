import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product';
import ShopContext from './Context/ShopContext';
import useGetAllProducts from './Components/useGetAllProducts'
import { useState } from 'react';
import Checkout from './Pages/Checkout';
import PlaceOrder from './Pages/PlaceOrder';
import Wishlist from './Pages/Wishlist';

function App() {

    const { loading, data } = useGetAllProducts();
    const [page, setPage] = useState("store")
    const contextValue = {
        all_products_loading: loading,
        all_products: data
    };
    const [cartItems, setCartItems] = useState([])
    const [wishlist, setWishlist] = useState([])
    return (
        <ShopContext.Provider value={contextValue}>
            <BrowserRouter>
                <Navbar
                    cartItems={cartItems}
                    page={page}
                    setPage={setPage}
                />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Shop
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                page={page}
                                setPage={setPage}
                                wishlist={wishlist}
                                setWishlist={setWishlist}
                            />
                        }
                    />
                    <Route
                        path='/product'
                        element={
                            <Product
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                page={page}
                                setPage={setPage}
                            />
                        }
                    >
                        <Route
                            path=':productId'
                            element={
                                <Product
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                    page={page}
                                    setPage={setPage}
                                />
                            }
                        />
                    </Route>
                    <Route
                        path='/checkout'
                        element={
                            <Checkout
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                page={page}
                                setPage={setPage}
                            />
                        }
                    />
                    <Route
                        path='/place_order'
                        element={
                            <PlaceOrder
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                page={page}
                                setPage={setPage}
                            />
                        }
                    />
                    <Route
                        path='/wishlist'
                        element={
                            <Wishlist
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                page={page}
                                setPage={setPage}
                                wishlist={wishlist}
                                setWishlist={setWishlist}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ShopContext.Provider>

    );
}

export default App;

