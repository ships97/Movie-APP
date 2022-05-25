let details = JSON.parse(localStorage.getItem("UserInfo")) || [];

var loginButton = document.querySelector("#log");
loginButton.addEventListener("submit",logIn);

function logIn(e)
{
    e.preventDefault();
    var on_email = document.getElementById("email").value;
    var on_pass = document.getElementById("pass").value;
    var flag = false;
    
    details.map(function(elem){
        console.log(elem.email,on_email);
        console.log(elem.pass,on_pass);
        if((elem.email == on_email) && (elem.pass == on_pass))
            flag = true;     
    })

    if(flag)
    {
        alert("Login Successful");
        window.location.href = "index.html";
    }
    else
        alert("Invalid Credentials");
}
