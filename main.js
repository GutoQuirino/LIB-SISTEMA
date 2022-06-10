function geraCodigo(){
    let d = new Date();
    let ano = d.getFullYear();
    let mes = d.getMonth();
    let dia = d.getDate();
    let somaAno = (ano - 1900)*365;
    let bisexto = (ano - 1900)/4;
    let somaMes = (mes)*30; // verificar se é 0 ou 1
    let res = (somaAno + somaMes + dia + bisexto)+ 2;
    let renova = document.querySelector('#codrenova').innerHTML= res;
    let emergency = document.getElementById('codemergencia').innerHTML= ' numero de serie p/ 3 dias';
    
}