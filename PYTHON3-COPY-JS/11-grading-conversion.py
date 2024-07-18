def grading_students(grades):
    # Remove the first element
    grades = grades[1:]

    # Loop through the remaining grades
    for i in range(len(grades)):
        grade = grades[i]
        if grade >= 38:
            diferenca_por_cinco = 5 - (grade % 5)
            if diferenca_por_cinco < 3:
                grades[i] = grade + diferenca_por_cinco

    print(grades)
    return grades

# Example usage
grading_students([4, 73, 67, 38, 33])
