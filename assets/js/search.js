var querySearch = window.location.href.split("=");
console.log("https://api.jumpseller.com/v1/products/search.json?login=f33d9a84ab608717efb4008895bda921&authtoken=06d3ada913de0cff36bd9260e98c465c61457579abbfbc8020&query="+querySearch[1]+"&fields=name,description,price,images,stock");

let xhr = new XMLHttpRequest();
xhr.open( 'GET', "https://api.jumpseller.com/v1/products/search.json?login=f33d9a84ab608717efb4008895bda921&authtoken=06d3ada913de0cff36bd9260e98c465c61457579abbfbc8020&query="+querySearch[1]+"&fields=id,name,description,price,images,stock");
xhr.addEventListener('load', processaResposta );
xhr.send();
let startTime = performance.now();

queryBtnSearch.addEventListener('click', () =>{
    window.location.replace("search.html?querySearch=" + document.getElementById("querySearch").value);
});

var querySearchInput = document.getElementById('querySearch');

querySearchInput.value = querySearch[1];

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

    if(objResposta.length === 0){
        let body = document.querySelector('body');
        let pNothingFound = document.createElement('h2');
        pNothingFound.classList = 'text-center';
        pNothingFound.textContent = "Nothin Found, Sorry😅";
        body.appendChild(pNothingFound);
    }

    for (const variants of objResposta) {
        
        console.log(variants.product.id, variants.product.variants, variants.product.stock);

        let body = document.querySelector('body');
        let articlesList = document.getElementById('articlesList');

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
        cardButton.textContent = 'Buy';
        cardButton.addEventListener('click', () =>{
            window.location.replace("article.html?articleId=" + variants.product.id);
        });

        console.log(variants.product.id);

        // Quando o card group estiver pronto para listar apenas três cards 
        // body.appendChild(cardGroup);
        // cardGroup.appendChild(cardProduct);
        // Quando o card group estiver pronto para listar apenas três cards 

        // articlesList.appendChild(cardGroup);

        articlesList.appendChild(cardProduct);
        cardProduct.appendChild(productImage);
        cardProduct.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardP);
        cardBody.appendChild(cardButton);


    }
}