url = "https://vaping-tn.herokuapp.com/";

function getArticles() {
    return $.get(url + "AffichageArticles.php?action=AffichageAllArticles");
}

function getUserArticles(id) {
    return $.get(url + "AffichageArticles.php?&action=MesArticles&id_publicateur=" + id);
}

function getFavorites(id) {
    $.get(url + "AffichageArticles.php?&action=MesArticlesFavoris&id_publicateur=" + id).done(
        (data) => {
            let favorites = JSON.parse(data);
            favorites = favorites.map(f => f.id_article);
            console.log(favorites);
        }
    )
}

function getArticlesByCategory(category) {
    return $.get(url + "AffichageArticles.php?&action=AffichageArticlesWithType&categorie=" + category);
}

function getArticlesById(id) {
    return $.get(url + "AffichageArticles.php?&action=AffichageArticlesWithID&id=" + id);
}

function getFirebaseImage(img) {
    return "https://firebasestorage.googleapis.com/v0/b/tizenproject-4c5c3.appspot.com/o/images%2F" + img + "?alt=media&token=2e50c4be-7079-46e9-ae7b-dbc15f810ff4";
}