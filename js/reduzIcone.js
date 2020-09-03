function reduzIconeLG(tam){
    if (tam){
        var icons = document.querySelectorAll(".fa-lg");
        icons.forEach(element => {
            element.classList.remove("fa-lg");
        });
    }
}

var tam = window.matchMedia("(max-width: 700px)");
reduzIconeLG(tam);
tam.addListener(reduzIconeLG);

