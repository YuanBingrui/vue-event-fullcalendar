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
        class="days-line-list"
        v-for="(calendarline, key) in calendar"
        :key="key">
        <div
          class="days-line-item"
          v-for="(calendarlineone, keyone) in calendarline"
          :key="keyone"
          @click="selectedPresentDate(key, keyone)">
          <day-card
            :day-obj="calendarlineone">
            <event-card
              v-for="event in events"
              :key="event.date"
              :event="event"
              v-if="dataToMomentObj(calendarlineone.date) === event.date">
            </event-card>
          </day-card>
        </div>
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
import BaseEventCard from './BaseEventCard'

export default {
  name: 'EventCalendar',
  components: {
    'calendar-header': TheCalendarHeader,
    'weekdays': TheWeekdays,
    'day-card': BaseDayCard,
    'event-card': BaseEventCard
  },
  props: {
    primaryColor: {
      type: String,
      default: '#007bbb'
    },
    events: {
      type: Array,
      validator (val) {
        return val instanceof Array
      }
    }
  },
  data () {
    return {
      currentYear: null,
      currentMonth: null,
      realMonthStartDate: null,
      weekArr: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
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
    this.getCalendar(this.currentYear, this.currentMonth)
  },
  mounted () {
    this.$nextTick(() => {
      // 设置主题色
      document.documentElement.style.setProperty('--primary-color', this.primaryColor)
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
    },
    dataToMomentObj (date) {
      return moment(date).format('YYYY-MM-DD')
    }
  }
}
</script>

<style scoped>
@import '../../style/common.css';

.event-calendar-box {
  padding-top: 1.1vw;
  width: 100%;
  margin: 0 auto;
  background-color: #fafafa;
}
.calendar-days-box {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  background-color: #b3afaf;
}
.days-line-list {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
}
.days-line-item {
  box-sizing: border-box;
  margin: 0.5px 0.5px;
  flex-grow: 1;
  width: 14.15%;
}
.days-line-list .days-line-item:first-child {
  margin-left: 1px;
}
.days-line-list .days-line-item:last-child {
  margin-right: 1px;
}
.calendar-days-box .days-line-list:first-child .days-line-item {
  margin-top: 1px;
}
.calendar-days-box .days-line-list:last-child .days-line-item {
  margin-bottom: 1px;
}

</style>
