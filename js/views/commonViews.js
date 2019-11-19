var user = JSON.parse(sessionStorage.getItem("user"));
if (!user) {
    window.location.href = "login.html";
}

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
                    <a href="index.html" class="list-group-item list-group-item-action active">Home</a>
                    <a href="inbox.html" class="list-group-item list-group-item-action">Messages <span class="badge badge-dark text-white">2</span></a>
                    <a href="setting.html" class="list-group-item list-group-item-action">Settings</a>
                    <a onclick="localStorage.clear()" href="login.html" class="list-group-item list-group-item-action mt-4">Logout</a>
                </div>
            </div>
        </div>
    `
    return menuTemplate;
}

function renderFooter(activeTab) {
    let template = `            
<div class="no-gutters">
    <div class="col-auto mx-auto">
        <div class="row no-gutters justify-content-center">
            <div class="col-auto">
                <a href="index.html" class="btn btn-link-default ${(activeTab==='index') ? 'active' : ''}">
                    <i class="material-icons">store_mall_directory</i>
                </a>
            </div>
            <div class="col-auto">
                <a href="inbox.html" class="btn btn-link-default ${(activeTab==='inbox') ? 'active' : ''}">
                    <i class="material-icons">message</i>
                </a>
            </div>
            <div class="col-auto">
                <a href="addProduct.html" class="btn btn-default shadow centerbutton">
                    <i class="material-icons">add</i>
                </a>
            </div>
            <div class="col-auto">
                <a href="favorite-products.html" class="btn btn-link-default ${(activeTab==='favorites') ? 'active' : ''}">
                    <i class="material-icons">favorite</i>
                </a>
            </div>
            <div class="col-auto">
                <a href="profile.html" class="btn btn-link-default ${(activeTab==='profile') ? 'active' : ''}">
                    <i class="material-icons">account_circle</i>
                </a>
            </div>
        </div>
    </div>
</div>`;
    return template;
}