//alert("hola desde javascript!");

var imagenes = ['img/sonic-1-0.png','img/sonic-1-1.png','img/sonic-1-2.png','img/sonic-1-3.png','img/sonic-1-4.png']
var contador = 0;

function rotarImagenes(){
    
    document.getElementById("sonic").src=imagenes[contador];
    contador++;
    if(contador >= 4)
        contador= 0;

}

onload = function(){
    rotarImagenes();
    this.setInterval(rotarImagenes, 50);
}