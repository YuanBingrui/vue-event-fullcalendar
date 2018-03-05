<template>
  <div class="event-card-box">
    {{event.title}}
    <div class="event-card-list">
      <div
        class="event-card-item"
        v-for="eventitem in event.eventlist"
        :key="eventitem.title + event.date">
        {{eventitem.title}}
      </div>
    </div>
    <div class="event-card-detail">
      <a
        type="primary"
        @click.prevent="showMoreEvents">
        查看更多
        <i class="iconfont icon-more"></i>
      </a>
    </div>
    <dialog :ref="event.date" class="detail-modal">
      <a class="dialog-close" @click.prevent="closeDialogModal">
        <i class="dialog-iconfont icon-close"></i>
      </a>
      <div class="dialog-header">
        {{modalTitle}}
      </div>
      <div class="dialog-content">
        <div class="detail-modal-list">
          <p
            v-for="eventitem in event.eventlist"
            :key="eventitem.title + event.date">
            {{eventitem.title}}
          </p>
        </div>
      </div>
      <div class="dialog-footer"></div>
    </dialog>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'BaseEventCard',
  props: {
    event: {
      type: Object
    }
  },
  data () {
    return {
      modal: null
    }
  },
  computed: {
    modalTitle () {
      return moment(this.event.date).format('YYYY-MM-DD')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.modal = this.$refs[this.event.date]
    })
  },
  methods: {
    showMoreEvents () {
      this.modal.showModal()
    },
    closeDialogModal () {
      this.modal.close()
    }
  }
}
</script>

<style scoped>
@import '../../style/common.css';

.event-card-list {
  height: 67px;
  overflow-x: hidden;
  overflow-y: auto;
}
.event-card-list::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #F5F5F5;
}
.event-card-list::-webkit-scrollbar-track {
  background-color: #F5F5F5;
  border-radius: 10px;
}
.event-card-list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #c1c1c1;
}
.event-card-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 2px;
}
.event-card-item:hover {
  color: #2d8cf0;
  cursor: pointer;
}
.event-card-detail {
  text-align: center;
  font-size: 1vw;
}
.event-card-detail a:hover{
  cursor: pointer;
}
.detail-modal {
  width: 360px;
  position: relative;
  background-color: #fff;
  border: 0;
  border-radius: 6px;
  background-clip: padding-box;
  padding: 0;
}
.dialog-close {
  position: absolute;
  right: 16px;
  top: 12px;
  overflow: hidden;
  cursor: pointer;
}
.dialog-close .dialog-iconfont {
  color: #999;
  font-size: 15px;
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.dialog-header {
  border-bottom: 1px solid #e9eaec;
  padding: 14px 16px;
  line-height: 1;
  text-align: center;
  font-size: 15px;
}
.dialog-content {
  height: 200px;
  overflow: auto;
}
.dialog-content::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #F5F5F5;
}
.dialog-content::-webkit-scrollbar-track {
  background-color: #F5F5F5;
  border-radius: 10px;
}
.dialog-content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #c1c1c1;
}
.detail-modal-list p {
  text-align: center;
  margin-inline: 5px;
}
.detail-modal-list p:hover {
  color: #2d8cf0;
  cursor: pointer;
}
.dialog-footer{
  border-top: 1px solid #e9eaec;
  padding: 12px 18px;
  text-align: right;
}
</style>
