import getCurrentDayAndHour from "./getCurrentDayAndHour.ts";

function checkWeekDayAndHour() {
  const {dateDay, dateHour} = getCurrentDayAndHour();

  return dateDay === 'friday' && dateHour > 12 ? 'fridayAfterNoon' : dateDay;
}

export default checkWeekDayAndHour;
