<template>
  <div id="app">
    <div class="silde-menu"></div>
    <event-calendar :events="demoEvents"></event-calendar>
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
      primaryColor: '#e0ebaf',
      demoEvents: [
        {
          title: '事件01 1/27-2/2',
          date: '2018-03-05'
        },
        {
          title: '事件02 3/27-3/28',
          date: '2018-02-25'
        }
      ]
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
