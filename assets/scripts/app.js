 class ProductsItem 
 {
        title;
        imageUrl;
        price;
        description;

    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
 }

 // add Another Class 
 class ProductsList
 {

 }
 
 
 
 
 
 
 
 
 
 const allProducts = {
      Product : [
        new ProductsItem("A pillow", 
        "https://www.fatboy.com/assets/image/000/006/877/Fatboy_Pillow-square-velvet_deep-blush_800x800.jpg", 
        19.99, 
        "A soft Pillow"),

        new ProductsItem("A Carpet", 
        "https://upload.wikimedia.org/wikipedia/commons/e/e7/Wollteppich_1.jpg",
         89, 
         "A Beautiful Carpet")

      ],
    render() {
        const renderHook = document.querySelector("#app");
        const prodList = document.createElement("ul");
        prodList.className = "product-list";
        for(let prod of this.Product) {
            const prodItem = document.createElement("li");
            prodItem.className = "product-item";
            prodItem.innerHTML = `
                <div>
                    <img src = "${prod.imageUrl}" alt = "${prod.title}">
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button> Add to cart </button> 
                    </div>
                </div>
            `;
            prodList.appendChild(prodItem);
        }
        renderHook.appendChild(prodList);
    }
};
allProducts.render();