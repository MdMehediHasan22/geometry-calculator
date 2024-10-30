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
//add to claculation entry
function addToCalculationEntry(areaType,area){
     const calculationEntry = document.getElementById('calculation-entry');
     const count = calculationEntry.childElementCount;
     const p = document.createElement('p');
     p.classList.add('my-4');
     p.innerHTML= `${count+1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`
     calculationEntry.appendChild(p);
}