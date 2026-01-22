function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesCount = 0;
  let orangesCount = 0;
  for (let i = 0; i <= apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      applesCount++;
    }
  }
  for (let j = 0; j <= oranges.length; j++) {
    if (oranges[j] + b >= s && oranges[j] + b <= t) {
      orangesCount++;
    }
  }
  console.log(`${applesCount}\n${orangesCount}`);
  return `${applesCount}\n${orangesCount}`;
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
