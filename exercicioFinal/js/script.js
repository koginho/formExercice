function escopoPrincipal() {
    const formIMC = document.querySelector('.formIMC');
    const resultadoIMC = document.querySelector('.resultadoFormIMC')

    const pessoas = []; // Array para coleta de dados

    let contador = 1 // Variável para contador criada

    function recebeEventoForm(evento) {
        evento.preventDefault(); // cancela o evento sem parar a programação
        console.log(`Número de formulários enviados: ${contador}`)
        contador++; // Adiciona mais '1' para a variável contador

        const nome = formIMC.querySelector('.nome');
        const sobrenome = formIMC.querySelector('.sobrenome');
        const peso = formIMC.querySelector('.peso');
        const altura = formIMC.querySelector('.altura');

        const nomeValue = nome.value;
        const sobrenomeValue = sobrenome.value;
        const pesoValue = peso.value;
        const alturaValue = altura.value;

        function criaDados(nomeValue, sobrenomeValue, pesoValue, alturaValue) {
            return {
                nome: nomeValue,
                sobrenome: sobrenomeValue,
                peso: pesoValue,
                altura: alturaValue
            }
        }; //factory

        function calculaImc(pesoValue, alturaValue) {
            let pesoValueNumber = Number(pesoValue.replace(',', '.'));
            let alturaValueNumber = Number(alturaValue.replace(',', '.'));


            const resultadoConta = (pesoValueNumber / (alturaValueNumber * alturaValueNumber))
            return resultadoConta.toFixed(2)
        }

        pessoas.unshift(criaDados(nomeValue, sobrenomeValue, pesoValue, alturaValue));
        console.log(pessoas)

        resultadoIMC.innerHTML += `
        <p>Nome: ${pessoas[0].nome} ${pessoas[0].sobrenome}, peso: ${pessoas[0].peso}
        kg, altura: ${pessoas[0].altura}m, IMC: ${calculaImc(pessoas[0].peso, pessoas[0].altura)}</p>
        `;
    }

    formIMC.addEventListener('submit', recebeEventoForm) // Adiciona um espião para escutar um evento
}

escopoPrincipal();

//SOLUÇÃO DO PROFESSOR

/*
*Ele economiza linhas fazendo o objeto dentro do array, exemplo: pessoas.push({nome: nome.value})
*/