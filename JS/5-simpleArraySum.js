function simpleArraySum(ar) {
    // Write your code here
    let sum = ar.reduce((soma, elementoAtual) => soma + elementoAtual)
    
    return sum
}

console.log(simpleArraySum([1,2,3,4]))