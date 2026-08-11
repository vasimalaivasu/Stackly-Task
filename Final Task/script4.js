fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        const gallery = document.querySelector(".gallery");
        products.forEach(c => {
            const image = document.createElement("img");
            image.src = c.image;
            gallery.append(image);
        });
    });