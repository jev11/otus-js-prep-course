// 1 В переменных a и b хранятся числа. Вывести в консоль наибольшее из них.

export function compareNumbers(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

// Запросить у пользователя ввод числа от 1 до 12. Вывести в консоль название месяца, соответствующее этому числу (1 — январь, 2 — февраль и т.д.).
export function getMonth(n) {
  switch (n) {
    case 1:
      return "Январь";
    case 2:
      return "Февраль";
    case 3:
      return "Март";
    case 4:
      return "Апрель";
    case 5:
      return "Май";
    case 6:
      return "Июнь";
    case 7:
      return "Июль";
    case 8:
      return "Август";
    case 9:
      return "Сентябрь";
    case 10:
      return "Октябрь";
    case 11:
      return "Ноябрь";
    case 12:
      return "Декабрь";
    default:
      return "Такого месяца не существует";
  }
}

// 3.В переменных circle и square хранятся площади круга и квадрата соответственно. Написать программу, которая определяет, поместится ли круг в квадрат.
export function circleFitsInSquare(circleS, squareS) {
  return 2 * Math.sqrt(circleS / Math.PI) < Math.sqrt(squareS);
}
