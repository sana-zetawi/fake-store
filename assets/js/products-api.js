const getProducts = async () => {
    const urlParam = new URLSearchParams(window.location.search);
    const category = urlParam.get('category');
    try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        print(data);
        return data;

    } catch (error) {
        return [];
    }

}
const displayProducts = async () => {
    try {
        const result = await getProducts();
        const items = result.map((elemant) => {
            return `
            <div class="product">
            <div class="product-image">
              <img src="${elemant.image}" alt="product image">
            </div>
            <div class="product-details">
              <h4>${elemant.title}</h4>
              <p>${elemant.description}</p>
             <span>$${elemant.price}</span>
            </div>
          </div>
                `
        }).join(' ');

         document.querySelector('.category-products .row').innerHTML=items;

    } catch (error) {
        document.querySelector('.category-products .row').innerHTML = "<p>please try again later ... </p>";
    }
    finally {
        document.querySelector('.loading').classList.add("d-none");
    }


}
const urlParam = new URLSearchParams(window.location.search);
const category = urlParam.get('category');
document.querySelector('.category-products h2').innerHTML = `${category} products`;
displayProducts();

