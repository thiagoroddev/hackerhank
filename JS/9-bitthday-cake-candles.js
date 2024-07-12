/*
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example


The maximum height candles are  units high. There are  of them, so return .

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
Returns

int: the number of candles that are tallest
Input Format

The first line contains a single integer, , the size of .
The second line contains  space-separated integers, where each integer  describes the height of .

Constraints

Sample Input 0

4
3 2 1 3
Sample Output 0

2
Explanation 0

Candle heights are . The tallest candles are  units, and there are  of them.
*/

function birthdayCakeCandles(candles) {
  let maiorNumero = 0;
  let quantidadeMaiorNumero = 0;

  for (let index = 0; index < candles.length; index++) {
    if (candles[index] > maiorNumero) {
      maiorNumero = candles[index];
    }
  }

  for (let i = 0; i < candles.length; i++) {
    if (maiorNumero == candles[i]) {
      quantidadeMaiorNumero++;
    }
  }
  console.log(maiorNumero);
  console.log(quantidadeMaiorNumero);
}

console.log(birthdayCakeCandles([3, 3, 1, 2]));

//Função melhoradad pela IA
function birthdayCakeCandles(candles) {
  // Encontrar a altura máxima das velas
  const maiorNumero = Math.max(...candles);

  // Contar quantas velas têm a altura máxima
  const quantidadeMaiorNumero = candles.filter(
    (candle) => candle === maiorNumero
  ).length;

  return quantidadeMaiorNumero;
}
