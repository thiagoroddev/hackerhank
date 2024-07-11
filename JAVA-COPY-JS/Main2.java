import java.util.Arrays;

public class Main2 {
    public static void main(String[] args) {
        long sum = aVeryBigSum(new long[] { 10000000012323L, 10000000022232L, 1000000003L, 1000000004L, 1000000005L });
        System.out.println(sum);
    }

    static long aVeryBigSum(long[] ar) {
        long sum = 0;

        for (long num : ar) {
            sum += num;
        }

        return sum;
    }
}
