fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        const container = document.querySelector(".products");
        products.forEach(c => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<h2>${c.title}</h2>
                <img src="${c.image}" alt="${c.title}">
                <p>Description: ${c.description}</p>
                <p>Category: ${c.category}</p>
                <p>Price: $${c.price}</p>
                <p>Rating: ${c.rating.rate}</p>`;
                container.append(card);
        });
    });