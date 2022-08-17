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
            let nombre1= prompt("Ingrese nombre de la primera persona");
            let edad1= prompt("Ingrese edad de la primera persona");
            let nombre2= prompt("Ingrese nombre de la segunda persona");
            let edad2= prompt("Ingrese edad de la segunda persona");
            let nombre3= prompt("Ingrese nombre de la tercera persona");
            let edad3= prompt("Ingrese edad de la tercera persona");
            alert(ej10_MayorEdad(edad1,edad2,edad3,nombre1,nombre2,nombre3));
            break;

        case 11:
            let antiguedad= parseFloat(prompt("Ingrese años de antiguedad"));
            alert(ej11_calculaBono(antiguedad));
            break;

        case 12:
            let salario_inicial = parseFloat(prompt("Ingrese salario inicial"));
            let cant_años = parseFloat(prompt("Ingrese cantidad de años"));
            alert(ej12_salarioProfesor(salario_inicial, cant_años));
            break;

        case 13:
            let cantAlumnos=parseFloat(prompt("Ingrese numero de alumnos"));
            alert(ej13_AlumnosAprobados(cantAlumnos));
            break;

        case 14:
            let cantfocos=parseFloat(prompt("Ingrese numero de focos"));
            alert(ej14_DevuelveFocos(cantfocos));
            break;

        case 15:
            let añonac=parseFloat(prompt("Ingrese año de nacimiento"));
            alert(ej15_Votacion(añonac));
            break;

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

    function ej10_MayorEdad(edad1,edad2,edad3,nombre1,nombre2,nombre3){
        let arreglo=[
            {
            primerNombre: nombre1,
            primeraEdad: edad1,
            },
            {segundoNombre: nombre2,
            segundaEdad: edad2,
            },
            {
            tercerNombre: nombre3,
            terceraEdad: edad3,
            },
            ]
        console.table(arreglo); 

        if(isNaN(edad1) || isNaN(edad2) || isNaN(edad3)){
            return "Ingrese valores numéricos!!"
        }else{
            if(edad1>edad2){
                if(edad1>edad3){
                  return "Persona de mayor edad: " + arreglo[0].primerNombre + ", su edad es: "+ arreglo[0].primeraEdad;
                }else
                    {
                    return "Persona de mayor edad: " + arreglo[2].tercerNombre + ", su edad es: "+ arreglo[2].terceraEdad;
                    }
                }       

            else{
                if(edad2>edad3){
                    return "Persona de mayor edad: " + arreglo[1].segundoNombre + ", su edad es: "+ arreglo[1].segundaEdad;
                  }else
                      {
                      return "Persona de mayor edad: " + arreglo[2].tercerNombre + ", su edad es: "+ arreglo[2].terceraEdad;
                      }
                  }

        }}

        
        function ej11_calculaBono(antiguedad){
            
        if(isNaN(antiguedad)){
            return "Ingresa valores correctos";
        }else{
            switch(antiguedad){
            case 1:
                return "El bono que le corresponde al trabajador es $100 ";
                break; 

            case 2:
                return "El bono que le corresponde al trabajador es $200 ";
                break;

            case 3:
                return "El bono que le corresponde al trabajador es $300 ";
                break;

            case 4:
                return "El bono que le corresponde al trabajador es $400 ";
                break;

            case 5:
                return "El bono que le corresponde al trabajador es $500 ";
                break;
            }}

            if(antiguedad<=50){
                return "El bono que le corresponde al trabajador es $1000 ";
                }
                else{
                return "La cantidad de años máxima es 50";
                }
            }


        function ej12_salarioProfesor(salario_inicial, cant_años){
           
            const sueldos=[];
            let sueldo=salario_inicial;

            if(isNaN(salario_inicial) || isNaN(cant_años)){
                return "Ingrese valores numéricos!!"
            }else{
            for(i=0; i<cant_años; i++){
                sueldo=sueldo+(sueldo*0.10);
                sueldos[i]=sueldo;
                }
            return "El salario despues de " +cant_años +" años es: " +sueldo;   
            }
        }

        function ej13_AlumnosAprobados(cantAlumnos){
            let notas_totales=[];
            let aprobados=0;
            let desaprobados=0;
            if(isNaN(cantAlumnos)){
                return "Ingresa valores correctos";
            }else{
                for(i=0;i<cantAlumnos;i++){
                    let nota= prompt("Ingrese nota del alumno " +(i+1));
                    notas_totales[i]=nota;
                    if(nota>10){
                        aprobados= aprobados+1;
                    }else{
                        desaprobados=desaprobados+1;
                    }
                }
                return "Alumnos aprobados: "+ aprobados + " // Alumnos desaprobados: " + desaprobados;

            }
        }

        function ej14_DevuelveFocos(cantfocos){
            let verde=0;
            let rojo=0;
            let blanco=0;
            if(isNaN(cantfocos)){
                return "Ingresa valores correctos";
            }else{
                for(i=0;i<cantfocos;i++){
                    let color= prompt("Ingrese color del foco " +(i+1) + "-- Verde: V  // Blanco: B // Rojo: R");
                    
                    switch(color){
                        case "V":
                            verde=verde+1;
                            break;
            
                        case "B":
                            blanco=blanco+1;
                            break;
            
                        case "R":
                            rojo=rojo+1;
                            break;}
                 }
                return "Focos verdes: "+ verde + " // Focos blancos: " + blanco + " // Focos rojos: " + rojo;
            }
        }

        function ej15_Votacion(añonac){
           let edadvoto=0;
           let añoactual=2022;
            if(isNaN(añonac)){
                return "Ingresa valores correctos";
            }else{
                edadvoto=añoactual-añonac;

                if(edadvoto<18){
                    return "Ud. aun no puede votar, tiene " +edadvoto + " años.";
                }else{
                return "Ud. tiene " +edadvoto + " años. Está obligado a votar.";
                }
            }
        }