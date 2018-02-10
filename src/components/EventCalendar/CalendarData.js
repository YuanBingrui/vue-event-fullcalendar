import moment from 'moment'

let CalendarData = {}

CalendarData.getYear = function () {
  return moment().year()
}

CalendarData.nextYear = function (currentYear) {
  currentYear = currentYear + 1
  return currentYear
}

CalendarData.previousYear = function (currentYear) {
  currentYear = currentYear - 1
  return currentYear
}

CalendarData.getMonth = function () {
  let currentMonth = moment().month() + 1
  return currentMonth
}

CalendarData.nextMonth = function (currentMonth) {
  if (currentMonth >= 12) {
    currentMonth = 1
  } else {
    currentMonth = currentMonth + 1
  }
  return currentMonth
}

CalendarData.previousMonth = function (currentMonth) {
  if (currentMonth <= 1) {
    currentMonth = 12
  } else {
    currentMonth = currentMonth - 1
  }
  return currentMonth
}

CalendarData.getWeeks = function () {
  return moment()._locale._weekdays
}

CalendarData.getMonthViewStartDate = function (currentYear, currentMonth) {
  let start = moment(moment().year(currentYear).month(currentMonth - 1).startOf('month'))

  let startOfMonth = moment(start.startOf('month'))

  start.subtract(startOfMonth.day(), 'days')

  return start
}

CalendarData.getMonthViewEndDate = function () {
  return this.getMonthViewStartDate().add(6, 'weeks')
}

export default CalendarData
