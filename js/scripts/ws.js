url = "https://vaping-tn.herokuapp.com/";

function getArticles() {
    return $.get(url + "AffichageArticles.php?action=Authentification&action=AffichageAllArticles" ) ;
}

function getFirebaseImage(img) {
    return "https://firebasestorage.googleapis.com/v0/b/tizenproject-4c5c3.appspot.com/o/images%2F"+img+"?alt=media&token=2e50c4be-7079-46e9-ae7b-dbc15f810ff4" ;
}