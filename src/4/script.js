// Создайте объект user, содержащий поле name со значением ‘John’.

// 1.Запросить у пользователя ввод числа. Записать введенное значение в поле age объекта user.
export function addAge(obj, age) {
  obj.age = age;
  return obj;
}

// 2.Создать копию объекта user с именем admin. Добавить новому объекту поле role со значением ‘admin’.
export function makeAdmin(obj) {
  const admin = obj;
  admin.role = "admin";
  return admin;
}

// *Записать все значения полей объекта admin в отдельные переменные. Имена переменных должны совпадать с названиями полей.
export function destructure(obj) {
  const { name, age, role } = obj;
  return [name, age, role];
}
