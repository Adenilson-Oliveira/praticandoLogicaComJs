// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

const writeAllCalc = (v1, v2) => {
  console.log(`${v1} + ${v2} = ${v1 + v2}`)
  console.log(`${v1} - ${v2} = ${v1 - v2}`)
  console.log(`${v1} * ${v2} = ${v1 * v2}`)
  console.log(`${v1} / ${v2} = ${v1 / v2}`)
}

writeAllCalc(9, 3)


// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

const verifarTipoDoTriangulo = (l1, l2, l3) => {// não pediu para fazer verificação
  if(l1 === l2 && l1 === l3) {
    return 'Equilátero'
  } else if(l1 === l2 || l1 === l3 || l2 === l3) {
    return 'Isósceles'
  } else {
    return 'Escaleno'
  }
}

console.log(verifarTipoDoTriangulo(3, 3, 3))
console.log(verifarTipoDoTriangulo(4, 5, 4))
console.log(verifarTipoDoTriangulo(6, 7, 8))


// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const calcularPotencia = (base, expo) => {
  return Math.pow(base, expo)
}

console.log(calcularPotencia(2, 10))


// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

const dividir = (dividendo, divisor) => {
  const resto = dividendo % divisor
  // console.log((dividendo / divisor).toFixed()) -> o toFixed arredonda o número
  const resultado = parseInt((dividendo / divisor))
  console.log(`${dividendo} / ${divisor} = ${resultado}\n resto = ${resto}`)
}

dividir(34, 5)
dividir(100, 10)
dividir(27, 7)


// 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

const tratarValor  = (valor) => {
  const valorComDuasCasas = valor.toFixed(2)
  const valorTratado = `R$ ${valorComDuasCasas.replace('.', ',')}`
  return valorTratado
}

console.log(tratarValor(0.30000000000000004))


// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

// "J = C ∙ i ∙ t"         "M = C + J"  
// M = C (1+i)^t


const jurosSimples = (c, i, t) => c * i * t

const calcularJurosSimles = (c, i, t) => {
  const montante = c + jurosSimples(c, i, t)
  return montante
} 

const calcularJurosCompostos = (c, i, t) => {
  const montante = c * Math.pow((1 + i), t)
  return montante.toFixed(2)
}

console.log(calcularJurosSimles(1000, 0.03, 2))

console.log(calcularJurosCompostos(10000, 0.15, 10))


// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.

//      x = (-b +- →b2 -4ac)/2.a             

// input 3, -5, 12
const calcularBhaskara = (ax2, bx, c) => {
  const delta = Math.pow(bx, 2) - (4 * ax2 * c)

  // console.log(delta)

  if(delta < 0) {
    return 'Delta é negativo'
  }
  const x1 = (-bx + Math.sqrt(delta)) / (2*ax2)
  const x2 = (-bx - Math.sqrt(delta)) / (2*ax2)

  return([x1, x2])

}
console.log(calcularBhaskara(3, -5, 12))
console.log(calcularBhaskara(3, 5, -12))



// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)



const analisarJogos = (str) => {
  let jogos = str.split(' ')
  jogos = jogos.map(el => parseInt(el))
  // console.log(jogos)
  let quebrasDeRecorde = 0
  let melhorJogo = 0
  let piorJogo = 0
  //acho que com um laço for normal pode ser uma solução
  jogos.forEach((el, i) => {
    // console.log(i)
    if(el > jogos[melhorJogo]) {
      quebrasDeRecorde++
      melhorJogo = i
      // console.log(melhorJogo)
    } else if(el < jogos[piorJogo]) {
      piorJogo = i
    }
    // else{
    //   // console.log(el)
    // }
  })
  
  // console.log(typeof(jogos[0]))
  return [quebrasDeRecorde, (parseInt(piorJogo) + 1)]
}

console.log(analisarJogos('10 20 20 8 25 3 0 30 1'))

console.log('8' > '20') // não devemos comparar strings como se fosse números



// 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
// classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
// possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
// arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
// 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
// seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
// e o aluno será aprovado.


