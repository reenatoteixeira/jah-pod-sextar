import checkWeekDayAndHour from './checkWeekDayAndHour.ts'
import { TFunction } from 'i18next'

export function getResponse(t: TFunction) {
  const day = checkWeekDayAndHour(),
    responses = t(`responses.${day}`, { returnObjects: true }) as string[],
    key = Math.floor(Math.random() * responses.length)

  return responses[key]
}
