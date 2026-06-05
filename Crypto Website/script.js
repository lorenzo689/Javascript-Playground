let btc = document.getElementById("bitcoin")
let eth = document.getElementById("ethereum")
let doge = document.getElementById("dogecoin")

let settings = {
    "async": true,
    "scrossDomain": true,
    "url": "API_URL_HERE",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response) {
    btc.innerHTML = response.bitcoin.usd
    eth.innerHTML = response.ethereum.usd
    doge.innerHTML = response.dogecoin.usd
})