// Un callback es una función como cualquier otra, la diferencia está en que ésta se pasa como parámetro (argumento) para poder ser utilizado por otra función.

// Permite que entonces las funciones ejecuten operaciones adicionales dentro de sí mismas

// Cuando pasamos un callback, lo hacemos porque no siempre sabemos qué queremos que se ejecute en cada caso de nuestra función.

// Algunos ejemplos donde has utilizado callbacks (aunque no lo creas) son:
// El método onClick en frontend
// El método forEach
// El método map o filter


// const arreglo = [ 1, 2, 3, 4, 5, 6 ];

// arreglo.forEach( ( i ) => {
//     console.log( i );

// } )

// const myMap = ( arreglo, callback ) => {
//     let newArr = []
//     for ( let i = 0; i < arreglo.length; i++ ) {
//         let nuevoValor = callback( arreglo[ i ] );
//         newArr.push( nuevoValor );
//     }
//     return newArr;
// };

// console.log( 'arreglo', arreglo );
// console.log( 'myMap', myMap( arreglo, x => x + 1 ) );

// const newSum = arreglo.map( x => x + 1 );
// console.log( 'newSum', newSum );

// CALCULATOR
// const add = ( num1, num2 ) => num1 + num2;

// const substract = ( num1, num2 ) => num1 - num2;

// const multiply = ( num1, num2 ) => num1 * num2;

// const divide = ( dividendo, divisor ) => {
//     return new Promise( ( resolve, reject ) => {
//         if ( divisor === 0 ) {
//             reject( `Can't devide by 0` );
//         } else {
//             resolve( dividendo / divisor )
//         }
//     } )
// };

// const operation = ( num1, num2, callback ) => {
//     let result = callback( num1, num2 );
//     console.log( 'num1 :', num1, 'num2 :', num2, 'result: ', result, 'Callback: ', callback );
// };

// operation( 1, 1, add );


const result = document.getElementById( 'result' );
const inputNumber = document.getElementById( 'input-number' );
const buttons = document.querySelectorAll( '.btn' );
let operand1 = '';
let operand2 = '';
let operator = '';
let decimal = false;

function updateResult () {
    result.innerText = operand1 + operator + operand2;
}

function clear () {
    console.log( 'clicked' );

    operand1 = '';
    operand2 = '';
    operator = '';
    decimal = false;
    inputNumber.value = '';
    updateResult();
}

function handleNumberInput ( number ) {
    if ( operator === '' ) {
        operand1 += number;
    } else {
        operand2 += number;
    }
    inputNumber.value += number;
    updateResult();
}

function handleOperatorInput ( selectedOperator ) {
    if ( selectedOperator === '.' && decimal ) {
        return;
    }
    if ( selectedOperator === '.' && !decimal ) {
        decimal = true;
    }
    if ( operand1 === '' ) {
        operand1 = '0';
    }
    if ( operand2 !== '' ) {
        calculate();
    }
    operator = selectedOperator;
    inputNumber.value += selectedOperator;
    updateResult();
}

function calculate () {
    const num1 = parseFloat( operand1 );
    const num2 = parseFloat( operand2 );
    let total = 0;
    switch ( operator ) {
        case '+':
            total = num1 + num2;
            break;
        case '-':
            total = num1 - num2;
            break;
        case '*':
            total = num1 * num2;
            break;
        case '/':
            total = num1 / num2;
            break;
    }
    clear();
    operand1 = total.toString();
    inputNumber.value = operand1;
    updateResult();
}

buttons.forEach( button => {
    button.addEventListener( 'click', () => {
        const value = button.getAttribute( 'id' );
        switch ( value ) {
            case 'delete':
                clear();
                break;
            case 'add':
            case 'substract':
            case 'multiply':
            case 'divide':
            case 'dot':
                handleOperatorInput( button.innerText );
                break;
            case 'equal':
                calculate();
                break;
            default:
                handleNumberInput( button.innerText );
                break;
        }
    } );
} );

// Targeting a number by key press
document.addEventListener( 'keydown', event => {
    const number = parseInt( event.key );
    if ( isNaN( number ) ) {
        return;
    }
    const numberButton = document.getElementById( number.toString() );
    if ( numberButton ) {
        numberButton.click();
    }
} );

