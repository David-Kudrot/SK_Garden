

const getProduct = () => {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => showProduct(data))
}



const showProduct = (data) => {
    // console.log(data)
    data.forEach(element => {
        // console.log(element)
        const parent = document.getElementById("products")
        let div = document.createElement("div")
        div.classList.add("card", "shadow-lg","bg-body-secondary", "border-0", "custom-card", "col-md-3")
        div.innerHTML = `
        <div class="img-wrapper">
            <img src="${element.image}" class="card-img-top img-fluid " alt="...">
        </div>
        <div class="card-body">
          <h5 class="card-title">${element.title.slice(1, 10)}...</h5>
          <a href="#" class="btn btn-success btn-sm">View Details</a>
        </div>
           
        `;
        parent.appendChild(div);
    });
}



const getCategory = () => {
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(data=>showCategory(data))
}



const showCategory = (data) => {
    // console.log(data)
    data.forEach(item => {
        const parent = document.getElementById("cat-nav")
        let li = document.createElement("li")
        li.classList.add("nav-item")
        li.innerHTML = `
            <a class="nav-link nav-2 fw-bold ps-2" href="#" onclick="filterProducts('${item}')"> ${item.toUpperCase()} </a>
        `;

        parent.appendChild(li);
    })
}




const filterProducts = (category) => {
    console.log(category)
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => {
            // Clear previous products
            const parent = document.getElementById("products");
            parent.innerHTML = "";

            // Show filtered products
            showProduct(data);
        });
}








getCategory()
getProduct()