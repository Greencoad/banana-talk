var btnTranslate = document.querySelector("btn-translate");
var txtInput = document.querySelector("txt-input");
var outputDiv = document.querySelector("output")

 var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(txtInput) {
    return serverURL + "?" + "text=" + txtInput
}

function clickhandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickhandler);

function errorHandler(error) {
    console.log("error occured",error);
    alert("Something is wrong with the sever..! please try after sometime.");
}