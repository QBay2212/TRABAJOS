var username = 'Paulo';
var password = '123';
$("#boton").click(function () { 
    var user = $("#username").val();
    var pass = $("#password").val();
    if(user == username && pass==password){
        sessionStorage.setItem('user',user);
        window.location = 'Principal.html';        
    }else{
            window.location = 'Login.html';
    }

});

