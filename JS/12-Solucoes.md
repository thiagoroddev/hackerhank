# Apple and Orange - HackerRank

## 📋 Descrição do Problema

Sam tem uma macieira e uma laranjeira que produzem muitas frutas. Precisamos determinar quantas maçãs e laranjas caem na casa de Sam.

**Dados:**

- Casa de Sam: posição inicial `s` até posição final `t`
- Macieira na posição `a` (à esquerda da casa)
- Laranjeira na posição `b` (à direita da casa)
- Array `apples`: distâncias que cada maçã cai da árvore
- Array `oranges`: distâncias que cada laranja cai da árvore

**Objetivo:** Contar quantas frutas caem dentro da casa (intervalo [s, t] inclusive).

---

## 🏆 Soluções Ordenadas (Melhor → Pior)

### 1. Solução Imperativa com For Loop (MELHOR)

**Complexidade:** O(m + n) tempo | O(1) espaço  
**Nível:** Iniciante

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  for (let i = 0; i < apples.length; i++) {
    const position = a + apples[i];
    if (position >= s && position <= t) {
      appleCount++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    const position = b + oranges[i];
    if (position >= s && position <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}
```

**Vantagens:**

- ✅ Máxima performance
- ✅ Sem overhead de funções adicionais
- ✅ Código claro e direto
- ✅ Fácil de debugar
- ✅ Sem alocação extra de memória

**Conhecimentos Necessários:**

- For loops
- Operadores aritméticos
- Condicionais (if)
- Variáveis

---

### 2. Solução com Filter e Reduce

**Complexidade:** O(m + n) tempo | O(1) espaço  
**Nível:** Intermediário

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const countFruits = (tree, fruits) => {
    return fruits.reduce((count, distance) => {
      const position = tree + distance;
      return position >= s && position <= t ? count + 1 : count;
    }, 0);
  };

  console.log(countFruits(a, apples));
  console.log(countFruits(b, oranges));
}
```

**Vantagens:**

- ✅ Código funcional e conciso
- ✅ Reutilização através de função helper
- ✅ Boa legibilidade
- ✅ Sem mutação de variáveis

**Desvantagens:**

- ⚠️ Leve overhead do reduce
- ⚠️ Menos performático que loop puro

**Conhecimentos Necessários:**

- Array.reduce()
- Arrow functions
- Higher-order functions
- Ternary operator

---

### 3. Solução com Filter e Length

**Complexidade:** O(m + n) tempo | O(k) espaço (onde k = frutas que caem na casa)  
**Nível:** Intermediário

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const countInRange = (tree, fruits) => {
    return fruits.filter((d) => {
      const pos = tree + d;
      return pos >= s && pos <= t;
    }).length;
  };

  console.log(countInRange(a, apples));
  console.log(countInRange(b, oranges));
}
```

**Vantagens:**

- ✅ Código limpo e expressivo
- ✅ Fácil de entender a intenção

**Desvantagens:**

- ❌ Cria array intermediário (usa mais memória)
- ❌ Duas passagens: filter + length
- ❌ Menos eficiente que reduce

**Conhecimentos Necessários:**

- Array.filter()
- Arrow functions
- Array.length

---

### 4. Solução com For...of Loop

**Complexidade:** O(m + n) tempo | O(1) espaço  
**Nível:** Iniciante+

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  for (const apple of apples) {
    if (a + apple >= s && a + apple <= t) {
      appleCount++;
    }
  }

  for (const orange of oranges) {
    if (b + orange >= s && b + orange <= t) {
      orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}
```

**Vantagens:**

- ✅ Sintaxe mais moderna e limpa que for tradicional
- ✅ Performance similar ao for clássico
- ✅ Fácil leitura

**Desvantagens:**

- ⚠️ Calcula posição duas vezes por iteração

**Conhecimentos Necessários:**

- For...of loops (ES6)
- Const declarations

---

### 5. Solução com forEach

**Complexidade:** O(m + n) tempo | O(1) espaço  
**Nível:** Intermediário

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  apples.forEach((distance) => {
    const position = a + distance;
    if (position >= s && position <= t) appleCount++;
  });

  oranges.forEach((distance) => {
    const position = b + distance;
    if (position >= s && position <= t) orangeCount++;
  });

  console.log(appleCount);
  console.log(orangeCount);
}
```

**Vantagens:**

- ✅ Sintaxe funcional
- ✅ Boa legibilidade

**Desvantagens:**

- ❌ Não pode usar break/continue
- ❌ Ligeiramente mais lento que for loop
- ❌ Mutação de variáveis externas

**Conhecimentos Necessários:**

- Array.forEach()
- Arrow functions
- Closures

---

### 6. Solução com Map + Filter + Length

**Complexidade:** O(m + n) tempo | O(m + n) espaço  
**Nível:** Intermediário

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const appleCount = apples
    .map((d) => a + d)
    .filter((pos) => pos >= s && pos <= t).length;

  const orangeCount = oranges
    .map((d) => b + d)
    .filter((pos) => pos >= s && pos <= t).length;

  console.log(appleCount);
  console.log(orangeCount);
}
```

