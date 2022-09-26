function challenge1(){
    let preciosHelados = {"Helado de palito de agua" : 0.6, "Helado de crema" : 1, "Bombon de marca heladix" : 1.6, "Bombon de marca helardo" : 1.8, "Potecito de helado de confites" : 2.9, "Pote de 1/4 KG" : 2.9}

    let dineroDisponible = prompt("¿Cuanto dinero tienes?")

    console.log(preciosHelados.values)
    if(dineroDisponible >= preciosHelados["Pote de 1/4 KG"]){
        pass
    }    
}

challenge1()