const resultValue = document.getElementById('result');
const firstNumValue = document.getElementById('firstNum');
const operatorValue = document.getElementById('operator');
const secondNumValue = document.getElementById('secondNum');
const equalValue = document.getElementById('equal');
const resetValue = document.getElementById('reset');

equalValue.addEventListener('click', function(){
    const a = Number(firstNumValue.value);
    const b = Number(secondNumValue.value);
    const operation = operatorValue.value;
    

    const result = totalResult({a,b,operation})
    
    resultValue.innerText = result;
    
})

resetValue.addEventListener('click', function(){
    firstNumValue.value = '';
    secondNumValue.value = '';
    operatorValue.value = '';
    resultValue.innerText = '';

})

function sum (a,b){
    return a+b;
}

function calculate (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function division (a,b){
    return a/b;
}

const operations = {
    sum: '+',
    calculate: '-',
    multiply: '*',
    division: '/'
}

totalResult = ({a, b, operation})=>{
   let result = null; 

    switch (operation) {
        case operations.sum:
            result =  sum(a,b);   
            break;

        case operations.calculate:
            result = calculate(a,b);   
            break;

        case operations.multiply:
            result = multiply(a,b);   
            break;

        case operations.division:
            result = division(a,b);   
            break;
    
        default:
            break;
    }
    return result;
}



