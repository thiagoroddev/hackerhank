public class Main10 {
    public static void main(String[] args) {
        String time = "01:01:10PM";
        String convertedTime = timeConversion(time);
        System.out.println(convertedTime);
    }

    public static String timeConversion(String s) {
        String determinante = s.substring(8, 10); // Obtém "AM" ou "PM"
        int hour = Integer.parseInt(s.substring(0, 2)); // Obtém a hora como inteiro

        if (determinante.equals("PM")) {
            if (hour != 12) {
                hour += 12; // Converte para formato de 24 horas, exceto 12 PM que já é 12
            }
        } else if (determinante.equals("AM") && hour == 12) {
            hour = 0; // Converte 12 AM (meia-noite) para 00
        }

        String hourString = String.format("%02d", hour); // Formata a hora para duas casas

        String result = hourString + s.substring(2, 8); // Atualiza a hora na string

        return result;
    }
}
