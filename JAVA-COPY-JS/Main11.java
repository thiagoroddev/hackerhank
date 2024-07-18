import java.util.ArrayList;
import java.util.List;

public class Main11 {
    public static List<Integer> gradingStudents(List<Integer> grades) {
        // Remove the first element
        grades.remove(0);

        // Loop through the remaining grades
        for (int i = 0; i < grades.size(); i++) {
            int grade = grades.get(i);
            if (grade >= 38) {
                int diferencaPorCinco = 5 - (grade % 5);
                if (diferencaPorCinco < 3) {
                    grades.set(i, grade + diferencaPorCinco);
                }
            }
        }

        System.out.println(grades);
        return grades;
    }

    public static void main(String[] args) {
        List<Integer> grades = new ArrayList<>();
        grades.add(4);
        grades.add(73);
        grades.add(67);
        grades.add(38);
        grades.add(33);

        gradingStudents(grades);
    }
}
