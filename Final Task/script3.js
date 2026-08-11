fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        const container = document.querySelector(".api");
        products.forEach(c => {
            const product = document.createElement("div");
            product.className = "product";
            product.innerHTML = `<p>Product: ${c.title}</p>
                <p>Price: $${c.price}</p>
                <p>Category: ${c.category}</p>
                <img src="${c.image}">`;
            container.append(product);
        });
    });