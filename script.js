let tabuada = document.getElementById('tabuada');
let num=document.getElementById('num');

let button=document.getElementById('button');
button.addEventListener('click',function(){
    for(let i=1; i<=10;i++){
        let num =parseInt(document.getElementById('num').value);
        let resultado = num*i;
        let linha=document.createElement('p');
        linha.textContent=`${num} x ${i} = ${resultado}`;
        tabuada.appendChild(linha);
    }
});