// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola Christian Andres A.P.'; //null

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 5;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
}
devolverString('Hola');

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var suma = x + y;
  
  return suma;
}

suma(5 + 4);//9

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var var_resta = x - y;

  return var_resta;
}

resta(5 - 4);//1

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplicacion = x * y;
  
  return multiplicacion;
}

multiplica(5 * 4);//20

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var division = x / y;

  return division;
}

divide(4 / 2);//2

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  var igual = true;
  if(x===y){
    igual = true;
  }
  else
    igual = false;
  
  return igual;
}

sonIguales(5,5);//true

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var longitud = true;
  if(str1.length===str2.length){
    longitud = true;
  }
  else
  longitud = false;
  
  return longitud;
}

tienenMismaLongitud('Hola','Holas');//false


function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90){
    return true;
  }
  return false;
}

menosQueNoventa(88);//true


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num > 50){
    return true;
  }
  return false;  
}

mayorQueCincuenta(60);//true


function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var modular = x % y;

  return modular;
}

obtenerResto(5,2);//1


function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var par = true;
  if(num % 2 == 0){
    par = true;
  }
  else
  par = false;

  return par;
}

esPar(4);//0 -true


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var impar = true;
  if(num % 2 == 1){
    impar = true;
  }
  else
  impar = false;

  return impar; 
}

esImpar(5);//1 -true


function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var cuadrado = Math.pow(num,2);

  return cuadrado;
}

elevarAlCuadrado(2);//4


function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var cubo = Math.pow(num,3);

  return cubo;
}

elevarAlCubo(3);//9


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var total = Math.pow(num,exponent);

  return total;
}

elevar(2,3);//8


function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondea = Math.round(num);

  return redondea;
}

redondearNumero(5.85);//6


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redondea_ceil = Math.ceil(num);

  return redondea_ceil;  
}

redondearHaciaArriba(4.20);//5


function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random();
}

numeroRandom;

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  var resultado = 'Hola';

  if(numero > 0){
    resultado = 'Es positivo';
  }
  else
  if(numero < 0){
    resultado = 'Es negativo';
  }
  else
  if (numero === 0){
    return false;
  }

  return resultado;
}

esPositivo(2);//Es positivo


function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var resultado = str + '!';

  return resultado;
}

agregarSimboloExclamacion('Hello World');


function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var resultado = nombre + ' ' + apellido;

  return resultado;  
}
combinarNombres('Christian','Aguilar');//Christian Aguilar

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var resultado = 'Hola ' + nombre + '!';
  return resultado;
}

obtenerSaludo('Christian');


function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var area = alto * ancho;

  return area;
}

obtenerAreaRectangulo(2,3);//6


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimeto = 4 * lado;
  
  return perimeto;
}

retornarPerimetro(3);//9


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var area = (base * altura) / 2

  return area;
}

areaDelTriangulo(3,5);//7.5 Area


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var dolar = 1.20;
  var resultado = euro * dolar;

  return resultado;
}

deEuroAdolar(5);//6


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  var resultado = 'vocal';
  if (letra.length > 1){
    resultado = 'Dato incorrecto';
  }
  else

  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'||
      letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U'){
    resultado = 'Es vocal';
  }
  else
  resultado = 'Dato incorrecto';

  return resultado;//xxxxxxxxxxxxxxxxxxxxxx
}

esVocal('a');//Es vocal



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
