fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        const container = document.querySelector(".products");
        products.forEach(c => {
            const product = document.createElement("div");
            product.innerHTML = `<p>Title: ${c.title}</p>
                <p>Description: ${c.description.slice(0, 20)}</p>
                <hr>`;
            container.append(product);
        });
    });