// demoAPI.js


// Fazer uma chamada assíncrona para a Web API Random User Generator
// https://randomuser.me/api/?results=20    para obter 20 resultados

//Variables

let xhr = new XMLHttpRequest();
xhr.open( 'GET', "https://api.jumpseller.com/v1/products/category/455644.json?login=f33d9a84ab608717efb4008895bda921&authtoken=06d3ada913de0cff36bd9260e98c465c61457579abbfbc8020");
xhr.addEventListener('load', processaResposta );
xhr.send();
let startTime = performance.now();
let body = document.querySelector("body");
let articlesList = document.getElementById("articlesList");
function processaResposta( e ) {

    let endTime = performance.now();
    console.log( 'Chegou a resposta em', endTime - startTime , 'ms');

    // A resposta no formato JSON está na propriedade responseText do e.target (xhr)
    let textoRespostaJSON = e.target.responseText;
    
    // alert( textoRespostaJSON );

    // Converter a respostaJSON para uma estrutura de dados em Javascript
    let objResposta = JSON.parse( textoRespostaJSON );

    console.log( objResposta );

    // Mostrar na consola alguns dados da primeira pessoa

    let primeiraPessoa = objResposta[0];

    for (const variants of objResposta) {
        
        var i = 0;
        do{
            i + 1;
            var cardGroup = document.createElement('div');
            cardGroup.classList = 'card-group';
        } while(i == 3);

        console.log(i);

        let cardProduct = document.createElement('div');
        cardProduct.classList = 'card';
        cardProduct.style.width = '18rem';

        let productImage = document.createElement('img');
        productImage.setAttribute('src', variants.product.images[0].url);
        productImage.classList = 'card-img-top';

        let cardBody = document.createElement('div');
        cardBody.classList = 'card-body';

        let cardTitle = document.createElement('h5');
        cardTitle.classList = 'card-title';

        let cardP = document.createElement('p');
        cardP.classList = 'card-text aling-center';

        let cardButton = document.createElement('button');
        cardButton.classList = 'btn btn-dark';

        cardTitle.textContent = variants.product.name;
        cardP.textContent = "Price: " + variants.product.price + "€" + " Stock: " + variants.product.stock;
        cardButton.textContent = 'Buy'


        // Quando o card group estiver pronto para listar apenas três cards 
        // body.appendChild(cardGroup);
        // cardGroup.appendChild(cardProduct);
        // Quando o card group estiver pronto para listar apenas três cards 

        articlesList.appendChild(cardGroup);
        cardGroup.appendChild(cardProduct);
        cardProduct.appendChild(productImage);
        cardProduct.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardP);
        cardBody.appendChild(cardButton);


    }
}