**Vantagens:**

- ✅ Pipeline funcional claro
- ✅ Separação de transformação e filtragem

**Desvantagens:**

- ❌ Cria dois arrays intermediários
- ❌ Três passagens pelos dados
- ❌ Alto uso de memória
- ❌ Performance ruim

**Conhecimentos Necessários:**

- Array.map()
- Array.filter()
- Method chaining

---

### 7. Solução com While Loop

**Complexidade:** O(m + n) tempo | O(1) espaço  
**Nível:** Iniciante

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  let i = 0;

  while (i < apples.length) {
    const position = a + apples[i];
    if (position >= s && position <= t) {
      appleCount++;
    }
    i++;
  }

  i = 0;
  while (i < oranges.length) {
    const position = b + oranges[i];
    if (position >= s && position <= t) {
      orangeCount++;
    }
    i++;
  }

  console.log(appleCount);
  console.log(orangeCount);
}
```

**Vantagens:**

- ✅ Performance boa
- ✅ Controle manual do índice

**Desvantagens:**

- ❌ Mais verboso que for loop
- ❌ Risco de loop infinito se esquecer i++
- ❌ Menos idiomático para arrays

**Conhecimentos Necessários:**

- While loops
- Controle manual de índices

---

### 8. Solução Recursiva

**Complexidade:** O(m + n) tempo | O(m + n) espaço (call stack)  
**Nível:** Intermediário+

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const countFruits = (tree, fruits, index = 0, count = 0) => {
    if (index >= fruits.length) return count;

    const position = tree + fruits[index];
    const newCount = position >= s && position <= t ? count + 1 : count;

    return countFruits(tree, fruits, index + 1, newCount);
  };

  console.log(countFruits(a, apples));
  console.log(countFruits(b, oranges));
}
```

**Vantagens:**

- ✅ Abordagem funcional pura
- ✅ Sem mutação de variáveis

**Desvantagens:**

- ❌ Usa call stack (risco de stack overflow)
- ❌ Menos eficiente que iteração
- ❌ Mais difícil de entender
- ❌ Não otimizado por tail-call em JS

**Conhecimentos Necessários:**

- Recursão
- Default parameters
- Tail recursion concept

---

### 9. Solução com Every/Some (Abordagem Incorreta)

