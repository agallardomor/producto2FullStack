
const avatar = document.getElementById("avatar-home");

const salas = document.querySelector(".contenedor-salas");

salas.addEventListener("dragover", e =>{
    e.preventDefault();
    e.target.classList.add("sala-item--hover");
})

salas.addEventListener("dragleave", e =>{
    e.preventDefault();
    e.target.classList.remove("sala-item--hover");
})

salas.addEventListener("drop", e =>{
    e.target.classList.remove("sala-item--hover");
    e.target.append(avatar);
    $("#avatar-home").animate({width: '80px', height: '80px'});
})

function getDataFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let avatarURL = urlParams.get('avatar');

    setAvatarImage(avatarURL);
}

function setAvatarImage(url){
    console.log("imagen: " + url)
    document.getElementById("avatar-home").style.backgroundImage= `url('/profile-img/${url}.png')`
}


window.addEventListener("load",getDataFromURL() );
