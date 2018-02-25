<template>
  <div class="weekdays-box">
    <ul>
      <li
        v-for="weekday in weekdays"
        :key="weekday">
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
.weekdays-box {
  overflow:hidden;
  white-space:nowrap;
}
.weekdays-box ul {
  margin-top: 1rem;
  margin-bottom: 0;
  padding: 0;
}
.weekdays-box ul li {
  display: inline-block;
  list-style: none;
  padding: 5px 7px;
  width: 6rem;
  color: #cb3a56;
}
</style>
