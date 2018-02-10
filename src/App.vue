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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
