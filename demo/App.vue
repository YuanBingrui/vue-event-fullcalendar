<template>
  <div id="app">
    <event-full-calendar :events="demoEvents"></event-full-calendar>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
