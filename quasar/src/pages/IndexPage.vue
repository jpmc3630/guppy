<template>
  <q-page class="flex flex-center">
    <QMonth />
    <QAgenda />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import QAgenda from '@/components/QAgenda.vue'
import QMonth from '@/components/QMonth.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    QAgenda,
    QMonth
  }
})
</script>
