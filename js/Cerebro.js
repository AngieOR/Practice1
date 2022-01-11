function iniciarSesion() {
    var usuario = document.getElementById('txtUsuario').value;
    var password = document.getElementById('txtPass').value;

    console.log("Inicio de sesion satiSFACTORIO, usuario: " + usuario + ", pass: " + password + ".");
}

function enterKeyPressed(event) {
    if (event.keyCode == 13) {
        var usuario = document.getElementById('txtUsuario').value;
        var password = document.getElementById('txtPass').value;
        console.log("Inicio de sesion satiSFACTORIO, usuario: " + usuario + ", pass: " + password + ".");
        return true;
    } else {
        return false;
    }
}

function mostrarInformacion() {
    var elemento = document.getElementById("informacion");
    if (elemento.className.includes("esconder"))
        elemento.className = "card-text mostrar"
    else
        elemento.className = "card-text esconder"
    var json = muestra()
    elemento.textContent = json
    console.log("mi elemento es: ", elemento)
}

function muestra() {
    var usuario = document.getElementById('txtUsuario').value;
    var password = document.getElementById('txtPass').value;
    var json = "{'usuario':'" + usuario + "', 'password':'" + password + "'}"

    return json
}
