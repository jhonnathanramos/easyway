var articleId = window.location.href.split("=");
console.log("https://api.jumpseller.com/v1/products/"+articleId[1]+".json?login=f33d9a84ab608717efb4008895bda921&authtoken=06d3ada913de0cff36bd9260e98c465c61457579abbfbc8020");

let xhr = new XMLHttpRequest();
xhr.open( 'GET', "https://api.jumpseller.com/v1/products/"+articleId[1]+".json?login=f33d9a84ab608717efb4008895bda921&authtoken=06d3ada913de0cff36bd9260e98c465c61457579abbfbc8020");
xhr.addEventListener('load', processaResposta );
xhr.send();
let startTime = performance.now();

queryBtnSearch.addEventListener('click', () =>{
    window.location.replace("search.html?querySearch=" + document.getElementById("querySearch").value);
});

var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productDescription = document.getElementById("productDescription");
var productBtnPrice = document.getElementById("productBtnPrice");
var productImage = document.getElementById("productImage");

function processaResposta( e ) {

    let endTime = performance.now();
    console.log( 'Chegou a resposta em', endTime - startTime , 'ms');

    // A resposta no formato JSON está na propriedade responseText do e.target (xhr)
    let textoRespostaJSON = e.target.responseText;
    
    // alert( textoRespostaJSON );

    // Converter a respostaJSON para uma estrutura de dados em Javascript
    let objResposta = JSON.parse( textoRespostaJSON );

    // Mostrar na consola alguns dados da primeira pessoa

    // let primeiraPessoa = objResposta[0];

console.log(objResposta);

        // let body = document.querySelector('body');
        // let articlesList = document.getElementById('articlesList');

        // let cardProduct = document.createElement('div');
        // cardProduct.classList = 'card';
        // cardProduct.style.width = '18rem';

        // let productImage = document.createElement('img');
        // productImage.setAttribute('src', objResposta.product.images[0].url);
        // productImage.classList = 'card-img-top';

        // let cardBody = document.createElement('div');
        // cardBody.classList = 'card-body';

        // let cardTitle = document.createElement('h5');
        // cardTitle.classList = 'card-title';

        // let cardP = document.createElement('p');
        // cardP.classList = 'card-text aling-center';

        // let cardButton = document.createElement('button');
        // cardButton.classList = 'btn btn-dark';

        // cardTitle.textContent = objResposta.product.name;
        // cardP.textContent = "Price: " + objResposta.product.price + "€" + " Stock: " + objResposta.product.stock;
        // cardButton.textContent = 'Buy';
        // cardButton.addEventListener('click', () =>{
        //     window.location("article.html?articleId=" + objResposta.product.id);
        // });

        // Quando o card group estiver pronto para listar apenas três cards 
        // body.appendChild(cardGroup);
        // cardGroup.appendChild(cardProduct);
        // Quando o card group estiver pronto para listar apenas três cards 

        // articlesList.appendChild(cardGroup);

        productName.textContent = objResposta.product.name;
        productPrice.textContent = objResposta.product.price + "€";
        productDescription.textContent = objResposta.product.meta_description;
        productBtnPrice.textContent = "Buy (" + objResposta.product.price + "€)";
        productImage.setAttribute('src', objResposta.product.images[0].url);

        articlesList.appendChild(cardProduct);
        cardProduct.appendChild(productImage);
        cardProduct.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardP);
        cardBody.appendChild(cardButton);
    }