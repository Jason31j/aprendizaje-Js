function main(){// var = variable global
    // let = variable local
    // const = constante
    let  texto = "esto es lo que quiero imprimir";
    let numero

    numero = prompt("Ingrese un numero")

    //console log = mostrar en consola
    //document.write() = mostrar en el html 
    console.log(texto);
    document.write("prueba")

    //funcion regular
    function suma(num1, num2){
        return num1+num2
    }

    //invocar funcion
    console.log(suma(2,5))
    console.log(suma(2,9))

    //condicionales
    if(numero > 10){
        console.log("El numero es mayor de 10")
    }
    else if(numero < 10){
        console.log("El numero es menor de 10")
    }
    else{
        console.log("El numeero es igual a 10")
    }
}





