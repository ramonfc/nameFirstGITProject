let primerNum, segundoNum, suma;

primerNum=prompt("Primer Número a sumar: ");
primerNum=parseFloat(primerNum);

segundoNum=prompt("Segundo Número a sumar: ");
segundoNum=parseFloat(segundoNum);

suma= primerNum + segundoNum;

document.write("<h1> Suma de dos Números</h1>" +
                "<p>suma entre "+primerNum+" y "+segundoNum+" es: </p>");
document.write("<h1>"+suma+"</h1>");


/*
                var g_tierra=9.8, g_marte=3.7, g_jupiter=24.8
var peso_marte, peso_jupiter, peso_usuario

document.write("<p>Gravedad de la Tierra: "+g_tierra+" Gravedad de Marte: "+g_marte+" Gravedad de Júpiter: "+g_jupiter+"</p>")

peso_usuario=prompt("Cual es tu peso: ")
peso_usuario=parseFloat(peso_usuario)     //Se debe pasar a entero, del prompt viene como String

opcionUsuario=prompt("Quieres conocer tu peso en otro planeta?  Si es así usa digita:\n " +
    "\n(1) => Para conocer tu peso en Marte.  \n(2) => Para conocer tu peso en Jupiter \n");


document.write("<p>Tu peso en la Tierra es: "+peso_usuario+"</p>")

switch (opcionUsuario) {

    case "1":
        peso_marte=peso_usuario*g_marte/g_tierra;
        document.write("<p>Tu peso en Marte es: "+peso_marte+"</p>")
        break;

    case "2":
        peso_jupiter=peso_usuario*g_jupiter/g_tierra;
        document.write("<p>Tu peso en la Júpiter es: "+peso_jupiter+"</p>")
        break;

    default:
        document.write("<p>Elegiste una Opción no válida!</p>")
}


*/