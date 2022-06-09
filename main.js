function geraCodigo(){
    let d = new Date(1900,00,01);
    console.log(d.toISOString())
    let renova = document.querySelector('#codrenova').innerHTML= 'numero de serie p/ 30 dias';
    let emergency = document.getElementById('codemergencia').innerHTML= ' numero de serie p/ 3 dias';
    
}