const verificarNota = notaAluno => {
  const nota = parseInt(notaAluno)
  if (nota < 0 || nota > 100) {
    return 'Nota Inválida'
  } else if(nota < 38) {
    return {
      status: 'Reprovado',
      notaFinal: nota
    }
  } else {
    const acrescentarArredondamento = nota % 5 >= 3 ? 5 - nota % 5 : 0
    const notaFinal = nota + acrescentarArredondamento
    return {
      status: 'Aprovado',
      notaFinal
    }
  }
}

console.log(verificarNota(110))
console.log(verificarNota(29))
console.log(verificarNota(84))


// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.


function verificarSeMultiploDe3(numero) {
  const num = parseInt(numero)
  if(num % 3 === 0) return true
  else return false
}

console.log(verificarSeMultiploDe3(81))



// 11) As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.


const verificarAnoBissexto = function(anoBissexto) {
  const ano = parseInt(anoBissexto)
  if(ano % 400 === 0) return true
  else if(ano % 100 === 0) return false
  else if(ano % 4 === 0) return true
  else return false
}
console.log('questão 11)')
console.log(verificarAnoBissexto(1600))
console.log(verificarAnoBissexto(2100))
console.log(verificarAnoBissexto(4080))
console.log(verificarAnoBissexto(2022))



// 12) Faça um algoritmo que calcule o fatorial de um número.

const fatorial = numero => {
  let num 
  if(typeof numero !== 'number') return 'NaN'
  else if(numero < 0) return 'Não existe fatorial para números negativos'
  else if(numero === 0) return 1
  else {
    num = parseInt(numero)
  }
  let result = 1
  for(let i = 1; i <= num; i++) {
    result *= i
    console.log(result)
  }
  return result
}

console.log(fatorial(5))



// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.


function verificarDia(diaDaSemana) {
  const dia = parseInt(diaDaSemana)
  switch(dia) {
    case 1: case 7:
      return 'Fim de semana'
    case 2: case 3: case 4: case 5: case 6:
      return 'Dia útil'
    default: 
      return 'Dia inválido'
  }
}

console.log(verificarDia(2))
console.log(verificarDia('7'))
console.log(verificarDia('abc'))



// 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.

// console.log(new Error('erro'))
// throw new Error('erro')

const verSeTemosAFruta = fruta => {
  switch(fruta) {
    case 'maçã':
      return 'Não vendemos esta fruta aqui'
    case 'kiwi':
      return 'Estamos com escassez de kiwis'
    case 'melancia':
      return 'Aqui está, são 3 reais o quilo'
    default: return new Error('[ERRO]')
  }
}

console.log(verSeTemosAFruta('melancia'))



// 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
// possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
// comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
// que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
// “Não trabalhamos com este tipo de automóvel aqui”.

const venderVeiculo = function(carro) {
  switch(carro) {
    case 'hatch':
      return 'Compra efetuada com sucesso'
    case 'sedan': case 'motocicleta': case 'caminhonete':
      return 'Tem certeza que não prefere este modelo?'
    default:
      return 'Não trabalhamos com este tipo de automóvel aqui'
  }
}

console.log(venderVeiculo('hatch'))



// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica O programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.


function calcular(v1, operador, v2) {
  // const args = [...argumentos]

  switch(operador) {
    case '+':
      return v1 + v2
    case '-': 
      return v1 - v2
    case '*':
      return v1 * v2
    case '/':
      return v1 / v2
    case '^':
      return Math.pow(v1, v2)
    default:
      return 'Operação inválida'
  }
}
console.log(calcular(10, '*', 10))
console.log(calcular(9, '/', 9))
console.log(calcular(3, '^', 3))



// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A     10%
// B     15%
// C     20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.


const novoSalario = function (salario, plano) {
  switch(plano) {
    case 'A':
      return salario * 1.10
    case 'B':
      return salario * 1.15
    case 'C':
      return salario * 1.20
    default: 
      return 'Plano inválido'
  }
}

console.log(`Meu futuro salário é: ${novoSalario(3000, 'C')}`)




// 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’


const porExtenso = num => {
  switch(num) {
    case 1: 
      return 'um'
    case 2: 
      return 'dois'
    case 3: 
      return 'três'
    case 4:
      return 'quatro'
    case 5: 
      return 'cinco'
    case 6: 
      return 'seis'
    case 7: 
      return 'sete'
    case 8:
      return 'oito'
    case 9: 
      return 'nove'
    case 10:
      return 'dez'
    default:
      return 'Fora do range'
  }
}

