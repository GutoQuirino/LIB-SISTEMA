function geraCodigo(){
    let d = new Date();
    let ano = d.getFullYear();
    let mes = d.getMonth();
    let dia = d.getDate();
    let somaAno = (ano - 1900)*365;
    let somaMes = (mes - 1)*30; // verificar se é 0 ou 1
    let somaDia = (dia - 1);
    let res = (somaAno + somaMes + somaDia);
    let renova = document.querySelector('#codrenova').innerHTML= res;
    let emergency = document.getElementById('codemergencia').innerHTML= ' numero de serie p/ 3 dias';
    
}