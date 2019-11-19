var user = JSON.parse(sessionStorage.getItem("user"));

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
                <a href="product-details.html?productId=${element.id}" class="text-dark mb-1 mt-2 h6 d-block desc" id="desc">${element.description}</a>
                <p class="text-secondary small mb-2 ">${element.nomprenom}</p>
                <h5 class="text-success font-weight-normal mb-0">${element.prix} Dt<sup>.00</sup></h5>
             </div>
        </div>
    </div>
        `;
        productsListTemplate += template;
    });
    return productsListTemplate;
}

function renderProduct(product) {
    let template = `
    <!-- Swiper -->
    <div class="swiper-container product-details">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="${getFirebaseImage(product.image)}" alt="">
            </div>
        </div>
    </div>


    <button class="btn btn-sm btn-link p-0"><i class="material-icons md-18">favorite_outline</i></button>

    <p class="text-secondary my-3 small">
        <i class="material-icons text-warning md-18 vm">star</i>
        <i class="material-icons text-warning md-18 vm">star</i>
        <i class="material-icons text-warning md-18 vm">star</i>
        <i class="material-icons text-secondary md-18 vm">star</i>
        <i class="material-icons text-secondary md-18 vm">star</i>
        <span class="text-dark vm ml-2">Rating 4.2</span> <span class="vm">based on 245 reviews</span>
    </p>

    <a href="#" class="text-dark mb-1 mt-2 h6 d-block">${product.description} </a>

    <p class="text-secondary">${product.categorie}</p>
    <div class="row mb-4">
        <div class="col">
            <h3 class="text-success font-weight-normal mb-0">${product.prix} Dt<sup>.00</sup></h3>
        </div>
        ${product.idpublicateur == user.id ? `` : `
        <div class="col-auto align-self-center">
        <a href="single-message.html?contact=${product.idpublicateur}" class="btn btn-lg btn-default shadow btn-rounded">Contact ${product.nomprenom} <i class="material-icons md-18">shopping_cart</i></a>
        </div>
        `}

    </div><br><br>`;
    return template;
}