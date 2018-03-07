import EventFullCalendar from './components/EventFullCalendar/EventFullCalendar.vue'

const VueEventFullCalendar = {
  'event-full-calendar': EventFullCalendar
}

const install = function (Vue) {
  Object.keys(VueEventFullCalendar).forEach((key) => {
    Vue.component(key, VueEventFullCalendar[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(VueEventFullCalendar, {install})
