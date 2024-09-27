var p = document.getElementsByTagName('p')

// p 
/*
p[0].innerHTML = 'Meu Pau';

for(var i = 0; i < p.length; i++){
    p[i].innerHTML = 'Meu Pau ' + i
}
*/

for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + " " + i
}