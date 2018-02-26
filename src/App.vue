<template>
  <div id="app">
    <event-calendar></event-calendar>
  </div>
</template>

<script>
import EventCalendar from './components/EventCalendar/EventCalendar'

export default {
  name: 'App',
  components: {
    'event-calendar': EventCalendar
  }
}
</script>

<style>
#app {
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
