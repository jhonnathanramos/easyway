// Variables

var btnHTML = document.getElementById('btnHTML');
var btnCSS = document.getElementById('btnCSS');
var btnJavaScript = document.getElementById('btnJavaScript');
var btnPhp = document.getElementById('btnPhp');
var btnMySql = document.getElementById('btnMySql');
var firstLine = document.getElementById('firstLine');
var secondLine = document.getElementById('secondLine');
var thirdLine = document.getElementById('thirdLine');
var fourthLine = document.getElementById('fourthLine');

//Listener's

btnHTML.addEventListener('click', showHtml);
btnCSS.addEventListener('click', showCss);
btnJavaScript.addEventListener('click', showJavaScript);
btnPhp.addEventListener('click', showPHP);
btnMySql.addEventListener('click', showMySQL);

// Function's

function showHtml(){

    btnHTML.classList.remove("btn-outline-purple");
    btnHTML.classList.add("btn-outline-purple-active");

    firstLine.textContent = 'Jhonnathan Ramos👨‍💻';
    secondLine.textContent = 'HTML🦾'
    thirdLine.textContent = 'Linguagem de Marcação de HiperTexto'
    fourthLine.textContent = 'Quando ingressei no 10º ano no curso de Programação tive o meu primeiro contato com a linguagem em HTML, aquilo foi novo, mas fiquei deslumbrado com essa linguagem e com o potencial de criação e infinidade do que posso fazer.'

    btnCSS.classList.remove("btn-outline-purple-active");
    btnCSS.classList.add("btn-outline-purple");
    btnJavaScript.classList.remove("btn-outline-purple-active");
    btnJavaScript.classList.add("btn-outline-purple");
    btnPhp.classList.remove("btn-outline-purple-active");
    btnPhp.classList.add("btn-outline-purple");
    btnMySql.classList.remove("btn-outline-purple-active");
    btnMySql.classList.add("btn-outline-purple");
}

function showCss(){

    btnCSS.classList.remove("btn-outline-purple");
    btnCSS.classList.add("btn-outline-purple-active");

    firstLine.textContent = 'Jhonnathan Ramos👨‍💻';
    secondLine.textContent = 'CSS🦾'
    thirdLine.textContent = 'Folhas de estilo para HTML'
    fourthLine.textContent = 'Logo que comecei a trabalhar com HTML quis melhorar a forma como o HTML é visto e comecei a embeleza-lo como pude'

    btnHTML.classList.remove("btn-outline-purple-active");
    btnHTML.classList.add("btn-outline-purple");
    btnJavaScript.classList.remove("btn-outline-purple-active");
    btnJavaScript.classList.add("btn-outline-purple");
    btnPhp.classList.remove("btn-outline-purple-active");
    btnPhp.classList.add("btn-outline-purple");
    btnMySql.classList.remove("btn-outline-purple-active");
    btnMySql.classList.add("btn-outline-purple");
}

function showJavaScript(){

    btnJavaScript.classList.remove("btn-outline-purple");
    btnJavaScript.classList.add("btn-outline-purple-active");

    firstLine.textContent = 'Jhonnathan Ramos👨‍💻';
    secondLine.textContent = 'Java Script🦾'
    thirdLine.textContent = 'Uma linguagem de script, usada principalmente na Web'
    fourthLine.textContent = 'Depois de embelezar a página comecei a utilizar certas formas de manipulação do HTML para ser mais user friendly'

    btnHTML.classList.remove("btn-outline-purple-active");
    btnHTML.classList.add("btn-outline-purple");
    btnCSS.classList.remove("btn-outline-purple-active");
    btnCSS.classList.add("btn-outline-purple");
    btnPhp.classList.remove("btn-outline-purple-active");
    btnPhp.classList.add("btn-outline-purple");
    btnMySql.classList.remove("btn-outline-purple-active");
    btnMySql.classList.add("btn-outline-purple");
}

function showPHP(){

    btnPhp.classList.remove("btn-outline-purple");
    btnPhp.classList.add("btn-outline-purple-active");

    firstLine.textContent = 'Jhonnathan Ramos👨‍💻';
    secondLine.textContent = 'PHP🦾'
    thirdLine.textContent = 'PHP um acrônimo recursivo para (Hypertext Preprocessor)'
    fourthLine.textContent = 'A minha prova de aptidão de final de curso no 12º Ano foi baseada na linguagem de PHP juntamente com HTML e Bootstrap (Framework de Estilo), a PAP consistiu em um Ecommerce de vestuários, com parte administrativa que controla as encomendas os clientes os artigos disponíveis e o seu stock e também a parte do cliente que possibilitava-o adcionar artigos ao carrinho prosseguir para o check-out e finalizar a sua encomenda, posteriormente recebendo os dados por email.'

    btnHTML.classList.remove("btn-outline-purple-active");
    btnHTML.classList.add("btn-outline-purple");
    btnCSS.classList.remove("btn-outline-purple-active");
    btnCSS.classList.add("btn-outline-purple");
    btnJavaScript.classList.remove("btn-outline-purple-active");
    btnJavaScript.classList.add("btn-outline-purple");
    btnMySql.classList.remove("btn-outline-purple-active");
    btnMySql.classList.add("btn-outline-purple");
}

function showMySQL(){

    btnMySql.classList.remove("btn-outline-purple");
    btnMySql.classList.add("btn-outline-purple-active");

    firstLine.textContent = 'Jhonnathan Ramos👨‍💻';
    secondLine.textContent = 'MySQL🦾'
    thirdLine.textContent = 'MySQL é um sistema de gerenciamento de banco de dados relacional, que usa a linguagem de consulta estruturada'
    fourthLine.textContent = 'Assim como utilizei o PHP para o meu projeto final de curso, também utilizei o MySQL para gerir os dados que precisavam ser guardados, assim como, artigos, fornecedores, clientes, faturas, moradas de entrega etc...'

    btnHTML.classList.remove("btn-outline-purple-active");
    btnHTML.classList.add("btn-outline-purple");
    btnCSS.classList.remove("btn-outline-purple-active");
    btnCSS.classList.add("btn-outline-purple");
    btnPhp.classList.remove("btn-outline-purple-active");
    btnPhp.classList.add("btn-outline-purple");
    btnJavaScript.classList.remove("btn-outline-purple-active");
    btnJavaScript.classList.add("btn-outline-purple");
}