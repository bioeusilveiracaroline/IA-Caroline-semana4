const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é IA? ",
        alternativas: [
            {
                texto: "É uma inteligência artificial!",
                afirmacao: "afirmacao"
            },
            {
                texto: "É um jogo!",
                afirmacao: "afirmacao"
            }


        ]
    },
    {
        enunciado: "Quando iniciou o novo ensino médio nos deparamos com uma nova realidade, muita tecnologia inovadora nas novas matérias. Qual foi a sensação de estamos diante dessa situação? ",
        alternativas: [
            {
                texto:  "Que desespero como vamos nos adaptar com tantas tecnologias!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Isso é super interessante, finalmente iremos ter contato com as novas tecnologias!",
                afirmacao: "afirmacao"
            }
            
            
        ]
    },
    {
        enunciado: "Como utilizar IA da forma correta para fazer um  trabalho gerando imagens? ",
        alternativas: [
            {
                texto: "Você irá!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Fazer alternativa!",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Fazer pergunta!",
        alternativas: [
            {
                texto: "Fazer alternativa!",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Fazer pergunta!",
        alternativas: [
            {
                texto: "Fazer alternativa!",
                afirmacao: "afirmacao"

            }
        ]
    },


];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;

    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opçãoselecionada){
    const afirmaçoes = opçãoselecionada.afirmaçoes;
    historiaFinal += afirmaçoes + " ";
    atual++;
    mostraPergunta();

}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}




mostraPergunta();