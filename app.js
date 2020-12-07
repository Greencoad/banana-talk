var btntranslate = document.querySelector(#btn-translater);
var txtinput = document.querySelector(#txt-input);
var outputdiv = document.querySelector("output")

var serverurl="https://api.funtranslations.com/translate/minion.json";

function gettranslationurlurl(text){
    return serverurl+"?"+"text"+text;
}

function errorhandling(error)
{
    alert("Something is wrong with the sever..! please try after sometime.");
}


function clickhandler()
{
    var inputtext= txtinput.value;
    fetch(gettranslationurlurl(inputtext));
        .then(response => response.json());
        .then(json => {
            var translatedtext = json.contents.translated;
            outputdiv.innerText= json;})
        .catch(errorhandling);
}

btntranslate.addEventListener("click",clickeventhandler);
