/* 
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input 0

07:05:45PM
Sample Output 0

19:05:45
*/

//Com método
function timeConversion(s) {
  let determinante = s.slice(-2); // Obtém "AM" ou "PM"

  if (determinante === "PM") {
    let hour = parseInt(s.slice(0, 2)); // Extrai a hora como número inteiro
    if (hour !== 12) {
      hour += 12; // Converte para formato de 24 horas, exceto 12 PM que já é 12
    }
    s = hour.toString() + s.slice(2, 8); // Atualiza a hora na string
  } else if (determinante === "AM" && s.slice(0, 2) === "12") {
    // Caso especial para 12 AM (meia-noite)
    s = "00" + s.slice(2, 8);
  }

  console.log(s);
  return s;
}
timeConversion("05:59:59AM");

// Sem método
function timeConversionDois(s) {
  // Extração manual do determinante AM/PM
  let determinante = s[8] + s[9];

  // Extração manual da hora
  let hourStr = s[0] + s[1];

  let hour = (hourStr[0] - "0") * 10 + (hourStr[1] - "0"); // Conversão manual para número inteiro

  if (determinante === "PM") {
    if (hour !== 12) {
      hour += 12; // Converte para formato de 24 horas, exceto 12 PM que já é 12
    }
  } else if (determinante === "AM" && hour === 12) {
    hour = 0; // Converte 12 AM (meia-noite) para 00
  }

  // Conversão manual da hora para string com zero padding se necessário
  let hourString = hour < 10 ? "0" + hour : "" + hour;

  // Construção manual da string resultante
  let result = hourString + s[2] + s[3] + s[4] + s[5] + s[6] + s[7];

  console.log(result);
  return result;
}

timeConversionDois("05:59:59AM");
/*
12:01:00AM = 00:01:00 -
01:00:00AM = 01:00:00
11:59:00AM = 11:59:00

12:01:00PM = 12:01:00
01:00:00PM = 13:00:00 -
11:59:00PM = 23:59:00 -
*/
