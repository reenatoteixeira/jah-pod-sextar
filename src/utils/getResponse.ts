import responsesJSON from '../data/responses.json'

function isFridayAfterNoon(day: string, hour: number) {
  return day === 'friday' && hour > 12;
}

function getCurrentDayAndHour() {
  const now = new Date(),
    dateDay = now.toLocaleString('en-US', {weekday: 'long'}).toLowerCase(),
    dateHour = now.getHours();

  return isFridayAfterNoon(dateDay, dateHour) ? 'fridayAfterNoon' : dateDay;
}

export function getResponse() {
  const day = getCurrentDayAndHour() as keyof typeof responsesJSON,
    key = Math.floor(Math.random() * responsesJSON[day].length);

  return responsesJSON[day][key];
}
