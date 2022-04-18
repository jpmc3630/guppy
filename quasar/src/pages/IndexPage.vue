<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page class="">

      <q-date
        v-if="showCalendar"
        v-model="selectedDateForQDate"
        minimal
        class="fit"
      >
      </q-date>

    <q-btn
      class="q-pa-md float-right"
      :class="[showCalendar ? 'bg-teal' : '']"
      label="Calendar"
      @click="showCalendar = !showCalendar"
    />

    <CalendarDay 
      :currentDay="selectedDate"
    />

  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import { today } from '@quasar/quasar-ui-qcalendar/src/index.js'
import CalendarDay from '@/components/CalendarDay.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    CalendarDay
  },
  data () {
    return {
      selectedDate: today(),
      selectedView: '',
      showCalendar: false,
      leftDrawerOpen: true
    }
  },
  methods: {
  },
  computed: {
    selectedDateForQDate:
      {
        get () {
          // if (this.$store.state.calendar.selectedDate) {
          if (this.selectedDate) {
            return this.selectedDate.replace(/-/g, '/')
          }
          else {
            return ''
          }
        },
        set (date) {
          // this.$store.commit('calendar/selectedDate', date.replace(/\//g, '-'))
          this.selectedDate = date.replace(/\//g, '-')
          this.selectedView = 'day'
        }
      }
  }
})
</script>
