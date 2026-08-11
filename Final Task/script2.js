fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        const container = document.querySelector(".products");
        products.forEach(c => {
            const product = document.createElement("div");
            product.className = "product";

            product.innerHTML = `<h2>Title: ${c.title}</h2>
                <p>Description: ${c.description.slice(0, 50)}</p>
                <p>Price: $${c.price}</p>`;
            container.append(product);
        });
    });