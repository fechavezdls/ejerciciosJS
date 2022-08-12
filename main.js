function callMenu(){
    let nro_ejercicio=parseInt(
        prompt("Ingrese numero de ejercicio que quiere ejecutar:  \r\n 1.suma \r\n 2.Promedio de examenes \r\n 3.Calcular el área del rectángulo \r\n 4.Calcular el area del Triángulo \r\n 5.Calcular el área del círculo \r\n 6.Calcular el salario semanal \r\n 7.Convertir pulgadas \r\n 8.Cambiar a dólares \r\n 9.Calcular edad del trabajador \r\n 10.Persona de menor edad \r\n 11.Calcular bono \r\n 12.Calcula salario del profesor \r\n 13.Saber alumnos aprobados y desaprobados \r\n 14.Calcular focos por color \r\n 15.Confirmar voto"))

    if (isNaN(nro_ejercicio)){
        alert("Por favor ingresa valores numéricos");
    }else{
        MenuEjercicios(nro_ejercicio)

    }
}

function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1=parseFloat(prompt("Ingrese el valor 1 a sumar"))
            let valor2=parseFloat(prompt("Ingrese el valor 2 a sumar"))
            alert(ej1_sumarValores(valor1, valor2));
            break;
        
        case 2:
            let ex1=parseFloat(prompt("Ingrese la 1ra. nota"));
            let ex2=parseFloat(prompt("Ingrese la 2da. nota"));
            let ex3=parseFloat(prompt("Ingrese la 3ra. nota"));
            let ex4=parseFloat(prompt("Ingrese la 4ta. nota"));
            alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4));
            break;
        
        case 3:
            let base=parseFloat(prompt("Ingrese la base"));
            let altura=parseFloat(prompt("Ingrese la altura"));
            alert(ej3_areaRectangulo(base,altura));
            break;

        case 4:
            let base_tri= parseFloat(prompt("Ingrese la base"));
            let altura_tri= parseFloat(prompt("Ingrese la altura"));
            alert(ej4_areaTriangulo(base_tri,altura_tri));
            break;

        case 5:
            let radio=parseFloat(prompt("Ingrese el radio"));
            alert(ej5_areaCirculo(radio));
            break;

        case 6:
            let jornal=parseFloat(prompt("Ingresa el jornal diario"));
            alert(ej6_PagoSemanal(jornal));
            break;

        case 7:
            let pulg=parseFloat(prompt("Ingresa número"));
            alert(ej7_ConvertirPulg(pulg));
            break;

        case 8:
            let soles=parseFloat(prompt("Ingresa valor en soles"));
            alert(ej8_CambiaDolar(soles));
            break;

        case 9:
            let año_nac=parseFloat(prompt("Ingrese año de nacimiento"));
            alert(ej9_CalculaEdad(año_nac));
            break;

        case 10:
        
        case 11:
        
        case 12:
        
        case 13:

        case 14:

        case 15:
        }

        

    }

    function ej1_sumarValores(a,b){
        if(isNaN(a) || isNaN(b)){
            return "Por favor ingrese valores";
        }else{
            return a+b;    
        }
    }

    function ej2_calcularPromedio(ex1,ex2,ex3,ex4){
        if(isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)){
            return "Por favor ingrese valores";
        }else{
            return (ex1+ex2+ex3+ex4)/4;    
        }
    }

    function ej3_areaRectangulo(base,altura){
        if(isNaN(base) || isNaN(altura)){
            return "Ingresa valores pes oe!!!"
        }else{
            return base * altura;
        }
    }
        
    function ej4_areaTriangulo(base, altura){
        if(isNaN(base) || isNaN(altura)){
            return "Ya pues, ingresa valores"
        }else{
            return (base*altura)/2;
        }
    }

    function ej5_areaCirculo(radio){
        if(isNaN(radio)){
            return "Chistoso, ingresa el radio";
        }else{
            return(3.1416*radio*radio)
        }
    }

    function ej6_PagoSemanal(jornal){
        if(isNaN(jornal)){
            return "Ingresa el jornal pues papi";
        }else{
            return "El pago semanal es: " +jornal*7;
        }
    }

    function ej7_ConvertirPulg(pulg){
        if(isNaN(pulg)){
            return "Ingresa valores";
        }else{
            return "El número en pulgadas es: " +pulg/2.54;
        }
    }

    function ej8_CambiaDolar(soles){
        if(isNaN(soles)){
            return "Ya pues, ingresa el monto en soles";
        }else{
            return "El monto en dólares es: " +soles/3.90;
        }
    }

    function ej9_CalculaEdad(año_nac){
        if(isNaN(año_nac)){
            return "Ingresa año de nacimiento";
        }else{
            let edad= 2022 - año_nac;
            return "La edad del trabajador es: " +edad + "años" ; 
        }
    }