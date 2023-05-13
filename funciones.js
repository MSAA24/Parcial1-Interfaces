let modoOscuro = false ;

function alternarModo(){
    if(modoOscuro === true){
        activarLightMode();
    } else {
        activarDarkMode();     
    }
}

function activarDarkMode(){
    modoOscuro = true;
    const elementos = document.querySelectorAll("body, .icono, header");
        for (const elemento of elementos) {
        elemento.classList.add('dark');
        }
}

function activarLightMode(){
    modoOscuro = false;
    const elementos = document.querySelectorAll("body, .icono, header");
        for (const elemento of elementos) {
        elemento.classList.remove('dark');
        }
}

