// const productContainer = document.getElementById("product-details");
// const addToCartBtn = document.getElementById("addToCartBtn");
// const cartContainer = document.getElementById("cart-container");
// const goToConfirmationBtn = document.getElementById("goToConfirmationBtn");
//
// function getProductDetails(productId) {
//     const productUrl = `https://api.noroff.dev/api/v1/square-eyes/${productId}`;
//
//     return fetch(productUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .catch(error => {
//             console.error("Error fetching product details", error);
//             throw error;
//         });
// }
//
// function renderProductDetails(product) {
//     if (!productContainer) {
//         console.error("Product container not found");
//         return;
//     }
//
//     productContainer.innerHTML = `
//         <div id="product-details">
//             <img class="ProductImage" src="${product.image}" alt="${product.title}">
//             <h2 class="productTitle">${product.title}</h2>
//             <p class="productDescription">${product.description}</p>
//             <p class="productPrice">${product.price}</p>
//         </div>
//     `;
// }
//
// function getProductIdFromUrl() {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get("id");
// }
//
// document.addEventListener("DOMContentLoaded", function () {
//     const productId = getProductIdFromUrl();
//
//     if (productId) {
//         getProductDetails(productId)
//             .then(product => {
//                 renderProductDetails(product);
//             })
//             .catch(error => {
//                 console.error("Error fetching or rendering product details", error);
//             });
//     } else {
//         console.error("Product ID not found in the URL");
//     }
//
//     addToCartBtn.addEventListener("click", function () {
//         if (productId) {
//             getProductDetails(productId)
//                 .then(product => {
//                     addToCart(product);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching or rendering product details', error);
//                 });
//         } else {
//             console.error('Product ID not found in the URL');
//         }
//     });
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
//     alert('Product added to the cart!');
//     renderCart();
// }
//
// function renderCart() {
//     const cartItemsContainer = document.getElementById('cart-items');
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//
//     cartItemsContainer.innerHTML = '';
//
//     let totalSum = 0;
//
//     cartItems.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${item.title} x${item.quantity} - Price: ${item.price * item.quantity}`;
//         cartItemsContainer.appendChild(listItem);
//         totalSum += item.price * item.quantity;
//     });
//
//     const totalSumElement = document.createElement('li');
//     totalSumElement.textContent = `Total Sum: ${totalSum}`;
//     cartItemsContainer.appendChild(totalSumElement);
// }
//
//
//
// Function to extract product ID from URL
// function getProductIdFromUrl() {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get("id");
// }
//
// function getProductDetails(productId) {
//     const productUrl = `https://api.noroff.dev/api/v1/square-eyes/${productId}`;
//
//     return fetch(productUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .catch(error => {
//             console.error("Error fetching product details", error);
//             throw error;
//         });
// }
//
// // Function to render product details on the product page
// function renderProductDetails(product) {
//     const productContainer = document.getElementById("product-details");
//     if (!productContainer) {
//         console.error("Product container not found");
//         return;
//     }
//     // Render product details directly
//     productContainer.innerHTML = `
//         <div id="product-details">
//             <img class="ProductImage" src="${product.image}" alt="${product.title}">
//             <h2 class="productTitle">${product.title}</h2>
//             <p class="productDescription">${product.description}</p>
//             <p class="productPrice">${product.price}</p>
//             <button class="addToCart" id="addToCartBtn">Add to Cart</button>
//             <button class="reduceFromCart" id="reduceFromCartBtn">Reduce from Cart</button>
//         </div>
//     `;
// }
//
// // Function to handle adding a product to the cart
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
//     alert('Product added to the cart!');
// }
//
// // Function to handle reducing a product quantity in the cart
// function reduceFromCart(productId) {
//     let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//
//     const existingProduct = cartItems.find(item => item.id === productId);
//
//     if (existingProduct) {
//         existingProduct.quantity--;
//
//         // Remove item if quantity becomes zero
//         if (existingProduct.quantity <= 0) {
//             cartItems = cartItems.filter(item => item.id !== productId);
//         }
//
//         localStorage.setItem('cart', JSON.stringify(cartItems));
//         renderCart();
//     } else {
//         console.error(`Product with ID ${productId} not found in the cart`);
//     }
// }
//
// // Function to render the cart (optional)
// function renderCart() {
//     const cartItemsContainer = document.getElementById('cart-items');
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//
//     cartItemsContainer.innerHTML = '';
//
//     let totalSum = 0;
//
//     cartItems.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${item.title} x${item.quantity} - Price: ${item.price * item.quantity}`;
//         cartItemsContainer.appendChild(listItem);
//         totalSum += item.price * item.quantity;
//     });
//
//     const totalSumElement = document.createElement('li');
//     totalSumElement.textContent = `Total Sum: ${totalSum}`;
//     cartItemsContainer.appendChild(totalSumElement);
// }
//
// document.addEventListener("DOMContentLoaded", function () {
//     const productId = getProductIdFromUrl();
//     const addToCartBtn = document.getElementById('addToCartBtn');
//     const reduceFromCartBtn = document.getElementById('reduceFromCartBtn');
//
//     addToCartBtn.addEventListener('click', function () {
//         if (productId) {
//             getProductDetails(productId)
//                 .then(product => {
//                     addToCart(product);
//                 })
//                 .catch(error => {
//                     console.error('Error fetching or rendering product details', error);
//                 });
//         } else {
//             console.error('Product ID not found in the URL');
//         }
//     });
//
//     reduceFromCartBtn.addEventListener('click', function () {
//         const productId = getProductIdFromUrl();
//         reduceFromCart(productId);
//     });
//
//     if (productId) {
//         getProductDetails(productId)
//             .then(product => {
//                 renderProductDetails(product);
//             })
//             .catch(error => {
//                 console.error("Error fetching or rendering product details", error);
//             });
//     } else {
//         console.error("Product ID not found in the URL");
//     }
// });

