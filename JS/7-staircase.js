/*
Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n=6
*/ 



function staircase(n) {
    // Loop por cada nível da escada
    for (let i = 1; i <= n; i++) {
      // Crie uma string vazia para armazenar os caracteres da linha atual
      let line = "";
  
      // Adicione espaços à string até alcançar o número necessário
      for (let j = 0; j < n - i; j++) {
        line += " ";
      }
  
      // Adicione o número correto de "#" à string
      for (let k = 0; k < i; k++) {
        line += "#";
      }
  
      // Imprima a linha atual
      console.log(line);
    }
  }
  
  // Exemplo de uso
  console.log(staircase(6));