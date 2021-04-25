'use strict';
// 1 Вывести в консоль сумму всех целых чисел от 50 до 100.

export function rangeSum() {
    let sum = 0;
    for (let i = 50; i < 100; i++) {
        sum = sum + i;
    }
    return sum;
}

// Вывести в консоль таблицу умножения на 7.
export function productOfSeven() {
    let  result = [];
    for (let i = 1; i <=9; i++) {
        result = result.concat(`7 x ${i} = ${7*i}`);
    }
    return result;
}

// 3.Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N.
export function arMean(n) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i%2 != 0) {
            sum = sum + i;
            count++;
        }
    }
    return sum/count;
}
