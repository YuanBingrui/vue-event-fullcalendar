<template>
  <div class="weekdays-box">
    <ul>
      <li v-for="weekday in weekdays" :key="weekday">
        {{ weekday }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheWeekdays',
  props: {
    weekdays: {
      type: Array,
      validator (val) {
        return val instanceof Array
      },
      required: true
    }
  }
}
</script>

<style>
.weekdays-box ul li {
  display: inline-block;
  list-style: none;
  padding: 5px 7px;
  width: 100px;
  background-color: #cb3a56;
  margin: 0 5px;
  border-radius: 4px;
  color: #fff;
}
</style>
