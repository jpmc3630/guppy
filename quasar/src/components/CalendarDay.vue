<template>
  <div class="subcontent full-width">
    <navigation-bar
      @today="onToday"
      @prev="onPrev"
      @next="onNext"
      @viewDay="view = 'day'"
      @viewWeek="view = 'week'"
      @viewMonth="view = 'month'"
    />
    <div class="row justify-center">
      <div style="display: flex; max-width: 800px; width: 100%; height: 400px;">
        <q-calendar-day
          ref="calendar2"
          v-model="selectedDate"
          :view="view"
          :interval-minutes="60"
          :interval-count="96"
          :interval-height="20"
          animated
          bordered
          @change="onChange"
          @moved="onMoved"
          @click-date="onClickDate"
          @click-time="onClickTime"
          @click-interval="onClickInterval"
          @click-head-intervals="onClickHeadIntervals"
          @click-head-day="onClickHeadDay"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { QCalendarDay, today } from '@quasar/quasar-ui-qcalendar/dist/QCalendarDay.esm.js'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarDay.sass'

import { defineComponent } from 'vue'
import NavigationBar from './NavigationBar.vue'

export default defineComponent({
  name: 'CalendarDay',
  props: ['currentDay'],
  components: {
    NavigationBar,
    QCalendarDay
  },
  data () {
    return {
      selectedDate: this.currentDay,
      view: 'day'
    }
  },
  methods: {
    onToday () {
      this.$refs.calendar2.moveToToday()
    },
    onPrev () {
      this.$refs.calendar2.prev()
    },
    onNext () {
      this.$refs.calendar2.next()
    },

    onMoved (data) {
      console.log('onMoved', data)
    },
    onChange (data) {
      console.log('onChange', data)
    },
    onClickDate (data) {
      console.log('onClickDate', data)
    },
    onClickTime (data) {
      console.log('onClickTime', data)
    },
    onClickInterval (data) {
      console.log('onClickInterval', data)
    },
    onClickHeadIntervals (data) {
      console.log('onClickHeadIntervals', data)
    },
    onClickHeadDay (data) {
      console.log('onClickHeadDay', data)
    }
  },
  watch: {
    currentDay: {
      immediate: true,
      handler (newVal) {
        this.selectedDate = newVal
      }
    }
  }

})
</script>