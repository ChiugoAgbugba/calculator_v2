const result = document.getElementById("inputtext");

const sevButton = document.getElementById('seven-btn');
function sevHandler(event){
    console.log('7')
    result.value = `${result.value} 7`
}
sevButton.addEventListener('click', sevHandler );

const eightButton = document.getElementById('eight-btn');
function eightHandler(event){
    console.log('8')
    result.value = `${result.value} 8`
}
eightButton.addEventListener('click', eightHandler );

const nineButton = document.getElementById('nine-btn');
function nineHandler(event){
    console.log('9')
    result.value = `${result.value} 9`
}
nineButton.addEventListener('click', nineHandler );

const CButton = document.getElementById('clear-btn');
function CHandler(event){
    console.log('C')
    result.value = '';
}
CButton.addEventListener('click', CHandler );

const fourButton = document.getElementById('four-btn');
function fourHandler(event){
    console.log('4')
    result.value = `${result.value} 4`
}
fourButton.addEventListener('click', fourHandler );

const fiveButton = document.getElementById('five-btn');
function fiveHandler(event){
    console.log('5')
    
    result.value = `${result.value} 5`
}
fiveButton.addEventListener('click', fiveHandler );

const sixButton = document.getElementById('six-btn');
function sixHandler(event){
    console.log('6')
    result.value = `${result.value} 6`
}
sixButton.addEventListener('click', sixHandler );

const divideButton = document.getElementById('divide-btn');
function divideHandler(event){
    console.log('/')
    result.value = `${result.value} /`
}
divideButton.addEventListener('click', divideHandler );

const oneButton = document.getElementById('one-btn');
function oneHandler(event){
    console.log('1')
    result.value = `${result.value} 1`
}
oneButton.addEventListener('click', oneHandler );

const twoButton = document.getElementById('two-btn');
function twoHandler(event){
    console.log('2')
    result.value = `${result.value} 2`
}
twoButton.addEventListener('click', twoHandler );

const threeButton = document.getElementById('three-btn');
function threeHandler(event){
    console.log('3')
    result.value = `${result.value} 3`
}
threeButton.addEventListener('click', threeHandler );

const timesButton = document.getElementById('times-btn');
function timesHandler(event){
    console.log('*')
    result.value = `${result.value} *`
}
timesButton.addEventListener('click', timesHandler);

const zeroButton = document.getElementById('zero-btn');
function zeroHandler(event){
    console.log('0')
    result.value = `${result.value} 0`
}
zeroButton.addEventListener('click', zeroHandler );

const dotButton = document.getElementById('dot-btn');
function dotHandler(event){
    console.log('.')
    result.value = `${result.value} .`
}
dotButton.addEventListener('click', dotHandler );

const computeButton = document.getElementById('compute-btn');
function computeHandler(event){
    console.log('=')
    result.value = `${result.value} =`
}
computeButton.addEventListener('click', computeHandler );

const plusButton = document.getElementById('plus-btn');
function plusHandler(event){
    console.log('+')
    result.value = `${result.value} +`

}
plusButton.addEventListener('click', plusHandler );

const minusButton = document.getElementById('minus-btn');
function minusHandler(event){
    console.log('-')
    result.value = `${result.value} -`
}
minusButton.addEventListener('click', minusHandler );


