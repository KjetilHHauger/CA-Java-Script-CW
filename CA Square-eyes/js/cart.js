// // cart.js
// const cartContainer = document.getElementById("cart-container");
// const cartItemsContainer = document.getElementById('cart-items');
// const goToConfirmationBtn = document.getElementById("goToConfirmationBtn");
//
// document.addEventListener("DOMContentLoaded", function () {
//     renderCart();
//
//     goToConfirmationBtn.addEventListener("click", function () {
//         window.location.href = "/CA%20Square-eyes/html/confirmation.html";
//     });
// });
//
// function addToCart(product) {
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const existingProduct = cartItems.find(item => item.id === product.id);
//
//     if (existingProduct) {
//         existingProduct.quantity++;
//     } else {
//         cartItems.push({ id: product.id, title: product.title, price: product.price, quantity: 1 });
//     }
//
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//     renderCart();
// }
//
// function reduceFromCart(product) {
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const existingProduct = cartItems.find(item => item.id === product.id);
//
//     if (existingProduct && existingProduct.quantity > 1) {
//         existingProduct.quantity--;
//     } else if (existingProduct && existingProduct.quantity === 1) {
//         // Remove the product if the quantity is 1
//         const index = cartItems.indexOf(existingProduct);
//         if (index !== -1) {
//             cartItems.splice(index, 1);
//         }
//     }
//
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//     renderCart();
// }
//
// function renderCart() {
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//
//     cartItemsContainer.innerHTML = '';
//     let totalSum = 0;
//
//     cartItems.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             ${item.title} x${item.quantity} - Price: ${item.price * item.quantity}
//             <button onclick="reduceFromCart(${item.id})">Reduce</button>
//         `;
//         cartItemsContainer.appendChild(listItem);
//         totalSum += item.price * item.quantity;
//     });
//
//     const totalSumElement = document.getElementById('total-sum');
//     totalSumElement.textContent = `Total Sum: $${totalSum.toFixed(2)}`;
// }
// Function to handle reducing a product quantity in the cart
function reduceFromCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cartItems.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity--;

        // Remove item if quantity becomes zero
        if (existingProduct.quantity <= 0) {
            cartItems = cartItems.filter(item => item.id !== productId);
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCart();
    } else {
        console.error(`Product with ID ${productId} not found in the cart`);
    }
}

// Other existing code...

document.addEventListener("DOMContentLoaded", function () {
    // Existing code...

    // Event listener for reducing a product in the cart
    document.getElementById('reduceFromCartBtn').addEventListener('click', function () {
        const productId = getProductIdFromUrl();
        reduceFromCart(productId);
    });
});
