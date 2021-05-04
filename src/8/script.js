// 1.Запросите у пользователя дату в формате ДД.ММ.ГГГГ. Напишите программу, выводящую день недели по введённой дате.
export function dayOfWeek(date) {
  const [day, month, year] = date.split(".");
  const parsedDate = new Date(`${year}-${month}-${day}`);
  switch (parsedDate.getDay()) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Date is not parsed correctly";
  }
}

// 2.Написать программу, которая выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.
export function minutesSinceToday() {
  const hrs = new Date().getHours();
  const mins = new Date().getMinutes();
  console.log(hrs * 60 + mins);
}

// 3.*В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ. Написать программу, которая определяет более молодого пользователя.
export function youngerUser(user1, user2) {
  const [day1, month1, year1] = user1.split(".");
  const user1DayOfBirth = new Date(`${year1}-${month1}-${day1}`);
  const [day2, month2, year2] = user2.split(".");
  const user2DayOfBirth = new Date(`${year2}-${month2}-${day2}`);
  return user1DayOfBirth > user2DayOfBirth ? user1 : user2;
}
