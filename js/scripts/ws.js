url = "https://vaping-tn.herokuapp.com/";

function getArticles() {
    return $.get(url + "AffichageArticles.php?action=AffichageAllArticles");
}

function getUserArticles(id) {
    return $.get(url + "AffichageArticles.php?&action=MesArticles&id_publicateur=" + id);
}

function getFavorites(id) {
    return $.get(url + "AffichageArticles.php?&action=listeArticlesFavoris&id_publicateur=" + id);
}

function getArticlesByCategory(category) {
    return $.get(url + "AffichageArticles.php?&action=AffichageArticlesWithType&categorie=" + category);
}

function getArticlesById(id) {
    return $.get(url + "AffichageArticles.php?&action=AffichageArticlesWithID&id=" + id);
}

function getFirebaseImage(img) {
    return `https://firebasestorage.googleapis.com/v0/b/messagerie-23212.appspot.com/o/${img}?alt=media&token=f5e504a6-6821-452e-9750-d7e1d0ab1e1c`;
}

function getYoutubeSuggestions(keyword, count) {
    return $.get(url + "youtube_search.php?titre=" + keyword + "&count=" + count);
}

function addProduct(product, user) {
    var now = new Date();
    /*  $sql = "INSERT INTO `articles`(`nomprenom` , `description`, `date`, `time`, `prix`, `idpublicateur` ,`categorie`, `image` 
    ,`image_publicateur`,`ville`,`lat`,`lng` ,`videoid`) VALUES
    */
    return $.get(url + "FormulaireAddPost.php?action=ajoutProduit&nomprenom=" + user.nom + " " + user.prenom + "&description=" + product.description +
        "&prix=" + product.price + "&categorie=" + product.category + "&idpublicateur=" + user.id + "&videoid=" + product.videoId +
        "&latitude=1" + "&langitude=1" + "&ville=Chargueya" + "&image=" + product.image + "&image_publicateur=0" + "&date=0&time=0"
    );
}

async function getProfile(id) {
    return new Promise(resolve => {
        $.get(url + "LoginServiceController.php?action=GETPROFILE&id=" + id).then(
            response => resolve(JSON.parse(response)[0])
        )
    });
}