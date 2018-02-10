<template>
  <div class="day-card-box" v-bind:class="{ 'is-cur-month': !dayObj.isCurMonth, 'is-today': dayObj.isToday }">{{dayObj.monthDay}}</div>
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
.day-card-box:hover{
  background-color: rgba(203, 58, 86, .5);
}
.is-cur-month{
  background-color: #eee;
}
.is-today{
  background-color: #cb3a56;
}
</style>
