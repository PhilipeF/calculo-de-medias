const form = document.getElementById('form-atividade');
const inputNomeAtiviadade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');
const mediaFinal = document.getElementById('media-final');
const resultadoFinal = document.getElementById('resultado-final');

const tbody = document.querySelector('tbody');

const imgemAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">';
const imagemReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado">';
const spanAprovadoReprovado = '<span class="resultado aprovado"></span>';

const atividades = [];
const notas = [];
const media = 7;

let novaAtividade = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inserirNovaAtividade();
    calcularMedia();

    inputNomeAtiviadade.value = '';
    inputNotaAtividade.value = '';
})

function inserirNovaAtividade() {
    atividades.push(inputNomeAtiviadade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    novaAtividade += `
        <tr>
            <td>${inputNomeAtiviadade.value}</td>
            <td>${inputNotaAtividade.value}</td>
            <td>${inputNotaAtividade.value >= media ? imgemAprovado : imagemReprovado} </td>
        </tr>
    `
    tbody.innerHTML = novaAtividade;
}

function calcularMedia() {
    let somaDasNotas = 0
    let mediaDasNotas = 0;

    for (i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    mediaDasNotas = somaDasNotas / notas.length;

    mediaFinal.innerHTML = mediaDasNotas.toFixed(2);
    resultadoFinal.innerHTML = mediaDasNotas >= media ?
        '<span class="resultado aprovado">Aprovado</span>' :
        '<span class="resultado reprovado">Reprovado</span>';
}