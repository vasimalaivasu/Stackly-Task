fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        const container = document.querySelector(".products");
        products.forEach(c => {
            const product = document.createElement("div");
            product.innerHTML = `<p>Title: ${c.title}</p>
                <p>Category: ${c.category}</p>
                <p>Price: $${c.price}</p><hr>`;
            container.append(product);
        });
    });