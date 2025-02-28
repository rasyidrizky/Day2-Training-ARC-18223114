document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dummyjson.com/products")
        .then(response => response.json()) 
        .then(data => {
            const container = document.getElementById("productContainer");
            container.innerHTML = ""; 
            data.products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("card");
                productCard.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <div class="card-content">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <p><strong>Harga:</strong> $${product.price}</p>
                        <p><strong>Rating:</strong> ${product.rating} ⭐</p>
                    </div>
                `;
                container.appendChild(productCard);
            });
        })
        .catch(error => console.error("Gagal mengambil data:", error));
});
