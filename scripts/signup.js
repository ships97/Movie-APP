  let details = JSON.parse(localStorage.getItem("UserInfo")) || [];
  console.log(details);
  
  function Info(n,c,e,p){
    this.name = n;
    this.contact = c;
    this.email = e;
    this.pass = p
  }

  function moviesignup(e){ 
    e.preventDefault();
    let form = document.getElementById("user");
    let name = form.name.value;
    let contact = form.contact.value;
    let email = form.email.value;
    let pass = form.pass.value;

    let dt = new Info(name,contact,email,pass);
    details.push(dt);

    form.name.value = "";
    form.contact.value = "";
    form.email.value = "";
    form.pass.value = "";

    localStorage.setItem("UserInfo",JSON.stringify(details));
    alert("SignUp Successful");
  }