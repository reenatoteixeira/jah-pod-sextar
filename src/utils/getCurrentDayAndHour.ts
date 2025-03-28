function getCurrentDayAndHour() {
  const now = new Date(),
    dateDay = now.toLocaleString('en-US', { weekday: 'long' }).toLowerCase(),
    dateHour = now.getHours()

  return { dateDay, dateHour }
}

export default getCurrentDayAndHour
