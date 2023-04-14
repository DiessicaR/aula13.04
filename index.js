/* Solicitar o nome do usuário, 3 notas, calcular média.
Informar o nome do usuário, a média e se a média for maior que 6.
Informar ao usuário mensagem de "parabéns" se for >=7 e "necessário repetir de ano" se <=7
 */



/* Exercicio 1


//nome usuário
let nome = prompt("Qual o seu nome?")


//3 notas
const notaA = Number(prompt("Qual sua nota da prova A?"))
console.log(notaA)

const notaB = Number(prompt("Qual sua nota da prova B?"))
console.log(notaB)

const notaC = Number(prompt("Qual sua nota da prova C?"))
console.log(notaC)

// calcular média
let soma = notaA + notaB + notaC; 
let media = soma / 3;

// Informar o nome do usuário e média
console.log(nome,media)

//Informar mensagem ao usuário do resultado da média
if(media >=6) {
    alert(nome + ",sua média foi" + media + ". Parabéns, você passou de ano!")
}
else {
    alert(nome + ",sua média foi" + media + ". Que pena, será preciso repetir o curso")
}

*/ 


//Exercicio 2
//Solicitar um número para o usuário. 
//Validar se é par e informar o resultado. 


/* solicitar número
const numero = Number(prompt("Digite um número:"))

if (numero %2 === 0) {
    alert("O número " + numero + " é par!")
}
else {
    alert("O número " + numero + " é ímpar!")
}
*/

/*Solicitar 2 números para o usuário
//Exibir o maior

const num1 = Number(prompt("Digite qualquer número:"))
const num2 = Number(prompt("Digite outro número:"))

if (num1 > num2) {
    alert("O número maior é " + num1)
}
else {
    alert("O número maior é " + num2)
}

*/


//Solicitar 3 números para o usuário
//Exibir o maior

const num1 = Number(prompt("Digite qualquer número:"))
const num2 = Number(prompt("Digite outro número:"))
const num3 = Number(prompt( "Digite outro número: "))
if (num1 > num2) {
    alert("O número maior é " + num1)
}
else {
    alert("O número maior é " + num2)
}








 
