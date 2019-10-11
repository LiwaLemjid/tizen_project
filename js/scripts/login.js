    function login() {
        
        url = "https://vaping-tn.herokuapp.com/";
        var pwd = $("#inputPassword").val() ;
        var mail = $("#inputEmail").val() ;
        $.get(url + "LoginServiceController.php?action=Authentification&email="+mail+"&password="+pwd , function(data)  {
            data = JSON.parse(data) ; 
            if(!data) {
                alert("email or pwd wrong") ;
                return ;  
            } 
            alert(data[0].nom) ;
        } ) ;
        
    }
