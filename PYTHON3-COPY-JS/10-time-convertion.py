# Com método
def time_conversion(s):
    # Obtém "AM" ou "PM"
    determinante = s[-2:]

    if determinante == "PM":
        # Extrai a hora como número inteiro
        hour = int(s[:2])
        if hour != 12:
            # Converte para formato de 24 horas, exceto 12 PM que já é 12
            hour += 12
        s = str(hour).zfill(2) + s[2:8]  # Atualiza a hora na string
    elif determinante == "AM" and s[:2] == "12":
        # Caso especial para 12 AM (meia-noite)
        s = "00" + s[2:8]
    else:
        s = s[:8]  # Remove "AM" ou "PM" para outros casos
    
    return s

print(time_conversion("07:05:45PM"))  # Output: "19:05:45"
print(time_conversion("12:00:00AM"))  # Output: "00:00:00"

# Sem método
def time_conversion_manual(s):
    # Extração manual do determinante AM/PM
    determinante = s[8] + s[9]

    # Extração manual da hora
    hour_str = s[0] + s[1]
    hour = (ord(hour_str[0]) - ord('0')) * 10 + (ord(hour_str[1]) - ord('0'))  # Conversão manual para número inteiro

    if determinante == "PM":
        if hour != 12:
            hour += 12  # Converte para formato de 24 horas, exceto 12 PM que já é 12
    elif determinante == "AM" and hour == 12:
        hour = 0  # Converte 12 AM (meia-noite) para 00

    # Conversão manual da hora para string com zero padding se necessário
    hour_str = ("0" + str(hour)) if hour < 10 else str(hour)

    # Construção manual da string resultante
    result = hour_str + s[2:8]

    return result

print(time_conversion_manual("07:05:45PM"))  # Output: "19:05:45"
print(time_conversion_manual("12:00:00AM"))  # Output: "00:00:00"
