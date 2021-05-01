// 1.В переменных a и b хранятся числа. Написать программу, которая выводит в консоль произведение и сумму этих чисел.

export function sum(n1, n2) {
  return n1 + n2;
}

export function prod(n1, n2) {
  return n1 * n2;
}

// // // 2.В двух переменных хранятся строки символов. Написать программу, которая выведет в консоль суммарное количество символов в обоих строках.
export function totalLength(str1, str2) {
  return (str1 + str2).length;
}

// // // 3.*Написать программу, которая запрашивает у пользователя ввод трёхзначного числа, а потом выводит в консоль сумму цифр введённого числа.
export function digitSum(digit) {
  const mod1 = digit % 100;
  const n1 = (digit - mod1) / 100;
  const mod2 = mod1 % 10;
  const n2 = (mod1 - mod2) / 10;
  return n1 + n2 + mod2;
}
