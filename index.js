var requestURL = 'https://economia.awesomeapi.com.br/all';
var request = new XMLHttpRequest();
var dados
request.open('GET', requestURL);
request.responseType = 'json';
request.send()
request.onload = function(){
    var dados = request.response;
    console.log(dados)

    //Dolar
    document.getElementById("USD_name").innerHTML = dados.USD.name 
    if(dados.USD.varBid < 0){
        document.getElementById("USD_ask").style.color = ' #e20000	 ';
    }else{
        document.getElementById("USD_ask").style.color = ' #00ce2d	 ';
    }
    document.getElementById("USD_ask").innerHTML = 'R$' + dados.USD.ask
    document.getElementById("USD_date").innerHTML = dados.USD.create_date

    //Euro
    document.getElementById("EUR_name").innerHTML = dados.EUR.name 
    if(dados.EUR.varBid < 0){
        document.getElementById("EUR_ask").style.color = ' #e20000	 ';
    }else{
        document.getElementById("EUR_ask").style.color = ' #00ce2d	 ';
    }
    document.getElementById("EUR_ask").innerHTML = 'R$' + dados.EUR.ask
    document.getElementById("EUR_date").innerHTML = dados.EUR.create_date

    //Libra
    document.getElementById("GBP_name").innerHTML = dados.GBP.name 
    if(dados.GBP.varBid < 0){
        document.getElementById("GBP_ask").style.color = ' #e20000	 ';
    }else{
        document.getElementById("GBP_ask").style.color = ' #00ce2d	 ';
    }
    document.getElementById("GBP_ask").innerHTML = 'R$' + dados.GBP.ask
    document.getElementById("GBP_date").innerHTML = dados.GBP.create_date

    //Iene
    document.getElementById("JPY_name").innerHTML = dados.JPY.name 
    if(dados.JPY.varBid < 0){
        document.getElementById("JPY_ask").style.color = ' #e20000	 ';
    }else{
        document.getElementById("JPY_ask").style.color = ' #00ce2d	 ';
    }
    document.getElementById("JPY_ask").innerHTML = 'R$' + dados.JPY.ask
    document.getElementById("JPY_date").innerHTML = dados.JPY.create_date

    //Franco
    document.getElementById("CHF_name").innerHTML = dados.CHF.name 
    if(dados.CHF.varBid < 0){
        document.getElementById("CHF_ask").style.color = ' #e20000	 ';
    }else{
        document.getElementById("CHF_ask").style.color = ' #00ce2d	 ';
    }
    document.getElementById("CHF_ask").innerHTML = 'R$' + dados.CHF.ask
    document.getElementById("CHF_date").innerHTML = dados.CHF.create_date

    //Bitcoin
    document.getElementById("BTC_name").innerHTML = dados.BTC.name 
    if(dados.BTC.varBid < 0){
        document.getElementById("BTC_ask").style.color = ' #e20000	 ';
    }else{
        document.getElementById("BTC_ask").style.color = ' #00ce2d	 ';
    }
    document.getElementById("BTC_ask").innerHTML = 'R$' + dados.BTC.ask
    document.getElementById("BTC_date").innerHTML = dados.BTC.create_date
}
