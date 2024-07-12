public class Main8 {
    public static void miniMaxSum(int[] arr) {
        // Step 1: Calculate the sum of all elements
        int sumTotal = 0;
        for (int num : arr) {
            sumTotal += num;
        }

        // Step 2: Find the minimum and maximum elements
        int minValue = arr[0];
        int maxValue = arr[0];
        for (int num : arr) {
            if (num < minValue) {
                minValue = num;
            }
            if (num > maxValue) {
                maxValue = num;
            }
        }

        // Step 3: Calculate minimum and maximum sums by excluding min and max
        // respectively
        int minSum = sumTotal - maxValue;
        int maxSum = sumTotal - minValue;

        // Step 4: Print the minimum and maximum sums
        System.out.println(minSum + " " + maxSum);
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5 };
        miniMaxSum(arr); // Output: 10 14
    }

}
