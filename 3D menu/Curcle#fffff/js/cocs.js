let num1 = prompt('Введите первое число')
let num2 = prompt('Введите второе число')
let phrases = prompt('выберете дейсвтие: "деление , умножение, минус, плюс"')

if (phrases == 'деление') {
    alert(num1 / num2)
} else if (phrases == 'умножение') {
    alert(num1 * num2)
} else if (phrases == 'минус') {
    alert(num1 - num2)
} else if (phrases == 'плюс') {
    alert(num1 + num2)
} else {
    alert('Вы сделали ошибку')
}