fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        const container = document.querySelector(".products");
        products.forEach(c => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<img src="${c.image}" alt="${c.title}">
                <h2>Title: ${c.title}</h2>
                <p>Category: ${c.category}</p>
                <p>Description:${c.description}</p>
                <p>Price: $${c.price}</p>
                <p>Rating: ${c.rating.rate}</p>
                <p>Reviews: ${c.rating.count}</p>
                <button class="buy-btn">BUY NOW</button>`;
            container.append(card);
        });
    });