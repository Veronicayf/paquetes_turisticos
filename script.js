


let paquete //= Number(prompt("Ingrese el numero del Paquete Turistico deseado \n 1- Hawai x3 noches $300 \n 2- NYC x2 noches $600  \n 3- Brazil x4 noches $700 \n 4- El Caribe x2 noches $400 \n 5- Cartagena x3 noches $500"))
let cuota //= Number(prompt("Ingrese el numero de cuotas en que desea pagar \n 1 \n 3 \n 6 \n 12"))

do{

    paquete = Number(prompt("Ingrese el numero del Paquete Turistico deseado \n 1- Hawai x3 noches $300 \n 2- NYC x2 noches $600  \n 3- Brazil x4 noches $700 \n 4- El Caribe x2 noches $400 \n 5- Cartagena x3 noches $500"))
    cuota = Number(prompt("Ingrese el numero de cuotas en que desea pagar \n 1 \n 3 \n 6 \n 12"))


    // PAQUETE NRO 1
    if ((paquete == 1)&&(cuota == 1))  {
       alert("el precio es de $300")
    }
    else
    if ((paquete == 1)&&(cuota == 3))  {
        alert("el precio es de " + 300 / cuota + " por mes")
    }
    else
    if ((paquete == 1)&&(cuota == 6))  {
        alert("el precio es de " + 300 / cuota + " por mes")
    }
    else
    if ((paquete == 1)&&(cuota == 12))  {
        alert("el precio es de " + 300 / cuota + " por mes")
    } 
  
    else
    // PAQUETE NRO 2
    
    if ((paquete == 2)&&(cuota == 1))  {
        alert("el precio es de $600")
     }
     else
     if ((paquete == 2)&&(cuota == 3))  {
         alert("el precio es de $" + 600 / cuota + " por mes")
     }
     else
     if ((paquete == 2)&&(cuota == 6))  {
         alert("el precio es de $" + 600 / cuota + " por mes")
     }
     else
     if ((paquete == 2)&&(cuota == 12))  {
         alert("el precio es de $" + 600 / cuota + " por mes")
     }
    else
    //PAQUETE NRO 3
    if ((paquete == 3)&&(cuota == 1))  {
        alert("el precio es de $700")
     }
     else
     if ((paquete == 3)&&(cuota == 3))  {
         alert("el precio es de $" + 700 / cuota + " por mes")
     }
     else
     if ((paquete == 3)&&(cuota == 6))  {
         alert("el precio es de $" + 700 / cuota + " por mes")
     }
     else
     if ((paquete == 3)&&(cuota == 12))  {
         alert("el precio es de $" + 700 / cuota + " por mes")
     }
    else
    //PAQUETE NRO 4
    if ((paquete == 4)&&(cuota == 1))  {
        alert("el precio es de $400")
     }
     else
     if ((paquete == 4)&&(cuota == 3))  {
         alert("el precio es de $" + 400 / cuota + " por mes")
     }
     else
     if ((paquete == 4)&&(cuota == 6))  {
         alert("el precio es de $" + 400 / cuota + " por mes")
     }
     else
     if ((paquete == 4)&&(cuota == 12))  {
         alert("el precio es de $" + 400 / cuota + " por mes")
     }
    else
    //PAQUETE NRO 5
    if ((paquete == 5)&&(cuota == 1))  {
        alert("el precio es de $500")
     }
     else
     if ((paquete == 5)&&(cuota == 3))  {
         alert("el precio es de $" + 500 / cuota + " por mes")
     }
     else
     if ((paquete == 5)&&(cuota == 6))  {
         alert("el precio es de $" + 500 / cuota + " por mes")
     }
     else
     if ((paquete == 5)&&(cuota == 12))  {
         alert("el precio es de $" + 500 / cuota + " por mes")
     }
     else{
        alert("no ingreso un dato valido")
    }
} 
while(confirm("¿Desea hacer otra cotizacion?"))

//confirm("¿Desea hacer otra cotizacion?")

