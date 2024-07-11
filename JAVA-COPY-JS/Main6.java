import java.util.Arrays;

public class Main6 {
    public static void main(String[] args) {
        int[][] arr = { { 11, 2, 4 }, { 4, 5, 6 }, { 10, 8, -12 } };
        int difference = diagonalDifference(arr);
        System.out.println(difference);
    }

    static int diagonalDifference(int[][] arr) {
        int primarySum = 0;
        int secondarySum = 0;

        for (int i = 0; i < arr.length; i++) {
            primarySum += arr[i][i];
            secondarySum += arr[i][arr.length - 1 - i];
            System.out.println(arr[i][i]);
        }

        return Math.abs(primarySum - secondarySum);
    }
}
