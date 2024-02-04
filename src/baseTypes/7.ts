/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDays {
  mn = "Monday",
  ts = "Tuesday",
  wd = "Wednesday",
  th = "Thursday",
  fr = "Friday",
  st = "Saturday",
  sn = "Sunday",
}

function isWeekend(day: string): boolean {
  if (day === "Saturday" || "Sunday") return true;
  return false;
}

isWeekend(weekDays.mn);
