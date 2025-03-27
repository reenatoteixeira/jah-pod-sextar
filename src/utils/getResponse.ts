import checkWeekDayAndHour from './checkWeekDayAndHour.ts'
import { TFunction } from 'i18next'
import i18n from '../i18n.ts'

export function getResponse(t: TFunction) {
  console.log('i18n:', Object.keys(i18n.services.resourceStore.data))

  const day = checkWeekDayAndHour(),
    responses = t(`responses.${day}`, { returnObjects: true }) as string[],
    key = Math.floor(Math.random() * responses.length)

  return responses[key]
}
