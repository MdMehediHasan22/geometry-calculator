function getInputFieldBaseValue(InputId){
    const inputFieldValue = document.getElementById(InputId);
    const inputValue = inputFieldValue.value;
    const value = parseFloat(inputValue);
    return value;

}

function getInputFieldHeightValue(inputText){
    const inputTextValue = document.getElementById(inputText);
    const inputValue = inputTextValue.value;
    const value = parseFloat(inputValue);
    return value;
}

function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}