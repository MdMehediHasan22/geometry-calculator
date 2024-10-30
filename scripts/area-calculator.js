document.getElementById('btn-calculate-1').addEventListener('click',function(){
    const base = getInputFieldBaseValue('triangle-base');
    const height = getInputFieldHeightValue('triangle-height');
    const area = 0.5*base*height;
    setElementInnerText('triangle-area',area);
    addToCalculationEntry('Triangle',area);
})

document.getElementById('btn-calculate-2').addEventListener('click',function(){
    const width = getInputFieldBaseValue('rectangle-width');
    const length = getInputFieldHeightValue('rectangle-length');
    const area = width*length;
    setElementInnerText('rectangle-area',area);
    addToCalculationEntry('Rectangle',area);
})

document.getElementById('btn-calculate-3').addEventListener('click',function(){
    const base = getInputFieldBaseValue('parallelogram-base');
    const height = getInputFieldHeightValue('parallelogram-height');
    const area = 0.5*base*height;
    setElementInnerText('parallelogram-area',area);
    addToCalculationEntry('Parallelogram',area);
})
document.getElementById('btn-calculate-4').addEventListener('click',function(){
    const d1 = getInputFieldBaseValue('rhombus-diagonal-1');
    const d2 = getInputFieldHeightValue('rhombus-diagonal-2');
    const area = 0.5*d1*d2;
    setElementInnerText('rhombus-area',area); 
    addToCalculationEntry('Rhombus',area);
})
document.getElementById('btn-calculate-5').addEventListener('click',function(){
    const perimeter = getInputFieldBaseValue('pentagon-perimeter');
    const apothem = getInputFieldHeightValue('pentagon-apothem');
    const area = 0.5*perimeter*apothem;
    setElementInnerText('pentagon-area',area);
    addToCalculationEntry('Pentagon',area);
})
document.getElementById('btn-calculate-6').addEventListener('click',function(){
    const majorRadius = getInputFieldBaseValue('ellipse-a');
    const minorRadius = getInputFieldHeightValue('ellipse-b');
    const areaEllipse = 3.1416*majorRadius*minorRadius;
    const area = areaEllipse.toFixed(2);
    setElementInnerText('ellipse-area',area);
    addToCalculationEntry('Ellipse',area);

})