// 1.Напишите функцию diff, которая получает в качестве параметров 2 числа и возвращает разницу между наибольшим и наименьшим.
export function diff(n1, n2) {
  return Math.abs(n1 - n2);
}

// 2.Напишите функцию isWord, которая принимает на вход текстовую строку. Функция возвращает true, если строка состоит из одного слова и false, если из нескольких.
export function isWord(str) {
  if (str === "") {
    return false;
  }
  return str.split(" ").length === 1;
}

// *Напишите функцию pow(a, x), которая вернёт значение числа a, возведённого в степень x.
export function pow(a, x) {
  return a ** x;
}
