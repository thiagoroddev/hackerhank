import java.util.Arrays;

public class Main5 {
    public static void main(String[] args) {
        int sum = simpleArraySum(new int[] { 1, 2, 3, 4 });
        System.out.println(sum);
    }

    static int simpleArraySum(int[] ar) {
        int sum = Arrays.stream(ar).sum();
        return sum;
    }
}
