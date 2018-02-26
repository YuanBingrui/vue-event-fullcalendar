<template>
  <div id="app">
    <div class="silde-menu"></div>
    <event-calendar></event-calendar>
  </div>
</template>

<script>
import EventCalendar from './components/EventCalendar/EventCalendar'

export default {
  name: 'App',
  components: {
    'event-calendar': EventCalendar
  },
  data () {
    return {
      primaryColor: '#e0ebaf'
    }
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
.silde-menu{
  width: 250px;
}
</style>
