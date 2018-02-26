<template>
  <div class="calendan-header-box">
    <div class="right-btn-box">
      <button class="handle-btn" @click="previousYear">上一年</button>
      <button class="handle-btn" @click="previousMonth">上一月</button>
    </div>
    <div class="middle-show-box" title="今天" @click="backToToday">
      {{currentYear}}年{{currentMonth}}月
    </div>
    <div class="left-btn-box">
      <button class="handle-btn" @click="nextMonth">下一月</button>
      <button class="handle-btn" @click="nextYear">下一年</button>
    </div>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'

export default {
  name: 'TheCalendarHeader',
  mixins: [ Emitter ],
  props: {
    currentYear: {
      type: Number,
      required: true
    },
    currentMonth: {
      type: Number,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    backToToday () {
      this.dispatch('EventCalendar', 'back-to-today', this)
    },
    previousYear () {
      this.dispatch('EventCalendar', 'previous-year', this)
    },
    nextYear () {
      this.dispatch('EventCalendar', 'next-year', this)
    },
    previousMonth () {
      this.dispatch('EventCalendar', 'previous-month', this)
    },
    nextMonth () {
      this.dispatch('EventCalendar', 'next-month', this)
    }
  }
}
</script>

<style>
@import 'common.css';

.calendan-header-box {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
}
.middle-show-box {
  margin: 5px 15px;
  cursor: pointer;
  font-size: 1.2vw;
  color: var(--primary-color);
}
.handle-btn {
  cursor: pointer;
  background: #fff;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 1vw;
}
.handle-btn:hover {
  color: #fff;
  background-color: var(--primary-color);
}
</style>
