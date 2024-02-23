//
//
// const productList = document.getElementById("product-list");
// // Function to fetch and render product list
// function getProductList() {
//     fetch("https://api.noroff.dev/api/v1/square-eyes")
//         .then(response => response.json())
//         .then(listData => {
//             console.log("Original Data:", listData); // Log the original data
//
//             renderProductList(listData);
//         })
//         .catch(error => console.error("Error fetching", error));
// }
//
// // Function to populate filter options
// function populateFilterOptions(selectId, options) {
//     const selectElement = document.getElementById(selectId);
//
//     options.forEach(option => {
//         const optionElement = document.createElement("option");
//         optionElement.value = option.toLowerCase();
//         optionElement.textContent = option;
//         selectElement.appendChild(optionElement);
//     });
// }
//
// // Function to render product list based on category
// function filterAndRenderList(categoryFilter = "") {
//     fetch("https://api.noroff.dev/api/v1/square-eyes")
//         .then(response => response.json())
//         .then(listData => {
//             console.log("Original Data:", listData); // Log the original data
//
//             // Filter products based on genre, if provided
//             const filteredList = categoryFilter
//                 ? listData.filter(product => product.genre.toLowerCase() === categoryFilter.toLowerCase())
//                 : listData;
//
//             console.log("Filtered Data:", filteredList); // Log the filtered data
//
//             renderProductList(filteredList);
//         })
//         .catch(error => console.error("Error fetching", error));
// }
//
// // Function to render the product list on the page
// function renderProductList(products) {
//     productList.innerHTML = ``;
//
//     products.forEach(product => {
//         const listCard = `
//             <section class="presentCard">
//                 <div class="productCard">
//                     <a href="product.html?id=${product.id}" class="singleProductLink">
//                         <img class="ProductImage" src="${product.image}" alt="${product.title}">
//                         <h2 class="productTitle">${product.title}</h2>
//                         <p class="productDescription">${product.description}</p>
//                         <p class="productPrice">Price: ${product.price}</p>
//                         <p class="productGenre">Genre: ${product.genre}</p>
//                         <button>Click here</button>
//                     </a>
//                 </div>
//             </section>
//         `;
//         productList.innerHTML += listCard;
//     });
// }
//
// // Call the function to populate filter options (replace with actual data)
// const genres = ["Action", "Drama", "Comedy"];
// populateFilterOptions("category", genres);
//
// // Event listener for category filter change
// const categoryFilterElement = document.getElementById("category");
// categoryFilterElement.addEventListener("change", function () {
//     const selectedGenre = categoryFilterElement.value;
//     filterAndRenderList(selectedGenre);
//     console.log(selectedGenre)
// });
//
// const released = [];
//
// // Initial fetch and render
// getProductList();
//
//
const productList = document.getElementById("product-list");

// Function to fetch and render product list
function getProductList() {
    fetch("https://api.noroff.dev/api/v1/square-eyes")
        .then(response => response.json())
        .then(listData => {
            console.log("Original Data:", listData);
            renderProductList(listData);
            // populateFilterOptions("category", getUniqueValues(listData, "category"));
            populateFilterOptions("released", getUniqueValues(listData, "released"));
            populateFilterOptions("rating", getUniqueValues(listData, "rating"));
            populateFilterOptions("price", getUniqueValues(listData, "price"));
        })
        .catch(error => console.error("Error fetching", error));
}

// Function to populate filter options
function populateFilterOptions(selectId, options) {
    const selectElement = document.getElementById(selectId);

    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option.toLowerCase();
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

// Function to render product list based on filters
function filterAndRenderList() {
    const categoryFilter = document.getElementById("category").value.toLowerCase();
    const releasedFilter = document.getElementById("released").value.toLowerCase();
    const ratingFilter = document.getElementById("rating").value.toLowerCase();
    const priceFilter = document.getElementById("price").value.toLowerCase();

    fetch("https://api.noroff.dev/api/v1/square-eyes")
        .then(response => response.json())
        .then(listData => {
            let filteredList = listData;

            if (categoryFilter) {
                filteredList = filteredList.filter(product => product.genre.toLowerCase() === categoryFilter);
            }

            if (releasedFilter) {
                filteredList = filteredList.filter(product => product.released.toLowerCase() === releasedFilter);
            }

            if (ratingFilter) {
                filteredList = filteredList.filter(product => product.rating.toLowerCase() === ratingFilter);
            }

            if (priceFilter) {
                filteredList = filteredList.filter(product => product.price.toLowerCase() === priceFilter);
            }

            renderProductList(filteredList);
        })
        .catch(error => console.error("Error fetching", error));
}

// Function to render the product list on the page
function renderProductList(products) {
    productList.innerHTML = ``;

    products.forEach(product => {
        const listCard = `
            <section class="presentCard">
                <div class="productCard">
                    <a href="product.html?id=${product.id}" class="singleProductLink">
                        <img class="ProductImage" src="${product.image}" alt="${product.title}">
                        <h2 class="productTitle">${product.title}</h2>
                        <p class="productDescription">${product.description}</p>
                        <p class="productPrice">Price: ${product.price}</p>
                        <p class="productGenre">Genre: ${product.genre}</p>
                        <button>Click here</button>
                    </a>
                </div>
            </section>
        `;
        productList.innerHTML += listCard;
    });
}

// Function to get unique values for a specific property
function getUniqueValues(data, property) {
    return [...new Set(data.map(item => item[property]))];
}

// Event listeners for filter changes
const categoryFilterElement = document.getElementById("category");
categoryFilterElement.addEventListener("change", filterAndRenderList);

const releasedFilterElement = document.getElementById("released");
releasedFilterElement.addEventListener("change", filterAndRenderList);

const ratingFilterElement = document.getElementById("rating");
ratingFilterElement.addEventListener("change", filterAndRenderList);

const priceFilterElement = document.getElementById("price");
priceFilterElement.addEventListener("change", filterAndRenderList);

// Initial fetch and render
getProductList();
