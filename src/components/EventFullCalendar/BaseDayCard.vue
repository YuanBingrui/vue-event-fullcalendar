<template>
  <div
    class="day-card-box"
    v-bind:class="{ 'is-cur-month': !isCurMonth, 'is-today': isToday,'is-selected': isSelected && isRealMonth && isCurMonth, 'is-selected-non-curmonth': isSelected && !isRealMonth && isCurMonth, 'is-weekday': isWeekday }">
    <div
      class="day-card-box-data-view"
    >{{ dayObj.monthDay }}
    </div>
    <div
      class="day-card-box-event-view">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseDayCard',
  props: {
    dayObj: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    isCurMonth: function () {
      return this.dayObj.isCurMonth
    },
    isRealMonth: function () {
      return this.dayObj.isRealMonth
    },
    isToday: function () {
      return this.dayObj.isToday
    },
    isSelected: function () {
      return this.dayObj.isSelected
    },
    isWeekday: function () {
      return this.dayObj.weekDay === 0 || this.dayObj.weekDay === 6
    }
  }
}
</script>

<style scoped>
@import '../../style/common.css';

.day-card-box {
  min-height: 120px;
  background-color: #fff;
  padding: 5px 7px;
}
.day-card-box-data-view {
  display: flex;
  justify-content: flex-start;
  font-size: 1vw;
}
.day-card-box-event-view {
  font-size: 1.2vw;
  margin-top: 5px;
}
.is-cur-month {
  background-color: #f6f6f6;
  color: #ccc;
}
.is-selected-non-curmonth {
  background-color: #000;
  color: #fff;
  cursor: pointer;
}
.is-weekday {
  color: #ccc;
}
.is-today {
  color: var(--primary-color);
  font-weight: bold;
}
.is-selected {
  background-color: var(--primary-color);
  color: #fff;
  cursor: pointer;
}
</style>
