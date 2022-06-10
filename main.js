function geraCodigo(){
    let d = new Date();
    let ano = d.getFullYear();
    let mes = d.getMonth();
    let dia = d.getDate();
    let somaAno = (ano - 1900)*365;
    let bisexto = (ano - 1900)/4;
    let somaMes = (mes)*30; // verificar se é 0 ou 1
    let result = number(somaAno + somaMes + dia + bisexto)+ 2;
    let chCadastro = document.querySelector('#ncadastro').value;
    let inicio = chCadastro.substr(0,2);
    let final = chCadastro.substr(2,3);
}