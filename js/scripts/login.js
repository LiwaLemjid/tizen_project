function login() {
    var url = "https://vaping-tn.herokuapp.com/";
    var pwd = $("#inputPassword").val() ;
    var mail = $("#inputEmail").val() ;
    $.get(url + "LoginServiceController.php?action=Authentification&email="+mail+"&password="+pwd , function(data)  {
        data = JSON.parse(data) ; 
        if (data.length > 0) {
            localStorage.setItem("user",JSON.stringify(data[0])) ;
            location.href = "index.html" ;
            return;
        }
        alert("Wrong email or password??") ;
    });

}
