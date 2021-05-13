// 1.Выведите в консоль сумму всех элементов массива.
export function arraySum(arr) {
  console.log(arr.reduce((sum, el) => sum + el));
}

// 2.Создайте новый массив на основе исходного, в котором каждый элемент будет вдвое больше элемента исходного массива с таким же индексом. (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый массив).
export function doubleValue(arr) {
  return arr.map((el) => el * 2);
}

// 3.*Найдите и выведите в консоль наибольший и наименьший элементы исходного массива.
export function findSmallestAndLargest(arr) {
  if (arr.length > 1) {
    const newArr = arr.slice(); // so that the original array is not modified
    newArr.sort().splice(1, newArr.length - 2);
    console.log(newArr);
  } else {
    console.log(arr);
  }
}
