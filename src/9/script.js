// 1.Даны длины трёх сторон треугольника. Определить, является ли треугольник прямоугольным. a^2+b^2=c^2
export function rightTriangle(a, b, c) {
  const arr = [a, b, c].sort();
  return arr[2] ** 2 === arr[0] ** 2 + arr[1] ** 2;
}

// 2.Пользователь вводит число R. Написать программу, которая выведет в консоль длину окружности и площадь круга с радиусом R.
export function circleCA() {
  const r = prompt("Enter radius");
  const circumference = Math.round(2 * Math.PI * r * 100) / 100;
  const area = Math.round(Math.PI * r ** 2 * 100) / 100;
  console.log([circumference, area]);
}

// *Пользователь вводит числа a, b и c. Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.
export function quadraticEquation() {
  const input = window.prompt("Enter a, b, c");
  console.log(input);
  const [a, b, c] = input.split(",");
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    console.log(["No x"]);
  } else {
    const x1 = ((-b + Math.sqrt(discriminant)) / 2) * a;
    const x2 = ((-b - Math.sqrt(discriminant)) / 2) * a;
    console.log([x1, x2]);
  }
}
