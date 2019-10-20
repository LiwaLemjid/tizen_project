function login(pwd, mail, rememberMe) {
    var url = "https://vaping-tn.herokuapp.com/";
    $.get(url + "LoginServiceController.php?action=Authentification&email=" + mail + "&password=" + pwd, function(data) {
            data = JSON.parse(data);
            if (data.length > 0) {
                sessionStorage.setItem("user", JSON.stringify(data[0]));
                if (rememberMe) {
                    localStorage.setItem("user", JSON.stringify(data[0]));
                }
                location.href = "index.html";
                return;
            }
            alert("Wrong email or password??");
        })
        .fail(function(error) {
            alert("Failed to connect");
        })
}