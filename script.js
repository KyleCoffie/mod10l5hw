let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    let productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = ""; // Clear any existing content

    products.forEach(product => {
        let productElement = document.createElement("div");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    displayProducts();
});
