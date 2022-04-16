<template>
  <q-page class="flex flex-center">
    <QMonth 
      @setToday="setToday"
    />
    <QWeek 
      :currentDay="selectedDate"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { today } from '@quasar/quasar-ui-qcalendar/src/index.js'
import QMonth from '@/components/QMonth.vue'
import QWeek from '@/components/QWeek.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    QMonth,
    QWeek
  },
  data () {
    return {
      selectedDate: today()
    }
  },
  methods: {
    setToday (timestamp) {
      // this.$refs.calendar.moveToDate(date)
      console.log('Outside date', timestamp)
      this.selectedDate = timestamp.date
    }
  }
})
</script>
