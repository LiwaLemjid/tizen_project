function renderProfile() {
    let template = `
    <div class="figure-profile shadow my-4">
        <figure><img src="${user.image}" alt=""></figure>
    </div>
    <h3 class="mb-1 ">${user.nom + " " + user.prenom}</h3>
    <p class="text-secondary">${user.localisation}</p>
    `
    return template;
}

function renderProfileDetails() {
    let template = `
    <h6 class="subtitle">Contact Information</h6>
    <dl class="row mb-4">
        <dt class="col-3 text-secondary font-weight-normal">Email</dt>
        <dd class="col-9">${user.email}</dd>
        <dt class="col-3 text-secondary font-weight-normal">Phone</dt>
        <dd class="col-9">${user.tel}</dd>
    </dl>
    `;
    return template
}

function renderEditProfileForm() {
    let template = `<form id="editProfile">
    <div class="col-12 col-md-6">
    <div class="form-group float-label active">
        <input name="nom" type="text" class="form-control" required="" value="${user.nom}">
        <label class="form-control-label">Name</label>
    </div>
</div>
<div class="col-12 col-md-6">
    <div class="form-group float-label active">
        <input name="prenom" type="text" class="form-control" required="" value="${user.prenom}">
        <label class="form-control-label">Prename</label>
    </div>
</div>
<div class="col-12 col-md-6">
    <div class="form-group float-label active">
        <input name="email" type="email" class="form-control" required="" value="${user.email}">
        <label class="form-control-label">Email address</label>
    </div>
</div>
<div class="col-12 col-md-6">
    <div class="form-group float-label active">
        <input name="tel" type="tel" class="form-control" required="" value="${user.tel}">
        <label class="form-control-label">Phone Number</label>
    </div>
</div>
<div class="col-12 col-md-6">
    <div class="form-group float-label active">
        <input name="localisation" type="text" class="form-control" required="" value="${user.localisation}">
        <label class="form-control-label">Address</label>
    </div>
</div></form>`;
    return template;
}

function renderProfileProducts(products) {
    let template = '';
    products.forEach(element => {
        let elementTemplate = `
        <li>
            <div class="row">
                <div class="col">${element.description} at $ ${element.prix}.00</div>
            </div>
        </li>`;
        template = template + elementTemplate;
    });
    return template;
}