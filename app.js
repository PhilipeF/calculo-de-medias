const form = document.getElementById('form-atividade');
const inputNomeAtiviadade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');
const tbody = document.querySelector('tbody');

const imgemAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">';
const imagemReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado">';

const media = 7;

let novaAtividade = ''

form.addEventListener('submit', (e) => {
    e.preventDefault()
    inserirNovaAtividade()

    inputNomeAtiviadade.value = '';
    inputNotaAtividade.value = '';
})

function inserirNovaAtividade() {
    novaAtividade += `
        <tr>
            <td>${inputNomeAtiviadade.value}</td>
            <td>${inputNotaAtividade.value}</td>
            <td>${inputNotaAtividade.value > media ? imgemAprovado : imagemReprovado} </td>
        </tr>
    `
    tbody.innerHTML = novaAtividade;
}

