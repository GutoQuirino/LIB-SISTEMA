var d = new Date();
var ano = d.getFullYear();
var mes = d.getMonth();
var dia = d.getDate();
var somaAno = (ano - 1900)*365;
var bisexto = (ano - 1900)/4;
var somaMes = (mes)*30; 
var result =(somaAno + somaMes + dia + bisexto)+ 1;
var codDia = result.toFixed(0);
var codVariacao = document.getElementById('codDiario').innerHTML = codDia;


function geraCodigo(){
    let chCadastro = document.querySelector('#ncadastro').value;
    let codCadastro = "0"+chCadastro;
    if(codCadastro.length == 6){
        let resultado = parseInt(codDia) +30;
        let codigos = '0'+resultado.toString();
        let cod1 = codigos.substr(0,3);//codigo de variaçao parte 1
        let cod2 = codigos.substr(3,3);//codigo de variaçao parte 2
        let chCliente1 =codCadastro.substr(0,3) ;
        let chCliente2 =codCadastro.substr(3,3) ;
        let numRenovacao = '000'+cod2+chCliente1+cod1+chCliente2+'000';
        document.getElementById('codrenova').innerHTML = numRenovacao;
    }   else{
        alert('Chave precisa ter 5 caracteres')
    }
    
}
