import java.util.Arrays;

public class Main4 {
    public static void main(String[] args) {
        plusMinus(new int[] { -4, 3, -9, 0, 4, 1 });
    }

    static void plusMinus(int[] arr) {
        int positive = 0;
        int negative = 0;
        int zero = 0;
        int total = arr.length;

        for (int number : arr) {
            if (number > 0) {
                positive++;
            } else if (number < 0) {
                negative++;
            } else {
                zero++;
            }
        }

        double positiveRatio = (double) positive / total;
        double negativeRatio = (double) negative / total;
        double zeroRatio = (double) zero / total;

        System.out.printf("%.6f%n%.6f%n%.6f%n", positiveRatio, negativeRatio, zeroRatio);
    }
}
