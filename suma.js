let primerNum, segundoNum, suma;

primerNum=prompt("Primer Número a sumar: ");
primerNum=parseFloat(primerNum);

segundoNum=prompt("Segundo Número a sumar: ");
segundoNum=parseFloat(segundoNum);

suma= primerNum + segundoNum;

document.write("<h1> Suma de dos Números</h1>" +
                "<p>suma entre "+primerNum+" y "+segundoNum+" es: </p>");
document.write("<h1>"+suma+"</h1>");