//arreglo con los links
const links = document.getElementsByTagName("a");
//numero de links
const tamano = links.length;
console.log(tamano, links);
//posicion del penultimo link
const penultimoPosc = links.length-2;
//penultimo link
const penultimoLink = links[penultimoPosc];
const penultimoLinkHref = penultimoLink.getAttribute("href");
console.log(penultimoLinkHref);
//arreglo con los parrafos
const parrafos = document.getElementsByTagName("p");
//tercer parrafo
const parrafo3 = parrafos[2];
//enlaces del parrafo 3
const linksParrafo3 = parrafo3.getElementsByTagName("a");
console.log(linksParrafo3.length,linksParrafo3);
var newnode = document.createElement("p");
newnode.innerHTML = "La pagina tiene "+ tamano +" enlaces. El enlace del penultimo link es: "+penultimoLinkHref+". El tercer parrafo tiene "+linksParrafo3.length+" links";
document.body.appendChild(newnode);
