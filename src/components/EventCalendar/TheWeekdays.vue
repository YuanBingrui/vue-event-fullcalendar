<template>
  <div class="weekdays-box">
    <div class="weekdays-list">
      <div
        class="weekdays-item"
        v-for="weekday in weekdays"
        :key="weekday"
        >
        {{ weekday }}
      </div>
    </div>
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
@import 'common.css';

.weekdays-box {
  width: 100%;
}
.weekdays-list {
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  font-size: 1.2vw;
}
.weekdays-item {
  padding: 5px 7px;
  width: 11%;
  color: var(--primary-color);
  word-wrap: break-word;
  text-align: center;
}
</style>
