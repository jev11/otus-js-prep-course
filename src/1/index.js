// 1.В переменных a и b хранятся числа. Написать программу, которая выводит в консоль произведение и сумму этих чисел.
const a = 1;
const b = 2;
console.log(a*b);
console.log(a+b);

// 2.В двух переменных хранятся строки символов. Написать программу, которая выведет в консоль суммарное количество символов в обоих строках.
const string1 = "abc";
const string2 = "def";
console.log(string1 + string2);

// 3.*Написать программу, которая запрашивает у пользователя ввод трёхзначного числа, а потом выводит в консоль сумму цифр введённого числа.
const input = prompt('Enter a 3 digit number');
const mod1 = input%100;
const n1 = (input-mod1)/100;
const mod2 = mod1%10;
const n2 = (mod1-mod2)/10;
console.log(n1+n2+mod2);
