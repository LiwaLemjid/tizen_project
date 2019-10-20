var user = JSON.parse(sessionStorage.getItem("user"));

function renderSideMenu() {
    let menuTemplate = `
        <div class="text-center">
            <div class="figure-menu shadow">
                <figure><img id="profileImg" src="${user.image}" alt=""></figure>
            </div>
            <h5 class="mb-1" id="name">${user.nom + " " + user.prenom}</h5>
            <p class="text-mute small" id="localisation">${user.localisation}</p>
        </div>
        <br>
        <div class="row mx-0">
            <div class="col">
                <h5 class="subtitle text-uppercase"><span>Menu</span></h5>
                <div class="list-group main-menu">
                    <a href="index.html" class="list-group-item list-group-item-action active">Store</a>
                    <a href="notification.html" class="list-group-item list-group-item-action">Notification <span class="badge badge-dark text-white">2</span></a>
                    <a href="all-products.html" class="list-group-item list-group-item-action">All Products</a>
                    <a href="my-order.html" class="list-group-item list-group-item-action">My Order</a>
                    <a href="profile.html" class="list-group-item list-group-item-action">My Profile</a>
                    <a href="controls.html" class="list-group-item list-group-item-action">Pages Controls <span class="badge badge-light ml-2">Check</span></a>
                    <a href="setting.html" class="list-group-item list-group-item-action">Settings</a>
                    <a href="login.html" class="list-group-item list-group-item-action mt-4">Logout</a>
                </div>
            </div>
        </div>
    `
    return menuTemplate;
}

function renderFooter() {
    let template = `            
<div class="no-gutters">
    <div class="col-auto mx-auto">
        <div class="row no-gutters justify-content-center">
            <div class="col-auto">
                <a href="index.html" class="btn btn-link-default ">
                    <i class="material-icons">store_mall_directory</i>
                </a>
            </div>
            <div class="col-auto">
                <a href="statistics.html" class="btn btn-link-default">
                    <i class="material-icons">insert_chart_outline</i>
                </a>
            </div>
            <div class="col-auto">
                <a href="cart.html" class="btn btn-default shadow centerbutton">
                    <i class="material-icons">local_mall</i>
                </a>
            </div>
            <div class="col-auto">
                <a href="favorite-products.html" class="btn btn-link-default">
                    <i class="material-icons">favorite</i>
                </a>
            </div>
            <div class="col-auto">
                <a href="profile.html" class="btn btn-link-default active">
                    <i class="material-icons">account_circle</i>
                </a>
            </div>
        </div>
    </div>
</div>`;
    return template;
}