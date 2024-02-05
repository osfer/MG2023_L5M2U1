console.log("Suma de numeros pares en arreglo");
const arreglo = [1,2,3,4,5,6,7,8,9,10,11]

function sumaPares (a){
    var result = 0;
    a.forEach(element => {
        if(element%2==0){
            result+=element
        }
    });
    console.log("La suma de pares es: " + result);
    document.getElementById("valor").innerHTML = result;
}
sumaPares(arreglo);