console.log(porExtenso(7))


// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100    Cachorro Quente      R$ 3,00
// 200    Hambúrguer Simples   R$ 4,00
// 300    Cheeseburguer        R$ 5,50
// 400    Bauru                R$ 7,50
// 500    Refrigerante         R$ 3,50
// 600    Suco                 R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

function calcularPrecoDoPedido(codigo, qtde) {
  switch(codigo) {
    case 100: 
      return `${qtde} Cachorro quente => R$ ${(3 * qtde).toFixed(2)}`
    case 200: 
      return `${qtde} Hambúguer simples => R$ ${(4 * qtde).toFixed(2)}`
    case 300: 
      return `${qtde} Cheeseburguer => R$ ${(5.50 * qtde).toFixed(2)}`
    case 400: 
      return `${qtde} Bauru => R$ ${(7.50 * qtde).toFixed(2)}`
    case 500: 
      return `${qtde} Refrigerante => R$ ${(3.50 * qtde).toFixed(2)}`
    case 600: 
      return `${qtde} Suco => R$ ${(2.80 * qtde).toFixed(2)}`
    default : 'Produto não existente'
  }
}

console.log(calcularPrecoDoPedido(400, 3))



// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.


const voltarTroco = valorDoDinheiro => {
  let valor
  if(valorDoDinheiro < 0) return 'Deve ser valor positivo'
  else {valor = parseInt(valorDoDinheiro)}

  let troco = {
    notas1: 0,
    notas5: 0,
    notas10: 0,
    notas50: 0,
    notas100: 0
  }

  while(valor > 0) {
    // console.log(valor)
    if(valor > 100) {
      valor = valor - 100
      troco.notas100++
    }else if(valor > 50) {
      valor = valor - 50
      troco.notas50++
    }else if(valor > 10) {
      valor = valor - 10
      troco.notas10++
    }else if(valor > 5) {
      valor = valor - 5
      troco.notas5++
    }else if(valor > 0) {
      valor = valor - 1
      troco.notas1++
    }
  }
  // : 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1
  // console.log(troco)
  return `${troco.notas100 > 0 ? troco.notas100 + ' nota(s) de R$ 100; ' : ''}${troco.notas50 > 0 ? troco.notas50 + ' nota(s) de R$ 50; ' : ''}${troco.notas10 > 0 ? troco.notas10 + ' nota(s) de R$ 10; ' : ''}${troco.notas5 > 0 ? troco.notas5 + ' nota(s) de R$ 5; ' : ''}${troco.notas1 > 0 ? troco.notas1 + ' nota(s) de R$ 1. ' : ''}`
}

console.log(voltarTroco(256))



// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130


const valorASerPagoPelaIdade = (idade) => {
  const valorPadrao = 100

  if(typeof idade !== 'number' || idade > 120 || idade < 1) {
    return 'A idade precisa ser um número válido'
  }else if(idade < 10) {
    return `R$ ${valorPadrao + 80}`
  }else if(idade >= 10 && idade <= 30) {
    return `R$ ${valorPadrao + 50}`
  }else if(idade > 30 && idade <= 60) {
    return `R$ ${valorPadrao + 95}`
  }else if(idade < 60) {
    return `R$ ${valorPadrao + 130}`
  } 

}

console.log(valorASerPagoPelaIdade(60))



// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.


//        1- mês que vai ser paga a anuidade 
// inputs:
//        2- valor da anuidade

// output: valor a ser pago acrescido de 5% ao mês pelo atraso


// solução :
// já tenho uma função que calcula o juros compostos (que recebe o dinheiro, taxa de juros, e o tempo)
// calcularJurosCompostos(10000, 0.15, 10)


const calcAnuidadeComJurosPorAtraso = (anuidade, atrasoEmMeses) => {
  // anuidade: number
  // atraso em meses: number 

  // taxa de 5% ao mês
  const valorAPagar = calcularJurosCompostos(anuidade, 0.05, atrasoEmMeses)

  return `O valor da anuidade somando com os juros de atraso é: R$ ${valorAPagar}`
}

console.log(calcAnuidadeComJurosPorAtraso(5000, 7))



// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.


const analisarNotasDoAluno = (codgAluno, ...notas) => {

  // const notas = [...notas]  
  const maiorNota = notas.reduce((prev, current) => {
    return prev > current ? prev : current
  })
  // console.log(notas, maiorNota)

  notas.splice(notas.indexOf(maiorNota), 1)
  const [n1, n2] = notas
  // console.log(notas)

  const mediaPonderada = (4 * maiorNota + 3 * n1 + 3 * n2) / (4 + 3 + 3)
  // console.log(mediaPonderada)
  return {
    codgAluno,
    notas,
    media: mediaPonderada,
    status: mediaPonderada >= 5 ? 'Aprovado' : 'Reprovado' 
  }
}

console.log(analisarNotasDoAluno('0617', 3, 4, 2))
console.log(analisarNotasDoAluno('1043', 9, 8, 9))




// 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.


let index = 0

while(index < 11) {
  console.log(' Hello World!')
  index++
}


// 25) Escrever um programa para exibir os números de 1 até 50 na tela.

for(let i = 1; i <= 50; i++) {
  console.log(i)
}


// 26) Fazer um programa para encontrar todos os pares entre 1 e 100.

for(let i = 1; i <= 100; i++) {
  if(i % 2 === 0){
    console.log(i)
  }
    
}


// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.


const projecaoDeAltura = (alt1, taxaCresc1, alt2, taxaCresc2) => {
  // a altura será um Number do tipo Float
  // a taxa é anual
  let criancaMenor 
  let tempoAteUltrapassar = 0

  if(alt1 === alt2 && taxaCresc1 !== taxaCresc2) {return 'As alturas são iguais, ' + (taxaCresc1 > taxaCresc2 ? 'porém a primeira criança irá crescer mais' : 'porém a segunda criança irá crescer mais')}
  else if(alt1 < alt2 && taxaCresc1 > taxaCresc2) {// a criança menor ultrapassara a maior
    criancaMenor = 'criança 01'
    while(alt1 <= alt2) {
      alt1 += taxaCresc1
      alt2 += taxaCresc2

      alt1 = alt1.toFixed(2)
      alt1 = parseFloat(alt1)
      alt2 = alt2.toFixed(2)
      alt2 = parseFloat(alt2)

      // console.log(alt1, alt2)
      tempoAteUltrapassar += 1
    }


  }else if(alt1 > alt2 && taxaCresc1 < taxaCresc2) {//a criança menor ultrapassara a maior

    criancaMenor = 'criança 02'
    while(alt2 <= alt1) {
      alt2 += taxaCresc2
      alt1 += taxaCresc1

      alt2 = alt2.toFixed(2)
      alt2 = parseFloat(alt2)
      alt1 = alt1.toFixed(2)
      alt1 = parseFloat(alt1)

      // console.log(alt2, alt1)
      tempoAteUltrapassar += 1
    }

  }else if(alt1 < alt2 && taxaCresc1 < taxaCresc2) {// a criança menor não ultrapassara a maior
    criancaMenor = 'criança 01'
  }else if(alt1 > alt2 && taxaCresc1 > taxaCresc2) {//a criança menor não ultrapassara a maior
    criancaMenor = 'criança 02'
  } else { return 'Eu não quis tratar todos os caso'}

  return `A criança menor é a ${criancaMenor} e ${tempoAteUltrapassar > 0  ? `levará ${tempoAteUltrapassar} anos até ultrapassar a outra.` : ' não ultrapassará a outra.'}`
}

console.log(projecaoDeAltura(1.30, 0.04, 1.50, 0.02))
console.log(projecaoDeAltura(1.50, 0.02, 1.30, 0.08))

console.log(projecaoDeAltura(1.50, 0.04, 1.50, 0.03))
console.log(projecaoDeAltura(1.50, 0.03, 1.50, 0.04))

console.log(projecaoDeAltura(1.60, 0.04, 1.50, 0.03))
console.log(projecaoDeAltura(1.50, 0.03, 1.51, 0.04))


// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.




// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.





// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.




// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.






// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.




// 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.




// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.



// 35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
// inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
// e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
// final das operações imprima os vetores no console.




// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.




// 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.



// 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.



// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.




// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.
































































