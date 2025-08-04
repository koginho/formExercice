function escopoPrincipal () {
    const formIMC = document.querySelector('.formIMC');
    const resultadoIMC = document.querySelector('.resultadoFormIMC')

    const pessoas = []; // Array para coleta de dados

    let contador = 1 // Variável para contador criada

    function recebeEventoForm (evento) {
        evento.preventDefault(); // cancela o evento sem parar a programação
        console.log(`Número de formulários enviados: ${contador}`)
        contador++; // Adiciona mais '1' para a variável contador

        const nome = formIMC.querySelector('.nome');
        const sobrenome = formIMC.querySelector('.sobrenome');
        const peso = formIMC.querySelector('.peso');
        const altura = formIMC.querySelector('.altura');

        function criaPessoa (nome, sobrenome, peso, altura) { 
            return {nome, sobrenome, peso, altura}
        }; //factory

        console.log(nome.value, sobrenome.value, peso.value, altura.value)
    }

    formIMC.addEventListener('submit', recebeEventoForm) // Adiciona um espião para escutar um evento

    resultadoIMC.innerHTML = `<p>${pessoas}</p>`
    
}

escopoPrincipal();