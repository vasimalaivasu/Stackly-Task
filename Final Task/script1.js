let apilink = "https://fakestoreapi.com/products/";
fetch(apilink)
.then(data => data.json())
.then((jsdata)=>{
    jsdata.forEach(c =>{
        console.log(c);
        let api = document.querySelector(".api");
        let api1 = document.createElement("div");
        api1.innerHTML=`
        <h3>Title : ${c.title} </h3>
        <img src="${c.image}">
        <p>description : ${c.description.slice(0,51)}</p>
        <button> price :${c.price}</button>`;                                  
        api.append(api1)
    })
})  



// const api = document.querySelector(".api");
// fetch("https://fakestoreapi.com/products")
//     .then(response => response.json())
//     .then(products => {

//         products.forEach(c => {

//             const card = document.createElement("div");

//             card.innerHTML = `
//                 <h2>${c.title}</h2>
//                 <img src="${c.image}" width="200">
//                 <p>Price: $${c.price}</p>
//                 <p>Category: ${c.category}</p>
//                 <p>Rating: ${c.rating.rate}</p>
//             `;

//             api.append(card);
//         });

//     });