**Complexidade:** O(m + n) tempo | O(1) espaço  
**Nível:** Avançado (uso incorreto de método)

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  // Uso forçado de every para contar
  apples.every((distance) => {
    const position = a + distance;
    if (position >= s && position <= t) appleCount++;
    return true; // Continue sempre
  });

  oranges.every((distance) => {
    const position = b + distance;
    if (position >= s && position <= t) orangeCount++;
    return true;
  });

  console.log(appleCount);
  console.log(orangeCount);
}
```

**Vantagens:**

- ❌ Nenhuma (uso inadequado do método)

**Desvantagens:**

- ❌ Uso semântico incorreto de every()
- ❌ Confuso e difícil de manter
- ❌ Anti-pattern
- ❌ Má prática de programação

**Conhecimentos Necessários:**

- Array.every() (usado incorretamente)

---

### 10. Solução com Spread e For Loop Aninhado (PIOR)

**Complexidade:** O(m + n) tempo | O(m + n) espaço  
**Nível:** Iniciante (mas com má prática)

```javascript
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const allFruits = [
    ...apples.map((d) => ({tree: a, distance: d, type: "apple"})),
    ...oranges.map((d) => ({tree: b, distance: d, type: "orange"})),
  ];

  let appleCount = 0;
  let orangeCount = 0;

  for (const fruit of allFruits) {
    const position = fruit.tree + fruit.distance;
    if (position >= s && position <= t) {
      if (fruit.type === "apple") appleCount++;
      else orangeCount++;
    }
  }

  console.log(appleCount);
  console.log(orangeCount);
}
```

**Vantagens:**

- ❌ Nenhuma vantagem prática

**Desvantagens:**

- ❌ Desperdiça memória criando objetos
- ❌ Usa spread desnecessário
- ❌ Complexidade desnecessária
- ❌ Muito ineficiente
- ❌ Over-engineering

**Conhecimentos Necessários:**

- Spread operator
- Array.map()
- Object literals
- Template objects

---

## 📊 Tabela Comparativa

| Solução                 | Tempo  | Espaço | Performance | Legibilidade | Nível          |
| ----------------------- | ------ | ------ | ----------- | ------------ | -------------- |
| 1. For Loop Imperativo  | O(m+n) | O(1)   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐   | Iniciante      |
| 2. Filter + Reduce      | O(m+n) | O(1)   | ⭐⭐⭐⭐    | ⭐⭐⭐⭐⭐   | Intermediário  |
| 3. Filter + Length      | O(m+n) | O(k)   | ⭐⭐⭐      | ⭐⭐⭐⭐     | Intermediário  |
| 4. For...of Loop        | O(m+n) | O(1)   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐     | Iniciante+     |
| 5. forEach              | O(m+n) | O(1)   | ⭐⭐⭐⭐    | ⭐⭐⭐⭐     | Intermediário  |
| 6. Map + Filter         | O(m+n) | O(m+n) | ⭐⭐        | ⭐⭐⭐       | Intermediário  |
| 7. While Loop           | O(m+n) | O(1)   | ⭐⭐⭐⭐⭐  | ⭐⭐⭐       | Iniciante      |
| 8. Recursiva            | O(m+n) | O(m+n) | ⭐⭐        | ⭐⭐         | Intermediário+ |
| 9. Every (Anti-pattern) | O(m+n) | O(1)   | ⭐⭐⭐      | ⭐           | Avançado       |
| 10. Spread Objects      | O(m+n) | O(m+n) | ⭐          | ⭐           | Iniciante      |

---

## 🎯 Recomendações

### Para Entrevistas / HackerRank:

**Use a Solução #1 (For Loop Imperativo)**

- Melhor performance
- Código claro e direto
- Demonstra fundamentos sólidos

### Para Produção:

**Use a Solução #2 (Filter + Reduce)**

- Código funcional e manutenível
- Boa performance
- Fácil de testar

### Para Aprendizado:

**Experimente todas em ordem:**

1. Comece com #1 para dominar fundamentos
2. Passe para #2 para aprender programação funcional
3. Compare #3-#6 para entender trade-offs
4. Estude #8 para entender recursão
5. Evite #9 e #10 (anti-patterns)

---

## 📝 Exemplo de Uso

```javascript
// Entrada
const s = 7,
  t = 11;
const a = 5,
  b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

// Chamada
countApplesAndOranges(s, t, a, b, apples, oranges);

// Saída
// 1
// 1
```

**Explicação:**

- Maçã 1: 5 + (-2) = 3 (fora)
- Maçã 2: 5 + 2 = 7 (dentro ✓)
- Maçã 3: 5 + 1 = 6 (fora)
- Laranja 1: 15 + 5 = 20 (fora)
- Laranja 2: 15 + (-6) = 9 (dentro ✓)

---

## 🔑 Conceitos-Chave

### Complexidade de Tempo

- **O(m + n)**: Precisa verificar todas as m maçãs e n laranjas
- Não há como melhorar isso (precisamos verificar cada fruta)

### Complexidade de Espaço

- **O(1)**: Melhor caso - apenas variáveis de contagem
- **O(k)**: Arrays intermediários (filter cria novo array)
- **O(m + n)**: Pior caso - cópias completas ou call stack

### Trade-offs

1. **Performance vs Legibilidade**: Loops simples são mais rápidos, mas métodos funcionais são mais expressivos
2. **Memória vs Código**: Criar arrays intermediários usa mais memória mas pode ser mais legível
3. **Imperativo vs Funcional**: Imperativo é mais performático, funcional é mais declarativo

---

## 💡 Dicas

1. **HackerRank**: Sempre prefira performance, use solução #1
2. **Code Review**: Prefira código legível, use solução #2
3. **Entrevista**: Comece com #1, depois mostre #2 como alternativa
4. **Nunca use**: Soluções #9 e #10 em código real

---

## 🚀 Conclusão

A **Solução #1 (For Loop Imperativo)** é a melhor escolha geral por combinar:

- ✅ Máxima performance
- ✅ Clareza de código
- ✅ Zero overhead
- ✅ Facilidade de manutenção

A **Solução #2 (Reduce)** é uma excelente alternativa quando legibilidade funcional é prioridade sobre microotimizações de performance.
