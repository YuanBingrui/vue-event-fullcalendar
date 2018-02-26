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

<style>
.day-card-box {
  width: 6rem;
  height: 6rem;
  background-color: #fff;
  margin: 0.5px 0.5px;
  padding: 5px 7px;
}
.day-card-box-data-view {
  display: flex;
  justify-content: flex-start;
}
.is-cur-month {
  background-color: #eee;
  color: #ccc;
}
.is-selected-non-curmonth {
  background-color: #000;
  color: #fff;
  border: 1px #fff solid;
  cursor: pointer;
}
.is-weekday {
  color: #ccc;
}
.is-today {
  color: #cb3a56;
  font-weight: bold;
}
.is-selected {
  background-color: #cb3a56;
  color: #fff;
  cursor: pointer;
}
</style>
