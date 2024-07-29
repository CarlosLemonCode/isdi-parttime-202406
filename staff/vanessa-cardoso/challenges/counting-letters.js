// crear una function llamada 'countingLetters' que admita un parametro de tipo
//string y te devuelva el largo de la palabra.

function countingLetters(value) {
    
    return  value.length;
    
}

const result1 = countingLetters('hola')
console.assert(result1 === 4, {result: result1, message: 'test 1 no pasado'})

const result2 = countingLetters('belen')
console.assert(result2 === 5, {result: result2, message: 'test 2 no pasado'})

const result3 = countingLetters('foo')
console.assert(typeof result3 === 'number', {result: result3, message: 'test 3 no pasado'})