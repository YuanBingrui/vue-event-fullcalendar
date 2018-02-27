<template>
  <div class="event-card-box">
    {{event.title}}
  </div>
</template>

<script>
export default {
  name: 'BaseEventCard',
  props: {
    event: {
      type: Object
    }
  },
  data () {
    return {}
  },
  created () {

  },
  computed: {}
}
</script>

<style>
@import 'common.css';

.event-card-box {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
