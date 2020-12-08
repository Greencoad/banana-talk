var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("output")

var serverurl="https://api.funtranslations.com/translate/minion.json"

function gettranslationurl(input){
    return serverurl+ "?" + "text=" +input
}

function errorhandler(error)
{
    alert("Something is wrong with the sever..! please try after sometime.");
}


function clickhandler()
{
    var inputtext= txtinput.value;
    fetch(gettranslationurl(inputtext));
        .then(response => response.json())
        .then(json => {
            var translatedtext = json.contents.translated;
            outputdiv.innerText= translatedtext;})
        .catch(errorhandler);
}

btntranslate.addEventListener("click",clickhandler);
