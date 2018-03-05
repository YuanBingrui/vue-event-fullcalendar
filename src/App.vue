<template>
  <div id="app">
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
          eventlist: [
            {title: '事件01 1/27-2/2'},
            {title: '事件02 1/27-2/2'},
            {title: '事件03 1/27-2/2'},
            {title: '事件04 1/27-2/2'},
            {title: '事件05 1/27-2/2'},
            {title: '事件06 1/27-2/2'},
            {title: '事件07 1/27-2/2'},
            {title: '事件08 1/27-2/2'},
            {title: '事件001 1/27-2/2'},
            {title: '事件021 1/27-2/2'},
            {title: '事件041 1/27-2/2'},
            {title: '事件026 1/27-2/2'}
          ],
          date: '2018-03-05'
        },
        {
          eventlist: [
            {title: '事件03 3/27-3/28'}
          ],
          date: '2018-02-25'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}
</style>
