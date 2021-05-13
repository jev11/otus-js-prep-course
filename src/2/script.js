// 1 В переменных a и b хранятся числа. Вывести в консоль наибольшее из них.
export function compareNumbers(n1, n2) {
  console.log(n1 > n2 ? n1 : n2);
}

// Запросить у пользователя ввод числа от 1 до 12. Вывести в консоль название месяца, соответствующее этому числу (1 — январь, 2 — февраль и т.д.).
export function getMonth() {
  const n = prompt("Введите число от 1 до 12");
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  console.log(months[n - 1]);
}

// 3.В переменных circle и square хранятся площади круга и квадрата соответственно. Написать программу, которая определяет, поместится ли круг в квадрат.
export function circleFitsInSquare(circleS, squareS) {
  return 2 * Math.sqrt(circleS / Math.PI) < Math.sqrt(squareS);
}
