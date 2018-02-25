<template>
  <div
    class="day-card-box"
    v-bind:class="{ 'is-cur-month': !isCurMonth, 'is-today': isToday,'is-selected': isSelected && isRealMonth && isCurMonth, 'is-selected-non-curmonth': isSelected && !isRealMonth && isCurMonth, 'is-weekday': isWeekday}"
  >{{dayObj.monthDay}}</div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px #cb3a56 solid;
  margin: 0 5px;
  border-radius: 4px;
  padding: 5px 7px;
}
/*.day-card-box:hover {
  background-color: rgba(203, 58, 86, .5);
}*/
.is-cur-month {
  background-color: #eee;
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
