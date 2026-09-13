const sair = document.querySelector(".pop-up");
const formul = document.querySelector(".formulario");
const captura = document.querySelectorAll(".pop-up1 .botao-pop");
const nome = document.getElementById("nome");
const adress = document.getElementById("adress");
const referencia = document.getElementById("reference");
const rolagem = document.querySelectorAll(".opcao");
const menu = document.querySelector(".menu");





let evento;


rolagem.forEach(scrol =>{
    scrol.addEventListener("click", interar);
})
function interar(event){
    let conteudo = event.target;
    let conca = conteudo.getAttribute('id');
    let sesao =document.querySelector(conca).offsetTop
    window.scroll({
        top: sesao -100})  
        if (conca) {
            conca.scrollIntoView({ behavior: 'smooth' });
          }
}

window.addEventListener("scroll", function() {
    if(scrollY > 0){
        menu.style.top= 0
    }
    else{menu.style.top = 0}
});
 
function orcamento(){
    if(sair.style.display === "none"){
    sair.style.display = "block"}
    else{sair.style.display= "none"}
}

function sairpop(){
sair.style.display= "none" 
}
function sairform(){
    formul.style.display= "none" 
    const input = document.querySelectorAll(".formulario1 .campo .campo-input");
    input.forEach(camp => camp.value = "");
    }

captura.forEach(descri => {descri.addEventListener("click", disparo);});

function disparo(event) {
     evento = event.target.innerText;
    formul.style.display = "block";
    sairpop()
    
}

function confirmar(){
    if (nome.value === "") {
        // Adiciona uma borda vermelha ao campo nome se estiver vazio
        nome.style.border = "1px solid red";
    }
    else if (adress.value === "") {
        
        adress.style.border = "1px solid red";
    } 
    else if (referencia.value === "") {
        
        referencia.style.border = "1px solid red";
    }
    else { console.log(`Nome: ${nome.value}, 
    Endereço: ${adress.value},
     Referência: ${referencia.value},
      Evento: ${evento}`);
        msg(); // Chama a função para enviar a mensagem via WhatsApp
      sairform();}
    
}

// mensagem de resumo via WhatsApp
function msg(){
    const resumo = 
`
 *Resumo do Pedido de Orçamento*:

 *Nome:* ${nome.value}
 *Endereço:* ${adress.value}
 *Referência:* ${referencia.value}
 *Serviço desejado:* ${evento}

 Entraremos em contato em breve!`;

var mensagem = encodeURIComponent(resumo);
    var linkzap = `https://wa.me/5594999099316?text=${mensagem}`;
    window.location.href = linkzap; 
}



/* =====================================================
   CARROSSEL DE FEEDBACK
===================================================== */


const feedbacks = [

    {
        texto:
            "Contratar a VIDROART foi uma excelente experiência. Desde o primeiro contato, a equipe demonstrou atenção, profissionalismo e compromisso com a qualidade do serviço.",

        imagem:
            "img/gelson.jpg",

        nome:
            "Gelson"
    },


    {
        texto:
            "Fiquei muito satisfeito com o resultado do serviço. O atendimento foi excelente e o acabamento ficou exatamente como eu esperava.",

        imagem:
            "img/Cliente2.jpeg",

        nome:
            "Gisele Ferraz"
    },


    {
        texto:
            "Empresa comprometida, atendimento de qualidade e serviço muito bem executado. Recomendo a VIDROART.",

        imagem:
            "img/Cliente3.jpeg",

        nome:
            "Claudemir de Sousa"
    },

    {
        texto:
            "Fiquei muito satisfeita com o resultado! O acabamento ficou impecável e o serviço foi realizado com bastante cuidado e organização. Dá para perceber que a VIDROART realmente se preocupa com a qualidade do trabalho.",

        imagem:
            "img/Cliente4.jpeg",

        nome:
            "Ivania Silva"
    }

];


let feedbackAtual = 0;


const feedbackTexto =
    document.getElementById("feedback-texto");

const feedbackImagem =
    document.getElementById("feedback-imagem");

const feedbackNome =
    document.getElementById("feedback-nome");

const indicadores =
    document.querySelectorAll(".indicador");

const feedbackConteudo =
    document.querySelector(".feedback-conteudo");



/* =====================================================
   MOSTRAR FEEDBACK
===================================================== */

function mostrarFeedback(indice) {

    if (!feedbackTexto) {
        return;
    }


    feedbackConteudo.classList.add("trocando");


    setTimeout(function () {

        feedbackTexto.textContent =
            feedbacks[indice].texto;


        feedbackImagem.src =
            feedbacks[indice].imagem;


        feedbackImagem.alt =
            "Foto de " + feedbacks[indice].nome;


        feedbackNome.textContent =
            feedbacks[indice].nome;


        indicadores.forEach(function (indicador, i) {

            indicador.classList.toggle(
                "ativo",
                i === indice
            );

        });


        feedbackConteudo.classList.remove("trocando");

    }, 300);

}



/* =====================================================
   PRÓXIMO
===================================================== */

function proximoFeedback() {

    feedbackAtual++;

    if (feedbackAtual >= feedbacks.length) {

        feedbackAtual = 0;

    }


    mostrarFeedback(feedbackAtual);

}



/* =====================================================
   ANTERIOR
===================================================== */

function feedbackAnterior() {

    feedbackAtual--;

    if (feedbackAtual < 0) {

        feedbackAtual = feedbacks.length - 1;

    }


    mostrarFeedback(feedbackAtual);

}



/* =====================================================
   IR PARA FEEDBACK
===================================================== */

function irParaFeedback(indice) {

    feedbackAtual = indice;

    mostrarFeedback(feedbackAtual);

}



/* =====================================================
   CARROSSEL AUTOMÁTICO
===================================================== */

let intervaloFeedback =
    setInterval(function () {

        proximoFeedback();

    }, 5000);



/* =====================================================
   PAUSAR AO PASSAR O MOUSE
===================================================== */

const areaFeedback =
    document.querySelector(".feedback");


if (areaFeedback) {

    areaFeedback.addEventListener(
        "mouseenter",
        function () {

            clearInterval(intervaloFeedback);

        }
    );


    areaFeedback.addEventListener(
        "mouseleave",
        function () {

            intervaloFeedback =
                setInterval(function () {

                    proximoFeedback();

                }, 5000);

        }
    );

}

