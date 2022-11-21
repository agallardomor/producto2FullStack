document.querySelector("#loginBtn").setAttribute("onclick","readLocalStorage()");
$(".card").delay(300).animate({opacity: 1},"slow");

function readLocalStorage () {
    let miInfo = localStorage.getItem("miRegistro");
    let myObject = JSON.parse(miInfo);

    checkUser(myObject.email, myObject.password, myObject.avatar);

}

function checkUser(localEmail, localPassword, localAvatarURL){

    let formEmail = document.querySelector("#typeEmailX").value;
    let formPassword = document.querySelector("#typePasswordX").value;

    if (localEmail == formEmail && localPassword == formPassword){
        window.location.href=`home?email=${formEmail}&password=${formPassword}&avatar=${localAvatarURL}`
    } else {
        alert("usuario y/o contraseña incorrectos")
        document.querySelector("#typeEmailX").value = "";
        document.querySelector("#typePasswordX").value = "";
    }
}