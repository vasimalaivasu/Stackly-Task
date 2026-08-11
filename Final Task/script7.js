fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        const container = document.querySelector(".ratings");
        products.forEach(c => {
            const card = document.createElement("div");
            card.className = "rating-card";
            card.innerHTML = `<p>Product: ${c.title}</p>
                <p>Rating: ${c.rating.rate}</p>
                <p>Reviews: ${c.rating.count}</p>`;
            container.append(card);
        });
    });