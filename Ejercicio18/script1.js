function getKey(element,event){
    var x = event.key;
    const vocales = ["a","e","i","o","u"];
    if(vocales.includes(x.toLowerCase())){
        element.style.color="red";
        console.log("Rojo para vocales");
    }else{
        element.style.color="blue";
        console.log("Azul para consonantes");
    }
  }