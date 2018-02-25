<template>
  <div class="event-calendar-box">
    <calendar-header
      :current-year="currentYear"
      :current-month="currentMonth">
    </calendar-header>
    <weekdays
      :weekdays="weekArr">
    </weekdays>
    <div class="calendar-days-box">
      <div
        v-for="(calendarline, key) in calendar"
        :key="key">
        <ul class="weekdays-line-box">
          <li
            v-for="(calendarlineone, keyone) in calendarline"
            :key="keyone"
            @click="selectedPresentDate(key, keyone)">
            <day-card
              :day-obj="calendarlineone">
            </day-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarData from './CalendarData.js'
import moment from 'moment'
import TheCalendarHeader from './TheCalendarHeader'
import TheWeekdays from './TheWeekdays'
import BaseDayCard from './BaseDayCard'

export default {
  name: 'EventCalendar',
  components: {
    'calendar-header': TheCalendarHeader,
    'weekdays': TheWeekdays,
    'day-card': BaseDayCard
  },
  data () {
    return {
      currentYear: null,
      currentMonth: null,
      realMonthStartDate: null,
      weekArr: null,
      calendar: null,
      initKey: null,
      initKeyone: null
    }
  },
  created () {
    this.$on('back-to-today', this.backToToday)
    this.$on('previous-year', this.previousYear)
    this.$on('next-year', this.nextYear)
    this.$on('previous-month', this.previousMonth)
    this.$on('next-month', this.nextMonth)
    this.currentYear = CalendarData.getYear()
    this.currentMonth = CalendarData.getMonth()
    this.realMonthStartDate = moment().startOf('month')
    this.weekArr = CalendarData.getWeeks()
    this.getCalendar(this.currentYear, this.currentMonth)
  },
  mounted () {
    this.$nextTick(() => {
      // this.currentYear = CalendarData.getYear()
    })
  },
  methods: {
    backToToday () {
      this.currentYear = CalendarData.getYear()
      this.currentMonth = CalendarData.getMonth()
      this.getCalendar(this.currentYear, this.currentMonth)
    },
    previousYear () {
      this.currentYear = CalendarData.previousYear(this.currentYear)
      this.getCalendar(this.currentYear, this.currentMonth)
    },
    nextYear () {
      this.currentYear = CalendarData.nextYear(this.currentYear)
      this.getCalendar(this.currentYear, this.currentMonth)
    },
    previousMonth () {
      if (this.currentMonth <= 1) {
        this.currentMonth = CalendarData.previousMonth(1)
        this.previousYear()
      } else {
        this.currentMonth = CalendarData.previousMonth(this.currentMonth)
      }
      this.getCalendar(this.currentYear, this.currentMonth)
    },
    nextMonth () {
      if (this.currentMonth >= 12) {
        this.currentMonth = CalendarData.nextMonth(12)
        this.nextYear()
      } else {
        this.currentMonth = CalendarData.nextMonth(this.currentMonth)
      }
      this.getCalendar(this.currentYear, this.currentMonth)
    },
    selectedPresentDate (key, keyone) {
      this.$set(this.calendar[this.initKey][this.initKeyone], 'isSelected', false)
      this.$set(this.calendar[key][keyone], 'isSelected', true)
      this.initKey = key
      this.initKeyone = keyone
    },
    getCalendar (currentYear, currentMonth) {
      let monthViewStartDate = CalendarData.getMonthViewStartDate(currentYear, currentMonth)
      this.calendar = []
      for (let perWeek = 0; perWeek < 6; perWeek++) {
        if (perWeek >= 5) {
          if (monthViewStartDate.isSame(moment().year(currentYear).month(currentMonth - 1).startOf('month'), 'month')) {
            this.calendar.push(this.createWeekdays(perWeek, currentYear, currentMonth, monthViewStartDate))
          }
        } else {
          this.calendar.push(this.createWeekdays(perWeek, currentYear, currentMonth, monthViewStartDate))
        }
      }
      console.log(this.calendar)
    },
    createWeekdays (perWeek, currentYear, currentMonth, monthViewStartDate) {
      let week = []
      for (let perDay = 0; perDay < 7; perDay++) {
        week.push({
          monthDay: monthViewStartDate.date(),
          isToday: monthViewStartDate.isSame(moment(), 'day'),
          isCurMonth: monthViewStartDate.isSame(moment().year(currentYear).month(currentMonth - 1).startOf('month'), 'month'),
          isRealMonth: this.realMonthStartDate.isSame(moment().year(currentYear).month(currentMonth - 1).startOf('month'), 'month'),
          isSelected: monthViewStartDate.isSame(moment(), 'day'),
          weekDay: perDay,
          date: moment(monthViewStartDate)
        })
        if (monthViewStartDate.isSame(moment(), 'day')) {
          this.initKey = perWeek
          this.initKeyone = perDay
        }
        monthViewStartDate.add(1, 'day')
      }
      return week
    }
  }
}
</script>

<style scoped>
.event-calendar-box {

}
.calendar-days-box {
  border: 1px #cb3a56 solid;
}
.weekdays-line-box li{
  display: inline-block;
  list-style: none;
}
</style>
