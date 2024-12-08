export function getProduct(id, all_products) {
    let res = all_products.filter(product => product.id === id);
    return (res.length === 0) ? {} : res[0];
}

export function getCurrentProductCountInCart(cartItems, productId) {
    let cnt = 0;

    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i]['id'] === (+productId)) {
            cnt++;
        }
    }
    return cnt;
}

export function getDistinctCartItems(cartItems) {
    let visited_products = [];
    let products = [];
    for (let i = 0; i < cartItems.length; i++) {
        if (!visited_products.includes(cartItems[i]['id'])) {
            products.push(cartItems[i]);
            visited_products.push(cartItems[i]['id']);
        }
    }
    return products;
}

export function getCartTotalAmount(cartItems) {
    let total = 0;

    for (let i = 0; i < cartItems.length; i++) {
        total += (cartItems[i]['price']);
    }
    return total.toFixed(2);
}

export function handleAddToCartClick(product, cartItems, setCartItems) {
    let tempCart = [...cartItems];
    tempCart.push(product);
    setCartItems(tempCart);
    return;
}

export function handleDeleteFromCartClick(cartItems, setCartItems) {
    let tempCart = [...cartItems];
    tempCart.pop();
    setCartItems(tempCart);
    return;
}

export function getCartTotalAmountExcludingDiscount(cartItems) {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let temp = ((100 * cartItems[i]['price']) / (100 - cartItems[i]['discountPercentage']));
        total += temp;
    }
    return total.toFixed(2);
}

export function getDiscountTotalAmount(cartItems) {
    let total = getCartTotalAmountExcludingDiscount(cartItems) - getCartTotalAmount(cartItems);
    return total.toFixed(2);
}