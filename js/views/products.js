function renderProductsList(products, params) {
    params = params || {};
    let productsListTemplate = '';
    category = params.category || '';
    search = params.search || '';
    if (category) {
        products = products.filter(
            product => product.categorie === category
        );
    } else if (search) {
        search = search.toUpperCase();
        products = products.filter(
            product => {
                return Object.keys(product).some(function(k) {
                    return product[k].toUpperCase().includes(search);
                });
            }
        );
    }
    products.forEach(element => {
        let template = `   
    <div class="col-6 col-md-4 col-lg-3 col-xl-2">
         <div class="card shadow-sm border-0 mb-4">
            <div class="card-body">
                <figure class="product-image"><img src="${getFirebaseImage(element.image)}" alt=""></figure>
                <a href="product-details.html" class="text-dark mb-1 mt-2 h6 d-block desc" id="desc">${element.description}</a>
                <p class="text-secondary small mb-2 ">${element.nomprenom}</p>
                <h5 class="text-success font-weight-normal mb-0">${element.prix}<sup>.00</sup></h5>
             </div>
        </div>
    </div>
        `;
        productsListTemplate += template;
    });
    return productsListTemplate;
}