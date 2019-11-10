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
    return "https://firebasestorage.googleapis.com/v0/b/tizenproject-4c5c3.appspot.com/o/images%2F" + img + "?alt=media&token=2e50c4be-7079-46e9-ae7b-dbc15f810ff4";
}

function getYoutubeSuggestions(keyword,count) {
    return $.get(url + "youtube_search.php?titre=" + keyword + "&count=" + count );
}

function addProduct(product,user) {
    return $.get(url + "FormulaireAddPost.php?action=ADDPOST&nomprenom="+user.nom+" "+user.prenom + "&description=" + product.description+ "&prix="+product.price+"&categorie="+product.category+"&idPublicateur"+user.id+"&videoid"+product.videoId);
}