function kangaroo(x1, v1, x2, v2) {
  if (v1 <= v2) {
    console.log("NO, v1 < v2");
    return "NO";
  }
  // Write your code here
  while (x1 !== x2) {
    x1 = x1 + v1;
    x2 = x2 + v2;

    if (x1 > x2) {
      console.log(`NO: x1: ${x1} e v1: ${v1}- x2: ${x2} e v2: ${v2}`);
      return "NO";
    }
  }
  if (x1 === x2) {
    console.log(`YES: Números iguais x1: ${x1} - x2: ${x2}`);
    return "YES";
  }
}
kangaroo(43, 2, 70, 2);
