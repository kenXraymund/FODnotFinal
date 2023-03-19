 
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

/*loader*/
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
    }
    function fadeOut(){
        setInterval(loader, 500);
    }
    window.onload = fadeOut();

function log(){
    var login =document.getElementById("login").value;

    if(login == login){
window.location.assign("loginpage.html");
    }
}

