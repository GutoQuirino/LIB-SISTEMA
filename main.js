var d = new Date();
var ano = d.getFullYear();
var mes = d.getMonth();
var dia = d.getDate();
var somaAno = (ano - 1900)*365;
var bisexto = (ano - 1900)/4;
var somaMes = (mes)*30; 
var result =(somaAno + somaMes + dia + bisexto)+ 1;
var codDia = result.toFixed(0);
var codVariacao = document.getElementById('codDiario').innerHTML = "Codigo Diario:"+codDia;


function geraCodigo(){
    let chCadastro = document.querySelector('#ncadastro').value;
    let codCadastro = "0"+chCadastro;
    if(codCadastro.length == 6){
        console.log('ok')
    }   else{
        alert('Chave precisa ter 5 caracteres')
    }
}
