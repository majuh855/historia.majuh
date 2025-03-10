
function Dialogo1() {

    var v1 = "voce esta andando numa praça e escuta um barulho";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_1").innerHTML += v1[n];
            n++;
        }
    }, 50);
}



function Dialogo2() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/2.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '<p id="dialogo_2"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo4();">abrir o livro</button>';
    html += '<button class="btn-donate" onclick="Dialogo5();">jogar ele no lixo</button>';
    html += '</div>';
    html += '</div>';


    $("body").append(html);



    var v1 = " resolvendo ir até o barulho, quando ele chega lá, ele encontra um livro bem diferente!";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_2").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo3() {

    $(".inicio").remove();


    var  html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img src="fotos/3.jpg" class="foto">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_3"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick=" location.reload(); "> game over</button>'
    html += '</div>';
    html += '</div>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Você continua sua caminhada, porém sem perceber um caminhão descontrolado te atropela, então você recebe uma segunda chance";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_3").innerHTML += v1[n];
            n++;
        }
    }, "50");

}

function Dialogo4() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/5.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += ' <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_4"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo6()">continuar</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Abrindo o livro, você acaba sendo puxado para a historia que estar dentro dele";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_4").innerHTML += v1[n];
            n++;
        }
    }, "50");

}

function Dialogo5() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/4.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_5"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo6()"> continuar</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Quanto você vai jogar o livro no lixo, você acaba caindo dentro do lixo junto e indo para dentro do livro";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_5").innerHTML += v1[n];
            n++;
        }
    }, "50");

}

function Dialogo6() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/6.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_6"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo7()"> contra ataca e acaba perdendo um pouco da sua força</button>';
    html += '<button class="btn-donate" onclick="Dialogo8()">Você corre e foge do ataque do inimigo</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = " Já dentro da historia, você acaba acordando dentro do corpo de outra pessoa e quando você vai percebe, você estar no meio do centro da batalha entre dois reinos rivais, e um guerreiro acaba de atacando";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_6").innerHTML += v1[n];
            n++;
        }
    }, "50");

}

function Dialogo7() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/7.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_7"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo9()"> pega uma espada grande</button>';
    html += '<button class="btn-donate" onclick="Dialogo10()">pega um bastão de madeira</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Percebendo que estar mais fraco você corre e acaba achando duas ferramentas";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_7").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo8() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/7.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_8"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo9()"> pega uma espada grande</ class="btn-donate">';
    html += '<button class="btn-donate" onclick="Dialogo10()">pega um bastão de madeira</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = " vendo que você continua intacto, você acaba achando duas ferramentas";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_8").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo9() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/9.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_9"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo11()">aceita a ajuda</button>';
    html += '<button class="btn-donate" onclick="Dialogo12()">recusa a ajuda do desconhecido por medo</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "A espada acaba sendo muito pesada, pois era feita de um material muito precioso, por causa disso você acaba não vendo um inimigo vindo te atacar. Você acaba levando um golpe fatal nas pernas fazendo cair no chão. Até que aparece uma pessoa para ajuda-lo. Essa pessoa acaba derrotando o inimigo e vem te ajudar";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_9").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo10() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="bastao.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_10"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo13()"> cria tornados de raios</button>';
    html += '<button class="btn-donate" onclick="Dialogo14()">cria chuva de raio</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Quando você pega o bastão, você ver que ele era diferente, pois ele não era um bastão de madeira qualquer e sim um bastão magico que conseguia fazer coisas magnificas. Todavia você não sabe usa-lo. Então você aponta o bastão para o inimigo e começa a sair raios azuis do bastão, com isso você acaba tendo um ideia de derrotar do inimigo";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_10").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo11() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="felix.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_11"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo15()"> prótese de peixe</button>';
    html += '<button class="btn-donate" onclick="Dialogo16()">prótese de cavalo</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Então o desconhecido se apresenta como: Felix e te diz que se você não amputar a suas duas pernas  você iria morrer de hemorragia. Então Felix te ajuda a corta suas pernas fora  e com isso você fica sem consegui se locomover. Então ele diz que tem duas próteses, porém era de animais, com isso você teve que escolher";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_11").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo12() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto"src="fotos/15.jpg">';
    html += '</div>'; 
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_12"></p>';
    html += '</div>';
 
    html += '</div>';
 

    $("body").append(html);



    var v1 = " Por não ter aceitado a ajuda, você acaba tendo uma hemorragia por conta do ferimento e morre";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_12").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo13() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/17.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_13"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo17()">  ignorar</button>';
    html += '<button class="btn-donate" onclick="Dialogo18()">Ajudar as pessoa</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Vendo que você conseguiu derrotar o inimigo, você continua andando no meio daquela guerra, Até que você encontra uma pessoa pedindo ajuda";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_13").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo14() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/16.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_14"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo17()">  ignorar</button>';
    html += '<button class="btn-donate" onclick="Dialogo18()">Ajudar as pessoa</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Vendo que você conseguiu derrotar o inimigo, você continua andando no meio daquela guerra, Até que você encontra uma pessoa pedindo ajuda";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_14").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo15() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/10.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_15"></p>';
    html += '</div>';
 
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Você não conseguen andar, pois prótese de peixe só serve no mar, por conta disso você acaba morrendo de calor, já que não tinha agua";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_15").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo16() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/11.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_16"></p>';
    html += '</div>';
 
    html += '<button v onclick=" DialogoMO() "> CONTINUA</button>'
    html += '</div>';
 

    $("body").append(html);



    var v1 = " A prótese de cavalo na verdade era de unicórnio é por conta disso você conseguiu poderes de telecinesia ";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_16").innerHTML += v1[n];
            n++;
        }
    }, "50");

}

