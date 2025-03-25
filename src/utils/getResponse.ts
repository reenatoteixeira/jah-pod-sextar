import responsesJSON from '../data/responses.json'
import checkWeekDayAndHour from './checkWeekDayAndHour.ts'

export function getResponse() {
  const day = checkWeekDayAndHour() as keyof typeof responsesJSON,
    key = Math.floor(Math.random() * responsesJSON[day].length)

  return responsesJSON[day][key]
}
