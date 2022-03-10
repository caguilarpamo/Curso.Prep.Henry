## PRESENTACION - CHRISTIAN AGUILAR

## VARIABLES:
             Podemos dar el nombre de variables a aquellos elementos que creamos con el fin de almacenar un dato que queramos usar a lo largo de nuestro código, como por ejemplo:
             Queremos jugar a saltar laso entre varias personas. Para ello, queremos saber quien es la persona que va a saltar más veces y sería el ganador. Con esta información, decidimos hacer un programa que guarde los datos básicos de cada participante y para ello disponemos de dos variables:
             - Nombre
             - Número de saltos
             Con estas dos variables nos disponemos a empezar el juego:
             Participante 1:
             - Nombre: Gabriela Aguilar
             - Número de saltos: 15
             Participante 2:
             - Nombre: Juan Andres
             - Número de saltos: 10

             Por lo anterior, podemos ver que el sistema nos ha informado la ganadora fue Gabriela Aguilar con 15 saltos.


## STRINGS:
            Es una manera de ver las variables anteriormente descritas, pero está vez a modo de cadena de texto, es decir, acá vamos a ver la relación de la información a nivel de texto, por ejemplo, anteriormente teniamos dos variables, donde en una alojamos el nombre y en otra el número de saltos.Para este caso, nuestra cadena de texto sería la variable que ha almacenado el nombre.
            Nombre = 'Gabriela Aguilar';


## FUNCIONES: (argumentos, `return`)
            En las funciones vamos a tener la posibilidad de dar vida a nuestro código de una manera más ordenada. Todo lo que describamos dentro de ella, se haría para un próposito en especifico. Para ello, podemos apoyarnos de argumentos o una palabra en especial como lo es return.
            - Argumentos: Son las variables que vamos a usar dentro de la función para un fin en especifico.
            - return: Es una palabra reservada que vamos a usar al final de la función para que nos entregue el resultado esperado al usuario.
            Ejemplo:
            function suma(numero1, numero2){ //Declaramos la función suma con dos argumentos (variables), numero1 y numero2.
                var resultado = numero1 + numero2; //declaramos la variable resultado, donde vamos a sumar las otras dos variables

                return resultado; //retornamos el valor que se obtenga de los datos ingresados.
            }
            
            Con el ejemplo anterior, podemos visualizar que podemos obtener el resultado de una suma como primer ejemplo, a traves de una función.
            

## DECLARACIONES `if`
            Es la manera como podemos poner condiciones a nuestro código, es decir, cuando queremos que tome un camino diferente o que haga primero una validación para poder continuar, por ejemplo:
            En el juego de saltar el laso, podemos poner una condición de edad, para ello creamos una variable que se puede llamar edad y decimos lo siguiente:
            Si la edad es de 12 años o menos, entonces que si lo deje jugar, en código sería algo así:
                if (edad <= 12){
                    mensaje = 'Si puede jugar';
                }
                else
                    mensaje = 'No puede jugar';


## VALORES BOOLEANOS (`true`, `false`)
            Siguiendo con el ejemplo del juego de saltar el laso, podríamos conocer los valores booleanos como una forma de tener solo dos resultados:
                - si o no
                - verdad o falso
            Con ello, podríamos usar el ejemplo anterior para definir si lo vamos a dejar jugar o no al participante, cumpliendo con la edad límite, por ejemplo:
                if (edad <= 12){
                    return true;
                }
                else
                    return false;