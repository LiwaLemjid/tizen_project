var url = "https://vaping-tn.herokuapp.com/";

function login(pwd, mail, rememberMe) {
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

function signUp(user) {
    $.get(url + "LoginServiceController.php?action=inscription&email=" + user.email + "&password=" + user.password + "&idfb=0" + "&nom=" + user.nom +
            "&prenom=" + user.prenom + "&localisation=" + user.localisation + "&naissance=0&image=0&tel=" + user.tel,
            function(data) {
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
        });
}