// // Function to extract product ID from URL
// function getProductIdFromUrl() {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get("id");
// }
//
// function getProductDetails(productId) {
//     const productUrl = `https://api.noroff.dev/api/v1/square-eyes/${productId}`;
//
//     return fetch(productUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .catch(error => {
//             console.error("Error fetching product details", error);
//             throw error;
//         });
// }
//
// // Function to render product details on the product page
// function renderProductDetails(product) {
//     const productContainer = document.getElementById("product-details");
//     if (!productContainer) {
//         console.error("Product container not found");
//         return;
//     }
//
//     const addToCartBtn = document.getElementById('addToCartBtn');
//     const reduceFromCartBtn = document.getElementById('reduceFromCartBtn');
//
//     // Render product details directly
//     productContainer.innerHTML = `
//         <div id="product-details">
//             <img class="ProductImage" src="${product.image}" alt="${product.title}">
//             <h2 class="productTitle">${product.title}</h2>
//             <p class="productDescription">${product.description}</p>
//             <p class="productPrice">${product.price}</p>
//             <button class="addToCart" id="addToCartBtn">Add to Cart</button>
//             <button class="reduceFromCart" id="reduceFromCartBtn">Reduce from Cart</button>
//         </div>
//     `;
//
//     // Event listener for "Add to Cart" button
//     addToCartBtn.addEventListener('click', function () {
//         addToCart(product);
//     });
//
//     // Event listener for "Reduce from Cart" button
//     reduceFromCartBtn.addEventListener('click', function () {
//         reduceFromCart(product.id);
//     });
// }
//
// document.addEventListener("DOMContentLoaded", function () {
//     const productId = getProductIdFromUrl();
//
//     if (productId) {
//         getProductDetails(productId)
//             .then(product => {
//                 renderProductDetails(product);
//             })
//             .catch(error => {
//                 console.error("Error fetching or rendering product details", error);
//             });
//     } else {
//         console.error("Product ID not found in the URL");
//     }
// });
//
// // Rest of your existing code...
//
// // Function to handle reducing a product from the cart
// function reduceFromCart(productId) {
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const existingProduct = cartItems.find(item => item.id === productId);
//
//     if (existingProduct) {
//         if (existingProduct.quantity > 1) {
//             existingProduct.quantity--;
//         } else {
//             // Remove the product if its quantity is 1
//             const index = cartItems.indexOf(existingProduct);
//             if (index !== -1) {
//                 cartItems.splice(index, 1);
//             }
//         }
//
//         localStorage.setItem('cart', JSON.stringify(cartItems));
//         renderCart();
//     }
// }
// Function to extract product ID from URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

function getProductDetails(productId) {
    const productUrl = `https://api.noroff.dev/api/v1/square-eyes/${productId}`;

    return fetch(productUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error("Error fetching product details", error);
            throw error;
        });
}

// Function to render product details on the product page
function renderProductDetails(product) {
    const productContainer = document.getElementById("product-details");
    if (!productContainer) {
        console.error("Product container not found");
        return;
    }

    const addToCartBtn = document.getElementById('addToCartBtn');
    const reduceFromCartBtn = document.getElementById('reduceFromCartBtn');

    // Render product details directly
    productContainer.innerHTML = `
        <div id="product-details">
            <img class="ProductImage" src="${product.image}" alt="${product.title}">
            <h2 class="productTitle">${product.title}</h2>
            <p class="productDescription">${product.description}</p>
            <p class="productPrice">${product.price}</p>
            <button class="addToCart" id="addToCartBtn">Add to Cart</button>
            <button class="reduceFromCart" id="reduceFromCartBtn">Reduce from Cart</button>
        </div>
    `;

    // Event listener for "Add to Cart" button
    addToCartBtn.addEventListener('click', function () {
        addToCart(product);
    });

    // Event listener for "Reduce from Cart" button
    reduceFromCartBtn.addEventListener('click', function () {
        reduceFromCart(product.id);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const productId = getProductIdFromUrl();

    if (productId) {
        getProductDetails(productId)
            .then(product => {
                renderProductDetails(product);
            })
            .catch(error => {
                console.error("Error fetching or rendering product details", error);
            });
    } else {
        console.error("Product ID not found in the URL");
    }
});

// Rest of your existing code...

// Function to handle reducing a product from the cart
function reduceFromCart(productId) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cartItems.find(item => item.id === productId);

    if (existingProduct) {
        if (existingProduct.quantity > 1) {
            existingProduct.quantity--;
        } else {
            // Remove the product if its quantity is 1
            const index = cartItems.indexOf(existingProduct);
            if (index !== -1) {
                cartItems.splice(index, 1);
            }
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));
        renderCart(); // Added this line
    }
}

// Function to handle adding a product to the cart
function addToCart(product) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cartItems.push({ id: product.id, title: product.title, price: product.price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCart();
}

// Function to render the cart (optional)
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsContainer.innerHTML = '';

    let totalSum = 0;

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.title} x${item.quantity} - Price: ${item.price * item.quantity}`;
        cartItemsContainer.appendChild(listItem);
        totalSum += item.price * item.quantity;
    });

    const totalSumElement = document.createElement('li');
    totalSumElement.textContent = `Total Sum: ${totalSum}`;
    cartItemsContainer.appendChild(totalSumElement);
}
