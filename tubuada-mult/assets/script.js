function Tabuada(){
    let num = window.document.getElementById('num').value; //pegando valor de cada campo
    let end = window.document.getElementById('end').value;
    
    if(num == 0 || end == 0){
        window.alert('[ERRO] Preencha os valores para exibir a tabuada')
    }else{

        let n = Number(num); //transfomando a string em número, pois quando pega do id -> automaticamente vira string
        let e = Number(end);

        let res = window.document.getElementById('res'); //pegando pelo id para mostrar os resultados
        let r = ''; //campo de resposta em branco/sem alteração
    
        res.innerHTML = `A Tabuada de ${num} é:<br><br>`;
    
        for(let x = 0; x <= e; x++){ //let x = 0 variavel de inicialização para for - loop para calcular
            r = n * x; //operação qu desejo fazer
            res.innerHTML += `${n} x ${x} = ${r} <br>`;
        }
    }

    document.getElementById('num').value = ''; //resetar os inputs
    document.getElementById('end').value = '';
}

//colocando ano atual no rodapé
window.document.addEventListener('DOMContentLoaded', function(){ //função anonima que acontecerá ao carregar a pág.
    var date = new Date(); //novo 'objeto' que representa data e horas atuais
    var atualDate = date.getFullYear(); //metodo de Date() que representa ano com 4 dígitos

    document.getElementById('date-y').textContent = atualDate; //propriedade que define ou retorna o texto dentro de um elemento 
});