function DialogoMO() {

    $(".inicio").remove();


    var  html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/12.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_MO"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo17()">  ignorar</button>';
    html += '<button class="btn-donate" onclick="Dialogo18()"> Ajudar as pessoa</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Após colocar a prótese, você continua andando com o Felix e encontra uma pessoa pedindo ajuda";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_MO").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo17() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/15.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_17"></p>';
    html += '</div>';
 
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Não ajudou e por raiva a pessoa te mata achando que você é um inimigo";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_17").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo18() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/13.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_18"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick=" Dialogo44() "> CONTINUA</button>'
    html += '</div>';
 

    $("body").append(html);



    var v1 = " Você escolheu ajudar e com isso a pessoa começa a falar Ele diz que viu potencial em você  e que só você pode derrotar o Mokushiroku, afinal mokushiroku é o rei da anipsula e queria acabar o todos os outros reinos e governar geral, por esse motivo você terá que derrotar ";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_18").innerHTML += v1[n];
            n++;
        }
    }, "50");

}

function Dialogo44() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/14.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_44"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo19()"> ir andando até o local</button>';
    html += '<button class="btn-donate" onclick="Dialogo20()"> pega um molusco voador</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = " Então você começa a sua jornada atrás do mokushiroku, porém anipsula era bem longe, por isso você teria que escolher uma maneira de chegar lá ";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_44").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo19() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/19.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_19"></p>';
    html += '</div>';
 
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Para ir para anipsula você teria que passar pelo deserto tambiti, como você estava a pé você acaba morrendo com o calor que aquele local emanava";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_19").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo20() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/18.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_3"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo21()">  usar seus poderes para derrubar ele no chão</button>';
    html += '<button class="btn-donate" onclick="Dialogo22()">usa seus poderes para se proteger e deixa ele atacar primeiro</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Chegando no local, você vai correndo para derrotar o mokushiroku Então você ver que ele é um homem bem forte e poderoso, mas você não fica com medo e vai pra cima dele";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_3").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo21() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/15.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_21"></p>';
    html += '</div>';
 
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Você tentou atacar ele, porém ele conseguiu se proteger e te derrubar e te matar ";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_21").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo22() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/mokushiroku.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_22"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo23()"> continuar</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Você  foi esperto em esperar e conseguiu derrubar ele e assim você com um ar de superioridade diz a ele";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_22").innerHTML += v1[n];
            n++;
        }
    }, "50");

}

function Dialogo22() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/20.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_22"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" onclick="Dialogo23()"> continuar</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Você  foi esperto em esperar e conseguiu derrubar ele e assim você com um ar de superioridade diz a ele";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_22").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo23() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/20.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="heroi.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_23"></p>';
    html += '</div>';


    html += '<button class="btn-donate" onclick="Dialogo24()"> continuar</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "quais são suas ultimas palavras?";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_23").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo24() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/20.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="vilao.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_24"></p>';
    html += '</div>';
   
    html += '<button class="btn-donate" onclick="Dialogo25()"> continuar</button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "Então ele responde:Já estar na hora que você ir para escola";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_24").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo25() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/21.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_25"></p>';
    html += '</div>';
 
    html += '<button class="btn-donate" class="btn-donate" onclick="Dialogo26()"> abre o livro </button>';
    html += '<button class="btn-donate" class="btn-donate" onclick="Dialogo27()"> ir se arrumar para escola </button>';
    html += '</div>';
 

    $("body").append(html);



    var v1 = "sem intender você acorda com sua mãe te chamando  e percebe que foi tudo um sonho. Bem triste você levanta e percebe que tem um livro na cabeceira do seu quarto, o mesmo livro que estava no seu sonho e curioso você faz uma escolh";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_25").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo26() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="fotos/22.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_26"></p>';
    html += '</div>';
 
    html += '</div>';
 

    $("body").append(html);



    var v1 = " parte 2 das aventuras de Minto hanakume em BREVE";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_26").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
function Dialogo27() {

    $(".inicio").remove();


    var html = '<div class="inicio">';
    html += '<div class="figura">';
    html += '<img class="foto" src="FIM.jpg">';
    html += '</div>';
    html += '<div class="container">';
    html += '  <img src="LIVRO.png" class="perfil">';
    html += '<div class="dialogo_box">';
    html += '    <p id="dialogo_27"></p>';
    html += '</div>';
 
    html += '</div>';
 

    $("body").append(html);



    var v1 = " fim";
    var n = 0;

    setInterval(() => {
        if (n < v1.length) {
            document.getElementById("dialogo_27").innerHTML += v1[n];
            n++;
        }
    }, "50");

}
    











