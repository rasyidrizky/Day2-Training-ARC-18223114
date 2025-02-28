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
                        <h3 style="font-size: 30px;">${product.title}</h3>
                        <p style="font-size: 18px;"><strong>${product.brand}</strong></p>
                        <p>${product.description}</p>
                        <p style="font-size: 30px; color: green"><strong>$${product.price}</strong></p>
                        <p style="font-size: 20px;"><strong>${product.rating}</strong> ⭐</p>
                        <p class="additional-info"><strong>Category:</strong> ${product.category}</p>
                        <p class="additional-info"><strong>Stock:</strong> ${product.stock} left(s)</p>
                    </div>
                `;
                container.appendChild(productCard);
            });
        })
        .catch(error => console.error("Gagal mengambil data:", error));
});
