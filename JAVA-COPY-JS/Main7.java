public class Main7 {
    public static void main(String[] args) {
        staircase(6);
    }

    static void staircase(int n) {
        // Loop through each level of the staircase
        for (int i = 1; i <= n; i++) {
            // Create a string for the current line
            StringBuilder line = new StringBuilder();

            // Add spaces to the string until the required number is reached
            for (int j = 0; j < n - i; j++) {
                line.append(" ");
            }

            // Add the correct number of "#" to the string
            for (int k = 0; k < i; k++) {
                line.append("#");
            }

            // Print the current line
            System.out.println(line.toString());
        }
    }
}
