public class Main3 {
    public static void main(String[] args) {
        long[] ar = { 10000000012323L, 10000000022232L, 1000000003L, 1000000004L, 1000000005L };
        long soma = aVeryBigSum(ar);
        System.out.println(soma);
    }

    public static long aVeryBigSum(long[] ar) {
        long soma = 0;
        for (long valorAtual : ar) {
            soma += valorAtual;
        }
        return soma;
    }
}
