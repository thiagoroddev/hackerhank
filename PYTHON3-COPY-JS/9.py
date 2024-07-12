def birthday_cake_candles(candles):
    # Encontrar a altura máxima das velas
    maior_numero = max(candles)
    
    # Contar quantas velas têm a altura máxima
    quantidade_maior_numero = candles.count(maior_numero)
    
    return quantidade_maior_numero
