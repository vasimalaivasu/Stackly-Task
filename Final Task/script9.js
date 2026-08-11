fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        const container = document.querySelector(".products");
        products.forEach(c => {
            const card = document.createElement("div");
            card.innerHTML = `<h2>${c.title}</h2>
                <button>Buy for $${c.price}</button><hr>`;
            container.append(card);
        });
    });