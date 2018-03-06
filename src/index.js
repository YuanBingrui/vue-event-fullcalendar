import EventFullCalendar from './components/EventFullCalendar/EventFullCalendar.vue'

const VueEventFullCalendar = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('event-full-calendar', EventFullCalendar)
  }
}

export default VueEventFullCalendar
