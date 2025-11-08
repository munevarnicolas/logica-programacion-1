const prompt = require("prompt-sync")();

console.log("Ingrese 3 numeros distintos");

let num1 = Number(prompt("Ingresa el 1er numero: "));
let num2 = Number(prompt("Ingresa el 2do numero: "));
let num3 = Number(prompt("Ingresa el 3er numero: "));

let mayor, centro, menor;


if (num1 === num2 && num2 === num3) 
{
    console.log("Los tres numeros son iguales: " + num1);
} 
else 
{
    if (num1 >= num2 && num1 >= num3) 
    {
        mayor = num1;
        if (num2 >= num3) 
        {
            centro = num2;
            menor = num3;
        } 
        else 
        {
            centro = num3;
            menor = num2;
        }
    } 
    
    else if (num2 >= num1 && num2 >= num3) 
    {
        mayor = num2;
        if (num1 >= num3) 
        {
            centro = num1;
            menor = num3;
        } 
        
        else 
        {
            centro = num3;
            menor = num1;
        }

    } 
    
    else 
    {
        mayor = nume3;
        if (num1 >= num2) 
        {
            centro = num1;
            menor = num2;
        } 
        
        else 
        {
            centro = num2;
            menor = num1;
        }
    }
    
    console.log("El orden de mayor a menor es: " + mayor + ", " + centro + ", " + menor);
    console.log("El orden de menor a mayor es: " + menor + ", " + centro + ", " + mayor);
}


