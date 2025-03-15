// Function to add book to cart
function addToCart(title, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart from local storage or initialize empty cart

    // Add new book to cart
    cart.push({ title, price, image });

    // Save updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(${title} added to cart!);
}

// Function to display cart items
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="remove-from-cart" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
}

// Function to remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove book from cart
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); // Update cart display
}

// Load cart items when cart page loads
document.addEventListener("DOMContentLoaded", displayCart);
// Function to add book to cart
function addToCart(title, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart from local storage or initialize empty cart

    // Add new book to cart
    cart.push({ title, price, image });

    // Save updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(${title} added to cart!);
}

// Function to display cart items
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="remove-from-cart" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
}

// Function to remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove book from cart
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); // Update cart display
}

// Load cart items when cart page loads
document.addEventListener("DOMContentLoaded", displayCart);
